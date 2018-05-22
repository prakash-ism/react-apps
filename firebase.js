import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyAbzHF1iR02XXoAXDWLXaWy2E8YdJW64GQ",
   authDomain: "goalcoach-7c508.firebaseapp.com",
   databaseURL: "https://goalcoach-7c508.firebaseio.com",
   projectId: "goalcoach-7c508",
   storageBucket: "goalcoach-7c508.appspot.com",
   messagingSenderId: "904225287827"
 };

 export const firebaseApp = firebase.initializeApp(config);
 export const goalRef = firebase.database().ref('goals');
 export const completeGoalRef = firebase.database().ref('completedGoals');
