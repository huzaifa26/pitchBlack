import styles from "./DocumentLocker.module.css";


function DocumentTable(props) {
    return ( 
        <table>
            <thead> 
                <tr>
                    <th>Document Title</th>
                    <th>Upload Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.tr}>
                    <td>{props.title}</td>
                    <td>{props.date}</td>
                    <td className={styles.status}><p>props.status</p> <img src='./download-solid.svg'/></td>
                </tr>
            </tbody>
        </table>
     );
}

export default DocumentTable;