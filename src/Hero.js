import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
   const { closeSubmenu } = useGlobalContext();
   return (
      <section className="hero" onMouseOver={closeSubmenu}>
         <div className="hero-center">
            <article className="hero-info">
               <h1> Payments Infrastructure for the internet</h1>
               <p>
                  Milions of Companies of all sizes-form startups to Fortune 500s-use
                  Stripe's software and APIs to accept payments, send payouts, and mnage
                  their business online
               </p>
               <button className='btn'>Start Now</button>
            </article>
            <article className="hero-images">
               <img src={phoneImg} alt="phone" className="phone-img" />
            </article>
         </div>
      </section>
   );
};

export default Hero;
