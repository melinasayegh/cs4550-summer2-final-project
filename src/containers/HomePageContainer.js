import {connect} from 'react-redux';
import HomePage from '../components/HomePage';

const stateToPropertyMapper = state => ({})

const dispatcherToPropertyMapper = dispatch => ({})

const HomePageContainer =
    connect(stateToPropertyMapper, dispatcherToPropertyMapper)(HomePage)

export default HomePage