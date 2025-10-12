import profileimage from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <img src={profileimage}/>
            <span>Expense Manager</span>
        </div>
        <div className="center"></div>
        <div className="right">
            <a href="#"><span>Login/Signup</span></a>
        </div>
    </div>
  )
}

export default Navbar