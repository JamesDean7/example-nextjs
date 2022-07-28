import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <h3>Header</h3>
        <div>
            <Link href="post">
            <a>Post</a>
            </Link>
            {` / `}
            <Link href="todos">
            <a>Todos</a>
            </Link>
        </div>
    </div>
  )
}

export default Header