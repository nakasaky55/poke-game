import React from "react";



export default function login(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12 custom-row">
          <form className="custom-form">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                required
                onChange={(e) => props.onChangeForm(e.target.value)}
              ></input>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                disabled="true"
              ></input>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              ></input>
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn custom-btn" onClick={() => props.onChangeLogin(true)}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 wall-section">

        </div>
      </div>
    </div>
  );
}
