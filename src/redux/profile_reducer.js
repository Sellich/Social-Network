import { profileAPI, usersAPI } from "../API/API"

const ADD_POST = "social-network/profile/ADD_POST"
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE"
const UPDATE_AVATAR = "social-network/profile/UPDATE_AVATAR"
const SET_USER_STATUS = "social-network/profile/SET_USER_STATUS"
const UPDATE_STATUS = "social-network/profile/UPDATE_STATUS"
const SET_FRIENDS = "social-network/profile/SET_FRIENDS"

let initialState = {
   postsData: [{ id: '1', postText: '222' }, { id: '2', postText: "333" }],
   profile: null,
   status: null,
   friends: [],
}


const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let postText = action.post.postText
         const uniqueId = () => Math.floor(Math.random() * Date.now());
         return {
            ...state,
            postsData: [...state.postsData, { id: uniqueId(), postText: postText }]
         }

      }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      case UPDATE_AVATAR:
         return {
            ...state,
            profile: { ...state.profile, photos: action.avatar }
         }
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
         }
      case UPDATE_STATUS:
         return {
            ...state,
            status: action.status
         }
      case SET_FRIENDS: {
         return {
            ...state,
            friends: action.friends
         }
      }

      default:
         return state
   }
}

export const addPost = (post) => ({ type: ADD_POST, post })

const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })

const updateAvatar = avatar => ({ type: UPDATE_AVATAR, avatar })

const setUserStatus = status => ({ type: SET_USER_STATUS, status })

const updateStatus = status => ({ type: UPDATE_STATUS, status })

const setFriends = friends => ({ type: SET_FRIENDS, friends })

export const userProfileThunk = (userId) => async (dispatch) => {
   let response = await usersAPI.userProfile(userId)

   dispatch(setUserProfile(response.data))

}

export const userStatus = (userId) => async (dispatch) => {
   let response = await usersAPI.userStatus(userId)
   if (response.status === 200) {
      dispatch(setUserStatus(response.data))
   }
}

export const updateAvatarThunk = (avatar) => async (dispatch) => {
   let response = await profileAPI.updateAvatar(avatar)
   if (response.data.resultCode === 0) {
      dispatch(updateAvatar(response.data.data.photos))
   }
}

export const updateStatusThunk = (status) => async (dispatch) => {

   let response = await profileAPI.updateStatus(status)

   if (response.data.resultCode === 0) {

      dispatch(updateStatus(status))
   }
}

export const updateProfileThunk = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId
   let response = await profileAPI.updateProfile(profile)
   if (response.data.resultCode === 0) {

      dispatch(userProfileThunk(userId))
   }
}

export const setFriendsThunk = () => async (dispatch) => {

   let response = await profileAPI.getFriends()

   dispatch(setFriends(response.items))
}

export default profileReducer;