import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXXXXXXXXX',
  databaseURL: 'XXXXXXXXXXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXXXXXX',
  appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  measurementId: 'XXXXXXXXXXXX'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const signOut = () => {
  auth.signOut();
};

export const generateUserDocument = async (user, fullName, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        fullName,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    // to update userData
    console.log(userDocument.data());
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

export const getStateWiseDocuments = async () => {
  try {
    const stateData = await firestore
      .collection('statewise')
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return doc.data();
        });
      });
    return {
      ...stateData
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

export const getTimeSeriesDocuments = async () => {
  try {
    // let sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    // sevenDaysAgo = new Date(sevenDaysAgo);
    // const timeSeriesData = await firestore.collection('cases_time_series').where('date', '>', sevenDaysAgo)
    const timeSeriesData = await firestore
      .collection('cases_time_series')
      .orderBy('date', 'desc')
      .limit(100)
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return doc.data();
        });
      });
    return {
      ...timeSeriesData
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};
