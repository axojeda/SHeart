
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Feed from './pages/feed/Feed';
import { useState, useEffect } from 'react'
import Login from './pages/login/Login'
import MyProfile from './pages/myprofile/MyProfile';
import NewPost from './pages/newpost/NewPost';
import Signin from './pages/signin/Signin'
import MyPosts from './pages/myposts/MyPosts';
import EditPost from './components/editpost/EditPost';
import Disclamer from './components/disclamer/Disclamer'


function App() {

  const [ user, setUser ] = useState(null)
  const [ loginInfo, setLoginInfo ] = useState({})
  const [ signinInfo, setSigninInfo] = useState({})
  const [posts, setPosts] = useState([])

  console.log(posts)


  const Layout = () => {
  return (
    <>
    <Navigation user={user}/>
    <Outlet />
    </>
  )
  }


  //stay logeed in
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch("http://localhost:3000/me", { headers: { 'Authorization': token }})
      .then(response => {
        if(response.ok){
          response.json().then(userData => {
            setUser(userData.user)
          })
        }
        else{
          console.log(response.status)
        }
      })
    } else {
      console.log("No token found, try logging in!")
    }

  }, [])

    

   return (
   <div className="App">
     <Router>
       {user ? <Navigation user={user}/> : null}
          <Routes>
            <Route path='/Home' element={user ? <Home /> : <h1>Please Log In</h1>}/>
            <Route path='/Feed' element={user ? <Feed user={user} posts={posts} setPosts={setPosts}/> : <h1>Please Log In</h1>} />
            <Route path='/NewPost' element={user ? <NewPost user={user} posts={posts} setPosts={setPosts}/> : <h1>Please Log In</h1>} />
            <Route path='/MyProfile' element={user ? <MyProfile user={user} setUser={setUser} /> : <h1>Please Log In</h1>} />
            <Route path='/MyPosts' element={user ? <MyPosts user={user} posts={posts} setPosts={setPosts}/> : <h1>Please Log In</h1>} />
            <Route path='/EditPost' element={user ? <EditPost /> : <h1>Please Log In</h1>}/>
            <Route exact path='/Disclamer' element={<Disclamer />}/>
            <Route exact path='/' element={<Landing />}/>
            <Route path='/Signin' element={<Signin user={user} setUser={setUser} signinInfo={signinInfo} setLoginInfo={setLoginInfo} setSigninInfo={setSigninInfo}/>} />
            <Route path='/Login' element={<Login user={user} setUser={setUser} setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>} />
         </Routes> 
   </Router>
    </div>
   )
  }


export default App;
