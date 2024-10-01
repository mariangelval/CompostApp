import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Carousel from '../../components/Carousel/Carousel';
import ProductList from '../../components/Products/ProductList';
import './DashPage.js'

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
        </div>
    );
}

export default DashPage;
