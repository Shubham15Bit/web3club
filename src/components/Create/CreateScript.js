  import React from "react";
import { checkClubName, createClub } from "../apiCalls";
import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const CreateScript = (props) => {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [clubCategory, setClubCategory] = useState("🌐 Web3");

  const handleCreateButton = async (e) => {
    e.preventDefault();
    // setStatus("Checking data...");
    setStatus(<div className="alert alert-success" role="alert">Checking data......  </div>)
    checkForEmptyFields();
  };

  const checkForEmptyFields = () => {
    if (clubName === "") {
      // setStatus("Club name should not be empty");
      setStatus( <div className="alert alert-danger" role="alert"> Club name should not be empty  </div>)
    } else if (clubDescription === "") {
      // setStatus("Provide a description for your club.");
      setStatus(<div className="alert alert-danger" role="alert"> Provide a description for your club.  </div>)
    } else {
      checkforclubname();
    }
  };

  const checkforclubname = async () => {
    await checkClubName(clubName).then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          // setStatus("This club already exists. Try with a different name.");
          setStatus(<div className="alert alert-danger" role="alert">This club already exists. Try with a different name.  </div>)
        } else {
          // setStatus("Creating club...");
          setStatus(<div className="alert alert-success" role="alert">Creating club.....  </div>)
          createmyClub();
        }
      } else {
        // setStatus("Something went wrong. Please try again.");
        setStatus(<div className="alert alert-success" role="alert">Something went wrong. Please try again.  </div>)
      }
    });
  };

  const createmyClub = async () => {
    // name, description, category, profilepic;
    createClub(
      clubName,
      clubDescription,
      clubCategory,
      uploadedImage,
      user.userAccount
    ).then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          // setStatus("Club created successfully. Redirecting to club page...");
          setStatus( <div className="alert alert-success" role="alert">Club created successfully. Redirecting to club page... </div>)
          setTimeout(() => {
            console.log("timeout happened." + "/club/" + res.data.id);
            navigate("/club/" + res.data.id);
          }, 2000);
        } else {
          // setStatus("Something went wrong. Please try again.");
          setStatus( <div className="alert alert-success" role="alert">Something went wrong. Please try again.</div>)
        }
      } else {
        // setStatus("Something went wrong. Please try again.");
        setStatus(<div className="alert alert-success" role="alert">Something went wrong. Please try again.  </div>)
      }
    });
  };
  return {
    status,
    setStatus,
    setUploadedImage,
    setClubName,
    setClubDescription,
    setClubCategory,
    handleCreateButton,
  };
};

export default CreateScript;
