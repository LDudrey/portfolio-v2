import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            {props.projects.map((item) => {
                return (
                    <div className="card" key={item.id}>
                        <img src="{props.link}" className="card-img-top" alt="{props.alt}"></img>
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.description}</p>
                        </div>
                        <div className="card-body">
                            <a href="{props.link}" className="card-link">Card link</a>
                        </div>
                    </div>
                )}
            )}
        </div>
    );
}