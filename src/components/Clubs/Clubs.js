import React from "react";
import "./Clubs.css";
import Infocards from "./Infocards";

import ClubsScript from "./ClubsScript";
import { useState } from "react";



import Alert from "@mui/material/Alert";

const Clubs = () => {
  const { status, setStatus, clubData, clubsNumberData, filter, setFilter } =
    ClubsScript();
   
  const [users , setUsers] = useState(clubData);
  const [page, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = page * usersPerPage;
  const MobileViewFilter = () => {
    const [searchValue , setSearchValue ] = useState("");
    return (
      <>
        <div className="category_search">
          <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" />
          <button
           onClick={() => {
             setFilter(searchValue) 
             }}
          >Search</button>
        </div>
      </>
    )
  }



  
  const displayUsers = 
  // clubData.map((club, index) => {
  users.slice(pagesVisited , pagesVisited + usersPerPage).map((club, index) => {
      if (filter === club.category || filter === ""  ) {
        return (
          <Infocards
            key={club.name}
            heading={club.name}
            about={club.description}
            members={club.members}
            category={club.category}
            profilepic={club.profilepic}
            id={club.id}
          />
        );
      }
    })
  
 

  return (
    <>
      <div className="club_box">
        <div className="club_info">
          <div className="categories_heading">
            <div className="heading">
              <h2>CATEGORIES</h2>
            </div>
            <MobileViewFilter/>
            <div className="category_list" id="more">

              <ul>
                <li
                  onClick={() => {
                    setFilter("");
                  }}
                >
                  All
                </li>
                <li
                  onClick={() => {
                    setFilter("🌐 Web3");
                  }}
                >
                  🌐 Web3
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🌐 Web3"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🪐 Metaverse");
                  }}
                >
                  🪐 Metaverse
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🪐 Metaverse"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🏦 DeFi");
                  }}
                >
                  🏦 DeFi
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🏦 DeFi"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🎮 GameFi");
                  }}
                >
                  🎮 GameFi
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🎮 GameFi"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("💖 SocialFi");
                  }}
                >
                  💖 SocialFi
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["💖 SocialFi"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🖼 NFT");
                  }}
                >
                  🖼 NFT
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🖼 NFT"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🗳️ DAO");
                  }}
                >
                  🗳️ DAO
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🗳️ DAO"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("⚡ Layer2");
                  }}
                >
                  ⚡ Layer2
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["⚡ Layer2"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🔐 Crypto");
                  }}
                >
                  🔐 Crypto
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🔐 Crypto"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("💩 Meme");
                  }}
                >
                  💩 Meme
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["💩 Meme"] + ")"}
                </li>
                <li
                  onClick={() => {
                    setFilter("🏷️ Others");
                  }}
                >
                  🏷️ Others
                  {Object.keys(clubsNumberData).length > 0 &&
                    "(" + clubsNumberData["🏷️ Others"] + ")"}
                </li>
              </ul>
            </div>
           
          </div>
          <div className="pagination_button">
          

            <div className="categories_information">
              {clubData.length > 0 &&
                clubData.map((club, index) => {
                  if (filter === club.category || filter === "" ) {
                    return (
                      <Infocards
                        key={club.name}
                        heading={club.name}
                        about={club.description}
                        members={club.members}
                        category={club.category}
                        profilepic={club.profilepic}
                        id={club.id}
                      />
                    );
                  }
                })}


            </div>
          </div>
 
          <div className="status2" id="st2"> 
            <Alert severity="error">{status}</Alert>
           </div>

        </div>
      </div>
    </>
  );
};

export default Clubs;

