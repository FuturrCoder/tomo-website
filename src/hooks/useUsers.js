import {useEffect, useState} from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setMessage("Loading...");
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users");
        const data = await response.json();
        setUsers(data);
        setMessage("");
      } catch (e) {
        setMessage("Failed to load users");
        console.log(e);
      }
    };
    fetchPeople();
  }, []);

  return [users, message];
}

export default useUsers;