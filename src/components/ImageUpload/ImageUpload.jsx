import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";
import { app } from "../../lib/firebaseConfig";

function ImageUpload({setImgUrl}) {
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
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className="App">
        <input type="file" className="input" />
        <button onClick={formHandler} type="submit">Suba sua imagem</button>
      <hr />
      <h2>Enviando {progress}%</h2>
    </div>
  );
}

export default ImageUpload;