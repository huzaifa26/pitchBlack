import { useState } from "react";
import styles from "./Dashboard.module.css"
import TodoModal from "../Modal/TodoModal/TodoModal";
import styled, { css } from "styled-components";

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2230px;
    background: rgba(0, 0, 0, 0.5)
    `;

 function ToDoList(props) {
    const [showModal,setShowModal]=useState(false)

    const modalShow=()=>{
        setShowModal(true);
    }
    const modalClose=()=>{
        setShowModal(false);
    }

     return ( 
         <>
            {showModal && 
            <ModalContainer>
                <TodoModal modalClose={modalClose}/>
            </ModalContainer>
            }
            <div onClick={modalShow} className={styles.todoInnerDiv}>
                <h3 className={styles.h3}>
                    {props.title}
                </h3>
                <p className={styles.p}>
                    {props.body}
                </p>
            </div>
        </>
      );
 }
 
 export default ToDoList;