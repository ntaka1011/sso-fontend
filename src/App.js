import About from "./components/About/about";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
