import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  //console.log(session)
  if (session) {
    return (
      <>
      <div className="col-12 text-center">
      <h1 className="mt-5">Signed in as {session.user.email}</h1>
         <br />
        <button className="col-4 btn-danger btn justify-content-center text-center my-3" onClick={() => signOut()}>Sign out</button>
      </div>
      </>
    )
  }
  return (
    <>
    <div className="col-12 text-center">
      <h1 className="mt-5">Not signed in</h1> <br />
      <button className="col-4 btn-primary btn justify-content-center text-center my-3" onClick={() => signIn()}>Sign in</button>
      </div>
      </>
  )
}