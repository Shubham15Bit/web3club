import "./ClubPage.css";

import React, { useState, useEffect } from "react";
import "./ClubPage.css";
import { AiOutlineLike } from "react-icons/ai";

import {
  createComment,
  getPostComments,
  getPostLikes,
  PostLike,
} from "../apiCalls";
// import PostLike from "../apiCalls";

const Post = (props) => {
  // console.log(props.clubPostLikes);
  useEffect(() => {
    getPostComments(props.clubId, props.postId).then((res) => {
      // console.log(res.data)
      setComments(res.data);
    });

    getPostLikes(props.clubId, props.postId).then((res) => {
      setLike(res.data);
    });
    
  }, []);

  const [data, setData] = useState("");

  const [comments, setComments] = useState([data]);

  const [like, setLike] = useState(0);

  return (
    <div className="post">
      <div className="postedBy">
        Posted By :- <span> {props.postedBy} </span>
      </div>
      <div className="postContent">
        Post Content :- <span> {props.content} </span>
      </div>
      <div className="comment_and_like">
        <div className="comment">
          <input
            type="text"
            placeholder="Comment... "
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button
            onClick={() => {
              //  setComments([...comments , data ])
              createComment(props.clubId, props.postId, props.postedBy, data);
              getPostComments(props.clubId, props.postId).then((res) => {
                setComments(res.data);
              });
            }}
          >
            Send
          </button>
        </div>
        <div className="like">
          <button
            onClick={async ( ) => {
              await PostLike(props.clubId, props.postId, props.liked_by);

              await getPostLikes(props.clubId, props.postId).then((res) => {
                setLike(res.data);
                // console.log(res)
              });
            }}
          >
            <AiOutlineLike size={30} />
            {/*

            <span className="likeCount">  {like.map((l) => {
              return (
                <>
                  {l}
                </>
              )
            }) } </span> */}
            
          </button>
          <div className="likecount">
            <p>{like}</p>
          </div>
        </div>
      </div>

      <div className="comment_box">
        <h4>Comments</h4>
        {comments.map((c) => {
          return (
            <>
              <li> {c.comment} </li>
            </>
          );
        })}
        {/* {
          props.clubPostComment();
        } */}
      </div>
    </div>
  );
};

export default Post;
