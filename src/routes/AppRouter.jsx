import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Home, Movie } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/movies' element={<Home />}/>
      <Route path='/movies/:id' element={<Movie />}/>
      <Route path='/*' element={<Movie />}/>
    </Routes>
  )
}

