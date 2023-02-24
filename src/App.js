import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/category-page" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
