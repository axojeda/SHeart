
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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


function App() {

  const [ user, setUser ] = useState(null)
  const [ loginInfo, setLoginInfo ] = useState({})
  const [ signinInfo, setSigninInfo] = useState({})

  const [posts, setPosts] = useState([])
  

  const handleOnChange = (event) => {
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }
  
  // //login fetch
  const HandleOnLogin = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    .then(response => {
      if(response.ok){
        response.json().then(userData => {
          //console.log(userData)
          // do not use localStorage for this. But in the interest of time ...
          localStorage.setItem('token', userData.token)
          setUser(userData.user)
        })
      }
      else if(response.status === 401){
        alert("Error: Invalid username or password! Please try again!")
      }
      else{
        alert(`Error: ${response.status} ${response.statusText}`)
      }
    })
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
       <Navigation user={user} />
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/Login' element={<Login user={user} setUser={setUser} setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>} />
            <Route path='/Signin' element={<Signin user={user} setUser={setUser} signinInfo={signinInfo} setLoginInfo={setLoginInfo} />} />
            <Route path='/Home' element={user ? <Home /> : <h1>Please Log In</h1>}/>
            <Route path='/Feed' element={user ? <Feed user={user} posts={posts} setPosts={setPosts}/> : <h1>Please Log In</h1>} />
            <Route path='/NewPost' element={user ? <NewPost user={user} posts={posts} setPosts={setPosts}/> : <h1>Please Log In</h1>} />
            <Route path='/MyProfile' element={user ? <MyProfile user={user} setUser={setUser} /> : <h1>Please Log In</h1>} />
            <Route path='/MyPosts' element={user ? <MyPosts user={user} posts={posts} setPosts={setPosts}/> : <h1>Please Log In</h1>} />
            <Route path='/EditPost' element={user ? <EditPost /> : <h1>Please Log In</h1>}/>
         </Routes> 
   </Router>
    </div>
   )
  }


export default App;
