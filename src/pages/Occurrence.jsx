import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Select from "../components/Select";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from '../components/Textarea';
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";
import { app } from "../lib/firebaseConfig";
import { createOccurrence } from "../lib/firestore";

function Occurrence() {
  const [selectedOption, setSelectedOption] = useState("");
  const [formValue, setFormValue] = useState({ 
    apo_codigo:"",
    sin_tipo:"",
    vei_tipo_veiculo:"",
    sin_descricao: "", 
    vei_reserva:false,
    vei_imagem: "",

});
  const [isModalVisible, setIsmodalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const storage = getStorage(app);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log(file)
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

  const handleInfo = (e) => {
    console.log(e.target.value);
      setFormValue(() => {
      const info = { ...formValue };
      info[e.target.name] = e.target.value;
      console.log(info);
      return info;
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value)
    return setSelectedOption(() => {
      const selectsInfos = { ...selectedOption };
      selectsInfos[e.target.options] = e.target.value;
      return selectsInfos;
    });
  };
  const arrOptions = [
    {
      text: "Assistência 24h-Reboque",
      value: "assistência 24h",
      name: "sin_tipo",
    },
    {
      text: "Colisão",
      value: "colisão",
      name: "sin_tipo",
    },
    {
      text: "Furto/Roubo",
      value: "furto/roubo",
      name: "sin_tipo",
    },
  ];

  const arrVeichules = [
    {
      text: "SUV",
      value: "suv",
      name: "vei_tipo_veiculo",
    },
    {
      text: "SUV",
      value: "suv",
      name: "vei_tipo_veiculo",
    },
  ];



  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue)
      createOccurrence()
      .then((data) => {
        data.json()
      })
      .catch((error) => {
        console.log(error)
      });
  }


  return (
    <Container customClass="containerHistory">
      <Header children="AVISO DE SINISTRO" />
      <div className="container-infos-occ" >
        <Select
          customClass="selectOccurrence"
          options={arrOptions}
          onChange={handleChange}
          defaultValue="Tipos de Sinistro"
        />
        <Select
          customClass="select-occurrence"
          options={arrVeichules}
          onChange={handleChange}
          defaultValue="Tipos de Veículo"
        />
        <div className="App">
          <form onSubmit={formHandler}>
          <input type="file" className="input" />
          <button type="submit">
            Suba sua imagem
          </button>
          </form>
          <hr />
          <h2>Enviando {progress}%</h2>
        </div>
        <textarea
          className="occ_sin_descricao"
          rows="5"
          cols="33"
          name="sin_descricao"
          value={formValue.sin_descricao}
          onChange={handleInfo}
        >
            
          Descrição do ocorrido
        </textarea>

        <Textarea customClass="description" rows="5" cols="70" placeholder="Descreva o ocorrido"></Textarea>
        <p className="form-occ-text">Necessita de um carro reserva?</p>

        <div onChange={handleInfo}>
          <label>
            <Input
              type="radio"
              value="true"
              checked={formValue.vei_reserva === "Sim"}
              name="vei_reserva"
            />
            Sim
          </label>
          <label>
            <Input
              type="radio"
              value="false"
              name="vei_reserva"
              checked={formValue.vei_reserva === "Não"}
            />
            Não
          </label>
        </div>

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
              Declaro que todas as informações constantes neste formulário para
              fins de abertura de sinistro, são completas, verdadeiras e
              corretas em todos os detalhes.Tendo ciência que serão averiguadas
              e que arcarei com as consequências de afirmações inverídicas.
            </p>
          </Modal>
        ) : null}c
        <Button type="button" customClass="button" onClick={handleSubmit}>
          Abrir Sinistro
        </Button>
      </div>
      <Footer />
    </Container>
  );
}

export default Occurrence;
