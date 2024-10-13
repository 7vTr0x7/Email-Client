import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/slices/filterSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter.filter);

  const changeHandler = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <section>
      <div className="d-flex gap-4 fw-semibold pointer">
        <p>Filter By:</p>
        <p
          className={`${filter === "unread" && "bg-filter  rounded-4 px-3"}`}
          onClick={() => changeHandler("unread")}>
          Unread
        </p>
        <p
          className={`${filter === "read" && "bg-filter  rounded-4 px-3"}`}
          onClick={() => changeHandler("read")}>
          Read
        </p>
        <p
          className={`${filter === "favorites" && "bg-filter  rounded-4 px-3"}`}
          onClick={() => changeHandler("favorites")}>
          Favorites
        </p>
      </div>
    </section>
  );
};

export default Filters;
