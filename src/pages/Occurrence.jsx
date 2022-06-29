import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Form from "../components/Form";
import Select from "../components/Select";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";
import { app } from "../lib/firebaseConfig";
// import { createOccurrence } from "../lib/firestore";

//1- getDocs de veículos do usuário logado
//2- a partir disso, criar array p o select de veículos
//3- dentro do array precisa ter : marca e placa do veículo 
/* const arrVehicles = [
  { .map()
    text: `${vei_marca + vei_placa}`",
    value: apo_codigo,
    name: "apo_codigo",
  },
];
*/

function Occurrence() {
  const [selectedOption, setSelectedOption] = useState("");
  const [formValue, setFormValue] = useState({ 
    apo_codigo:"",
    sin_tipo:"",
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

  

  // function finalOccurrence (){
  //   function data(){
  //     const formDone = {
  //       sin_descricao: formValue.sin_descricao
  //     }
  //   }
  // }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicou no submit");
    // createOccurrence()
    //   .then((data) => {})
    //   .catch((error) => {});
  }


  return (
    <Container customClass="containerHistory">
      <Header children="AVISO DE SINISTRO" />
      <Form customClass="formOccurence" onSubmit={handleSubmit}>
        <Select
          customClass="select-occurrence"
          options={arrOptions}
          onChange={handleChange}
          defaultValue="Tipos de Sinistro"
        />
        {/* <Select
          customClass="select-occurrence"
          options={null}
          onChange={handleChange}
          defaultValue="Tipos de Veículo"
        /> */}
        <div className="App">
          <input type="file" className="input" />
          <button onClick={formHandler} type="submit">
            Suba sua imagem
          </button>
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
        <p className="form-occ-text">Necessita de um carro reserva?</p>

        <div onChange={handleInfo}>
          <label>
            <Input
              type="radio"
              value={true}
              checked={formValue.vei_reserva === "Sim"}
              name="vei_reserva"
            />
            Sim
          </label>
          <label>
            <Input
              type="radio"
              value={false}
              name="vei_reserva"
              checked={formValue.vei_reserva === "Não"}
            />
            Não
          </label>
        </div>

        <Button
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
        <Button type="submit" customClass="button">
          Abrir Sinistro
        </Button>
      </Form>
      <Footer />
    </Container>
  );
}

export default Occurrence;
