import Card from "./Card";
import React from "react";
import UserContext from "../context/storeApi";
import axios from "axios";

function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setLoggedUser, setBalance } = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  async function handleAuthenticate() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    try {
      const { data } = await axios.get(
        `https://badbanknode.herokuapp.com/account/login/${email}/${password}`
      );
      if (typeof data === "string") {
        alert("Password is wrong");
        return;
      }
      setLoggedUser(data);
      setBalance(data?.balance);
      setShow(false);
      return;
    } catch (error) {
      alert("Password is wrong");
    }
  }

  function clearForm() {
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Log-In"
      status={status}
      body={
        show ? (
          <>
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleAuthenticate}
            >
              Log-In
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Welcome!
            </button>
          </>
        )
      }
    />
  );
}

export default Login;
