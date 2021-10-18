import { useEffect, useState } from 'react'
 import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut ,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword,GithubAuthProvider } from "firebase/auth";
import initializefirebase from '../component/firebaseinitialize/initialize';
 
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();
initializefirebase()
const useFirebase = () => {
const [user,setUser]=useState('')
const [error,setError]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [userName,setUserName]=useState('')
// all input event handler

const handleUserEmail=(e)=>{
setEmail(e.target.value)
}
const handelUserPassword=(e)=>{
    setPassword(e.target.value)
}
const handelUserName=(e)=>{
    setUserName(e.target.value)
}




const auth=getAuth()
const signInUsingGoolge=()=>{
   return signInWithPopup(auth,googleProvider)
   
}

const signInUsingGithub =()=>{
   return signInWithPopup(auth,githubProvider)
    
}

 useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
        
    })
 },[])


 const createNewUser=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user);
        setError('')
    })
    .catch(error=>{
        setError(error.code)
    })
 }

// const setNewUserName=()=>{
//     updateProfile(auth.currentUser, {
//         displayName:{userName}
//       }).then(() => {
       
//       })
//       .catch(error=>{
//           setError(error.code)
//       })

// }


const login=()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setError('')
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    setError(error.code);
  
  })
}




const logOut=()=>{
        signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      setError(error.code)
    });
}





    return {
        signInUsingGoolge,
        signInUsingGithub,
        user,
        error,
        logOut,
        handelUserPassword,
        handleUserEmail,
        createNewUser,
        handelUserName,
        userName,
        login
    }
};

export default useFirebase;