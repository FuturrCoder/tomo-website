import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageLayout from "./PageLayout";
import Classes from "./classes/Classes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout/>}>
          <Route path="/classes" element={<Classes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;