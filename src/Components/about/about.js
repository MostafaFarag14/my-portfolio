import React, { Component } from 'react'
import './about.css'
export default class About extends Component {
  render() {
    return (
      <div className="about p-5">
      <main id="about" role="main" class="main inner cover w-50 h-100 p-3 mx-auto text-center">
        <h1 class="cover-heading">ABOUT</h1>
        <p class="lead">Hi, my name is Mostafa Farag. I'm a graduate of Ain shams computer engineering 
        and past 3-months Cloud intern at ITI in which I learnt basic concepts of Cloud and Devops tools. 
        Recently I learnt React and built a few apps using it. Also, I became familiar with node and express. 
        In college, I built most of the projects using C++ and practiced python in Deep Learning Specialization at Coursera.
        </p>
        <p class="lead">
          <a href="https://drive.google.com/file/d/1dEG8OFDMHr0dtxm5CnKTxo-pUaOyGWGn/view" target="_blank" class="btn btn-lg btn-info">View CV</a>
        </p>
      </main>
      </div>
    )
  }
}
