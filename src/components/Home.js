import React, { useEffect } from "react";
import firebase from "firebase";

const Home = ({ setUsername, setImg, setAuth }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        console.log(user.displayName);
        setUsername(user.displayName);
        setImg(user.photoURL);
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
              /** @type {firebase.auth.OAuthCredential} */
              var credential = result.credential;
              var token = credential.accessToken;
              var user = result.user;
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        sign in
      </button>
    </div>
  );
};

export default Home;
