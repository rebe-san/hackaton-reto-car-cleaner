import React from "react";
import { Input } from '../';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config'
import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import "./style.css";
import Button from '../Button/index'

const firebaseApp = firebase.initializeApp(firebaseConfig);




const FormUser = ({ user, signOut, signInWithGoogle }) => {
    return (
        <form className="form-employee">
            <Input
                type="text"
                name="name"
                placeholder="Nombre de usuario"
            />
            <Input
                type="number"
                name="phone"
                placeholder="Teléfono"
            />
            <Input
                type="text"
                name="email"
                placeholder="Correo electrónico"
            />

            <Input
                type="password"
                name="password"
                placeholder="Crear contraseña"
            />
            <Input
                type="password"
                name="confirm-password"
                placeholder="Confirmar contraseña"
            />
            <Button text="SIGUIENTE" />
            <div>
           
                    < button onClick={signInWithGoogle}>Sign in with Google</button>
          
            </div>
        </form >
    )

}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };

  export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(FormUser);

