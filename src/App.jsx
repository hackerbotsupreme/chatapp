import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectRoute from './components/auth/ProtectRoute'
import LayoutLoader from './components/layout/Loaders'

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Groups = lazy(() => import("./pages/Groups"))
const NotFound = lazy(() => import("./pages/Notfound"))
const Adminlogin = lazy(() => import('./pages/admin/Adminlogin'))
const DashBoard = lazy(() => import('./pages/admin/DashBoard'))
const ChatManagement = lazy(() => import('./pages/admin/ChatManagement'))
const UserManagement = lazy(() => import('./pages/admin/UserManagement'))
const MessageManagement = lazy(() => import('./pages/admin/MessageManagement'))
const GroupManagement = lazy(() => import('./pages/admin/GroupManagement'))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />} >
        <Routes>
          <Route element={<ProtectRoute user={user} />} >
            <Route path='/' element={<Home />} ></Route>
            <Route path='/Chat/:chatId' element={<Chat />} />
            <Route path='/Groups' element={<Groups />} />
          </Route>
          <Route path='/Login' element={
            <ProtectRoute user={!user} redirect='/'  >
              <Login />
            </ProtectRoute>
          } />
          <Route path='/admin' element={<Adminlogin />} />
          <Route path='/admin/dashboard' element={<DashBoard />} />
          <Route path='/admin/chat-management' element={<ChatManagement />} />
          <Route path='/admin/user-management' element={<UserManagement />} />
          <Route path='/admin/messages' element={<MessageManagement />} />
          <Route path='*' element={<NotFound />} ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App