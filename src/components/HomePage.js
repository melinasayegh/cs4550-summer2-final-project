import React from 'react';
import {RecipePreview} from '../constants/RecipePreview';
import {NavBar} from "../constants/NavBar";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <NavBar/>

                <RecipePreview/>
                <RecipePreview/>
                <RecipePreview/>
            </div>
        )
    }
}