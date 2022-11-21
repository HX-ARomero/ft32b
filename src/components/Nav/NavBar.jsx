import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"

export default function NavBar(props) {
    return (
      <div className={styles.container} >
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <SearchBar onSearch={props.onSearch} />
      </div>
    );
  }