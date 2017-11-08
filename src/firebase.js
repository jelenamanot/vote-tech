import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAd5mHUjHnSrcHing08z9isrcOIioP-MUA',
	authDomain: 'vote-tech.firebaseapp.com',
	databaseURL: 'https://vote-tech.firebaseio.com',
	projectId: 'vote-tech',
	storageBucket: 'vote-tech.appspot.com',
	messagingSenderId: '611864903625'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();