import ProfilePicture from "../../components/ProfilePicture";
import PersonName from "./PersonName";

function PersonCard(props) {
  return (
    <div className="px-4 py-8 w-36 flex-none border border-gray-200 rounded-2xl flex flex-col gap-3 items-center">
      <ProfilePicture user={props} w="3.5rem" h="3.5rem"/>
      <PersonName {...props}/>
    </div>
  );
}

export default PersonCard;