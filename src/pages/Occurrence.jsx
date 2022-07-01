import React, { useState } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import { app } from "../lib/firebaseConfig";
import { createOccurrence } from "../lib/firestore";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import Message from '../components/Message';
import Footer from "../components/Footer";
import Form from "../components/Form";
import Select from "../components/Select";
import Radio from '../components/Radio';
import Textarea from '../components/Textarea';
import Photo from '../components/PhotoUpload';
import Modal from "../components/Modal";
import Button from "../components/Button";
import Link from "../components/Link";
import icon from "../assets/image/icon-upload.png";

function Occurrence() {
  const storage = getStorage(app);
  const navigate = useNavigate();
  const [isModalVisible, setIsmodalVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const [formValue, setFormValue] = useState({
    sin_tipo: "",
    sin_descricao: "",
    vei_tipo_veiculo: "",
    vei_imagem: "",
    vei_reserva: false,
    apo_codigo: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [name]: value });
    console.log(name);
    console.log(value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(prog);
    },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormValue(() => {
            const info = { ...formValue };
            info.vei_imagem = downloadURL;
            return info;
          });
        });
      }
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createOccurrence(formValue, "apooIDfgvbfgbnnbgnn");
      navigate("/history");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container customClass="containerHistory">
      <Header children="AVISO DE SINISTRO" />
      <Container customClass="subContainerOccurrence">
        <Select
          options={["Assistência 24h-Reboque", "Colisão", "Furto/Roubo"]}
          name="sin_tipo"
          onChange={handleChange}
          textDefault="Tipos de Sinistro"
          customClass="selectOccurrence"
        />
        <Select
          options={["SUV", "Ônibus"]}
          name="vei_tipo_veiculo"
          onChange={handleChange}
          textDefault="Tipos de Veículo"
          customClass="selectOccurrence"
        />
        <Form onSubmit={formHandler} customClass="formPhoto">
          <Photo src={icon} text="Selecionar Imagem do Veículo" />
          <Button type="submit" customClass="buttonPhoto">
            Suba sua imagem
          </Button>
          <Message customClass="textProgress">
            Enviando {progress} %
          </Message>
        </Form>
        <Textarea
          customClass="description"
          rows="5"
          cols="33"
          name="sin_descricao"
          maxLength="154"
          value={formValue.sin_descricao}
          onChange={handleChange}
          placeholder="Descreva o ocorrido"
        ></Textarea>
        <Container customClass="containerRadio">
          <Message customClass="textRadio">
            Necessita de um carro reserva?
          </Message>
          <Container>
            <Radio
              classLabel='labelRadio'
              classInput='radio'
              name='vei_reserva'
              text={['Sim', 'Não']}
              options={[true, false]}
              onChange={handleChange}
            />
          </Container>
        </Container>

        <Button type="button" customClass="buttonTerms" onClick={() => setIsmodalVisible(true)}>
          Aceitar os Termos e Condições
        </Button>

        <Button type="button" customClass="buttonOccurrence" onClick={handleSubmit}>
          Abrir Sinistro
        </Button>

        <Link href="/history" customClass="linkReturnHistory">
          Voltar a página de Histórico
        </Link>

        {isModalVisible ? (
          <Modal classContainer="modalGeneralOccurrence"
            classSubContainer="modalSubOccurrence">
            <p>
              Declaro que todas as informações constantes neste formulário para
              fins de abertura de sinistro, são completas, verdadeiras e
              corretas em todos os detalhes.Tendo ciência que serão averiguadas
              e que arcarei com as consequências de afirmações inverídicas.
            </p>
            <Button customClass="modalOccurrence" onClick={() => setIsmodalVisible(false)} type="button">
              Concordo
            </Button>
          </Modal>
        ) : null
        }

      </Container >
      <Footer />
    </Container >
  );
}

export default Occurrence;
