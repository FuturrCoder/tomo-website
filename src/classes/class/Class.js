import {useParams} from "react-router-dom";
import CLASSES from "../example";
import {useEffect, useState} from "react";
import PersonCard from "./PersonCard";

function Class() {
  const {classURL} = useParams();
  let classData = CLASSES.find(c => c.url === classURL);

  const [people, setPeople] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setMessage("Loading...");
        const response = await fetch("https://disc-assignment-5-users-api.onrender.com/api/users");
        const data = await response.json();
        setPeople(data);
        setMessage("");
      } catch (e) {
        setMessage("Failed to load members");
        console.log(e);
      }
    };
    fetchPeople();
  }, []);

  return (
    <div className="px-8 py-10">
      <h1 className="text-5xl text-neutral-black font-extrabold font-display">{classData.title}</h1>
      <p className="mt-3 text-md text-neutral-gray">{classData.description}</p>
      <p className="mt-4 text-lg text-neutral-gray">{classData.members} members</p>
      <div className="mt-2 flex flex-nowrap gap-3 overflow-x-auto">
        {people.length === 0 ?
          <p className="mt-4 test-md text-neutral-gray">{message}</p> :
          people.map((person) => (
            <PersonCard {...person} key={person.id}/>
          ))
        }
      </div>
    </div>
  );
}

export default Class;