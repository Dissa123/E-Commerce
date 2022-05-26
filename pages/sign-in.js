import { getProviders, signIn,getCsrfToken,getSession } from "next-auth/react"
import { Router, useRouter } from "next/router";
import { useState } from 'react';

export default function SignIn({ csrfToken ,providers }) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errMsg, seterrMsg] = useState("")
    const router=useRouter()

    const userSignIn=async (e)=>{
        e.preventDefault( );
        //console.log({email:email,password:password})
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
      {Object.values(providers).map((provider,id) => {
          if(provider.name==="Credentials"){
              return <div key={id}>

<form className=" p-5 ">
  <div className="form-group">
    <label >Email</label>
    <input type="text" className="form-control" required value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input  className="form-control" type="password" required value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  <h5 className="text-danger">{errMsg}</h5>
  <div className="col-12 text-center">
  <button className="col-4 btn-primary btn justify-content-center text-center my-3" type="" onClick={(e)=>{userSignIn(e)}}>Sign in with credentials</button>
  </div>
  
</form>
              </div>
          }
        return <div key={id}>
          <button  onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
})}

  <div className="col-12 text-center">
  <button className="col-4 btn-success btn justify-content-center text-center my-3" type="" onClick={(e)=>{router.push('/sign-up')}}>Sign up with credentials</button>
  </div>
 
    </>
  )
}

//server side
 export async function getServerSideProps(context) {
    const {req}=context;
    const session=await getSession({ req })
    if(session){
        return {
            redirect:{destination:'/'}
        }
    }
  const csrfToken = await getCsrfToken(context)
  const providers = await getProviders()
  
  return {
    props: {csrfToken, providers },
  }
} 