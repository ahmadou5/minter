import AuthPage from "../components/AuthPage";
import UploadForm from "../components/UploadForm";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, authenticate, logout,  } = useMoralis()

  const metamaskAuth = async () => {
    try {
      await authenticate({
        signingMessage: "auth to start minting"
        
      })
      
    } catch (error) {
      console.log("err :", error) 
    }
  }

  if(!isAuthenticated) {
    return(
      <AuthPage metamaskAuth={metamaskAuth}/>
    )
  }
  return (
    <div>
      <UploadForm logout={logout} />
    </div>
  )
}
