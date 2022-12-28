import React from "react";
import "./Profile.css";
import profile_pic from "../../Images/profile.jpg";
import ProfileScript from "./ProfileScript";
import { useNavigate } from "react-router-dom";
import ClubsScript from "../Clubs/ClubsScript";
import { useState } from "react";
import MyPostData from "./MyPostData";

const Profile = () => {
  const navigate = useNavigate();
  const { clubData } = ClubsScript();

  const [dummymyposts , setdummymyposts] = useState([
    {content : "Metaverse is the future of web3 technology" , postedby :'9wer8qw48e08708w34q23' } ,
  {content : "Blockchain is the future of web3 technology" , postedby :'9wer8qw48e08708w34q23' },
  {content : "Crypto is the future of web3 technology" , postedby :'9wer8qw48e08708w34q23' },
  {content : "Web3 world  is the future of web3 technology" , postedby :'9wer8qw48e08708w34q23' }]
  )
  const [dummymyclub , setdummymyclub] = useState([
    { name : "Metaverse" , id : 1 } ,
  { name : "Block Chain" , id : 2 },
  { name : "Web3" , id : 3},
  { name : "Dapp" , id : 4}
]
  )

  const {
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
  } = ProfileScript();
  console.log(status);
  return (
    <>
      <div className="background">
        <div className="profile_box"></div>
        <div
          className="profile_picture"
          onClick={() => {
            if (isEditting) {
              document.getElementById("userProfilePic").click();
            }
          }}
        >
          {isEditting ? (
            <>
              <img src={userPicPreview} alt="profile_pic" />
              <input
                type="file"
                style={{ display: "none" }}
                id="userProfilePic"
                onChange={(e) => {
                  setUserPicraw(e.target.files[0]);
                  rawImageToURL(e.target.files[0]);
                }}
              />
            </>
          ) : (
            <img src={userPic} alt="profile_pic" />
          )}
        </div>
        <div className="details">
          <div className="name">
            {isEditting ? (
              <input type="text" placeholder={userName} id="userNameInput" />
            ) : (
              <p>{userName}</p>
            )}
          </div>
          <div className="wallet_address">
            {isEditting ? (
              <input
                type="text"
                placeholder={userDescription}
                id="userDescriptionInput"
              />
            ) : (
              <p>{userDescription}</p>
            )}
          </div>

          {status ? <div className="status">{status}</div> : " "}

          <div className="editButton">
            <button
              onClick={() => {
                if (isEditting) {
                  let newUserName =
                    document.getElementById("userNameInput").value;
                  let newUserDescription = document.getElementById(
                    "userDescriptionInput"
                  ).value;
                  handleSaveButton(newUserName, newUserDescription);
                } else {
                  setIsEditting(true);
                }
              }}
            >
              {isEditting ? "Save" : "Edit Profile"}
            </button>
            {isEditting && (
              <button
                onClick={() => {
                  setIsEditting(false);
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        <div className="more_info">
          <div className="options">
            <div className="myoptions1">
              <button>My Posts</button>

              <div className="my_post_data">
              {/* conmmenting below  */}

                {/* {myposts.map((post) => {
                  console.log(post);
                  return (
                    <div
                      key={post.id}
                      onClick={() => {
                        navigate("/club/" + post.id);
                      }}
                    >
                      <MyPostData
                        content={post.content}
                        postedBy={post.posted_by}
                      />
                    </div>
                  );
                })} */}

              {/* conmmenting above  */}
              {dummymyposts.map((post) => {
                  console.log(post);
                  return (
                    <div
                      key={post.id}
                      onClick={() => {
                        navigate("/club/" + post.id);
                      }}
                    >
                      <MyPostData
                        content={post.content}
                        postedBy={post.postedby}
                      />
                    </div>
                  );
                })} 
              </div>
            </div>
            <div className="myoptions2">
              <button>My Clubs</button>
              {/* conmmenting below  */}

              {/* {myClubs.map((club) => {
                return (
                  <div
                    className="option"
                    key={club.name}
                    onClick={() => {
                      navigate("/club/" + club.id);
                    }}
                  >
                    {club.name}
                  </div>
                );
              })} */}

              {/* conmmenting above */}

              {dummymyclub.map((club) => {
                return (
                  <div
                    className="option"
                    key={club.name}
                    onClick={() => {
                      navigate("/club/" + club.id);
                    }}
                  >
                    {club.name}
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
