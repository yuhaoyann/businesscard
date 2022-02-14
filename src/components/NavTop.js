import { Fragment } from "react";
import { useEffect, useState } from "react";
export default function NavTop({currentUser,onClick,setCurrentUser}) {
  // const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   let user = localStorage.getItem("user");
  //   setCurrentUser(user);
  // }, []);
  console.log("curret",currentUser)
  const logout = function(){
    localStorage.removeItem('user')
    setCurrentUser(null)
  }
  return (
    <Fragment>
      {currentUser !== null ? (
        <>
          {" "}
          {/* < align=right>John's Home Page</P> */}
           <p><b>Welcome {currentUser.first_name}!</b></p>
          <div className={"button-container"}>
          <button onClick={() => onClick("MainPage")}>Main Page</button>
          <button onClick={() => onClick("MyCards")}>My Cards</button>
          <button onClick={() => onClick("SavedCards")}>
            Saved Cards
          </button>
          <button onClick={() => onClick("")}>New Cards</button>
          <button onClick={() => onClick("")}>Template</button>
          <button onClick={logout}>Logout</button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className={"button-container"}>
          <button onClick={() => onClick("MainPage")}>Main Page</button>
          <button onClick={() => onClick("Register")}>Register</button>
          <button onClick={() => onClick("Login")}>Login</button>
          </div>
        </>
      )}
    </Fragment>
  );
}

  
