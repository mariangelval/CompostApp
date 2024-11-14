import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Form/schoolForm.css";

function SchoolForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [altura, setAltura] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);
  const navegate = useNavigate();
  return (
    <div class="container-form-school">
      <form class="formSchool">
        <div>
          <label>Kilos</label>
          <br />
          <input
            type="number"
            value={altura}
            step={0.001}
            min="0"
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>

        <div>
          <label>Observación Pedido</label>
          <br />
          <textarea
            name="descripcion"
            value={descripcion}
            rows="4"
            cols="50"
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
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
