import { useEffect } from "react";
import { store } from "./store";
import { useState } from "react";
function User() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const userState = store.getState();
    console.log("userState: ", userState);
    if (userState) {
      const { firstName, lastName } = userState;
      setUserName(`${firstName} ${lastName}`);
    }
  }, []);
  return (
    <>
      <p>User name: {userName}</p>
    </>
  );
}

export default User;
