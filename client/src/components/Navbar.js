import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/storeApi";

function NavBar() {
  const { loggedUser } = useContext(UserContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          BadBank
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/createAccount">
                Create Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deposit">
                Deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/withdraw">
                Withdraw
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alldata">
                AllData
              </Link>
            </li>
          </ul>
        </div>
        <h4 className="d-flex text-light">{loggedUser?.name}</h4>
      </nav>
    </>
  );
}

export default NavBar;
