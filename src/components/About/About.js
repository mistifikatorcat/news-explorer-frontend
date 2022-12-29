import React from "react";
import './about.css';
import picture from '../../images/pleasedontputspoilersinthetitle.jpg'

function About(){

    return(
        <section className="about">
            <div className="about__image-wrapper">
            <img className="about__image" src={picture} alt='Walter White'></img>
            </div>
            <div className="about__text-wrapper">
            <h2 className="about__title">About the author.</h2>

            <p className="about__text">
            My name is Walter Hartwell White.
            <br />
            <br /> 
            I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. To all law enforcement entitles, this is not an admission of guilt.
            <br />
            <br />
            I am speaking to my family now. Skyler, you are the love of my life. I hope you know that. Walter Junior, you’re my big man.
            <br />
            <br />
            There are going to be some things, things that you’ll come to learn about me in the next few days. I just want you to know that no matter how it may look, I only had you in my heart.
            <br />
            <br />
            Good-bye.
            </p>
            </div>
        </section>
            
    )
}

export default About;