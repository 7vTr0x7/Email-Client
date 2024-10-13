import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/slices/emailSlice";

export const useFetchEmails = () => {
  const dispatch = useDispatch();

  const fetchEmails = async () => {
    try {
      const res = await fetch("https://flipkart-email-mock.now.sh/");
      if (!res.ok) {
        console.log("failed to get emails");
      }

      const data = await res.json();
      dispatch(addData(data.list));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);
};
