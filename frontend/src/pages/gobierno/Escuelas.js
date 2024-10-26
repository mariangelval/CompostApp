import React, { useState } from "react";
import EscuelasList from "../../components/Lists/EscuelasList";
import Navbar from "../../components/NavBar/NavBar";
import office from "../../assets/img/office.png";
import EscuelasSearch from "../../components/Search/EscuelasSearch";
import EscuelasButtons from "../../components/Buttons/EscuelasButtons";
import EscuelaModal from "../../components/Modal/EscuelaModal";
import InputModal from "../../components/Modal/InputModal";
import ConfirmEscuelaModal from "../../components/Modal/ConfirmEscuelaModal";
import "./Escuelas.css";

function Escuelas() {
  const [busqueda, setBusqueda] = useState("");
  const [openInputModal, setOpenInputModal] = useState(false);
  const [openInputDeleteModal, setOpenInputDeleteModal] = useState(false);
  const [openConfirmEscuelaModal, setOpenConfirmEscuelaModal] = useState(false);
  const [openEscuelaModal, setOpenEscuelaModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // es para editar o no
  const [recordId, setRecordId] = useState(""); // id para editar
  const [deleteId, setDeleteId] = useState(""); // id para eliminar

  const handleOpenInputDeleteModal = () => {
    setOpenInputDeleteModal(true);
  };

  const handleCloseInputDeleteModal = () => setOpenInputDeleteModal(false);

  const handleDeleteConfirm = () => {
    setOpenInputDeleteModal(false);
    setOpenConfirmEscuelaModal(true);
    setDeleteId(""); 
  };

  const handleOpenInputModal = () => {
    setOpenInputModal(true);
    setIsEditing(true); // modo editar
  };

  const handleOpenEscuelaModal = () => {
    if (isEditing) {
      setOpenEscuelaModal(true);
      setRecordId("");
    } else {
      setOpenEscuelaModal(true); // para agregar
    }
  };

  const handleCloseInputModal = () => setOpenInputModal(false);
  const handleCloseEscuelaModal = () => {
    setOpenEscuelaModal(false);
    setRecordId(""); 
  };

  const handleInputModalSubmit = (id) => {
    if (id.trim()) {
      setRecordId(id);
      handleCloseInputModal();
      handleOpenEscuelaModal(); // abre modal escuela
    } else {
      handleCloseInputModal();
    }
  };

  const handleDeleteModalSubmit = (id) => {
    if (id.trim()) {
      // si el id no esta vacio
      setDeleteId(id);
      handleCloseInputDeleteModal();
      handleDeleteConfirm(); // abre confirmacion
    } else {
      handleCloseInputDeleteModal();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="header-buscador">
        <img src={office} alt="imagen de edificio"></img>
        <div className="header-buscador-search">
          <h1>Instituciones</h1>
          <EscuelasSearch busqueda={busqueda} setBusqueda={setBusqueda} />
        </div>
        <EscuelasButtons
          onButtonClick={() => {
            setIsEditing(false);
            setRecordId(""); 
            handleOpenEscuelaModal(); 
          }}
          onSecondButtonClick={handleOpenInputModal} // abre inputmodal
          onThirdButtonClick={handleOpenInputDeleteModal} // abre inputmodal
        />
      </div>
      <EscuelasList busqueda={busqueda} />
      <EscuelaModal
        open={openEscuelaModal}
        handleClose={handleCloseEscuelaModal}
        isEditing={isEditing}
        recordId={recordId}
      />
      <InputModal
        open={openInputModal}
        handleClose={handleCloseInputModal}
        onSubmit={handleInputModalSubmit} 
        resetOnOpen={true}
      />
      <InputModal
        open={openInputDeleteModal}
        handleClose={handleCloseInputDeleteModal}
        onSubmit={handleDeleteModalSubmit} 
        resetOnOpen={true}
      />
      <ConfirmEscuelaModal
        open={openConfirmEscuelaModal}
        handleClose={() => {
          setOpenConfirmEscuelaModal(false);
        }}
        title="¿Estás seguro de que deseas borrar esta institución?"
      />
    </div>
  );
}

export default Escuelas;
