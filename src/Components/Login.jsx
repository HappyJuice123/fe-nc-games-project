import { useEffect, useState } from "react";
import { getUsers } from "../api";
import { loggedInUserAvatar } from "../utils";

export const Login = ({ login, setLogin }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      const usersData = data.users;
      setUsers(usersData);
    });
  }, []);

  const signedIn = () => {
    setLogin(null);
    if (!login) {
      setLogin("grumpy19");
    }
  };

  return (
    <section className="login">
      {login ? (
        <p className="login-text">
          {login}
          <img
            src={loggedInUserAvatar(login, users)}
            alt={login}
            className="avatar-img"
          />
        </p>
      ) : (
        <p className="login-text">Not signed in</p>
      )}
      <section className="login-button">
        <button type="button" onClick={signedIn}>
          {login ? "Sign Out" : "Log in"}
        </button>
      </section>
    </section>
  );
};
