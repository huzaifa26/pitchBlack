import styles from "./DocumentLibrary.module.css";


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
                    <td className={styles.status}><p>props.status</p> <a href={'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}><img src='./download-solid.svg'/></a> </td>
                </tr>
            </tbody>
        </table>
     );
}

export default DocumentTable;