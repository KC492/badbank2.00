import Card from "./Card";
import React from "react";
import UserContext from "../context/storeApi";
import axios from "axios";

function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const { setLoggedUser, balance, setBalance, loggedUser } =
    React.useContext(UserContext);

  function validate(num) {
    if (isNaN(parseFloat(num))) {
      setStatus("Warning: Please enter a number");
      return false;
    }
    return true;
  }

  async function handleWithdraw() {
    if (!validate(withdraw, "withdraw")) return;
    setBalance((prev) => Number(prev) - Number(withdraw));
    try {
      const { data } = await axios.get(
        `https://badbanknode.herokuapp.com/account/update/${loggedUser.email}/-${withdraw}`
      );
      // setUsers([data.value]);
      setLoggedUser(data.value);
    } catch (error) {}

    setShow(false);
  }

  function clearForm() {
    setWithdraw("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Account Balance: ${balance}
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Withdrawl Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Successful Transaction</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Clear
            </button>
          </>
        )
      }
    />
  );
}

export default Withdraw;
