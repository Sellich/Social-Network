import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profile_reducer";
import thunkMiddleWare from "redux-thunk"
import { dialogsReducer } from "./dialogs_reducer";
import { usersReducer } from "./users_reducer";
import authReducer from "./auth_reducer";
import appReducer from "./app_reducer";

let reducers = combineReducers({
   profile: profileReducer,
   dialogs: dialogsReducer,
   users: usersReducer,
   auth: authReducer,
   app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
   applyMiddleware(thunkMiddleWare)
));
window.store = store;
export default store;