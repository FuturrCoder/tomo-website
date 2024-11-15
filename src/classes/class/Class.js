import {useParams} from "react-router-dom";
import CLASSES from "../example";
import PersonCard from "./PersonCard";
import useUsers from "../../hooks/useUsers";
import H1 from "../../components/H1";

function Class() {
  const {classURL} = useParams();
  let classData = CLASSES.find(c => c.url === classURL);

  const [users, message] = useUsers();

  return (
    <div className="px-8 py-10">
      <H1>{classData.title}</H1>
      <p className="mt-3 text-md text-neutral-gray">{classData.description}</p>
      <p className="mt-4 text-lg text-neutral-gray">{classData.members} members</p>
      <div className="mt-2 flex flex-nowrap gap-3 overflow-x-auto">
        {users.length === 0 ?
          <p className="mt-4 test-md text-neutral-gray">{message}</p> :
          users.map((user) => (
            <PersonCard {...user} key={user.id}/>
          ))
        }
      </div>
    </div>
  );
}

export default Class;