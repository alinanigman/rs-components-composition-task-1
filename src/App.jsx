import { useEffect } from "react";
import "./App.css";
import { store } from "./store";
import User from "./User";
const getUserFromServer = () => ({
  id: "qwe27386",
  firstName: "John",
  lastName: "Doe",
  age: 21,
  email: "johndoe@test.com",
  phone: "+77771234455",
});
const getAnotherUserFromServer = () => ({
  id: "qwe27386",
  firstName: "Alice",
  lastName: "Brown",
  age: 23,
  email: "alicebrown@test.com",
  phone: "+77774443211",
});
function App() {
  useEffect(() => {
    const user = getUserFromServer();
    store.dispatch({ type: "SET_USER_DATA", payload: user });
  }, []);
  return (
    <>
      <h1>App</h1>
      <User />
    </>
  );
}

export default App;
