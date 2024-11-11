import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

function PersonCard(props) {
  let [loaded, setLoaded] = useState(false);

  const onImageError = ({currentTarget}) => {
    currentTarget.onerror = null;
    setLoaded(false);
  };

  const onImageLoad = ({currentTarget}) => {
    currentTarget.onload = null;
    setLoaded(true);
  };

  return (
    <div className="px-4 py-8 w-36 flex-none border border-gray-200 rounded-2xl flex flex-col gap-3 items-center">
      <img src={props.profilePicture} alt={`${props.firstName}'s avatar`}
           className={`w-14 h-14 rounded-full ${loaded ? "" : "hidden"}`}
           onError={onImageError} onLoad={onImageLoad}/>
      <FontAwesomeIcon icon={faCircleUser} clipPath="inset(0% round 999px)"
                       className={`w-14 h-14 text-neutral-gray ${loaded ? "hidden" : ""}`}/>
      <h3 className="text-neutral-black text-sm text-center w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
        {props.firstName} {props.lastName}
      </h3>
    </div>
  );
}

export default PersonCard;