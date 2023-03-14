import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function ProjectCard(props) {
    return (
        <div className="project-list">
            {props.projects.map((item) => {
                return (
                    <div className="card m-5" key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.alt}></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p id="description" className="card-text">{item.description}</p>
                            <a className="mx-3" href={item.repo}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                            <a href={item.link} className="card-link">Visit</a>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}