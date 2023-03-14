import React from 'react';
import image from '../../assets/images/avataaars.png'

export default function Header() {
    return (
        <div>
            <a className='navbar-brand m-0' href="#">
            <span className=''>
                <img className="img-fluid" id="profile" alt="cartoonized profile" src={image}></img>
            </span>
            </a>
            <h1 className='text-center my-3'>Lydia Dudrey</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    )
}