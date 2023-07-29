import React, { useContext,useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Search from "./Search";
import SearchIcon from '../img/SearchIcon.png';
import Cross from '../img/Cross.png';


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [flag,setFlag] = useState(false);
  return (
    <div className="navbar">
      {flag ? (<>
        <Search />
        <button> 
        <img onClick={()=>{setFlag(false)}} src={Cross} alt="cross" height={20} width={20} />
        </button>
        </>
      ) : (
        <div className="user">
          <div className="div1">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
          </div>
          <div className="div2">
            <img onClick={()=>{setFlag(true)}} src={SearchIcon} alt="SearchIcon" height={40} width={40}/>
            <button onClick={() => signOut(auth)}>logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
