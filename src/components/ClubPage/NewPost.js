import React from "react";
import "./ClubPage.css";
import { useState } from "react";
import { createPost } from "../apiCalls";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const NewPost = (props) => {
  const [status, setStatus] = useState("");
  const user = useContext(UserContext);
  return (
    <div className="newPost">
      <div className="newPostContent">
        <textarea
          placeholder="Enter Your Post Details Here ....."
          name="newpost"
          id="newpost"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="status">{status}</div>
      
      <div className="postButton">
        <button
          onClick={() => {
            // setStatus("Posting...");
            setStatus(
              <div className="alert alert-danger" role="alert">
                Posting..
              </div>
            );

            let content = document.getElementById("newpost").value;
            
            if (content === "") {
              // setStatus("Post is empty.");
              setStatus(
                <div className="alert alert-danger" role="alert">
                  Post is empty.
                </div>
              );
              return;
            }
            let clubId = props.clubId;
            console.log(clubId);
            let postedBy = user.userAccount;
            createPost(content, clubId, postedBy).then((res) => {
              if (res !== "Server error") {
                if (res.status === "Success") {
                  setStatus("");
                  window.location.reload();
                } else {
                  // setStatus("Something went wrong. Please try again.");
                  setStatus(
                    <div className="alert alert-success" role="alert">
                      Something went wrong. Please try again. 
                    </div>
                  );
                }
              } else {
                // setStatus("Something went wrong. Please try again.");
                setStatus(
                  <div className="alert alert-success" role="alert">
                    Something went wrong. Please try again. 
                  </div>
                );
              }
            });
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
