import styles from "./DocumentLibrary.module.css";
import DocumentInfo from "./DocumentInfo";

function DocumentLibrary() {
    return ( 
        
        <div>
            <div>
                <h1 className={styles.title}>Document Locker</h1>
            </div>

            <div >
                <DocumentInfo title={"Incorporation"} number={9}/>
                <DocumentInfo title={"Fundraise"} number={2}/>
                <DocumentInfo title={"Financials"} number={3}/>
                <DocumentInfo title={"Customer Discover"} number={100}/>
                <DocumentInfo title={"Strategy"} number={5}/>
                <DocumentInfo title={"Miscellaneous"} number={15}/>
            </div>
        </div>
        
    );
}

export default DocumentLibrary;