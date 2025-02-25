import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice"

export const store = configureStore({
    reducer:{
        counter: counterSlice
    }
})

/* 
Step 1 :- Create store and then import {configureStore} in store.js

Step 2 :- import these 2 statements inside main.jsx
-> import {Provider} from "react-redux"
-> import { store } from './redux/store.js'

Step 3 :- Wrap <App/> inside <Provider></Provider>

Step 4 :- Now make a slice  

Step 5 :- Add slice reducers to the store
*/