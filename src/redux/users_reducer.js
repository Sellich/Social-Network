
import { usersAPI } from "../API/API";

const SET_TOTAL_USERS_COUNT = "social-network/users/SET_TOTAL_USERS_COUNT"
const SET_USERS = "social-network/users/SET_USERS"
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE"
const FOLLOW_USER = "social-network/users/FOLLOW_USER"
const UNFOLLOW_USER = "social-network/users/UNFOLLOW_USER"
const SET_FOLLOWING_IN_PROGRESS = "social-network/users/SET_FOLLOWING_IN_PROGRESS"
const SET_FORM_VALUE = "social-network/users/SET_FORM_VALUE"

let initialState = {
   users: [],
   totalUsersCount: null,
   currentPage: 1,
   pageSize: 10,
   followingInProgress: [],
   formValue: '',
}

export const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_TOTAL_USERS_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalUsersCount
         }
      case SET_USERS:
         return {
            ...state,
            users: action.users
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }
      case FOLLOW_USER:
         return {
            ...state,
            users: state.users.map(u => { if (u['id'] === action.userId) { return { ...u, ...{ followed: true } } } return u })
         }
      case UNFOLLOW_USER:
         return {
            ...state,
            users: state.users.map(u => { if (u['id'] === action.userId) { return { ...u, ...{ followed: false } } } return u })
         }
      case SET_FOLLOWING_IN_PROGRESS:
         return {
            ...state,
            followingInProgress: action.followingInProgress ?
               [...state.followingInProgress, action.userId] :
               state.followingInProgress.filter(id => id !== action.userId)
         }
      case SET_FORM_VALUE:
         return {
            ...state,
            formValue: action.name
         }

      default: return state
   }

}



const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

const setUsers = users => ({ type: SET_USERS, users })

export const follow = userId => ({ type: FOLLOW_USER, userId })

export const setFormValue = name => ({ type: SET_FORM_VALUE, name })

export const unFollow = userId => ({ type: UNFOLLOW_USER, userId })

export const setFollowingInProgress = (followingInProgress, userId) => ({ type: SET_FOLLOWING_IN_PROGRESS, followingInProgress, userId })

export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })

export const getUsers = (currentPage, pageSize, name) => async (dispatch) => {

   let response = await usersAPI.getUsers(currentPage, pageSize, name);
   if (response.items.length >= 3) {
      dispatch(setFormValue(name))
      dispatch(setTotalUsersCount(response.totalCount))
      dispatch(setUsers(response.items))
   }
}

export const followUser = (userId) => async (dispatch) => {

   let responce = await usersAPI.follow(userId)

   //dispatch(setFollowingInProgress(true, userId))
   if (responce.data.resultCode === 0) {
      dispatch(follow(userId))

   }
   // dispatch(setFollowingInProgress(false, userId))
}

export const unFollowUser = (userId) => async (dispatch) => {

   let responce = await usersAPI.unFollow(userId)

   // dispatch(setFollowingInProgress(true, userId))
   if (responce.data.resultCode === 0) {
      dispatch(unFollow(userId))

   }

   // dispatch(setFollowingInProgress(false, userId))
}
