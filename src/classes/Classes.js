import ClassCard from "./ClassCard";
import {useEffect, useState} from "react";

const CLASSES = [
  {
    id: 0,
    title: "COMP_SCI 211-0",
    description: "Fundamentals of Computer Programming II",
    members: 67,
    url: "/classes/comp-sci-211-0"
  },
  {
    id: 1,
    title: "COMP_ENG 203-0",
    description: "Introduction to Computer Engineering",
    members: 48,
    url: "/classes/comp-eng-203-1"
  },
  {
    id: 2,
    title: "MATH 228-1",
    description: "Multivariable Differential Calculus for Engineering",
    members: 61,
    url: "/classes/math-228-1"
  },
  {
    id: 3,
    title: "GEN_ENG 206-1",
    description: "Honors Engineering Analysis 1",
    members: 56,
    url: "/classes/gen-eng-206-1"
  },
  {
    id: 4,
    title: "CONDUCT 393-0",
    description: "Orchestral Organizations",
    members: 77,
    url: "/classes/conduct-393-0"
  }
];

function Classes() {
  const [classes, setClasses] = useState(CLASSES);

  const handleRemove = (id) => {
    setClasses(classes.filter(c => c.id !== id));
  };

  useEffect(() => {
    console.log(classes);
  }, [classes]);

  return (
    <div className="px-8 py-10">
      <h1 className="text-5xl text-neutral-black font-extrabold font-display">Classes</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {classes.length === 0 ?
          <p>No classes available.</p> :
          classes.map((c) => (
            <ClassCard {...c} handleRemove={() => handleRemove(c.id)} key={c.id}/>
          ))}
      </div>
    </div>
  )
}

export default Classes;