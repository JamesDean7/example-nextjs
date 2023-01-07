import React from 'react'

interface IProps {
    children:React.ReactNode
}

const AdminLayout:React.FC<IProps> = ({ children }) => {
  return (
    <div>
        <h3>Admin Layout</h3>
        { children }
    </div>
  )
}

export default AdminLayout