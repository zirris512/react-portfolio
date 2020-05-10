import React from 'react';
import calmRain from '../public/images/calm_rain.jpg'

const About = () => {
   return (
      <main className="container">
      <section className="row">
         <div className="col-md-10">
            <article className="block">
               <h1 className="block-header">About Me</h1>
               <hr />
               <img src={calmRain} alt="" id="about-image" />
               <p>Full Stack Web Developer with a minor background in psychology and engineering to build a better user experience on the web. Recently earned a certificate in Full Stack Development from the University of Kansas, with newly learned skills in Javascript, React.js, and MySQL. I have been known as a strong leader who will take charge by my peers and guide everyone to our goals. I am also a quick learner that can remain calm when under pressure and come up with solutions when things get tough. My aim is to create an impactful and memorable user-experience for my audience. I worked on a project where I applied the Phaser.js engine to a React.js app in a group of five to make an escape room like game where users could log in through authentication via Passport and MongoDB and play through a sequence of puzzles to escape a room. I am excited to use my skills on future projects as part of a driven team to create memorable experiences for users on the web.</p>
               <br/>
               <p>Skills/Technologies:</p>
               <ul>
                  <li>Javascript</li>
                  <li>MySQL/Sequelize</li>
                  <li>MongoDB/Mongoose</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>React.js</li>
                  <li>GIT</li>
               </ul>
            </article>
         </div>
      </section>
   </main>
   )
}

export default About;