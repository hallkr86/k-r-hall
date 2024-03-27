import React, { Component } from 'react';
import '../../App.css';
import profilepic from '../../images/profilepic.jpg'
import 'animate.css';


class Home extends Component {
    
    render() {
    return (

       
        <div className= "pagebody">
            
        <div className= "container">
            <h1 className="animate__animated animate__tada">Hello, I'm Kesha!</h1>
            <section>
            <div className= "row">
            <div className= "col-md-4">
            
            <img src={profilepic} className={"profilepic"} alt="keshapic" />
            </div>
            <div className= "col-md-8">
                <div className= "col-md-6">
            <p> My name is Kesha Hall. I am a full-stack web developer and a 
            graduate of Georgia Tech's Full-Stack Flex Boot Camp. I describe
            myself as a passionate developer. I've always had an interest in programming
            languages and using my creativity to build applications as well as solving problems. </p>

            <p> I recently gained a new skil in generating images using AI. A sample of my design is my avatar on the right side of my website. </p>

            <p> I am currently looking for career opportunities in the tech industry. I am confident that my diverse skill set will make a significant contribution to the success of a team. Please
            take a look at my Portfolio page to see some of my creations.</p>
           
            
            </div>
            </div>
            </div>
            </section>
        </div>
        </div>
        
        
    );
    }
};

export default Home;