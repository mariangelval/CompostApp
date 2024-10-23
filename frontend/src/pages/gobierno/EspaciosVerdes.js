import React, { useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import arboles from "../../assets/img/arboles.png";
import EscuelasSearch from "../../components/Search/EscuelasSearch";
import EscuelasButtons from "../../components/Buttons/EscuelasButtons";
import EspaciosVerdesList from "../../components/Lists/EspaciosVerdesList";
import EspacioVerdeModal from "../../components/ModalEspacioVerde/EspacioVerdeModal";
function EspaciosVerdes() {
  const [busqueda, setBusqueda] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openInputModal, setOpenInputModal] = useState(false);
  const [openInputDeleteModal, setOpenInputDeleteModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenInputModal = () => setOpenInputModal(true);
  const handleOpenInputDeleteModal = () => setOpenInputDeleteModal(true);

  return (
    <div>
      <Navbar />
      <div className="header-buscador">
        <img src={arboles} alt="image de edificio"></img>
        <div className="header-buscador-search">
          <h1>Espacios Verdes</h1>
          <EscuelasSearch busqueda={busqueda} setBusqueda={setBusqueda} />
        </div>
        <EscuelasButtons
          onButtonClick={handleOpenModal}
          onSecondButtonClick={handleOpenInputModal}
          onThirdButtonClick={handleOpenInputDeleteModal}
        />
      </div>
      <EspaciosVerdesList busqueda={busqueda} />
      <EspacioVerdeModal open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default EspaciosVerdes;
