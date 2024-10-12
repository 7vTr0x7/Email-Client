import React from "react";
import { firstChar, getDate } from "../utils/constants";

const EmailCard = ({ email, isOpen }) => {
  const char = firstChar(email);

  const time = getDate(email);

  return (
    <>
      <div>
        <p className="m-0 fw-semibold px-3 py-2  bg-accent rounded-circle text-white">
          {char}
        </p>
      </div>
      <div>
        <p className="m-0">
          From:
          <span className="fw-semibold"> {email.from.name}</span>
          <span className="fw-semibold"> {`<${email.from.email}>`}</span>
        </p>
        <p className="m-0">
          Subject:
          <span className="fw-semibold"> {email.subject}</span>
        </p>
        <p className="m-0">
          {isOpen
            ? `${email.short_description.slice(0, 50)}...`
            : email.short_description}
        </p>
        <p className="mb-0 mt-1 small">{time}</p>
      </div>
    </>
  );
};

export default EmailCard;
