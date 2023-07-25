import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UsersList() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/ ${userId ? userId : 1}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, [userId]);

  return (
    <div>
      <h1> Details User :{userId}</h1>
      <img src={user.image} alt="" />
      <div>UsersList :{user.name}</div>
      <div>UsersList :{user.gender}</div>
      <div>UsersList :{user.status}</div>
    </div>
  );
}

export default UsersList;
