import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/posts", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>HOME PAGE WORKING!!!!</div>;
}
