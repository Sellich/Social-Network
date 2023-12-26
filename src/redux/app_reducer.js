
import { authMeThunk } from "./auth_reducer";

const INITIALIZED_SUCCES = "social-network/app/INITIALIZED_SUCCES";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES: {
      return {
        ...state,
        initialized: true
      }
    }
    default: return state
  }
};


const initializedSucces = () => ({
  type: INITIALIZED_SUCCES
});


export let initialazedApp = () => (dispatch) => {
  let promise = dispatch(authMeThunk());

  promise.then(() => { dispatch(initializedSucces()) });
}

export default appReducer;
