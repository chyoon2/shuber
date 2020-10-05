import * as firebase from 'firebase';
import 'firebase/firestore';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyC7JYMKxwoPyT-j77Ivd5hI_58b-LFkZng",
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
}

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */
 
    this.fieldValue = app.firestore.FieldValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */
    this.auth = app.auth();
    this.db = app.firestore();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** Merge Auth and DB User API *** //


    onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
 
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
 
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };
 
            next(authUser);
          });
      } else {
        fallback();
      }
    });
 
  // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
 
  // *** Message API ***
 
  message = uid => this.db.ref(`messages/${uid}`);
 
  messages = () => this.db.ref('messages');
}
 
export default Firebase;