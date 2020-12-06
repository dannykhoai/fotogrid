
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import UploadForm from './UploadForm';

import { useAuthState } from 'react-firebase-hooks/auth';


const auth = firebase.auth();

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return(
      <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google to upload pic 📷</button>
      </>
    )
  }
  
  
function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  } 

const CheckAuth = () => {
  const [user] = useAuthState(auth);
    
    if (!user) {
      return (
        <SignIn />
      );
    }

    return (
      <div>
        <SignOut />
        <UploadForm />
      </div>
    )
  }
  

  export { auth };
  export default CheckAuth;