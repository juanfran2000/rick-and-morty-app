import React from "react";

const Pagination = ({ prev, next, onRetroceder, onAvanzar }) => {
  const handleretroceder = () => {
    onRetroceder();
  };

  const handleavanzar = () => {
    onAvanzar();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handleretroceder}>
              Retroceder
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleavanzar}>
              Avanzar
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
