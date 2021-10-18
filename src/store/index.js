import Vue from 'vue';
import Vuex from 'vuex';
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sampleBlogCards: [
            { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1,2021" },
            { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 2,2021" },
            { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 3,2021" },
            { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 4,2021" }
        ],
        editPost: null,
        user: null,
        profileAdmin: null,
        profileEmail: null,
        profileFirstName: null,
        profileLastName: null,
        profileUsername: null,
        profileId: null,
        profileInitials: null,
    },
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
            console.log(state.editPost);
        }
    },
    actions: {
        async getCurrentUser({ commit }){
            const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
            const dbResults = await dataBase.get();
            commit("setProfileInfo", dbResults);
            commit("setProfileInitials");
            const token = await user.getIdTokenResult();
            const admin = await token.claims.admin;
            commit("setProfileAdmin", admin);
        }
    },
    modules: {}
})