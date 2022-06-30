import React, { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";
import { app } from "../lib/firebaseConfig";
import { createOccurrence } from "../lib/firestore";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import Select from "../components/Select";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import icon from "../assets/image/icon-upload.png";
import styles from "./style.module.css";

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
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL)
          setFormValue(() => {
            const info = { ...formValue };
            info.vei_imagem = downloadURL;
            console.log(info);
            return info;
          });
        });
      }
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue)
    try {
      await createOccurrence(formValue, "123444959", "Pedido em Estudo", "N/A")
      console.log("Dados enviados")
      navigate("/history")
    }
    catch (error) {
      console.log(error)
    }

  }

  return (
    <Container customClass="containerHistory">
      <Header children="AVISO DE SINISTRO" />
      <Container customClass="subContainerOccurrence" >
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


        <form onSubmit={formHandler} className="formPhoto">
          <label className={styles.labelPhoto}>
            <input type="file" accept="image/png, image/jpeg, image/jpg" />
            <p className={styles.textPhoto}>
              <img src={icon} alt="Ícone de adicionar imagem" className={styles.iconPhoto} />
              Selecionar Imagem do Veículo
            </p>
          </label>
          <button type="submit" className={styles.buttonPhoto}>
            Suba sua imagem
          </button>
          <p className={styles.textProgress}>Enviando {progress} %</p>
        </form>

        <textarea
          className={styles.description}
          rows="5"
          cols="33"
          name="sin_descricao"
          maxLength="154"
          value={formValue.sin_descricao}
          onChange={handleChange}
          placeholder="Descreva o ocorrido"
        ></textarea>

        <Container customClass="containerRadio">
          <p className={styles.textRadio}>Necessita de um carro reserva?</p>
          <div className={styles.subcontainerRadio} >
            <label onChange={handleChange} className={styles.labelRadio}>
              <Input
                type="radio"
                value={true}
                name="vei_reserva"
                className={styles.radio}
              />
              Sim
            </label>
            <label onChange={handleChange} className={styles.labelRadio}>
              <Input
                type="radio"
                value={false}
                name="vei_reserva"
                className={styles.radio}
              />
              Não
            </label>
          </div>
        </Container>


        <Button
          type="button"
          customClass="buttonTerms"
          onClick={() => {
            setIsmodalVisible(true);
          }}
        >
          Aceitar os Termos e Condições
        </Button>

        {isModalVisible ? (
          <Modal
            onClose={() => {
              setIsmodalVisible(false);
              <button>Aceito</button>;
            }}
          >
            <p className="form-occ-text">
              Declaro que todas as informações constantes neste formulário para
              fins de abertura de sinistro, são completas, verdadeiras e
              corretas em todos os detalhes.Tendo ciência que serão averiguadas
              e que arcarei com as consequências de afirmações inverídicas.
            </p>
          </Modal>
        ) : null
        }

        <Button type="button" customClass="button" onClick={handleSubmit} >
          Abrir Sinistro
        </Button >

      </Container>
      <Footer />
    </Container >
  );
}

export default Occurrence;


