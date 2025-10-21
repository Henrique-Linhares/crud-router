import React, { useState } from "react";
// Import 'toast' from react-toastify
import { toast } from 'react-toastify'; 
import "./Cadastro.css";

function Cadastro({contacts, setContacts}) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation (optional but recommended)
        if (!name.trim() || !phone.trim()) {
            toast.error('Por favor, preencha todos os campos!');
            return; 
        }

        const newContact = {id: Date.now(), name, phone};
        setContacts([...contacts, newContact]);
        setName("");
        setPhone("");
    }

    return (
        <div className="cadastro-container">
            <h2>Cadastrar Contato</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Nome:"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Telefone:"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default Cadastro;