import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayout from "./navigation/PageLayout";
import Classes from "./classes/Classes";
import Class from "./classes/class/Class";
import Error404 from "./navigation/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout/>}>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/classes/:classURL" element={<Class/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;