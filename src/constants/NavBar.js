import React from 'react';
import '../styling/NavBarStyling.css';

export const NavBar = ({searchRecipe}) => {
    let searchInput;

    return (
        <div className={'nav-bar'}>
            <h3>Final Project</h3>
            <input ref={node => searchInput = node}
                   className="form-control"
                   placeholder="Search recipe"/>
            <i className="fa-lg fa fa-search"
               onClick={() => {searchRecipe(searchInput)}}></i>
            <h6>Register</h6>
            <h6>Login</h6>
        </div>
    )
}