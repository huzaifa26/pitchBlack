import { useState } from "react";
import styles from "./DocumentLocker.module.css";
import DocumentTable from "./DocumentTable";


function DocumentInfo(props) {

    const [showInfo,setShowInfo]=useState(false)

    return ( 
        <>
        <div className={styles.documents}>
            <div className={styles.document}>
                <div className={styles.leftArrow} onClick={()=> setShowInfo(!showInfo)}>
                    <p>{showInfo?'v':'>'}</p>
                </div>
                <h2>{props.title} </h2>
            </div>
            <div>
                <p className={styles.docsNumber}>{props.number} docs</p>
            </div>
        </div>
        <div className={styles.dropdown}>
            {showInfo &&
                <DocumentTable title={"Balance Sheet"} date={'11/23/2021 12:43 AM'} status={"No Requirements"}/>
            }
        </div>
        </>
     );
}

export default DocumentInfo;