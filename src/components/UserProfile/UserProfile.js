import styles from "./UserProfile.module.css";
import { useRef } from "react";

function UserProfile(props) {

    //Dummy UserData. 
    const userData={
        image:"data:image/jpeg;base64,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",
        fullName:"Tremaine Grant",
        comapanyRole:"CEO",
        email:"tre@gmail.com"
    }

    const fullNameRef=useRef();
    const comapanyRoleRef=useRef();
    const emailRef=useRef();
    const personalInfoRef=useRef();
    const aboutYouRef=useRef();

    const myProfileFormSubmitHandler=(e)=>{
        e.preventDefault();
        const userInfo={
            fullName:fullNameRef.current.value,
            comapanyRole:comapanyRoleRef.current.value,
            email:emailRef.current.value,
            personalInfo:personalInfoRef.current.value,
            aboutYou:aboutYouRef.current.value,
        }
        console.log(userInfo)
    }

    return ( 
        <div className={styles.main}>
            <div className={styles.primary}>
                <h4 className={styles.title}>My Profile</h4>
                <img className={styles.img} src={userData.image}></img>
            </div>

            <div className={styles.secondry}>
                <form onSubmit={myProfileFormSubmitHandler} className={styles.form}>
                    <div>
                        <label>Full Name</label>
                        <input required ref={fullNameRef} type="text" defaultValue={userData.fullName} name="fullName"/>
                    </div>
                    <div>
                        <label>Company Role</label>
                        <input required ref={comapanyRoleRef} type="text" defaultValue={userData.comapanyRole} name="comapanyRole"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input required ref={emailRef} type="text" defaultValue={userData.email} name="email"/>
                    </div>
                    <div>
                        <input required ref={personalInfoRef} type="text" placeholder={"Who are you in one line"} name="personalInfo"/>
                    </div>
                    <div className={styles.textareaDiv}>
                        <label>Talk about why you are the person to take on this problem</label>
                        <textarea required ref={aboutYouRef} name='aboutYou' rows={10} cols={5} type="text" placeholder={"write 3-4 sentences to answer this."}/>
                    </div>
                    <div>
                        <button type="submit" className={styles.button}> Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserProfile;