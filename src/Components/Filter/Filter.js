import React from 'react';
import css from "./FIlter.module.scss";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {useState} from "react";
import RangeSlider from "../Range/Range";


const Filter = ({min,max,setMax,setMin}) => {

    const [value, setValue] = React.useState([min, max]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setMin(newValue[0])
        setMax(newValue[1])
    };

    const saveFilter = () =>{
        setValue([min, max])
    }

    return (
        <div className={css.main}>
            <div className={css.filter}>
                <h1>цена</h1>
                <div className={css.slider}>
                    <RangeSlider value={value} handleChange={handleChange}/>
                </div>
                <div className={css.min}>
                    <input
                        type="number"
                        placeholder="от"
                        value={min}
                        onChange={e=>{
                            setMin(e.target.value)
                            setValue([e.target.value, max])
                        }}
                    />
                </div>
                <div className={css.separator}>
                        -
                </div>
                <div className={css.max}>
                    <input type="number"
                           placeholder="до"
                           value={max}
                           onChange={e=>{
                               setMax(e.target.value)
                               setValue([min, e.target.value])
                           }}
                    />
                </div>
            </div>
            <div className={css.name}>
                <FilterAltIcon/>
                <p>ф</p>
                <p>и</p>
                <p>л</p>
                <p>ь</p>
                <p>т</p>
                <p>р</p>
            </div>
            {/*<button className={css.save} onClick={saveFilter}>*/}
            {/*    сохранить*/}
            {/*</button>*/}
        </div>
    );
};

export default Filter;