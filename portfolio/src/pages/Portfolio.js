import React from 'react';
import { images, gitHub } from '../public/index';

const Portfolio = () => {
   return(
      <div class="container">
      <main class="row">
         <div class="col-md-10">
            <article class="block">
               <h1 class="block-header">Portfolio</h1>
               <hr />
               <div class="row">
                  <div class="col-sm-6 col-md-12 col-lg-6">
                     <a href="https://zirris512.github.io/project-1/" target="_blank" rel="noopener noreferrer"><img class="img-fluid port-image" src={images.globe} alt=""/></a>
                     <p class="portfolio-titles">Plan and Go</p>
                     <button class="btn btn-success collapse-btn" data-toggle="modal" data-target="#project1">. . .</button>
                     <a href="https://github.com/zirris512/project-1" target="_blank" rel="noopener noreferrer"><img class="github" src={gitHub} alt=""/></a>
                  </div>
                  <div class="coll-sm-6 col-md-12 col-lg-6">
                     <a href="https://ku-project2-group3.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img class="img-fluid port-image" src={images.swordShield} alt=""/></a>
                     <p class="portfolio-titles">Epic Adventure!</p>
                     <button class="btn btn-success collapse-btn" data-toggle="modal" data-target="#project2">. . .</button>
                     <a href="https://github.com/zirris512/Project2" target="_blank" rel="noopener noreferrer"><img class="github" data-url="" src={gitHub} alt=""/></a>
                  </div>
               </div>
               <div class="row">
                  <div class="col-sm-6 col-md-12 col-lg-6">
                     <a href="https://burgerappbse.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img class="img-fluid port-image" src={images.burger} alt=""/></a>
                     <p class="portfolio-titles">Eat-da-Burger</p>
                     <button class="btn btn-success collapse-btn" data-toggle="modal" data-target="#burger">. . .</button>
                     <a href="https://github.com/zirris512/burger" target="_blank" rel="noopener noreferrer"><img class="github" src={gitHub} alt=""/></a>
                  </div>
                  <div class="col-sm-6 col-md-12 col-lg-6">
                     <a href="https://zirris512.github.io/Train_Schedule/" target="_blank" rel="noopener noreferrer"><img class="img-fluid port-image" src={images.train} alt=""/></a>
                     <p class="portfolio-titles">Train Schedule</p>
                     <button class="btn btn-success collapse-btn" data-toggle="modal" data-target="#train">. . .</button>
                     <a href="https://github.com/zirris512/Train_Schedule" target="_blank" rel="noopener noreferrer"><img class="github" src={gitHub} alt=""/></a>
                  </div>
               </div>
               <div class="row">
                  <div class="col-sm-6 col-md-12 col-lg-6">
                     <a href="https://youtu.be/YKHXxkXWlh0" target="_blank" rel="noopener noreferrer"><img class="img-fluid port-image" src={images.shoppingBox} alt=""/></a>
                     <p class="portfolio-titles">Bamazon</p>
                     <button class="btn btn-success collapse-btn" data-toggle="modal" data-target="#bamazon">. . .</button>
                     <a href="https://github.com/zirris512/bamazon" target="_blank" rel="noopener noreferrer"><img class="github" src={gitHub} alt=""/></a>
                  </div>
                  <div class="col-sm-6 col-md-12 col-lg-6">
                     <a href="https://zirris512.github.io/clicky-game/" target="_blank" rel="noopener noreferrer"><img class="img-fluid port-image" src={images.linkWW} alt=""/></a>
                     <p class="portfolio-titles">Clicky Game</p>
                     <button class="btn btn-success collapse-btn" data-toggle="modal" data-target="#clicky">. . .</button>
                     <a href="https://github.com/zirris512/clicky-game" target="_blank" rel="noopener noreferrer"><img class="github" src={gitHub} alt=""/></a>
                  </div>
               </div>
            </article>
         </div>
      </main>
   </div>
   )
};

export default Portfolio;