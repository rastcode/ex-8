import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";
import { useContext } from "react";
function Cards({ results }) {
  const user = useContext(UserContext);
  const style = {
    color: user.textColor,
    border: `1px solid ${user.borderColor}`,
  };
  console.log( "color :"+user.textColor);
  return (
    <div className="cards">
      {results
        ? results.map((item) => (
            <div key={item.id} className="img-container">
              <Link to={`/users/` + item.id}>
                <img src={item.image} alt={item.name} className="img" />
                <h3 style={{ color: user.textColor }}>{item.name}</h3>
              </Link>
            </div>
          ))
        : "not fuond"}
    </div>
  );
}

export default Cards;
