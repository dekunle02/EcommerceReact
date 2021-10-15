import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import Header from './components/header/header.component';

import {
  auth
} from './firebase/firebase.utils';
import {
  getDoc,
} from "firebase/firestore";

import {
  createUserProfileDocument
} from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        currentuser: null
      }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          const userSnap = await getDoc(userRef)
          ; this.setState({
            currentUser: {
              id: userSnap.id,
              ...userSnap.data()
            }
          })
        }
        else {
          this.setState({currentUser: userAuth})
        }
      })

      
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }


    render() {
      return ( 
      <div>
        <Header currentUser = {this.state.currentUser}/>  
        <Switch >
        <Route exact path = '/' component= {HomePage}/> 
        <Route path = '/shop'component= {ShopPage}/> 
        <Route path = '/signin'component = {AuthPage}/> 
        </Switch> 
        </div>)
      }
    }

    export default App;