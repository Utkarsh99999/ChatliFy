import React, { useState, useEffect ,useContext } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import LoadingPage from "../components/LoadingMain";
import { useMediaQuery } from "@mui/material";
import { ChatContext } from "../context/ChatContext";


const Home = () => {
  const mobile = useMediaQuery('(min-width:800px)');
  const {flag} = useContext(ChatContext);
  console.log(flag);
  const time = 5000;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, time);
  }, []);
  if (isLoading) {
    return <LoadingPage time={time}/>;
  }
  return (
    <div className="home">
      <div className="container">
       {mobile?
       <React.Fragment>
       <Sidebar/>
       <Chat />
       </React.Fragment>
       :
       <React.Fragment>
       {flag?
        <Chat />:
       <Sidebar/>
      }
       </React.Fragment>
       }
      </div>
    </div>
  );
};

export default Home;
