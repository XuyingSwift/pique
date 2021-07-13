import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDxFRe7pRpG0AVdvYGtYUDBmtzzP45FOmY",
    authDomain: "dhs-dashboard-eb9c9.firebaseapp.com",
    projectId: "dhs-dashboard-eb9c9",
    storageBucket: "dhs-dashboard-eb9c9.appspot.com",
    messagingSenderId: "840691225155",
    appId: "1:840691225155:web:fe42497de360aa6860faf6",
    measurementId: "G-LDQSG872F9"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const createPorjectJson = async (Key, ObjectsToAdd) => {
  const Ref = firestore.collection(Key);
  const batch = firestore.batch();
  console.log("adding", ObjectsToAdd)
  ObjectsToAdd.forEach(object => {
    const newDocRef = Ref.doc();
    batch.set(newDocRef, object)
  })

  return await batch.commit();
}

// upload raw json to firebase
export const uploadAFile = (key, name, file) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  }

  firestore.collection(key).add(file)
  .then((docRef) => { 
    console.log("uploaed with id", docRef.id)
    const id = docRef.id
   fetch(`http://localhost:8080//postPiqueParsedModel?id=${id}`, requestOptions)
            .then(response => response.json())
            .catch((e) => {console.error("error from fetch data", e)})
  })
  .catch((error) => {console.error("Error addind document", error)});
}

export const getParsedModel = (name) => {
  var docRef = firestore.collection("ParsedProjects").doc(name);

  docRef.get().then((doc) => {
    if (doc.exists) {
       console.log(JSON.stringify(doc.data()))
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
});
}
export const convertProjectsSnapshotToMap = (projects) => {
  const transformedProjects = projects.docs.map((doc) => {
    const {projectName, json} = doc.data();
    return {
      id: doc.id,
      projectName,
      json
    }
  })
  return transformedProjects.reduce((accumulator, project) => {
    accumulator[project.projectName.toUpperCase()] = project
    return accumulator;
  }, {});
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// the authorization server prompts the user to select a user account.
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;