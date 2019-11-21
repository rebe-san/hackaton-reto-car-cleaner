import React from 'react';
import {FormEmployee} from '../../components';
 import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config' 
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import './style.css';

const RegisterEmployee = ({signInWithEmailAndPassword,
    createUserWithEmailAndPassword, user, error}) => {
    
    return (
        <section className="register-employee">
            <FormEmployee/>
        </section>
    )
}

 const providers = {
    emailProvider : new firebase.auth.EmailAuthProvider(),
}



const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(RegisterEmployee); 




class App extends Component {   
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
  
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {
              user
                ? <p>Hello, {user.displayName}</p>
                : <p>Please sign in.</p>
            }
  
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
          </header>
        </div>
      );
    }
  }
  
  const firebaseAppAuth = firebaseApp.auth();
  
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
  


