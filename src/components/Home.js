import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Home Page</h1>
    <ul>
    <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/HeadTail" className="link">
              Haed  Tail
            </Link>
          </li>
    </ul>
    </>
  )
}

export default Home
