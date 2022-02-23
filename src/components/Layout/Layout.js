import SideBar from "./SideBar";
import NavBar from "./NavBar";


function Layout(props) {
  return (
    <div>
        <NavBar />
        <SideBar body={props.body}/>
    </div>
  );
}

export default Layout;