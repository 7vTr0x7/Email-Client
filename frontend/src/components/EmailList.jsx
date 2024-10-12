import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const res = await fetch("https://flipkart-email-mock.now.sh/");
      if (!res.ok) {
        console.log("failed to get emails");
      }

      const data = await res.json();
      setEmails(data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const isOpen = true;

  return (
    <>
      <div className="row">
        <div className="col-md-5">
          {emails &&
            emails.length > 0 &&
            emails.map((email) => (
              <div
                key={email.id}
                className="mb-3 d-flex gap-3 border-color px-4 py-2 rounded-2 bg-email">
                <EmailCard email={email} isOpen={isOpen} />
              </div>
            ))}
        </div>
        <div className="col-md-7"></div>
      </div>
    </>
  );
};

export default EmailList;
