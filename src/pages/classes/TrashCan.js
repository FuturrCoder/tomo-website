import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function TrashCan({ title, handleRemove }) {
  return (
    <button className="text-neutral-black hover:text-red-500 absolute top-4 right-4"
            aria-label={`Remove ${title}`}
            onClick={handleRemove}>
      <FontAwesomeIcon icon={faTrashCan} size="lg"/>
    </button>
  );
}

export default TrashCan;