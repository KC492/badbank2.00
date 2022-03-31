import React from "react";
import UserContext from "../context/storeApi";
import Card from "./Card";
import axios from "axios";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [accountType, setAccountType] = React.useState("");
  const { setUsers } = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (!validate(accountType, "accountType")) return;
    try {
      const { data } = axios.get(
        `https://badbanknode.herokuapp.com/account/create/${name}/${email}/${password}/${accountType}`
      );
      setUsers([data]);
    } catch (error) {
      console.log(error);
    }
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
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
            <select
              className="custom-select mb-3"
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="">Account Type</option>
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
            </select>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleSubmit}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
