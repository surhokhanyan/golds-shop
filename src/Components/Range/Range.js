import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider({value, handleChange}) {

    return (
        <Box sx={{ width: 150}}>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                min={0}
                max={10000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}
