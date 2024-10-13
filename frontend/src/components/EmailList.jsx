import React, { useEffect, useState } from "react";
import EmailCard from "./EmailCard";
import EmailBody from "./EmailBody";
import Pagination from "./Pagination";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [page, setPage] = useState(1);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState({});

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

  const nextPageHandler = () => {
    if (page < Math.round(emails.length / 6)) {
      setPage((prev) => prev + 1);
    }
  };

  const previousPageHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const clickHandler = (email) => {
    setIsEmailOpen(true);
    setSelectedEmail(email);
  };

  return (
    <>
      <div className={` ${isEmailOpen && "row"}  `}>
        <div className={` ${isEmailOpen && "col-md-5"}  `}>
          <>
            {emails?.slice(page * 6 - 6, page * 6).map((email) => (
              <div
                key={email.id}
                className="mb-3 d-flex gap-3 border-color px-4 py-2 rounded-2 bg-email"
                onClick={() => clickHandler(email)}>
                <EmailCard email={email} isEmailOpen={isEmailOpen} />
              </div>
            ))}
            {emails?.length > 0 && (
              <Pagination
                page={page}
                previousPageHandler={previousPageHandler}
                nextPageHandler={nextPageHandler}
                emailsLength={emails.length}
              />
            )}
          </>
        </div>
        {isEmailOpen && (
          <div className="col-md-7  ">
            <EmailBody email={selectedEmail} />
          </div>
        )}
      </div>
    </>
  );
};

export default EmailList;
