import React, { Component } from 'react'
import Scrollspy from 'react-scrollspy'
import './header.css'
export default class Header extends Component {
  render() {
    return (

      <nav id="header" className="header navbar navbar-expand-lg shadow sticky-top" >
        <div className="container justify-content-center">

          <ul className="navbar-nav">
            <Scrollspy className="navbar-nav scrollspy" items={['about', 'portfolio', 'contact']} currentClassName="isCurrent">
              {['About', 'Portfolio', 'Contact'].map(item => {
                return (<li className="nav-item mx-4">
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>)
              })}
            </Scrollspy>
          </ul>

        </div>

      </nav>




    )
  }
}
