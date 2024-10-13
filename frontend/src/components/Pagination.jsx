import React from "react";

const Pagination = ({
  page,
  previousPageHandler,
  nextPageHandler,
  emailsLength,
}) => {
  return (
    <div className="d-flex my-4 gap-3 justify-content-center align-content-center">
      <p
        className="bg-email  fw-semibold px-3 py-1 rounded-2"
        onClick={previousPageHandler}>
        Previous
      </p>
      <p className="bg-email fw-semibold px-3 py-1 rounded-2">
        {page} / {Math.round(emailsLength / 6)}
      </p>
      <p
        className="bg-email fw-semibold px-3 py-1 rounded-2"
        onClick={nextPageHandler}>
        Next
      </p>
    </div>
  );
};

export default Pagination;
