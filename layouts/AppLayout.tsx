import React from 'react'

interface IProps {
    children:React.ReactNode
}

const AppLayout:React.FC<IProps> = ({ children }) => {
  return (
    <div>
        <h3>App Layout</h3>
        { children }
    </div>
  )
}

export default AppLayout