import React from 'react';
import css from "./MaleFemale.module.scss";
import {routhes} from "../../Utills/Routhes";
import {Link, useLocation} from "react-router-dom";

const MaleFemale = () => {
    const pathSplit = useLocation().pathname.split("/");

    return (
        <div className={css.main}>
            {
                routhes.map(({id, path, name})=>{
                    return (
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
    );
};

export default MaleFemale;