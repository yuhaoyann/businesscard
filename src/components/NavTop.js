import { Fragment } from "react";

export default function NavTop(props) {
  return (
    <Fragment>
      <button onClick={() => props.onClick("MainPage")}>Main Page</button>
      <button onClick={() => props.onClick("MyCards")}>My Cards</button>
      <button onClick={() => props.onClick("SavedCards")}>Saved Cards</button>
      <button onClick={() => props.onClick("")}>New Cards</button>
      <button onClick={() => props.onClick("")}>Template</button>
      <button onClick={() => props.onClick("Register")}>Register</button>
      <button onClick={() => props.onClick("Login")}>Login</button>
    </Fragment>
  )
}
