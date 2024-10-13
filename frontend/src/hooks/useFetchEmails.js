import { useEffect } from "react";

export const useFetchEmails = () => {
  const fetchEmails = async () => {
    try {
      const res = await fetch("https://flipkart-email-mock.now.sh/");
      if (!res.ok) {
        console.log("failed to get emails");
      }

      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);
};
