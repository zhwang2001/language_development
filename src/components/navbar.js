import {Box, Slider} from "@mui/material";

export default function Navbar({setValue}) {
    const marks = [
        {value: 1, label: "Age 1"},
        {value: 2, label: "Age 2"},
        {value: 3, label: "Age 3"},
    ]

    const handleSliderChange = (_, newValue) => {
        setValue(newValue - 1)
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '0px', marginBottom: '30px' }}>
            <Slider
                aria-label="Age"
                defaultValue={1}
                getAriaValueText={0}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks={marks}
                onChange={handleSliderChange}
                min={1}
                max={3}
                style={{width: 300}}
            />
        </Box>
    )
}
