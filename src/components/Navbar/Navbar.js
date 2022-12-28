import React from "react";

import logo from "../../Images/BITlogo.png";

 
import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

import { GoThreeBars } from "react-icons/go";
 

const Navbar = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  // manipulation by dom elements
  const button = document.getElementById("menuButton");

  // const [navBtn , setNavBtn] = useState()
  // manipulation by dom elements

  const [clicked, setClicked] = useState(false);
  
  const showMenu = (e) => {
    e.preventDefault();
    setClicked(!clicked);
    user.setIsConnected(true);
  };

 
  
  

  const [media, setMedia] = useState(true);

  const shortAccount = () => {
    let accountLength = user.userAccount.length;
    let firstPart = user.userAccount.slice(0, 5);
    let lastPart = user.userAccount.slice(accountLength - 5, accountLength - 1);
    return firstPart + "..." + lastPart;
  };


  //if connected and in small screen

  const NotConnected = () => {
    return (
      <>
        <div className="not_connected_then">
              <button
                onClick={() => {
                  if (user.isConnected) {
                    navigate("/profile");
                  } else {
                    user.login();
                  }
                }}
              >
                {user.isConnected ? shortAccount() : "Connect Now"}
              </button>
            </div>

      </>
    )
  }


  const MobileMenu = () => {
    return (
      <>
        {clicked && (
          <div className="mobile_view_buttons">
            <div className="createButton">
              <button
                onClick={() => {
                  if (user.isConnected) {
                    navigate("/create");
                  }
                }}
              >
                Create
              </button>
            </div>
            <div className="clubButton">
              <button
                onClick={() => {
                  if (user.isConnected) {
                    navigate("/clubs");
                  }
                }}
              >
                Clubs
              </button>
            </div>

            
            {user.isConnected === false && (
              <div className="connect_button mobile_view_connect_button">
              <button
                onClick={() => {
                  if (user.isConnected) {
                    navigate("/profile");
                  } else {
                    user.login();
                  }
                }}
              >
                {user.isConnected ? shortAccount() : "Connect Now"}
              </button>
            </div>

            )}

          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div className="login_nav">
        <div className="logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            src={logo}
            alt="Beyong Imagination Technologies"
          />
        </div>

<div className="navbar_menu">

        {user.isConnected && (
          <>
           
            <MobileMenu />
            <div className="nav_buttons">
              <div className="createButton">
                <button
                  onClick={() => {
                    if (user.isConnected) {
                      navigate("/create");
                    }
                  }}
                >
                  Create
                </button>
              </div>
              <div className="clubButton">
                <button
                  onClick={() => {
                    if (user.isConnected) {
                      navigate("/clubs");
                    }
                  }}
                >
                  Clubs
                </button>
              </div>
            </div>
          </>
        )}

        <div className="big_screen_connect_button connect_button ">
          <button
            onClick={() => {
              if (user.isConnected) {
                navigate("/profile");
              } else {
                user.login();
              }
            }}
          >
            {user.isConnected ? shortAccount() : "Connect"}
          </button>
        </div>

        
</div>

{user.isConnected ?

        <div className="viewOnSmallDevice" id="menuButton" onClick={showMenu}>
          {!clicked ? <GoThreeBars /> : "X"}
        </div>
        : <> </>
}
      </div>
    </>
  );
};

export default Navbar;
