import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from '../firebaseConfig.js'
import { initialState, rootReducer } from './reducers'

//initialize firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true})

//redux Enhancers
const enhancers = [
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
        userProfile: 'users',
        useFirestoreForProfile: true,
    })
]

//reduxDevTools
const reduxDevToolsExtension = window.reduxDevToolsExtension
if (
    ProcessingInstruction.env.NODE_ENV === 'development' &&
    typeof reduxDevToolsExtension === "function"
) {
    enhancers.push(reduxDevToolsExtension())
}

//compose enhancer
const composedEnhancers = compose(
    ...enhancers
)

//create Store
const store = createStore(rootReducer, initialState, composedEnhancers)

export default store