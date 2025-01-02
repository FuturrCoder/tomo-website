import {useParams} from "react-router-dom";
import CLASSES from "../classes/example";
import PersonCard from "./PersonCard";
import useUsers from "../../hooks/useUsers";
import Error404 from "../../navigation/Error404";
import {Title} from "../../components/StyledTags";

function ClassDetail() {
  const {classURL} = useParams();
  const [users, message] = useUsers();

  let classData = CLASSES.find(c => c.url === classURL);
  if (!classData) return <Error404/>;

  return (
    <div className="px-8 py-10">
      <Title>{classData.title}</Title>
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

export default ClassDetail;