import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "156a73cd-90ed-4d69-8274-cf912f1b9d4d" },
});

export const usersAPI = {
  getUsers(currentPage, pageSize, name) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}&=${name}`).then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  userProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  userStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => response)
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  },
  logIn(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data)
  }
};

export const profileAPI = {
  updateAvatar(avatar) {
    let formData = new FormData();
    formData.append('image', avatar)
    return instance.put(`profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status }).then(response => response)
  },
  updateProfile(profile) {
    return instance.put(`profile`, profile).then(response => response).catch(error => console.log(error))
  },
  getFriends(currentPage = 1, pageSize = 9, friend = true) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`).then(response => response.data)
  }
};
