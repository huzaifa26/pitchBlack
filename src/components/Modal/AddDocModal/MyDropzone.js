import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from "./AddDocModal.module.css"

export default function MyDropzone(props) {
  const onDrop = useCallback(acceptedFiles => {

    console.log(acceptedFiles[0].type)

    if(acceptedFiles[0].type === "application/pdf" || acceptedFiles[0].type === "application/vnd.openxmlformats-officedocument.presentationml.presentation"){
      props.getFileHandler(acceptedFiles);
    }
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,acceptFiles:'application/pdf'})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        <div className={styles.uploadFile}>
        <img className={styles.image} src='./cloud-arrow-up-solid.svg'/>

          <p className={styles.filetype}>.pdf or .ppt </p> 
          <p className={styles.info}>You can also upload file by</p>
          <p className={styles.clickHere}>Clicking here</p>
        </div>
      }
    </div>
  )
}