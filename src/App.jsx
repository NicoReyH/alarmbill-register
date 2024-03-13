import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterSuccess, RegisterPage, HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-success" element={<RegisterSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
