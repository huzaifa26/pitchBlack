import { useState } from "react";
import styles from "./AddDocModal.module.css";
import MyDropzone from "./MyDropzone";

export default function AddDocModal(props) {

    const [getFile,setFile]=useState()

    //Send file to server on button Click
    const addDocumentHandler=()=>{

    }

    //Getting file from MyDropZone Component
    const getFileHandler=(file)=>{
        setFile(file)
    }

    const modalCloseHandler=()=>{
        props.modalClose();
    }
    return ( 
        <main className={styles.main}>
            <img onClick={modalCloseHandler} className={styles.imageCross} src="./xmark-solid.svg"/>
            <div>
                <div className={styles.heading}>
                    <h1> Upload Pitch Deck</h1>
                    <p>Drag and drop your pitchdeck file here.</p>
                </div>
                <div className={styles.progressBar}>
                    <h1>Progress bar</h1>
                </div>
            </div>
            <div className={styles.uploadDoc}>
                <MyDropzone getFileHandler={getFileHandler}/>
            </div>
            <div className={styles.buttonDiv}>
                <button onClick={addDocumentHandler} className={styles.submit}>Done</button>
            </div>
        </main> 
    );
}