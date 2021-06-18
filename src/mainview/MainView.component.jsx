import React from 'react';
import * as s from './MainView.styles';
import { Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import DashboardPage from '../pages/dashboardPage/DashboardPage.compoent';
import PiqueTreePage from '../pages/piqueTreePage/PiqueTreePage.compoent';
import SignInAndSignOutPage from '../pages/signInAndSignUp/SignInAndSignUpPage.compoent'
import WelcomePage from '../pages/WelcomePage/WelcomPage.component';
const MainView = ({currentUser}) => {
    console.log("mainview user", currentUser)
    return(
        <s.MainViewGrid>
           <Switch>
              <Route exact path='/' component={WelcomePage}/>
              <Route exact path='/dashboard' component={DashboardPage}/>
              <Route exact path='/piquetree' component={PiqueTreePage}/>              
              <Route exact path='/signin' render={ () => currentUser ?
                (<Redirect to='/'/>) 
                : (<SignInAndSignOutPage/>)} />
           </Switch>
        </s.MainViewGrid>
    )
}
const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
  })


export default connect(mapStateToProps)(MainView);