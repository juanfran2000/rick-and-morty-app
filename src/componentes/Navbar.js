import React from "react";

const Navbar = ({ brand }) => {
  //Hacemos un componente de nav para mayor orden y damos estilos con BOOTSTAP
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
