import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/Context";
function Setting() {
  const user = useContext(UserContext);
  return (
    <div className="setting-container">
      <label for="text-color">Text color ::</label>
      <input
        type="color"
        id="text-color"
        name="text-color"
        value={user.textColor}
        onChange={(e) => user.setTextColor(e.target.value)}
      ></input>
      <label for="border-color">Border color ::</label>
      <input
        type="color"
        id="border-color"
        name="border-color"
        value={user.borderColor}
        onChange={(e) => user.setBorderColor(e.target.value)}
      ></input>
    </div>
  );
}

export default Setting;
