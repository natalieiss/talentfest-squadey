import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Select from "../components/Select";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";
import { app } from "../lib/firebaseConfig";
import { createOccurrence } from "../lib/firestore";

function Occurrence() {
  const storage = getStorage(app);
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

  //const handleInfo = (e) => {
    //console.log(e.target.value);
      //setFormValue(() => {
      //const info = { ...formValue };
      //info[e.target.name] = e.target.value;
      //console.log(info);
      //return info;
   // });
  //};

  // const handleOptions = (e) => {
  //   console.log(e.target.value)
  //   return setFormValue(() => {
  //     const selectsInfos = { ...formValue};
  //     selectsInfos[e.target.options] = e.target.value;
  //     console.log(selectsInfos)
  //     return selectsInfos;
  //   });
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   return setSelectedVeichules(() => {
  //     const selectsInfos = selectedVeichules;
  //     selectsInfos[e.target.options] = e.target.value;
  //     console.log(selectsInfos)
  //     return selectsInfos;
  //   });
  // };

  //function handleSubmit(e) {
    //e.preventDefault();
    //console.log(formValue)
      //createOccurrence()
      //.then((data) => {
       // data.json()
      //})
      //.catch((error) => {
      // console.log(error)
     // });
 // }


  return (
    <Container customClass="containerHistory">
      <Header children="AVISO DE SINISTRO" />
      <div className="container-infos-occ" >
        <Select
          options={["Assistência 24h-Reboque", "Colisão", "Furto/Roubo"]}
          name="sin_tipo"
          onChange={handleChange}
          textDefault="Tipos de Sinistro"
          customClass="selectOccurrence"
        />
        <Select
          options={["SUV", "Ônibus"]}
          name="vei_tipo_veiculos"
          onChange={handleChange}
          textDefault="Tipos de Veículo"
          customClass="select-occurrence"
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
        ></textarea>

        <p className="form-occ-text">Necessita de um carro reserva?</p>

        <div >
          <label onChange={handleChange}>
            <Input
              type="radio"
              value={true}
              name="vei_reserva"
            />
            Sim
          </label>
          <label onChange={handleChange}>
            <Input
              type="radio"
              value={false}
              name="vei_reserva"
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
        ) : null
        }


        <Button type="button" customClass="button" onClick={null} >
          Abrir Sinistro
        </Button >
      </div>
      <Footer />
    </Container >
  );
}

export default Occurrence;


