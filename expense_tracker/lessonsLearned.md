how to use react-redux-firebase
https://dusty.phillips.codes/2018/08/25/react-redux-firebase-with-firestore-tutorial/

1)create react app
2)install firebase, redux, react-redux, react-redux-firebase, redux-firestore
3)add project on firebase.google.com
4)set up auth (with facebook)
    a)create new app in developers.facebook.com
    b)enter site url (localHost or github) as site url
    c)copy "App ID" and "App Secret" from facebook and paste into Firebase Auth config
    d)copyredirect URI from Firebase Config to Valid OAuth Redirect
5)save
6)setup firestore in test mode
7)gear-> Project overview -> add firebase to web app
8)copy config into file firebaseConfig.js
9)make src/redux/reducers.js 
    a)rootReducer = {firebase: firebaseReducer, firestore:fireStoreReducer}
10)make src/redux/store
    a)initialize firebase and firestore
    b)enhancers
    c)reduxDevTools setup
    d)compose enhancers
    e)create store
    f)export store
