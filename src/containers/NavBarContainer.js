import {connect} from 'react-redux';
import {NavBar} from './NavBar';

const stateToPropertyMapper = state => ({})

const dispatcherToPropertyMapper = dispatch => ({})

const NavBarContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(NavBarComponent)

export default HomePage