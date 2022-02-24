import { useRef } from "react";
import styles from "./TodoModal.module.css"

function TodoModal(props) {

    const companyMissionRef=useRef()

    // Modal Todo list form submit handler
    const addDocumentHandler=(e)=>{
        e.preventDefault();
        console.log(companyMissionRef.current.value) //Company Mission Statement value
    }

    const modalCloseHandler=()=>{
        props.modalClose();
    }

    return ( 
    <>
        <div className={styles.main}>
            <img onClick={modalCloseHandler} className={styles.imageCross} src="./xmark-solid.svg"/>

            <h1>Company Mission Statement</h1>
            <form onSubmit={addDocumentHandler}>
                <div className={styles.textareaDiv}>
                    <label>What do you stand for as a company.</label>
                    <textarea ref={companyMissionRef} rows={2} cols={5} type="text" placeholder={"Write 3-4 sentences to answer this."} name="companyMission"/>
                    <input className={styles.submit} type="submit"></input>
                </div>

            </form>
        </div> 
    </>
    );
}

export default TodoModal;