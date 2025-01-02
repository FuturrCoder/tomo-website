import { useParams } from "react-router-dom";
import CLASSES from "../classes/example";
import useUsers from "../../hooks/useUsers";
import Error404 from "../../navigation/Error404";
import { Title } from "../../components/StyledTags";
import Description from "./Description";
import MemberCount from "./MemberCount";
import UsersList from "./UsersList";

function ClassDetail() {
  const { classURL } = useParams();
  const [users, message] = useUsers();

  let classData = CLASSES.find(c => c.url === classURL);
  if (!classData) return <Error404/>;

  return (
    <div className="px-8 py-10">
      <Title>{classData.title}</Title>
      <Description description={classData.description}/>
      <MemberCount count={classData.members}/>
      <UsersList users={users} message={message}/>
    </div>
  );
}

export default ClassDetail;