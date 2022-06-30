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
      await createOccurrence(formValue, "apooIDfgvbfgbnnbgnn")
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
        <Container customClass="containerPhoto">
          <form onSubmit={formHandler}>
            <input type="file" accept="image/png, image/jpeg, image/jpg" className="input" />
            <button type="submit">
              Suba sua imagem
            </button>
          </form>
          <p>Enviando {progress}%</p>
        </Container>
        <textarea
          className="occ_sin_descricao"
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
            <label onChange={handleChange}>
              <Input
                type="radio"
                value={true}
                name="vei_reserva"
                className={styles.radio}
              />
              Sim
            </label>
            <label onChange={handleChange}>
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
          customClass="btn-terms-form"
          onClick={() => {
            setIsmodalVisible(true);
          }}
        >
          Termos e Condições
        </Button>
        {isModalVisible ? (
          <Modal
            onClose={() => {
              setIsmodalVisible(false);
              <button>Aceito</button>;
            }}
          >
            <p className="form-occ-text">
              <p>
                <a href="https://drive.google.com/file/d/1WE5IMGIGDIeLsR0iCVfW8d7NbZUkTPsT/view?usp=sharing" target="_blank">Termos e Condições</a></p>
              Ao prosseguir com o formulário, declaro que li e concordo com todas as informações constantes no termo e condições.
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


