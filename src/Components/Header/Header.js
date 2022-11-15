import React from 'react';
import css from "./Header.module.scss";
import MaleFemale from "../MaleFemale/MaleFemale";
import Nav from "../Nav/Nav";
import SubCategories from "../SubCategories/SubCategories";

const Header = ({setOpenModal, setOpenModalType}) => {
    return (
        <div>
            <header className={css.header}>
                <div className={css.main}>
                    <MaleFemale/>
                    <Nav setOpenModal={setOpenModal}/>
                    <SubCategories setOpenModalType={setOpenModalType}/>
                </div>
            </header>
        </div>
    );
};

export default Header;