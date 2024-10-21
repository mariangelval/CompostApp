import React, { useState } from "react";
import EscuelasList from "../../components/Lists/EscuelasList";
import Navbar from "../../components/NavBar/NavBar";
import office from "../../assets/img/office.png";
import EscuelasSearch from "../../components/Search/EscuelasSearch";
import EscuelasButtons from "../../components/Buttons/EscuelasButtons";
import EscuelaModal from "../../components/Modal/EscuelaModal";
import InputModal from "../../components/Modal/InputModal";
import EscuelaUPModal from "../../components/Modal/EscuelaUPModal";
import ConfirmEscuelaModal from "../../components/Modal/ConfirmEscuelaModal";
import InputDeleteModal from "../../components/Modal/InputDeleteModal";
import "./Escuelas.css";
function Escuelas() {
  const [busqueda, setBusqueda] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openEscuelaUPModal, setEscuelaUPModal] = useState(false);
  const [openInputModal, setOpenInputModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [openInputDeleteModal, setOpenInputDeleteModal] = useState(false);

  const [openConfirmEscuelaModal, setOpenConfirmEscuelaModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenInputModal = () => setOpenInputModal(true);
  const handleCloseInputModal = () => setOpenInputModal(false);
  const handleOpenInputDeleteModal = () => setOpenInputDeleteModal(true);
  const handleCloseInputDeleteModal = () => setOpenInputDeleteModal(false);

  const handleDeleteConfirm = () => {
    setOpenInputDeleteModal(false); 
    setOpenConfirmEscuelaModal(true); 
  };

  const handleSubmit = (value) => {
    setInputValue(value);
    if (value) {
      setEscuelaUPModal(true);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="header-buscador">
        <img src={office} alt="image de edificio"></img>
        <div className="header-buscador-search">
          <h1>Instituciones</h1>
          <EscuelasSearch busqueda={busqueda} setBusqueda={setBusqueda} />
        </div>
        <EscuelasButtons
          onButtonClick={handleOpenModal}
          onSecondButtonClick={handleOpenInputModal}
          onThirdButtonClick={handleOpenInputDeleteModal}
        />
      </div>
      <EscuelasList busqueda={busqueda} />
      <EscuelaModal open={openModal} handleClose={handleCloseModal} />
      <InputModal
        open={openInputModal}
        handleClose={handleCloseInputModal}
        onSubmit={handleSubmit}
      />
      <EscuelaUPModal
        open={openEscuelaUPModal}
        handleClose={() => {
          setEscuelaUPModal(false);
        }}
      />
      <InputDeleteModal
        open={openInputDeleteModal}
        handleClose={handleCloseInputDeleteModal}
        onSubmit={handleDeleteConfirm}
      />
      <ConfirmEscuelaModal open={openConfirmEscuelaModal} handleClose={()=>{
        setOpenConfirmEscuelaModal(false);
      }}/>
    </div>
  );
}

export default Escuelas;
