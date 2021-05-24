import React, { Component } from 'react'
import './about.css'
export default class About extends Component {
  render() {
    return (
      <div className="about p-5">
        <main style={{ maxWidth: '50rem' }} id="about" role="main" className="main inner cover h-100 p-3 mx-auto text-center">
          <h1 className="cover-heading">ABOUT</h1>
          <p style={{ textAlign: 'left', fontSize: '1rem' }} className="lead">Hi, my name is Mostafa Farag.
          I'm a React Developer and i have some experience in :
          <ul style={{listStyleType: 'circle'}}>
              <li>Creating reusable and scalable react components</li>
              <li>State management using hooks, redux and Context API,</li>
              <li>Working with REST APIs,</li>
              <li>Working with styling libraries like Bootstrap , React semantic UI and material UI</li>
              <li>Client-side routing using react-router</li>
              <li>Creating responsive apps using grids and flex-box</li>
              <li>Using Headless CMS like strapi</li>
            </ul>
          I'm also familiar with :
          <ul style={{ listStyleType: 'circle' }}>
              <li>NextJs including SSR, SSG and file-based routing</li>
              <li>NodeJS and Express to create API endpoints</li>
              <li>Firebase including authentication and firestore</li>
              <li>Mobile development using React Native</li>
              <li>AWS basics</li>
              <li>GraphQL</li>
            </ul>
          Finally,
          I'm a graduate of Ain shams computer engineering, past 3-months DevOps intern at ITI and
           i have a certificate of React Developer Nanodegree from udacity.
        </p>
          <p className="lead">
            <a href="https://drive.google.com/file/d/1dEG8OFDMHr0dtxm5CnKTxo-pUaOyGWGn/view" target="_blank" className="btn btn-lg btn-info">View CV</a>
          </p>
        </main>
      </div>
    )
  }
}


