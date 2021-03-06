import React from 'react';
// import Portfoliocard from '../Portfoliocard/Portfoliocard';
import budgettracker from "../../images/budgettracker.JPG";
import employeesummary from "../../images/employeesummary.JPG";
import workouttracker from "../../images/workouttracker.JPG";
import passwordgenerator from "../../images/passwordgeneratorscreenshot.jpg";
import workdayscheduler from "../../images/workdayscheduler.jpg";
import employeedirectory from "../../images/employeedirectory.JPG";
import giddyitup from "../../images/giddyitup.JPG";
// import portfoliodetails from '../Portfoliocard/portfoliodetails.json';




const Portfolio = () => {
    

    return (
        <div className= "pagebody">
        <div className= "container">
            <section>
            <h1>My Projects</h1>
            </section>
            
            
            {/* <div className="card" style={{width: "18rem", background: "grey"}}> */}
            <div className='row'>
            <div className="col-sm-4">

            <img src={giddyitup} className="card-img-top animate__animated animate__tada" alt={'giddy-it-up'} />
            <div className="card-body">
            <h5 className="card-title">Giddy It Up</h5>
            <a href="https://giddyitup-eg.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark">View Project</a>
            <a href="https://github.com/hallkr86/GiddyItUp" target="_blank" rel="noreferrer" className="btn btn-dark">Github Repository</a>
            </div>

            </div>

            <div className="col-sm-4">
            <img src={budgettracker} className="card-img-top animate__animated animate__tada" alt={'budget-tracker-app'} />
            <div className="card-body">
            <h5 className="card-title">Budget Tracker</h5>
            <a href="https://budget-app-khall.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-dark">View Project</a>
            <a href="https://github.com/hallkr86/hw-18-budget-tracker" target="_blank" rel="noreferrer" className="btn btn-dark">Github Repository</a>
            </div>
            </div>

            <div className="col-sm-4">
            
            <img src={workouttracker} className="card-img-top animate__animated animate__tada" alt={'workout-tracker'} />
            <div className="card-body">
            <h5 className="card-title">Workout Tracker</h5>
            <a href="https://workout-kh.herokuapp.com/?id=5f939e2c6a68e700178e0d56" target="_blank" rel="noreferrer" className="btn btn-dark">View Project</a>
            <a href="https://github.com/hallkr86/hw-17-workout-tracker" target="_blank" rel="noreferrer" className="btn btn-dark">Github Repository</a>
            </div>
            </div>
            


            <div className="col-sm-4">

            <img src={employeesummary} className="card-img-top animate__animated animate__tada" alt={'employee-summary-app'} />
            <div className="card-body">
            <h5 className="card-title">Employee Summary</h5>
            <a href="https://drive.google.com/file/d/1cBKCHS-xwyrDUVUHWi-X4jL3sDxoLcs6/view" target="_blank" rel="noreferrer" className="btn btn-dark">View Project</a>
            <a href="https://github.com/hallkr86/10-employee-summary" target="_blank" rel="noreferrer" className="btn btn-dark">Github Repository</a>
            </div>
            </div>


            

            <div className="col-sm-4">
            <img src={employeedirectory} className="card-img-top animate__animated animate__tada" alt={'employee-directory'} />
            <div className="card-body">
            <h5 className="card-title">Employee Directory</h5>
            <a href="https://hallkr86.github.io/hw-19-employee-directory/" target="_blank" rel="noreferrer" className="btn btn-dark">View Project</a>
            <a href="https://github.com/hallkr86/hw-19-employee-directory" target="_blank" rel="noreferrer" className="btn btn-dark">Github Repository</a>
            </div>
            </div>
            
            <div className="col-sm-4">
            <img src={passwordgenerator} className="card-img-top animate__animated animate__tada" alt={'password-generator'} />
            <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <a href="https://hallkr86.github.io/hw-03-password-generator/" target="_blank" rel="noreferrer" className="btn btn-dark">View Project</a>
            <a href="https://github.com/hallkr86/hw-03-password-generator" target="_blank" rel="noreferrer" className="btn btn-dark">Github Repository</a>
            </div>
            </div>

            </div>
            
            
        

        
        </div>
    </div>
        
        
    );
};

export default Portfolio;