import React, {useState} from 'react';
import css from "./Main.module.scss";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import Modal from "../Modal/Modal";
import ModalTypes from "../ModalTypes/ModalTypes";
import ModalProp from "../ModalProp/ModalProp";
import Filter from "../Filter/Filter";
const Main = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalType, setOpenModalType] = useState(false);
    const [openModalProd, setOpenModalProd] = useState(false);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [searchVal, setSearchVal] = useState("")

    return (
        <main className={css.main}>
            <SectionOne searchVal={searchVal} setSearchVal={setSearchVal}/>
            <SectionTwo setOpenModal={setOpenModal} setOpenModalType={setOpenModalType} setOpenModalProd={setOpenModalProd} min={min} max={max} searchVal={searchVal}/>
            <Modal open={openModal}
                   close={setOpenModal}
            />
            <ModalTypes openType={openModalType}
                        closeType={setOpenModalType}
            />
            <ModalProp openProd={openModalProd}
                       closeProd={setOpenModalProd}
            />
            <Filter min={min} setMin={setMin} max={max} setMax={setMax}/>
        </main>
    );
};

export default Main;