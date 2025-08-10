import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddRecipe />}></Route>
      </Routes>
    </>
  );
}

export default App;
