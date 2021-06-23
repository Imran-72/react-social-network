import React from "react";
import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "fc78ffee-d447-4b9a-b481-18f5fb9e7074"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"

})
export const userApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}, {})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {})
    },
    getUserProfile(userId) {
        return  profileApi.getUserProfile(userId)
    }

}
export const profileApi = {

    getUserProfile(userId) {
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }

}


export const authMe = {
    me() {
      return instance.get(`auth/me`, {})
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


