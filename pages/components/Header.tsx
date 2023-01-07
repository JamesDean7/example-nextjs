import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <h3>Header</h3>
        <div>
          <Link href="post">
            <a>Post ( CSR )</a>
          </Link>
          {` / `}
          <Link href="todos">
            <a>Todos ( SSR )</a>
          </Link>
          {` / `}
          <Link href="user">
            <a>User ( SPG )</a>
          </Link>
        </div>
        <div style={{margin:"10px 0"}}>
          <span style={{margin:"0 10px 0 0", padding:"5px 10px", background:"black", color:"white"}}>With BackEnd</span>
          <Link href="isr">
            <a>ISR </a>
          </Link>
          {` / `}
          <Link href="staticgenerate">
            <a>Static Generate</a>
          </Link>
        </div>
    </div>
  )
}

export default Header