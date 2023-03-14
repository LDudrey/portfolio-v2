import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="project-list">
            {props.projects.map((item) => {
                return (
                    <div className="card m-5" key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.alt}></img>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href={item.link} className="card-link">Visit</a>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}