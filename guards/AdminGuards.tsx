import React from 'react'

interface IProps {
  children:React.ReactNode
}

const AdminGuards = ({children}:IProps) => {
  console.log(' ::: admin guard ::: ')
  return (
    <div>{children}</div>
  )
}

export default AdminGuards