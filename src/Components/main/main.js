import React, { Component } from 'react'
import { projectsUrls, imgPath } from '../projectsUrls.js'
import Description from '../description/description'
import './main.css'
export default class Main extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="album py-5">
          <div className="container">
            <h1>PORTFOLIO</h1>
            <div className="row">
              {
                projectsUrls.map((project, index) => {
                  return <div key={index} className="col-md-6">
                    <div className="card mb-4 shadow">
                      <Description description={project.description} />
                      <a href={project.url} target="_blank">
                        <img className="card-img-top" height="300" src={project.image} data-holder-rendered="true" />
                      </a>
                      <hr className="m-0"></hr>
                      <div className="card-body">
                        <h5 className="card-text mb-3">{project.name}</h5>
                        <div className="d-flex justify-content-between align-items-center">

                          <div className="btn-group">

                            {project.url && <a type="button" className="btn btn-sm btn-outline-info" href={project.url} target="_blank">View Live</a>}
                            <a type="button" className="btn btn-sm btn-outline-info" href={project.code} target="_blank">Source Code</a>
                          </div>

                          <small className="text-muted"></small>
                          <ul className="d-flex">
                            {project.tools.map((tool, index) => {
                              return (
                                tool.imgUrl.includes('wide') ? <li key={index} className="px-1">
                                  <img title={tool.title} width="70" src={`${imgPath}/${tool.imgUrl}`} />
                                </li>
                                  :
                                  <li title={tool.title} key={index} className="px-1">
                                    <img width="30" src={`${imgPath}/${tool.imgUrl}`} />
                                  </li>
                              )
                            })}

                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }

            </div>
          </div>

        </div>
      </div>

    )
  }
}
