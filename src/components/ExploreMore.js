import React from "react";
import "../components/Login.css";
import logo from "../Images/BITlogo.png";
const ExploreMore = () => {
  return (
    <>
      <div className="explore">
        <div className="inner">
          <h2>What is Web3 ? </h2>
          <div className="content">
            <p>
              <br></br>
              <br></br>
              Web3 is decentralized: instead of large swathes of the internet
              controlled and owned by centralized entities, ownership gets
              distributed amongst its builders and users. <br></br> <br></br>
              <br></br> Web3 is permissionless: everyone has equal access to
              participate in Web3, and no one gets excluded.<br></br>
              <br></br>
              <br></br>
              Web3 has native payments: it uses cryptocurrency for spending and
              sending money online instead of relying on the outdated
              infrastructure of banks and payment processors.<br></br>
              <br></br>
              <br></br> Web3 is trustless: it operates using incentives and
              economic mechanisms instead of relying on trusted third-parties.
            </p>
              <h2>Why is it Important ? </h2>
            <div className="importance" style={{display :"flex" , alignItems:"center" , justifyContent:"space-around"}}>
            <div className="left">

              <p>
                Ownership <br></br>
                <br></br>
                <br></br>
                Censorship resistance <br></br>
                <br></br>
                <br></br>
                Decentralized autonomous organizations (DAOs) <br></br>
                <br></br>
                <br></br>
                Identity <br></br>
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="right">
              <img src={logo} height="100vh" alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
