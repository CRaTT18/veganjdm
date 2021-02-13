import React from "react";
import axe from '../images/axe.png';

function About(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img className="bigaxe" src={axe} />
        </div>
        <div className="col-md-9 text-justify">
          <h1>About Us</h1>
          <hr />
          <p>About 8 years ago it was brought to my attention that if I did not change my ways I could expect to stroke out in 10-15 years due to high blood pressure and being overweight. My wife was already vegetarian so I started looking in to ways I could improve my health and found out I was eating pretty shitty. The more I got away from processed food, meat and dairy, the better I felt. I would say I'm about 80% Vegan and maybe 95% Vegetarian. That means if I want a cheeseburger, I eat one. But those times are getting fewer and farther between.<br/><br/>One of the things I miss about being obese is eating beef jerky, terriyaki sticks and pepperoni in massive qauntities. That has lead me to many failed attempts at making my own substitutes and trying many disgusting attempts by others. I'm also in a coding bootcamp and needed a project to make in React. Hence, Vegan Jerky Deathmatch was born.<br/><br/> Vegan Jerky has made massive improvements in quality and availibility in the last few years but it is still expensive and hard to figure out which one to sqaunder your hard earned money on. Thats where I am here to help. I am not getting paid to do any of this, but I sure would accept money and/or free beer & jerky. However my taste buds can not be bought, so you can be sure my reviews are honest and reflect how I actually feel about the products. And if I can figure out a way to monetize this site with affiliate links or things like that, I will do it, so just letting you know. Cheers!</p>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default About;
