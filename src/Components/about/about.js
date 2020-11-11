import React, { Component } from 'react'
import './about.css'
export default class About extends Component {
  render() {
    return (
      <div className="about p-5">
      <main id="about" role="main" className="main inner cover w-50 h-100 p-3 mx-auto text-center">
        <h1 className="cover-heading">ABOUT</h1>
        <p className="lead">Hi, my name is Mostafa Farag. 
        I'm a graduate of Ain shams computer engineering and past 3-months DevOps intern at ITI. 
        Recently I learned React and built a few apps using it 
        and got a certificate from udacity by completing 
        React Developer Nanodegree . Also, I became familiar with node and express.
        </p>
        <p className="lead">
          <a href="https://drive.google.com/file/d/1dEG8OFDMHr0dtxm5CnKTxo-pUaOyGWGn/view" target="_blank" className="btn btn-lg btn-info">View CV</a>
        </p>
      </main>
      </div>
    )
  }
}


/*
Hi, my name is Mostafa Farag. 
        I'm a graduate of Ain shams computer engineering and past 3-months Cloud intern at ITI in 
        which I learned basic concepts of Cloud and DevOps tools. 
        Recently I learned React and built a few apps using it. Also, 
        I became familiar with node and express. In college, 
        I built most of the projects using C++ and 
        practiced python in Deep Learning Specialization at Coursera.
*/