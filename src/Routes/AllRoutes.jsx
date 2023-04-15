import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Play from './Play'
import LeaderBoard from './LeaderBoard'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/play'} element={<Play />}></Route>
      <Route path={'/leaderboard'} element={<LeaderBoard />}></Route>
    </Routes>
  )
}

export default AllRoutes
