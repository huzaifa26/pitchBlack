import { useState } from "react";
import styles from "./AddDocModal.module.css";
import MyDropzone from "./MyDropzone";


export default function AddDocModal(props) {

    const [getFile,setFile]=useState('')

    //Send file to server on button Click
    const addDocumentHandler=()=>{

    }

    //Getting file from MyDropZone Component
    const getFileHandler=(file)=>{
        setFile(file)
    }
    console.log()


    const modalCloseHandler=()=>{
        props.modalClose();
    }

    //Set Inner progress bar using Axios onUploadProgress method.
    const style={
        width:120
    }

    return ( 
        <div className={styles.main}>
            <img onClick={modalCloseHandler} className={styles.imageCross} src="./xmark-solid.svg"/>
            <div>
                <div className={styles.heading}>
                    <h1> Upload Pitch Deck</h1>
                    <p>Drag and drop your pitchdeck file here.</p>
                </div>
                {getFile && <div className={styles.progressBarDiv}>
                    <img src="./pdfImage.svg"/>
                    <div>
                        <h3>{getFile && getFile[0].name}</h3>
                        <div className={styles.progressOuter}>
                            <div style={style} className={styles.progressInner}></div>
                        </div>
                    </div>
                </div>}
            </div>
            
            <div className={styles.uploadDoc}>
                <MyDropzone getFileHandler={getFileHandler}/>
            </div>
            <div className={styles.buttonDiv}>
                <button onClick={addDocumentHandler} className={styles.submit}>Done</button>
            </div>
        </div>
    );
}