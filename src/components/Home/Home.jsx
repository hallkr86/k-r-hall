import React, { Component } from 'react';
import '../../App.css';
import profilepic from '../../images/profilepic.jpg'
import 'animate.css';


class Home extends Component {
    
    render() {
    return (

       
        <div className= "pagebody">
            
        <div className= "container">
            <h1 className="animate__animated animate__tada">Hi, I'm Kesha!</h1>
            <section>
            <div className= "row">
            <div className= "col-md-4">
            
            <img src={profilepic} className={"profilepic"} alt="keshapic" />
            </div>
            <div className= "col-md-8">
                <div className= "col-md-6">
            <p> I'm a passionate tech enthusiast with a passion for cloud computing, creative design, and coding. I am an AWS Certified Developer Associate and hold a certification in Full-Stack Web Development, giving me the skills to build robust and scalable applications. </p>

            <p> My love for technology also extends to web design, where I combine technical know-how with artistic creativity to craft visually appealing and user-friendly webpages. Additionally, I enjoy diving into code to bring ideas to life and ensure seamless functionality. </p>

            <p> With a strong foundation in cloud computing and web development, I'm excited to contribute to innovative projects and make a meaningful impact in the tech industry. Take a moment to browse my Portfolio and see what i've been working on. Let's connect and create something extraordinary together! </p>
           
            
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