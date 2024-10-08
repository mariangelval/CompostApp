import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import ProductList from '../../components/Products/ProductList';
import './DashPage.js'
import SchoolForm from '../../components/Form/SchoolForm.js';
import HIstorial from '../../components/Historial/HIstorial.js';

function DashPage() {
    return (
        <div className="dashboard-container">
            <NavBar />
            <div className="carousel-container">
                <Carousel />
            </div>
            <div className="product-list-container" style={{ marginTop: '85px' }}>
                <ProductList />
            </div>
            <SchoolForm/>
            <div className='historial-container'>
                <div className='conjunto-historial'>            
                    <h1>Historial</h1>
                    <button className='boton-agregar'>Agregar</button>
                </div>
            <HIstorial/>
            </div>
        </div>
    );
}

export default DashPage;
