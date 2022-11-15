import React, {useState} from 'react';
import css from "./Modal.module.scss";
import {routhes} from "../../Utills/Routhes";
import {Link, useLocation} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({open, close}) => {
    const [picture, setPicture] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [errImg, setErrImg] = useState(false);
    const pathSplit = useLocation().pathname.split("/")
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

    const addCategory = () =>{
        if (name !== "" && imgSrc !== null){
            routhes.find(val => val.path === pathSplit[1]).categories.push({
                id:Math.random(),
                path:name.toLowerCase().replace(/\s/g,''),
                name:name,
                image: imgSrc,
                subCategories: []
            });
            close(false);
            setName("");
        }else if (name === "" && imgSrc !== null){
            setError(true)
        }else{
            setErrImg(true)
        }
    }

    if (!open) return null;
    return (
        <div className={css.modal}>
            <div className={css.modalMain}>
                <div className={css.header}>
                    <p>добавить категория</p>
                    <button onClick={()=> close(false)}><CloseIcon/></button>
                </div>
                <div className={css.gender}>
                    {
                        routhes.map(({id, path, name})=>{
                            return(
                                <Link
                                    key={id}
                                    path={path}
                                    className={pathSplit[1] === path ? css.active : null}
                                    to={path}
                                >
                                    {name}
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={css.cat}>
                    <input type="text"
                           placeholder="категория"
                           onChange={(e)=> setName(e.target.value)}
                    />
                    {error === true ? <span>поле имени не может быть пустым</span> :  null}
                </div>
                <div className={css.upload}>
                    <img src={imgSrc} alt="🖼️"/>
                    <p>загрузить
                        фото</p>
                    <input type="file" className={css.file} onChange={onChangePicture}/>
                    {errImg === true ? <span>Пожалуйста, выберите изображение</span> :  null}
                </div>
                <button className={css.add} onClick={addCategory}>
                    добавить
                </button>
            </div>
        </div>
    );
};

export default Modal;