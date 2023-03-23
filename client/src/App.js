
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation';
import Home from './pages/home/Home';
import Landing from './pages/landing/Landing';
import Feed from './pages/feed/Feed';
import { useState, useEffect } from 'react'
import Login from './pages/login/Login'
import MyProfile from './pages/myprofile/MyProfile';
import Search from './pages/search/Search';

function App() {

  const [ user, setUser ] = useState(null)
  const [ loginInfo, setLoginInfo ] = useState({})

  const handleOnChange = (event) => {
    setLoginInfo({...loginInfo, [event.target.type]: event.target.value})
  }


  //login fetch
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
          console.log(userData)
          setUser(userData)
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
    fetch("http://localhost:3000/me")
    .then(response => {
      if(response.ok){
        response.json().then(userData => setUser(userData))
      }
      else{
        console.log(response.status)
      }
    })
  }, [])
  

  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route path='/Landing' element={<Landing />}/>
            <Route path='/Home' element={user ? <Home /> : <h1>Please Log In</h1>}/>
            <Route path='/Feed' element={user ? <Feed /> : <h1>Please Log In</h1>} />
            <Route path='/Search' element={user ? <Search /> : <h1>Please Log In</h1>} />
            <Route path='/MyProfile' element={user ? <MyProfile /> : <h1>Please Log In</h1>} />
            <Route path='/Login' element={<Login HandleOnLogin={HandleOnLogin} handleOnChange={handleOnChange} />} />
          </Routes>

      </Router>
     
    </div>
  );
}

export default App;
