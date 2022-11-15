import React from 'react';
import css from "./SectionOne.module.scss";
import SearchIcon from '@mui/icons-material/Search';
const SectionOne = ({searchVal,setSearchVal}) => {
    return (
        <div>
            <section className={css.one}>
                <label>
                    <input
                        type="search"
                        placeholder="поиск"
                        value={searchVal}
                        onChange={e=>setSearchVal(e.target.value)}
                    />
                    <div className={css.icon}>
                        <SearchIcon/>
                    </div>
                </label>
            </section>
        </div>
    );
};

export default SectionOne;