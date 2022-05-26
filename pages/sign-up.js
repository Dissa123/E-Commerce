import { Router, useRouter } from "next/router";
import { getProviders, signIn,getCsrfToken,getSession } from "next-auth/react"
import { useState } from 'react';
import axios from "axios";

export default function SignUp({ csrfToken ,providers }) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confpassword, setconfpassword] = useState("")
    const [errMsg, seterrMsg] = useState("")
    const router=useRouter()

    const userSignUp=async (e)=>{
        e.preventDefault( );
        if(password != confpassword){
            seterrMsg('password and confirm password does not match' )
            return null
          }
        const res=await axios.post('http://localhost:9000/.netlify/functions/sign-up',{email:email,password:password})
        console.log(res)
        if(res.data.message != 'You have successfully created a new account!'){
          seterrMsg(res.data.message )
          return null
        }
        const options={redirect:false,email,password};
        const result = await signIn("credentials",options)
        //console.log(result)
        if(result?.error){
          seterrMsg(result.error)
          return
        }
        return router.push("/")
        
    }
    
  return (
    <> 
  <form className=" p-5 ">
  <div className="form-group">
    <label >Email</label>
    <input type="text" className="form-control" required value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input  className="form-control" type="password" required value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label >Confirm Password</label>
    <input  className="form-control" type="password" required value={confpassword} onChange={(e)=>{setconfpassword(e.target.value)}}/>
  </div>
  <h5 className="text-danger">{errMsg}</h5>
  <div className="col-12 text-center">
  <button className="col-4 btn-primary btn justify-content-center text-center my-3" type="" onClick={(e)=>{userSignUp(e)}}>Sign up with credentials</button>
  </div>
  
</form>
 
    </>
  )
}
