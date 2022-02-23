import styles from "./Dashboard.module.css"
import ToDoList from "./ToDoList";
import DocumentsUpload from "./DocumentsUpload";

function Dashboard(){
    return(
        <div className={styles.main}>
            <div className={styles.primary}>
                <div className={styles.abc}>
                    <h1 className={styles.title}>Company Dashboard</h1>
                    <h2 className={styles.heading}>To Do’s</h2>
                </div>
                <div className={styles.todoDiv}>
                    <ToDoList title={"Update your company mission"} body={"This is what you stand for as a company"}/>
                    <ToDoList title={"Fill out problem statements"} body={"This is your why. We need a strong problem identity and solution that you think will solve this problem."}/>
                    <ToDoList title={"Record or update 2-minute pitch video"} body={"This video will hel investors get a deeper look into your personality as founders, and a bettter understanding of the product."}/>
                    <ToDoList title={"Upload pictures of the product"} body={"Upload high res images of your product for people to scroll through"}/>
                    <ToDoList title={"Upload customer discovery interviews"} body={"Upload the customer discovery interviews that you have conducted to help validate your product."}/>
                </div> 
            </div>

            <div className={styles.secondry}>
                <h2 className={styles.upload}>Document Upload’s</h2>
                <div className={styles.documentUploadLayout}>
                    <DocumentsUpload title={"Pitch Deck"}/>
                    <DocumentsUpload title={"Executive Summary"}/>
                    <DocumentsUpload title={"Market Analysis"}/>
                    <DocumentsUpload title={"Financial Projections"}/>
                    <DocumentsUpload title={"Pitch Deck"}/>
                    <DocumentsUpload title={"Executive Summary"}/>
                    <DocumentsUpload title={"Market Analysis"}/>
                    <DocumentsUpload title={"Financial Projections"}/>
                    <DocumentsUpload title={"2-Minute Pitch"}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;