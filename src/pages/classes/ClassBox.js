import { Subheading } from "../../components/StyledTags";
import { Link } from "react-router-dom";

function ClassBox(props) {
  return (
    <Link to={`/classes/${props.url}`}>
      <div className="border-2 border-gray-200 rounded-2xl p-8 h-full group-hover:shadow-md">
        <Subheading>{props.title}</Subheading>
        <p className="text-md text-neutral-gray">{props.description}</p>
        <p className="mt-1 text-md text-neutral-gray">{props.members} members</p>
      </div>
    </Link>
  );
}

export default ClassBox;