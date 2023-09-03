import React from "react";

function Foot() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer>&copy; {year} Vikolux Bygg AB | All rights reserved.</footer>
    </>
  );
}

export default Foot;
