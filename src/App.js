import { async } from "@firebase/util";
import { useState } from "react"
// import { storage } from "./db";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function App() {

  const [url, setURL] = useState('')
  const [img,setImg] = useState('')

  const handler1 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader()
    const url = URL.createObjectURL(file);
    setURL(url);
  }

  const handler2 = async(event) => {
    const file = event.target.files[0];
    const formData = new FormData()
    formData.append('image',file)
    const res  =await fetch('/upload',{
      method:'POST',
      body:formData
    })
    const data = await res.json()
  }


  return (
    <>
      <div className="w3-panel">
        {
          url &&
          <img src={url} className="w3-image" />
        }
      </div>
      <div className="w3-panel">
        <input type="file" onChange={handler1} className="w3-input" />
        <button className="w3-button" onClick={handler2} type="submit">send</button>
      </div>
    </>
  )
}