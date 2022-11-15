import React from 'react';
import css from "./ProductsData.module.scss";
import {useLocation} from "react-router-dom";
import {routhes} from "../../Utills/Routhes";

const ProductsData = ({setOpenModalProd, min, max, searchVal}) => {
    const pathSplit = useLocation().pathname.split("/");
    return (
        <div className={css.main}>
            {
                searchVal === ""
                    ?
                    pathSplit[2] === undefined || pathSplit[3] === undefined ? null : routhes.find(val => val.path === pathSplit[1])?.categories.find(val=>val.path === pathSplit[2])?.subCategories.find(val=> val.path === pathSplit[3])?.products.map(({id, image, name, price})=>{
                    return (
                        price >= min && price <= max
                            ?
                                    <div className={css.products} key={id}>
                                        <div className={css.imagePlace}>
                                            <img src={image} alt="Picture"/>
                                        </div>
                                        <div className={css.info}>
                                            <p>{name}</p>
                                            <p>{price}$</p>
                                        </div>
                                    </div>
                            : null
                    )
                })
                    :
                    pathSplit[2] === undefined || pathSplit[3] === undefined ? null : routhes.find(val => val.path === pathSplit[1])?.categories.find(val=>val.path === pathSplit[2])?.subCategories.find(val=> val.path === pathSplit[3])?.products.filter(search=> search.name === searchVal).map(({id, image, name, price})=>{
                        return (
                            price >= min && price <= max
                                ?
                                <div className={css.products} key={id}>
                                    <div className={css.imagePlace}>
                                        <img src={image} alt="Picture"/>
                                    </div>
                                    <div className={css.info}>
                                        <p>{name}</p>
                                        <p>{price}$</p>
                                    </div>
                                </div>
                                : null
                        )
                    })
            }
            <button className={css.addBtn} onClick={()=>setOpenModalProd(true)}>
                +
            </button>
        </div>
    );
};

export default ProductsData;