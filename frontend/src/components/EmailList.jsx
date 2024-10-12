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

  return (
    <>
      {emails &&
        emails.length > 0 &&
        emails.map((email) => (
          <div
            key={email.id}
            className="mb-3 d-flex gap-3 border-color px-4 py-2 rounded-2 bg-email">
            <EmailCard email={email} />
          </div>
        ))}
    </>
  );
};

export default EmailList;
