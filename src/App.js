import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayout from "./PageLayout";
import Classes from "./classes/Classes";
import Class from "./classes/class/Class";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout/>}>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/classes/:classURL" element={<Class/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;