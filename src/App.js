import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import { AuthProvider } from "./context/AuthContext";
import { Chats } from "./components/Chats";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
