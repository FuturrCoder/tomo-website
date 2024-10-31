import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

function NavBar() {
  return (
    <nav
      className="flex flex-wrap justify-center items-center gap-4 border-b-2 border-b-gray-200 px-7 py-3 font-display">
      <a href="/">
        <img src={logo} width="40" alt="logo"/>
      </a>
      <a className="text-4xl font-extrabold text-primary" href="/">tomo</a>
      <span className="sm:flex-grow"></span>
      <div className="block md:inline">
        <a className="text-2xl text-neutral-gray font-bold hover:text-primary" href="/classes">Classes</a>
        <a className="text-2xl text-neutral-gray font-bold ml-8 hover:text-primary" href="/chats">Chats</a>
        <a className="text-2xl text-neutral-gray font-bold ml-8 hover:text-primary" href="/profile">Profile</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <div className="mt-48 px-8 py-5 border-t-2 border-t-gray-200 w-full flex flex-wrap gap-8">
      <span className="text-neutral-gray text-sm">© 2024 Tomo</span>
      <a href="/about" className="text-neutral-gray text-sm underline underline-offset-2">About</a>
    </div>
  );
}

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
  }
];

function ClassCard(props) {
  return (
    <div className="group relative transition hover:-translate-y-1 h-full cursor-pointer">
      <a href={props.url}>
        <article className="border-2 border-gray-200 rounded-2xl p-8 group-hover:shadow-md">
          <h2 className="text-3xl text-neutral-black font-bold font-display">{props.title}</h2>
          <p className="text-md text-neutral-gray">{props.description}</p>
          <p className="mt-1 text-md text-neutral-gray">{props.members} members</p>
        </article>
      </a>
      <button className="text-neutral-black hover:text-red-500 absolute top-4 right-4"
              onClick={props.handleRemove}>
        <FontAwesomeIcon icon={faTrashCan} size="lg"/>
      </button>
    </div>
  );
}

function App() {
  const [classes, setClasses] = useState(CLASSES);

  const handleRemove = (index) => {
    const newClasses = [...classes];
    newClasses.splice(index, 1);
    setClasses(newClasses);
  };

  return (
    <>
      <NavBar/>
      <div className="px-8 py-10">
        <h1 className="text-5xl text-neutral-black font-extrabold font-display">Classes</h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((c, idx) => (
            <ClassCard {...c} handleRemove={() => handleRemove(idx)} key={c.id}/>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;