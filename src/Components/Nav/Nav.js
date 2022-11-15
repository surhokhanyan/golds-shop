import React from 'react';
import css from "./Nav.module.scss";
import {routhes} from "../../Utills/Routhes";
import {Link, useLocation, Navigate} from "react-router-dom";
import {MALE} from "../../Utills/Urls";

const Nav = ({setOpenModal}) => {
    const pathSplit = useLocation().pathname.split("/");

    return (
        <nav className={css.nav}>
            <ul>
                {
                   pathSplit[1] === "" ? null : routhes.find(val=>val.path === pathSplit[1])?.categories.map(({id,path,name, image})=>{
                           return(
                               <li key={id}>
                                   <Link
                                       to={pathSplit[1] + "/" + path}
                                       className={pathSplit[2] === path ? css.active : null}
                                   >
                                       <div className={css.imgPlace}>
                                           <img src={image} alt="Pic"/>
                                       </div>
                                       {name}
                                   </Link>
                               </li>
                           )
                   })
                }
                <button className={css.addLi} onClick={()=> setOpenModal(true)}>
                    +
                </button>
            </ul>
        </nav>
    );
};

export default Nav;