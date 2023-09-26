import React from 'react';
import './ArtistPortfolio.css';
import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art4.jpg';
import art5 from '../assets/art5.jpg';


const data =[
    {
      id:1,
      title:"Art 01",
      img:art1,      
      behance:"https://www.google.com/",
    },
    {
      id:2,
      title:"Art 02",
      img:art2,
      behance:"https://www.google.com/",
    },
    {
      id:3,
      title:"Art 03",
      img:art3,
      behance:"https://www.google.com/",
    },
    {
      id:3,
      title:"Art 04",
      img:art4,
      behance:"https://www.google.com/",
    },
    {
      id:3,
      title:"Art 05",
      img:art5,
      behance:"https://www.google.com/",
    },
    
  ]

  const ArtistPortfolio = () => {
    return (
      <section id="portfolio">
        <h2 align= "center">My Work</h2>
        <div className="container portfolio__container">
        {
          data.map(({id, title,img, behance}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
            <img src={img} alt={title} />
          </div>
            
            <h3>{title}</h3>
            <div className="portfolio__item-cla">
              
              <a
                href={behance}
                className="btn btn-primary"
                target="_blank"
              >
                View
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
