import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ClubPageUI from "./ClubPageUI";
import {
  getClubData,
  getClubPosts,
  getPostComments,
  getPostLikes,
  
} from "../apiCalls";

const ClubPage = () => {
  const { clubId } = useParams();
  const [status, setStatus] = useState("");
  const [clubData, setClubData] = useState({
    clubId: clubId,
    clubName: "",
    clubDescription: "",
    clubPic: "",
    clubCategory: "",
    clubAdmin: "",
  });

  const [clubPosts, setClubPosts] = useState([]);

  const [clubPostLikes, setClubPostLikes] = useState([]);

  const [clubPostComment, setClubPostComments] = useState([]);

  const [postId, setPostId] = useState();

  useEffect(() => {
    poppulateClubData();
  } , []);



  const poppulateClubData = async () => {
    // setStatus("Loading club...");
    setStatus(
      <div className="alert alert-success" role="alert">
        Loading club...... 
      </div>
    );

    getClubData(clubId).then((res) => {
      if (res !== "Server error") {
        if (res.status === "Success") {
          let myClubData = {
            clubId: clubId,
            clubName: res.data.name,
            clubDescription: res.data.description,
            clubPic: res.data.profilepic,
            clubCategory: res.data.category,
            clubAdmin: res.data.admin,
          };

          setClubData(myClubData);

          setStatus("");
          poppulateClubPosts();
          poppulatePostComments();
          poppulatePostLikes();

        } else {
          // setStatus("Club not found.");
          setStatus(
            <div className="alert alert-danger" role="alert">
              Club not found
            </div>
          );
        }
      } else {
        // setStatus("Something went wrong. Please refresh.");
        setStatus(
          <div className="alert alert-danger" role="alert">
            Something went wrong. Please refresh.
          </div>
        );
      }
    });
  };

  const poppulateClubPosts = async () => {
    // setStatus("Loading posts...");
    setStatus(
      <div className="alert alert-success" role="alert">
        Loading posts......{" "}
      </div>
    );

    getClubPosts(clubId).then((res) => {
      console.log("poppulate");
      console.log(res);
      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubPosts(res.data);

          // setPostId(clubPosts.id);

          setStatus("");
        } else {
          // setStatus("Something went wrong loading posts. Please refresh.");
          setStatus(
            <div className="alert alert-danger" role="alert">
              Something went wrong in loading posts. Please refresh.{" "}
            </div>
          );
        }
      } else {
        // setStatus("Something went wrong loading posts. Please refresh.");
        setStatus(
          <div className="alert alert-danger" role="alert">
            Something went wrong in loading posts. Please refresh.{" "}
          </div>
        );
      }
    });
  };

  // new code added here

  // const poppulatePostComment = async () => {
  //   setStatus("Loading Comments...");
  //   getPostComments(clubId).then((res) => {
  //     if (res !== "Server error") {
  //       if (res.status === "Success") {
  //         let postComments = {
  //           clubId: clubId,
  //           clubName: res.data.name,
  //           clubDescription: res.data.description,
  //           clubPic: res.data.profilepic,
  //           clubCategory: res.data.category,
  //           clubAdmin: res.data.admin,
  //         };
  //         setClubPostComments(postComments);
  //         setStatus("");
  //         poppulateClubPosts();
  //       } else {
  //         setStatus("Club not found.");
  //       }
  //     } else {
  //       setStatus("Something went wrong. Please refresh.");
  //     }
  //   });
  // };

  const poppulatePostComments = async () => {
    // setStatus("Loading posts...");
    setStatus(
      <div className="alert alert-success" role="alert">
        Loading posts...... 
      </div>
    );

    getPostComments(clubId, postId).then((res) => {
      console.log(res);

      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubPostComments(res.data);
          setStatus("");
        } else {
          // setStatus("Something went wrong loading posts. Please refresh.");
          setStatus(
            <div className="alert alert-danger" role="alert">
              Something went wrong in loading posts. Please refresh.{" "}
            </div>
          );
        }
      } else {
        // setStatus("Something went wrong loading posts. Please refresh.");
        setStatus(
          <div className="alert alert-danger" role="alert">
            Something went wrong in loading posts. Please refresh.{" "}
          </div>
        );
      }
    });
  };

  const poppulatePostLikes = async () => {
    // setStatus("Loading posts...");
    setStatus(
      <div className="alert alert-success" role="alert">
        Loading posts...... 
      </div>
    );

    getPostLikes(clubId, postId).then((res) => {
      console.log(res);

      if (res !== "Server error") {
        if (res.status === "Success") {
          setClubPostLikes(res.data);
          setStatus("");
        } else {
          // setStatus("Something went wrong loading posts. Please refresh.");
          setStatus(
            <div className="alert alert-danger" role="alert">
              Something went wrong in loading posts. Please refresh.{" "}
            </div>
          );
        }
      } else {
        // setStatus("Something went wrong loading posts. Please refresh.");
        setStatus(
          <div className="alert alert-danger" role="alert">
            Something went wrong in loading posts. Please refresh.{" "}
          </div>
        );
      }
    });
  };

  //new code is added here

  return (
    <ClubPageUI
      clubData={clubData}
      clubPosts={clubPosts}
      status={status}
      clubId={clubId}
      clubPostComment={clubPostComment}
      clubPostLikes={clubPostLikes}
    />
  );

};

export default ClubPage;
