import React, { useState } from "react";
import UserState from "../../context/userState";
import "./ClubPage.css";
import NewPost from "./NewPost";
import Post from "./Post";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { AiOutlineLike } from "react-icons/ai";


const ClubPageUI = (props) => {
  // console.log(props.clubPosts);
  const user = useContext(UserContext);

  const [like , setLike] = useState(0);

  return (
    <>

    <div className="background">
      <div className="clubDetails">
        <div className="clubPic">
          <img src={props.clubData.clubPic} alt={props.clubData.clubName} />
        </div>
        <div className="clubData">
          <h1>{props.clubData.clubName}</h1>
          <h3>{props.clubData.clubDescription}</h3>
          <h5>{props.clubData.clubCategory}</h5>
        </div>
      </div>
      <div className="status">{props.status}</div>
      <div className="clubPostContainer">
        <NewPost clubId={props.clubData.clubId} />

        {/* {props.clubPosts.map((post) => {
          return <Post content={post.content} postedBy={post.posted_by} clubId={post.club} postId={post.id} clubPostComment={props.clubPostComment} clubPostLikes={props.clubPostLikes} liked_by={user.userAccount} />;
        })} */}

        <div className="dummypostdetails">
        <div className="post">
      <div className="postedBy">
        Posted By :- <span> 0xc4FF18c697D8F8Cd4946036d7F7D208574E87858 </span>
      </div>
      <div className="postContent">
        Post Content :- <span> This is a post about metamask and what is metamask ? </span>
      </div>
      <div className="comment_and_like">
        <div className="comment">
          <input
            type="text"
            placeholder="Comment... "
             
          />
          <button
            onClick={() => {
              
            }}
          >
            Send
          </button>
        </div>
        <div className="like">
          <button
            onClick={ ()  => setLike(like + 1)}
          >
            <AiOutlineLike size={30} />
            
          </button>
          <div className="likecount">
            <p>{like} Likes</p>
          </div>
        </div>
      </div>

      <div className="comment_box">
        <h4>Comments</h4>
       
      </div>
    </div>
          
        </div>



      </div>
    </div>

    </>
  );
};

export default ClubPageUI;
