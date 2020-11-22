import React, { useEffect } from "react";
// import axios from "./Axios";
import axios from 'axios';
axios.defaults.withCredentials = true

const CookieTesting = () => {
  useEffect(() => {
  }, []);

  const handelLogin = () => {
    console.log("hello my friend");
    const config = {
      method: "post",
      url: "/token/auth",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json",
      },
      data: { username: "test", password: "test" },
    };
    axios(config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>This is cookie testing....</p>
      <button onClick={() => handelLogin()}>Login</button>
    </div>
  );
};

export default CookieTesting;
