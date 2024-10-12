import React, { useEffect } from "react";
import { firstChar, getDate } from "../utils/constants";
import { useState } from "react";
import parse from "html-react-parser";

const EmailBody = ({ email }) => {
  const [emailData, setEmailData] = useState(null);

  const char = firstChar(email);

  const time = getDate(email);

  const fetchEmail = async () => {
    try {
      const res = await fetch(
        `https://flipkart-email-mock.vercel.app/?id=${email?.id}`
      );

      const data = await res.json();
      setEmailData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmail();
  }, [email?.id]);

  return (
    <>
      <div className="d-flex gap-4 py-3 px-2">
        <div>
          <p className="m-0 fs-3 px-3 py-1  bg-accent rounded-circle text-white">
            {char}
          </p>
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0 fs-3 fw-semibold ">{email?.subject}</p>
            <p className="m-0 small border-0 px-3 py-1 bg-accent rounded-5 text-white">
              Mark as Favorite
            </p>
          </div>
          <div>
            <p className="mb-0 mt-3">{time}</p>
          </div>
          <div className="my-4">{parse(emailData?.body)}</div>
        </div>
      </div>
    </>
  );
};

export default EmailBody;
