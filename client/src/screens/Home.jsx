import "./Home.css";
import Layout from "./layouts/Layout";
import Footer from "./Footer";
import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <Layout user={props.user}>
        <div className="background">
          <h4>
            This is a Design app to help you try style your home, office or
            anywhere you want the way you want!
          </h4>
        </div>
        <div className="footr">
        </div>
      </Layout>
    </div>
  );
};
