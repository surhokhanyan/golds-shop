import React, {useState} from 'react';
import css from "./ModalProp.module.scss";
import {useForm} from "react-hook-form";
import {Link, useLocation} from "react-router-dom";
import {routhes} from "../../Utills/Routhes";
import CloseIcon from '@mui/icons-material/Close';

const ModalProp = ({openProd, closeProd}) => {
    const [picture, setPicture] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [imgErr, setImgErr] = useState(false);
    const [errCate, setErrCate] = useState(false);
    const pathSplit = useLocation().pathname.split("/");
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const addProduct = data => {
        if (pathSplit[1] !== undefined && pathSplit[2] !== undefined && pathSplit[3] !== undefined){
            if (imgSrc !== null){
                routhes.find(val=> val.path === pathSplit[1])?.categories.find(value => value.path === pathSplit[2])?.subCategories.find(prod=> prod.path === pathSplit[3])?.products.push(
                    {
                        id:Math.random(),
                        image: imgSrc,
                        name: data.article,
                        gender: pathSplit[2] === "male" ? "male" : "female",
                        type : pathSplit[3],
                        price: data.price
                    }
                )
                reset();
                closeProd(false)
            }
        }else{
            setErrCate(true)
        }
    }
    const onChangePicture = async (e) => {
        if (e.target.files[0]) {
            await setPicture(e.target.files[0]);
            const reader = await new FileReader();
            reader.addEventListener("load", () => {
                setImgSrc(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    if (!openProd) return null;
    return (
        <div className={css.modalProd}>
            <form className={css.main} onSubmit={handleSubmit(addProduct)}>
                {errCate ? <h1>Пожалуйста, выберите пол, категорию и подкатегорию</h1> : null}
                <div className={css.header}>
                    <p>добавить изделия</p>
                    <button onClick={()=>closeProd(false)}><CloseIcon/></button>
                </div>
                <div className={css.categories}>
                    <div className={css.gender}>
                        {
                            routhes.map(({id, path, name})=>{
                                return (
                                    <Link
                                        key={id}
                                        path={path}
                                        to={path}
                                        className={pathSplit[1] === path ? css.active : null}
                                        exact="true"
                                    >
                                        {name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={css.category}>
                        {
                            routhes.find(gen=> gen.path === pathSplit[1])?.categories.map(({id, path, name, image})=>{
                                return (
                                    <Link
                                        key={id}
                                        path={path}
                                        to={pathSplit[1] + "/" + path}
                                        className={pathSplit[2] === path ? css.active : null}
                                        exact="true"
                                    >
                                        <div className={css.imgPlace}>
                                            <img src={image} alt="Picture"/>
                                        </div>
                                        {name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className={css.subCategories}>
                        {
                            routhes.find(gen=> gen.path === pathSplit[1])?.categories.find(cat=> cat.path === pathSplit[2])?.subCategories.map(({id, name, path})=>{
                                return (
                                    <Link
                                        key={id}
                                        to={pathSplit[1] + "/" + pathSplit[2] + "/" + path}
                                        className={pathSplit[3] === path ? css.active : null}
                                        exact="true">
                                        {name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={css.uploadInfo}>
                    <div className={css.upload}>
                        <img src={imgSrc} alt="🖺"/>
                        <p>загрузить
                            фото</p>
                        <input type="file" onChange={onChangePicture}/>
                        {imgErr === false ? null : <span>Пожалуйста, выберите изображение</span>}
                    </div>
                    <div className={css.info}>
                        <label>
                            артикул
                            <input type="text"
                                   {...register("article", {required:true})}
                            />
                            {errors.article && <p>артикул не может быть пустой</p>}
                        </label>
                        <label>
                            цена
                            <input type="text"
                                   {...register("price", {required:true, pattern:/^[0-9]*$/})}
                            />
                            {errors.price && <p>пиши только цифры цена не может быть пустой</p>}
                        </label>
                    </div>
                </div>
                <button className={css.addBtn}>
                    добавить
                </button>
            </form>
        </div>
    );
};

export default ModalProp;