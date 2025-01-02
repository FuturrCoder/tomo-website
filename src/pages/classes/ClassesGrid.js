import ClassCard from "./ClassCard";
import {useState} from "react";
import CLASSES from "./example";

function ClassesGrid() {
  const [classes, setClasses] = useState(CLASSES);

  const handleRemove = (id) => {
    setClasses(classes.filter(c => c.id !== id));
  };

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {classes.length === 0 ?
        <p>No classes available.</p> :
        classes.map((c) => (
          <ClassCard {...c} handleRemove={() => handleRemove(c.id)} key={c.id}/>
        ))}
    </div>
  )
}

export default ClassesGrid;