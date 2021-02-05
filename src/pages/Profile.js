import React from "react";
import "./profile.scss";
import Layout from "../components/Layout";

export default function Profile() {
  let username = "Paulius";

  return (
    <Layout>
      <div className="Profile">
        <div>
          <h1 className="introduction"> Hello, {username}.</h1>
          <div className="setting">
            Your email is <input type="text"></input>
          </div>
          <div className="setting">
            You want to be called <input type="text"></input>
          </div>
          <div className="setting">
            You are <input type="text"></input> years old.
          </div>
        </div>
      </div>
    </Layout>
  );
}
