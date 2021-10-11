import "./Home.css";
import Layout from "../layouts/Layout";
import React from "react";
// import { Link } from 'react-router-dom'
 

 const Home = (props) => {
   return (
     <div className="home">
       <Layout user={props.user}>
        <div className="home-background">
        <h4>
         This is a Design app to help you try style your home, office or
            anywhere you want the way you want!
           </h4>
        
       {/* {props.children} */}
     
      
       <footer className="footer">
 <div className="footer-images">
             <a href="https://github.com/So4inka">
               <img src="https://i.imgur.com/JMMrIY8.png" />      </a>
             
             <a href="https://www.linkedin.com/in/nadezda-kallaur-65444a85/">
               <img src="https://i.imgur.com/h6bqRF4.png" />
      </a>
       <a href="https://www.instagram.com/nadia_kallaur/">
       <img src="https://i.imgur.com/hfTC5IA.png" />
       </a>
       <a href="https://www.facebook.com/nadune4ka/">
       <img src="https://i.imgur.com/YbHVUfT.png" />
       </a>
       </div>
      </footer>
       </div> 
       </Layout>
       </div>
    
    
  );
 };

export default Home;
