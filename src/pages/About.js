import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our pizzeria, where passion and flavor come together! With a love for authentic, handcrafted pizzas, we’re committed to delivering the perfect slice every time.

Using only the freshest ingredients, from homemade dough to rich, flavorful sauces and premium toppings, each pizza is made with care to ensure a delicious experience.

Whether dining in, taking away, or ordering delivery, we create a warm and welcoming atmosphere where food brings people together.

Taste the difference—every pizza is made with love! 🍕❤️
        </p>
      </div>
    </div>
  );
}

export default About;
