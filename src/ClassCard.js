import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

function ClassCard(props) {
  return (
    <article className="group relative transition hover:-translate-y-1 h-full cursor-pointer">
      <a href={props.url}>
        <div className="border-2 border-gray-200 rounded-2xl p-8 h-full group-hover:shadow-md">
          <h2 className="text-3xl text-neutral-black font-bold font-display">{props.title}</h2>
          <p className="text-md text-neutral-gray">{props.description}</p>
          <p className="mt-1 text-md text-neutral-gray">{props.members} members</p>
        </div>
      </a>
      <button className="text-neutral-black hover:text-red-500 absolute top-4 right-4"
              aria-label={`Remove ${props.title}`}
              onClick={props.handleRemove}>
        <FontAwesomeIcon icon={faTrashCan} size="lg"/>
      </button>
    </article>
  );
}

export default ClassCard;