import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Auth from './components/auth/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Newsfeed from './components/NewFeed';
import Newsfeed from './components/newsfeed/NewFeed';
import NotificationPage from './components/notification/NotificationsPage';
import Profile from './components/profile/profile';
import EditProfile from './components/profile/EditProfile';
import DeleteProfile from './components/profile/deleteAccount';
import Posts from './components/newsfeed/posts';
import Post from './components/newsfeed/post';
function App() {

  return (
    <Router>
      <Routes path>
        <Route path='/' element = {<Auth />}></Route>
        <Route path='/api/home' element = { <Newsfeed /> }></Route>
        <Route path='/api/notifications' element = { <NotificationPage /> }></Route>
        <Route path='/api/profile' element = { <Profile /> }></Route>
        <Route path='/api/profile/edit' element = { <EditProfile /> }></Route>
        <Route path='/api/profile/delete' element = { <DeleteProfile /> }></Route>
        <Route path='/api/home/:id' element = { <Post /> }></Route>


        {/* <Route path='/api/home' element = { <MainApp /> }></Route> */}
      </Routes>
    </Router>
  )
}

export default App
