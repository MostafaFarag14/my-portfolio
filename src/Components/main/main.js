import React, { Component } from 'react'
import { projectsUrls } from '../projectsUrls.js'
import Description from '../description/description'
import './main.css'
export default class Main extends Component {
  render() {
    return (
      <div id="portfolio">
        <div class="album py-5">
          <div class="container">
            <h1>PORTFOLIO</h1>
            <div class="row">
              {
                projectsUrls.map(project => {
                  return <div class="col-md-6">
                    <div class="card mb-4 shadow">
                      <Description description={project.description} />
                      <a href={project.url} target="_blank">
                        <img class="card-img-top" height="300" src={project.image} data-holder-rendered="true" />
                      </a>
                      <hr className="m-0"></hr>
                      <div class="card-body">
                        <h5 class="card-text mb-3">{project.name}</h5>
                        <div class="d-flex justify-content-between align-items-center">

                          <div class="btn-group">
                            
                            {project.url && <a type="button" class="btn btn-sm btn-outline-info" href={project.url} target="_blank">View Live</a>}
                            <a type="button" class="btn btn-sm btn-outline-info" href={project.code} target="_blank">Source Code</a>
                          </div>

                          <small class="text-muted"></small>
                          <ul className="d-flex">
                            {project.tools.map(tool => {
                              return (
                                tool.includes('wide') ? <li className="px-1">
                                  <img width="70" src={tool} />
                                </li>
                                  :
                                  <li className="px-1">
                                    <img width="30" src={tool} />
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
