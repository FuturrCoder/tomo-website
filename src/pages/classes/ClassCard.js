import ClassBox from "./ClassBox";
import TrashCan from "./TrashCan";

function ClassCard(props) {
  return (
    <article className="group relative transition hover:-translate-y-1 h-full cursor-pointer">
      <ClassBox {...props}/>
      <TrashCan title={props.title} handleRemove={props.handleRemove}/>
    </article>
  );
}

export default ClassCard;