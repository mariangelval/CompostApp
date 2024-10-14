import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "../../assets/styles/styles.css";
import "../Form/schoolForm.css";

function SchoolForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [errorMessage, setErrorMessage] = useState("");
  const [nombre, setNombre] = useState("");
  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);
  const navegate = useNavigate();
  return (
    <div class="container-form-school">
      <form class="formSchool">
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nombre</label>
          <br />
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div class="CalleAltura">
          <div class="input-calleAltura inp1">
            <label>Calle</label>
            <br />
            <input
              type="text"
              value={calle}
              onChange={(e) => setCalle(e.target.value)}
            />
          </div>
          <div class="input-calleAltura">
            <label>Altura</label>
            <br />
            <input
              type="number"
              value={altura}
              step={0.001}
              min="0"
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Descripcion</label>
          <br />
          <textarea
            name="descripcion"
            value={descripcion}
            rows="5"
            cols="100"
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Enviar"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default SchoolForm;
