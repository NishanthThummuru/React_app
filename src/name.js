import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyClEH1wG_p4Bk7y8dl88UEi1OcSmd_7Yl4",
    authDomain: "pro-app-7adb5.firebaseapp.com",
    projectId: "pro-app-7adb5",
    storageBucket: "pro-app-7adb5.appspot.com",
    messagingSenderId: "840528707586",
    appId: "1:840528707586:web:759e54f6d5ecf02251671b",
    measurementId: "G-Q000JTLWD8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()


export  function UserAuth(){
const[user,setUser]=useState()
    useEffect(()=>{
   let a=  onAuthStateChanged(auth,user=>setUser(user))

   return a

    },[])
    return user
}


