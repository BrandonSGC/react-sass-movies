import React from 'react'
import { UserContext } from './UserContext'

export const UserProvider = () => {
  
  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
}
