import React from "react";

export default function navbar(props) {
  console.log(props)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="https://fb.com/anhkhoa8436" target="_blank"> 
            Hello, {props.playerName}
          </a>
          <button className="btn btn-danger" onClick={() => props.onSignOut(false)}>Sign out</button>
        </div>
      </nav>
    </div>
  );
}
