import React from "react";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { getUserData, editUserData, getMyPosts, getMyClubs } from "../apiCalls";

export const ProfileScript = () => {
  const user = useContext(UserContext);
  const [userName, setUserName] = useState("Ramesh Kumar");
  const [userDescription, setUserDescription] = useState(
    "Blockchain Enthusiast."
  );
  const [userPic, setUserPic] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhT96op_IVlSa_oL09-2NEihmsh95J_D_Nw&usqp=CAU"
  );
  const [userPicRaw, setUserPicraw] = useState("");
  const [userPicPreview, setUserPicPreview] = useState("");
  const [status, setStatus] = useState("");
  const [isEditting, setIsEditting] = useState(false);
  const [myposts, setMyposts] = useState([]);
  const [myClubs, setMyClubs] = useState([]);

  useEffect(() => {
    if(user.isConnected) {
      poppulateUserData();
    }
  }, [user]);

  const poppulateUserData = async () => {
    getUserData(user.userAccount).then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          setUserName(res.data.name);
          setUserDescription(res.data.description);
          setUserPic(res.data.profilepic);
          setUserPicPreview(res.data.profilepic);
          poppulateMyPosts();
        }
      }
    });
  };

  const poppulateMyPosts = async () => {
    getMyPosts(user.userAccount).then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          setMyposts(res.data);
          poppulateMyClubs();
        }
      }
    });
  };
  const poppulateMyClubs = async () => {
    getMyClubs(user.userAccount).then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          setMyClubs(res.data);
        }
      }
    });
  };

  const rawImageToURL = async (file) => {
    let filereader = new FileReader();
    filereader.addEventListener("load", () => {
      setUserPicPreview(filereader.result);
    });
    filereader.readAsDataURL(file);
  };

  const handleSaveButton = (name, description) => {
    // e.preventDefault();
    // setStatus("Updating profile...");
    setStatus(<div className="alert alert-success" role="alert">Updating profile.... </div>)

    createUserProfile(name, description, userPicRaw);
  };

  const createUserProfile = async (name, description, profilepic) => {
    editUserData(name, user.userAccount, description, profilepic).then(
      (res) => {
        if (res !== "Server error") {
          if (res.status === "Success") {
            setStatus("");
            poppulateUserData();
            setIsEditting(false);
          } else {
            // setStatus("Something went wrong. Please try again.");
            setStatus(<div className="alert alert-danger" role="alert">Something went wrong. Please try again.  </div>)
          }
        } else {
          // setStatus("Something went wrong. Please try again.");
          setStatus(<div className="alert alert-danger" role="alert">Something went wrong. Please try again.  </div>)
        }
      }
    );
  };
  return {
    status,
    userName,
    setUserName,
    userDescription,
    setUserDescription,
    userPic,
    setUserPic,
    userPicRaw,
    setUserPicraw,
    userPicPreview,
    setUserPicPreview,
    isEditting,
    setIsEditting,
    handleSaveButton,
    poppulateUserData,
    rawImageToURL,
    myposts,
    myClubs,
  };
};

export default ProfileScript;
