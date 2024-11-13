import { Navigate, Route, Routes } from "react-router-dom"
import {Toaster} from "react-hot-toast";

import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import LikesPage from "./pages/LikesPage"
import ExplorePage from "./pages/ExplorePage"
import SignUpPage from "./pages/SignUpPage"

import Sidebar from "./components/Sidebar"
import { useAuthContext } from "./context/AuthContext";


function App() {
  const {authUser, loading} = useAuthContext();
  console.log("Authenticated User:",authUser);
  if(loading) return null;
  
  return (
    
    <div className="flex text-white">
      <Sidebar/>
      <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={!authUser ?<LoginPage/> : <Navigate to={"/"}/>}/>
          <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to={"/"}/>}/>
          <Route path="/explore" element={authUser ? <ExplorePage/> : <Navigate to={"/"}/>}  />
          <Route path="/likes" element={authUser ? <LikesPage/> : <Navigate to={"/"}/>}/>
        </Routes>
        <Toaster/>
      </div>
    </div>
  )
}

export default App
