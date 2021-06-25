import React from 'react'
import {AppGrid, Sidenav, Headernav, Mainview, FooterContainer} from './App.styles'
import MainView from './mainview/MainView.component'
import SideNav from './sidenav/SideNav.compoent'
import Header from './header/Header.component'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import {auth, createUserProfileDocument, createPorjectJson} from './firebase/firebase.utils';
import Footer from './footer/Footer.component.jsx'
import { createStructuredSelector } from 'reselect';
import { SelectHeaderToggle } from './redux/headerToggle/headerToggle.selector'
import { selectCurrentUser } from './redux/user/user.selector'

//import {data} from './redux/piquetreeform/piqueData';


class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    // add an observer that user signin is changed session presitence, so we don't need to track it mannually
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });            
        });
      }
      console.log(" app current user", userAuth)
      setCurrentUser(userAuth);
      //createPorjectJson("projects", data)
    });
    
  }

  componentWillUnmount() {
    // stop the observer to stop litsening to the auth, set it back to null;
    this.unsubscribeFromAuth();
  }
  hideSideNav = ({}) => {

  }
  render() {
   const {toggle} = this.props
    return (
      <AppGrid hidden={toggle} >
        <Headernav><Header/></Headernav>

        {toggle ? 
            null
            :
            <Sidenav>
              <SideNav/>
            </Sidenav>
           
        }
        <Mainview>
          <MainView/>
        </Mainview>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </AppGrid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
 toggle: SelectHeaderToggle,
 currentUser: selectCurrentUser
})


export default connect(mapStateToProps , mapDispatchToProps)(App);