import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routers,
  Route,
  Navigate,
} from "react-router-dom";

// Importação das páginas
import Login from "./pages/Login/Login.js";

// importação do NavBar (menu principal)
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  // Estado global simples para login e contatos
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState([]);

  // Função de login
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("Usuário ou Senha Inválidos!");
    }
  };

  // Função de Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
}
export default App;
