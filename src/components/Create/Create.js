import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Create.css";
import CreateScript from "./CreateScript";
import { Alert } from "@mui/material";
const Create = () => {
  const {
    status,
    setStatus,
    setUploadedImage,
    setClubName,
    setClubDescription,
    setClubCategory,
    handleCreateButton,
  } = CreateScript();

  return (
    <>
      <div className="outerCreate">
        <div className="createbox">
          <div className="heading">
            <h2>Create a Club</h2>
          </div>
          <div className="create_form">
            <form>
              <div className="photo">
                <div className="file-input">
                  <input
                    type="file"
                    id="file"
                    className="file"
                    onChange={(e) => {
                      setUploadedImage(e.target.files[0]);
                    }}
                  />
                  <label htmlFor="file">Select file</label>
                </div>
              </div>
              <div className="clubName">
                <input
                  type="text"
                  placeholder="Club Name"
                  id="clubName"
                  onChange={(e) => {
                    setClubName(e.target.value);
                  }}
                />
              </div>
              <div className="clubDescription">
                <textarea
                  type="text"
                  placeholder="Club Description"
                  name=""
                  id="clubDescription"
                  cols="93"
                  rows="10"
                  onChange={(e) => {
                    setClubDescription(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="category">
                <p>Category</p>
                <select
                  name=""
                  id="clubCategory"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setClubCategory(e.target.value);
                  }}
                >
                  <option value="🌐 Web3">🌐 Web3</option>
                  <option value="🪐 Metaverse">🪐 Metaverse</option>
                  <option value="🏦 DeFi">🏦 DeFi</option>
                  <option value="🎮 GameFi">🎮 GameFi</option>
                  <option value="💖 SocialFi">💖 SocialFi</option>
                  <option value="🖼 NFT">🖼 NFT</option>
                  <option value="🗳️ DAO">🗳️ DAO</option>
                  <option value="⚡ Layer2">⚡ Layer2</option>
                  <option value="🔐 Crypto">🔐 Crypto</option>
                  <option value="💩 Meme">💩 Meme</option>
                  <option value="🏷️ Others">🏷️ Others</option>
                </select>
              </div>
              <div className="status" id="stat">
                {status}
              </div>
              <div className="create_button">
                <button
                  onClick={(e) => {
                    handleCreateButton(e);
                  }}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
