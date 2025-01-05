import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./navigation/PageLayout";
import Classes from "./pages/classes/Classes";
import ClassDetail from "./pages/class-detail/ClassDetail";
import Error404 from "./navigation/Error404";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/classes/:classURL" element={<ClassDetail/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;