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
import dog from '../../images/dog.png';
import child from '../../images/child.png';
import family from '../../images/family.png';
import girls from '../../images/girls.png';
import HelloFreshPics from '../hellofreshpics/HelloFreshPics';
import Plans from '../plans/Plans';
import Questions from '../questions/Questions';
import Footer from '../footer/Footer';

function App() {
  const sliderClick = (slider) => {
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
  ];

  const helloFreshPics = [
    { image: child, title: "bdanielle1285", description: "My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!" },
    { image: dog, title: "lilpepthekelpie", describe: "I’m helping out 🧑🏽‍🍳 #masterchef #bestboy" },
    { image: family, title: "mandi14eid", description: "Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!" },
    { image: girls, title: "our_lovely_stride", description: "We had a cooking class yesterday and we had such an amazing time. 😁 They had such a great time working as a team and I can’t wait for our weekly cooking class 🙌🏻😁" }
  ]

  return (
    <>
      <Nav />
      <Hero />
      <WhyHellofresh data={helloFresh} />
      <Box />
      <Food slides={slides} />
      <HelloFreshPics helloFreshPics={helloFreshPics} />
      <Plans />
      <Questions />
      <Footer />
    </>
  )
}

export default App
