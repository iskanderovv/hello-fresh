import Hero from '../hero/Hero';
import Nav from '../nav/Nav';
import WhyHellofresh from '../why-hellofresh/Why-hellofresh';
import chicken from '../../images/chicken.svg';
import whatsoever from '../../images/whatsoever.svg';
import reviews from '../../images/reviews.svg';
import affordable from '../../images/affordable.svg';
import Box from '../box/Box';
import Food from '../foods/Food';
import meat from '../../images/meat.png';
import burger from '../../images/burger.png';
import veggie from '../../images/veggie.png';

function App() {
  const sliderClick = (slider)=>{
    alert("hello world");
  }


  const helloFresh = [
    { id: 1, img: chicken, title: "No skimpin’ on the chicken!", info: "Or steak, or fish, or plant protein." },
    { id: 2, img: whatsoever, title: "No commitment whatsoever", info: "Skipping weeks or cancelling is super easy." },
    { id: 3, img: reviews, title: "The most 5-star reviews", info: "Our huge recipe selection wows week after week." },
    { id: 4, img: affordable, title: "Fresh and affordable", info: "Chef-created deliciousness from $7.49 per meal." }
  ];

  const slides = [
    { image: meat, title: "MEAT & VEGGIES", description: "OUR MOST POPULAR PLAN", clickEvent: sliderClick },
    { image: veggie, title: "VEGGIE", description: "& PLANT-BASED MEALS", clickEvent: sliderClick },
    { image: burger, title: "FAMILY FRIENDLY", description: "KID-TESTED RECIPES", clickEvent: sliderClick },
    { image: meat, title: "MEAT & VEGGIES", description: "OUR MOST POPULAR PLAN", clickEvent: sliderClick },
    { image: veggie, title: "VEGGIE", description: "& PLANT-BASED MEALS", clickEvent: sliderClick },
    { image: burger, title: "FAMILY FRIENDLY", description: "KID-TESTED RECIPES", clickEvent: sliderClick },
    { image: meat, title: "MEAT & VEGGIES", description: "OUR MOST POPULAR PLAN", clickEvent: sliderClick },
    { image: veggie, title: "VEGGIE", description: "& PLANT-BASED MEALS", clickEvent: sliderClick },
    { image: burger, title: "FAMILY FRIENDLY", description: "KID-TESTED RECIPES", clickEvent: sliderClick },
  ]

  return (
    <>
      <Nav />
      <Hero />
      <WhyHellofresh data={helloFresh} />
      <Box />
      <Food slides={slides} />
    </>
  )
}

export default App
