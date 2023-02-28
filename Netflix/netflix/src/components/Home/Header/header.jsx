import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/logo.png"
import {ImSearch} from "react-icons/im";

const header = () => {
  return (
    <nav className="header">

    <img src={logo} alt="logo" />

    <div>
      <Link to={"/tvshows"}>TV shows</Link>
      <Link to={"/movies"}>Movies</Link>
      <Link to={"/recent"}>Recently Added</Link>
      <Link to={"/mylist"}>My List</Link>
    </div>

    <ImSearch />
    </nav>
  )
}

export default header