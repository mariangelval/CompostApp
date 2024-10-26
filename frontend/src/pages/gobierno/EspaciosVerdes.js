import React, { useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import arboles from "../../assets/img/arboles.png";
import EscuelasSearch from "../../components/Search/EscuelasSearch";
import EscuelasButtons from "../../components/Buttons/EscuelasButtons";
import EspaciosVerdesList from "../../components/Lists/EspaciosVerdesList";
import EspacioVerdeModal from "../../components/ModalEspacioVerde/EspacioVerdeModal";
import InputModal from "../../components/Modal/InputModal";
import ConfirmEscuelaModal from "../../components/Modal/ConfirmEscuelaModal";

function EspaciosVerdes() {
  const [busqueda, setBusqueda] = useState("");
  const [openInputModal, setOpenInputModal] = useState(false);
  const [openInputDeleteModal, setOpenInputDeleteModal] = useState(false);
  const [openConfirmEscuelaModal, setOpenConfirmEscuelaModal] = useState(false);
  const [openEscuelaModal, setOpenEscuelaModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [recordId, setRecordId] = useState("");
  const [deleteId, setDeleteId] = useState("");

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
    setIsEditing(true);
  };

  const handleOpenEscuelaModal = () => {
    if (isEditing) {
      setOpenEscuelaModal(true);
      setRecordId("");
    } else {
      setOpenEscuelaModal(true);
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
      handleOpenEscuelaModal(); 
    } else {
      handleCloseInputModal();
    }
  };

  const handleDeleteModalSubmit = (id) => {
    if (id.trim()) {
      setDeleteId(id);
      handleCloseInputDeleteModal();
      handleDeleteConfirm(); 
    } else {
      handleCloseInputDeleteModal();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="header-buscador">
        <img src={arboles} alt="imagen de edificio"></img>
        <div className="header-buscador-search">
          <h1>Espacios Verdes</h1>
          <EscuelasSearch busqueda={busqueda} setBusqueda={setBusqueda} />
        </div>
        <EscuelasButtons
          onButtonClick={() => {
            setIsEditing(false);
            setRecordId("");
            handleOpenEscuelaModal(); 
          }}
          onSecondButtonClick={handleOpenInputModal}
          onThirdButtonClick={handleOpenInputDeleteModal}
        />
      </div>
      <EspaciosVerdesList busqueda={busqueda} />
      <EspacioVerdeModal
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
        title="¿Estás seguro de que deseas borrar este Espacio Verde?"
      />
    </div>
  );
}

export default EspaciosVerdes;
