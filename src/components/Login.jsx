import React from "react";

function Login() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
