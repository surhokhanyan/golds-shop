import React from 'react';
import css from "./ModalType.module.scss";
import {useForm} from "react-hook-form";
import {useLocation} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import {routhes} from "../../Utills/Routhes";
import ProductsData from "../ProductsData/ProductsData";

const ModalTypes = ({openType, closeType}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const pathSplit = useLocation().pathname.split("/");
    const addUser = data =>{
        routhes.find(val=> val.path === pathSplit[1])?.categories.find(value => value.path === pathSplit[2])?.subCategories.push({
            id:Math.random(),
            path: data.category.toLowerCase().replace(/\s/g,''),
            name: data.category,
            element:() => <ProductsData/>,
            products: []
        })
        reset();
        closeType(false);
    }
    if (!openType) return null;
    return (
        <div className={css.modalTypes}>
            <form className={css.form} onSubmit={handleSubmit(addUser)}>
                <div className={css.header}>
                    <p>добавить подкатегория</p>
                    <button onClick={()=> closeType(false)}><CloseIcon/></button>
                </div>
                <label>
                    <input type="text"
                           placeholder="подкатегория"
                           {...register("category", {required:true})}
                    />
                    {errors.category && <p>категория должна иметь название</p>}
                </label>
                <button className={css.btnAdd} >добавить</button>
            </form>
        </div>
    );
};

export default ModalTypes;