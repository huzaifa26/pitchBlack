import { useRef } from "react";
import styles from "./ComponentInfo.module.css";
import { useNavigate } from 'react-router-dom';


function CompanyInfo(){
  const navigate = useNavigate();


    const companyNameRef=useRef();
    const emailRef=useRef();
    const aboutCompanyRef=useRef();
    const companyMissionRef=useRef();
    const companyVisionRef=useRef();
    const companyDescriptionRef=useRef();

    const companyInfoFormHandler=e=>{
        e.preventDefault();
        const companyInfo={
            companyName:companyNameRef.current.value,
            email:emailRef.current.value,
            aboutCompany:aboutCompanyRef.current.value,
            companyMission:companyMissionRef.current.value,
            companyVision:companyVisionRef.current.value,
            companyDescription:companyDescriptionRef.current.value,
        }

        console.log(companyInfo)
        navigate('/');
    }

    return(
        <div className={styles.main}>
            <div className={styles.primary}>
                <h4 className={styles.title}>Company Information</h4>
                <img className={styles.img} src="data:image/jpeg;base64,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" alt="Profile"></img>
            </div>

            <div className={styles.secondry}>
                <form onSubmit={companyInfoFormHandler} className={styles.form}>
                    <div>
                        <label>Company Name</label>
                        <input ref={companyNameRef} type="text" required defaultValue={"Pitch Black, Inc"}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input ref={emailRef} type="text" required defaultValue={"tre@pblack.io"}/>
                    </div>

                    <div>
                        <input ref={aboutCompanyRef} required type="text" placeholder={"What does your company do in 2 sentences?"} />
                    </div>

                    <div>
                        <input ref={companyMissionRef} required type="text" placeholder={"What is your company’s mission statement?"}/>
                    </div>

                    <div>
                        <input ref={companyVisionRef} required type="text" placeholder={"What is your company’s vision statement?"}/>
                    </div>

                    <div className={styles.textareaDiv}>
                        <label>Provide an indepth description of your company.</label>
                        <textarea ref={companyDescriptionRef} required rows={10} cols={5} type="text" placeholder={"Write 3-4 sentences to answer this"} name="textarea"/>
                    </div>

                    <div>
                        <button type="submit" className={styles.button}> Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompanyInfo;