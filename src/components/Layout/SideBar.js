import styles from "./SideBar.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

function SideBar(props){
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname)

    const itemsList = [
        {
          text: "Dashboard",
          route: "/",
          onClick: () => navigate('/'),
          icon: './dashboardIconDark.svg',
          icon1: './dashboardIcon.svg'

        },
        {
          text: "Company Info",
          route: "/companyinfo",
          onClick: () => navigate('/companyinfo'),
          icon: './companyInfoIcon.svg',
          icon1: './companyInfoIconLight.svg'

        },
        {
          text: "Team",
          route: "/team",
          onClick: () => navigate("/team"),
          icon: './TeamIcon.svg',
          icon1: './TeamIconLight.svg'

        },
        {
          text: "Captable",
          route: "/captable",
          onClick: () => navigate("/captable"),
          icon: './CaptableIcon.svg',
          icon1: './CaptableIconLight.svg'

        },
        {
          text: "Document Library",
          route: "/documentLibrary",
          onClick: () => navigate("/documentLibrary"),
          icon: './documentLibraryIcon.svg',
          icon1: './documentLibraryIconLight.svg'

        },
        {
          text: "Fundraising",
          route: "/fundraising",
          onClick: () => navigate("/fundraising"),
          icon: './FundraisingIcon.svg',
          icon1: './FundraisingIconLight.svg'

        },
        {
          text: "Bank Account",
          route: "/bankAccount",
          onClick: () => navigate("/bankAccount"),
          icon: './FundraisingIcon.svg',
          icon1: './FundraisingIconLight.svg'

        },
        {
          text: "Setting",
          route: "/setting",
          onClick: () => navigate("/setting"),
          icon: './FundraisingIcon.svg',
          icon1: './FundraisingIconLight.svg'
        } 
      ];



    return(
        <div className={styles.main}>
            <div className={styles.sideBar}>
                {itemsList.map((item)=>{
                    return(
                        <div onClick={item.onClick} className={item.route === pathname ? styles.div : styles.div1}>
                            <ul >
                                <img className={styles.img} src={item.route === pathname ? item.icon1 :item.icon}/>
                                <li onClick={item.onClick} className={item.route === pathname ? styles.li : styles.li1}>
                                    {item.text}
                                </li>
                                {item.route === '/companyinfo' && <img className={styles.imgAlert} src={pathname === '/companyinfo' ? './companyInfoAlertLight.svg':'./CompanyInfoAlert.svg'}/>}
                            </ul>
                        </div>
                    )
                })}
            </div>

            <div className={styles.mainSection}>
                {props.body}
            </div>
        </div>
        
    )
}

export default SideBar;