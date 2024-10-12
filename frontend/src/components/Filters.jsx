import React from "react";

const Filters = () => {
  return (
    <section>
      <div className="d-flex gap-4 fw-semibold">
        <p>Filter By:</p>
        <p>Unread</p>
        <p className="bg-filter rounded-4 px-3 ">Read</p>
        <p>Favorites</p>
      </div>
    </section>
  );
};

export default Filters;
