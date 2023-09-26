import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BiSolidPaint } from "react-icons/bi";
import Me from '../assets/Me.jpg';

const About = () => {
  return (
    <section id="about">
      <h2 align ="center">About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>State University</small>
            </article>

            <article className="about__card">
              <BiSolidPaint className="about__icon" />
              <h5>Arts</h5>
              <small>100+</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years </small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod felis a ante bibendum, ac tincidunt quam dictum. Sed non justo nec libero lacinia venenatis. Vestibulum facilisis, ligula id cursus bibendum, sem tortor congue arcu, id pellentesque dolor orci non turpis. Nulla facilisi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;