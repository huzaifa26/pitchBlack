import styles from "./SideBar.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SideBar(props){
  const navigate = useNavigate();
  const { pathname } = useLocation();

    const itemsList = [
        {
          text: "Dashboard",
          route: "/",
          onClick: () => navigate('/'),
        //   icon: <DashboardIcon />,
        },
        {
          text: "Company Info",
          route: "/companyinfo",
          onClick: () => navigate('/companyinfo'),
          // icon: <SupervisorAccountIcon />,
        },
        {
          text: "Team",
          route: "/team",
          onClick: () => navigate("/team"),
        //   icon: <PersonIcon />,
        },
        {
          text: "Captable",
          route: "/captable",
          onClick: () => navigate("/captable"),
        //   icon: <GroupIcon />,
        },
        {
          text: "Document Library",
          route: "/documentLibrary",
          onClick: () => navigate("/documentLibrary"),
        //   icon: <RoomIcon />,
        },
        {
          text: "Fundraising",
          route: "/fundraising",
          onClick: () => navigate("/fundraising"),
        //   icon: <AddLocationIcon />
        },
        {
          text: "Bank Account",
          route: "/bankAccount",
          onClick: () => navigate("/bankAccount"),
        //   icon: <ListIcon />,
        },
        {
          text: "Setting",
          route: "/setting",
          onClick: () => navigate("/setting"),
        //   icon: <PlaylistAddIcon />,
        },
        {
          text: "Alerts",
          route: "/alerts",
          onClick: () => navigate("/alerts"),
        //   icon: <AnnouncementIcon />,
        },
        {
          text: "Push Message",
          route: "/pushMessage",
          onClick: () => navigate("/pushMessage"),
        //   icon: <SendIcon />,
        }    
      ];



    return(
        <div className={styles.main}>
            <div className={styles.sideBar}>
                {itemsList.map((item)=>{
                    return(
                        <div className={item.route === pathname ? styles.div : styles.div1}>
                            <ul>
                                <li onClick={item.onClick} className={item.route === pathname ? styles.li : styles.li1}>
                                    {item.text}
                                </li>
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