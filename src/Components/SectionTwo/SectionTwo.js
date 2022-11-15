import React from 'react';
import css from "./SectionTwo.module.scss";
import Header from "../Header/Header";
import ProductsData from "../ProductsData/ProductsData";

const SectionTwo = ({setOpenModal, setOpenModalType, setOpenModalProd, min, max, searchVal}) => {
    return (
        <section className={css.two}>
            <Header setOpenModal={setOpenModal} setOpenModalType={setOpenModalType}/>
            <ProductsData setOpenModalProd={setOpenModalProd} min={min} max={max} searchVal={searchVal}/>
        </section>
    );
};

export default SectionTwo;