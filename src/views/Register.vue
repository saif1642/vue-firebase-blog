<template>
    <div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" :to="{ name : 'Login'}">Login</router-link>
            </p>
            <h2>Register to VueFiredBlog</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstname">
                    <user class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastname">
                    <user class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Username" v-model="username">
                    <user class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <email class="icon"/>
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                    <password class="icon"/>
                </div>
                <div v-show="error" class="error">{{ this.errorMsg }}</div>
            </div>
            <button @click.prevent="register">Sign Up</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";

import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";



export default {
    name : "Register",
    components: {
        email,
        password,
        user
    },
    data(){
        return {
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            error:null,
            errorMsg:""
        }
    },
    methods:{
        async register(){
            if(
                this.firstname !== ""||
                this.lastname !== ""||
                this.username !== ""||
                this.email !== ""||
                this.password !== ""
            ){
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth(); 
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                console.log(createUser);
                const result = await createUser;
                const database = db.collection('users').doc(result.user.uid);
                await database.set({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    username: this.username,
                    email: this.email,
                })
                this.$router.push({name:'Home'});
                return;
            }
            this.error = true;
            this.errorMsg = "Please fill out all the fields.";
            return;
        }
    }
}
</script>
<style lang="scss" scoped>
  .register{
      h2{
          max-width: 350px;
      }
  }
</style>