import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ProfilePicture({ user, w, h }) {
  let [loaded, setLoaded] = useState(false);

  const onImageError = ({ currentTarget }) => {
    currentTarget.onerror = null;
    setLoaded(false);
  };

  const onImageLoad = ({ currentTarget }) => {
    currentTarget.onload = null;
    setLoaded(true);
  };

  return (
    <>
      <img src={user.profilePicture} alt={`${user.firstName}'s avatar`}
           className={`rounded-full ${loaded ? "" : "hidden"}`}
           style={{ width: w, height: h }}
           onError={onImageError} onLoad={onImageLoad}/>
      <FontAwesomeIcon icon={faCircleUser} clipPath="inset(0% round 999px)"
                       className={`text-neutral-gray ${loaded ? "hidden" : ""}`}
                       style={{ width: w, height: h }}/>
    </>
  );
}

export default ProfilePicture;