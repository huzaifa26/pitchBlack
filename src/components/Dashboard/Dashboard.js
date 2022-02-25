import styles from "./Dashboard.module.css"
import ToDoList from "./ToDoList";
import DocumentsUpload from "./DocumentsUpload";
import { useState } from "react";
import CompletedMessage from "./CompletedMessage";

function Dashboard(){
    const [todoList,setTodoList]=useState([
        {
            title:'Update your company mission',
            body:'This is what you stand for as a company'
        },
        {
            title:'Fill out problem statements',
            body:'This is your why. We need a strong problem identity and solution that you think will solve this problem.'
        },
        {
            title:'Record or update 2-minute pitch video',
            body:'This video will hel investors get a deeper look into your personality as founders, and a bettter understanding of the product.'
        },
        {
            title:'Upload pictures of the product',
            body:'Upload high res images of your product for people to scroll through'
        },
        {
            title:'Upload customer discovery interviews',
            body:'Upload the customer discovery interviews that you have conducted to help validate your product.'
        },
    ]);


    const [docTitle,setDocTitle]=useState([
        {
            title:"Pitch Deck"
        },
        {
            title:"Executive Summary"
        },
        {
            title:"Market Analysis"
        },
        {
            title:"Financial Projections"
        },
        {
            title:"Pitch Deck"
        },
        {
            title:"Executive Summary"
        },
        {
            title:"Market Analysis"
        },
        {
            title:"Financial Projections"
        },
        {
            title:"2-Minute Pitch"
        },
    ])

    return(
        <div className={styles.main}>
            <div className={styles.primary}>
                <div className={styles.abc}>
                    <h1 className={styles.title}>Company Dashboard</h1>
                    <h2 className={styles.heading}>To Do’s</h2>
                </div>
                {/* <CompletedMessage/> */}
                <div  className={styles.todoDiv}>
                    {todoList.map((todo)=>{
                        return(
                            <ToDoList title={todo.title} body={todo.body}/>
                        )
                    })}
                </div> 
            </div>

            <div className={styles.secondry}>
                <h2 className={styles.upload}>Document Upload’s</h2>
                <div className={styles.documentUploadLayout}>
                    {docTitle.map((doc)=>{
                        return(
                            <DocumentsUpload title={doc.title}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;