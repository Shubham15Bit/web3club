import React from "react";
import "./Clubs.css";

import { useNavigate } from "react-router-dom";

const Infocards = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="information_box"
        onClick={() => {
          console.log(props.id);
          navigate("/club/" + props.id);
        }}
      >
        <div className="image_container">
          <img src={props.profilepic} alt="" />
        </div>
        <div className="content_information">
          <div className="heading">
            <h5>{props.heading}</h5>
          </div>
          <div className="about">
            <p>{props.about}</p>
          </div>
          <div className="members">Members : {props.members}</div>
          <div>Category: {props.category}</div>
        </div>
      </div>
    </>
  );
};

export default Infocards;
