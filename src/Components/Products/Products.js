import React from 'react';
import css from "./Products.module.scss";
import {Route, Routes, useLocation, Navigate} from "react-router-dom";
import {routhes} from "../../Utills/Routhes";
import {MALE} from "../../Utills/Urls";

const Products = () => {
    const pathSplit = useLocation().pathname.split("/");
    return (
        <div className={css.main}>
            <Routes>
                {
                    pathSplit[1] = "" || pathSplit[2] === "" || pathSplit[3] === "" ? null : routhes.find(val => val.path === pathSplit[1])?.categories.find(val=>val.path === pathSplit[2])?.subCategories.map(({id, element, path})=>{
                        return(
                            <Route
                                    key={id}
                                    path={pathSplit[1] + "/" + pathSplit[2] + "/" + path}
                                    element={element}
                                    exact="true"
                            />
                        )
                    })
                }
                <Route path={"*"} element={<Navigate to={"/" + MALE}/>}/>
            </Routes>
        </div>
    );
};

export default Products;