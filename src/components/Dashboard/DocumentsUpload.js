import styles from "./Dashboard.module.css"
import AddDocModal from "../Modal/AddDocModal/AddDocModal";
import { useState } from "react";
import styled, { css } from "styled-components";

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2230px;
    background: rgba(0, 0, 0, 0.5)
    `;


function DocumentsUpload(props) {
    
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
                <AddDocModal modalClose={modalClose}/>
            </ModalContainer>
            }
            <div onClick={modalShow} className={styles.uploadCard}>
                <h3>{props.title}</h3>
                {/* <img src='/plus.jpg'/> */}
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7 25.432C11.1973 25.432 10.446 24.6643 10.446 23.129V15.093H2.557C1.087 15.093 0.352 14.3743 0.352 12.937C0.352 11.4997 1.087 10.781 2.557 10.781H10.446V2.99C10.446 1.48733 11.1973 0.735999 12.7 0.735999C14.2027 0.735999 14.954 1.48733 14.954 2.99V10.781H22.843C24.313 10.781 25.048 11.4997 25.048 12.937C25.048 14.3743 24.313 15.093 22.843 15.093H14.954V23.129C14.954 24.6643 14.2027 25.432 12.7 25.432Z" fill="#9C9C9C"/>
                </svg>
            </div>
        </>
     );
}

export default DocumentsUpload;