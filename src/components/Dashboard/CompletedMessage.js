import styles from "./Dashboard.module.css"

function CompletedMessage(props) {
    return ( <div>
        <p className={styles.completedMessage}>
            Sit tight, we are revieiwing all your documents.
            You’re mentor will reach out to schedule your first touchbase.
        </p>
    </div> );
}

export default CompletedMessage;