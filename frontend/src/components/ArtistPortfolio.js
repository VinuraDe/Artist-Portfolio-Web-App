// src/components/ArtistPortfolio.js
import React from 'react';
import './ArtistPortfolio.css'; // Import your CSS file

const data =[
    {
      id:1,
      title:"RecordBook POS System(Mobile)",
      github:"https://github.com/MAD-arkSide/Recordbook_POS",
      behance:"",
    },
    {
      id:2,
      title:"Hotel Management(Web)",

      github:"https://github.com/SLIITITP/y2_s2_wd_it_01-itp_wd_b01_09",
      behance:"#",
    },
    {
      id:3,
      title:"Food Review Web Application",

      github:"https://github.com/VinuraDe/Food-Review-Web-Application",
      behance:"",
    },
    
  ]

  const ArtistPortfolio = () => {
    return (
      <section id="portfolio">
        <h5 align= "center">My Projects</h5>
        <h2 align= "center">Portfolio</h2>
        <div className="container portfolio__container">
        {
          data.map(({id, title, github, behance}) => {
            return (
              <article key={id} className="portfolio__item">
            
            <h3>{title}</h3>
            <div className="portfolio__item-cla">
              <a
                href={github}
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href={behance}
                className="btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
          )
  
            })
          } 
        
          
        </div>
      </section>
    );
  };
  
  export default ArtistPortfolio;
