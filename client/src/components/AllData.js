import UserContext from "../context/storeApi";
import React from "react";

function AllData() {
  const ctx = React.useContext(UserContext);
  const userAccounts = ctx.users;

  return (
    <div>
      <table className="ui celled table">
        <thead bgcolor="success">
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Password</th>
            <th>Balance</th>
            <th>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {userAccounts.map(function (user, i) {
            return (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
                <td>{user.accountType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllData;
