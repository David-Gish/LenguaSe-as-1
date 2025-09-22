import React, { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tblprueba")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Usuarios desde MySQL 🚀</h1>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.nombre} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
