import React from "react";
import ticketsImage from "./../img/tickets-image.png";

function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt="Two paper ticket stubs" />
    </React.Fragment>
  );
}

export default Header;