import styles from "./Dashboard.module.css"
 function ToDoList(props) {
     return ( 
         <>
            <div className={styles.todoInnerDiv}>
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