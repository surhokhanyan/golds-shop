import React from 'react';
import css from "./SubCategories.module.scss";
import {Link, useLocation} from "react-router-dom";
import {routhes} from "../../Utills/Routhes";


const SubCategories = ({setOpenModalType}) => {
    const pathSplit = useLocation().pathname.split("/");

    return (
        <div className={css.types}>
            <ul>
                {
                    pathSplit[2] === undefined ? null : routhes.find(val => val.path === pathSplit[1])?.categories.find(val=>val.path === pathSplit[2])?.subCategories === undefined ? null : routhes.find(val => val.path === pathSplit[1]).categories.find(val=>val.path === pathSplit[2]).subCategories.map(({id, path, name})=>{
                        return(
                            <li
                                key={id}
                                className={pathSplit[3] === path ? css.active : null}
                            >
                                <Link to={pathSplit[1] + "/" + pathSplit[2] + "/" + path}>
                                    {name}
                                </Link>
                            </li>
                        )
                    })
                }
                <div className={css.addType} onClick={()=> setOpenModalType(true)}>
                    +
                </div>
            </ul>
        </div>
    );
};

export default SubCategories;