
import './style.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useRef } from 'react'

import Box from '@mui/material/Box';
import { Grid, ThemeProvider, Container, Typography, TextField, Button } from '@mui/material';
import theme from '../../HomlyTheme';

import SideNavbar from '../../Components/locationAdmin/SideNavbar'
import PageTitle from '../../Components/locationAdmin/PageTitle';
import CustomSelect from '../../Components/locationAdmin/CustomSelect/CustomSelect';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Select from 'react-select'




const HolidayHomeDetails = () => {
    const localizer = momentLocalizer(moment)
    const calendarRef = useRef();

    const [showNav, setShowNav] = useState('nav_grid_deactive')

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedHolidayHome, setSelectedHolidayHome] = useState('');


    const myEventsList = [
        { start: new Date(), end: new Date(), title: "special event" },
        { start: new Date(), end: new Date(), title: "special event" },
        { start: new Date(), end: new Date(), title: "special event" },
        { start: new Date(), end: new Date(), title: "special event" },
        { start: moment("2024-02-01T14:00:00").toDate(), end: moment("2024-02-01T14:00:00").toDate(), title: "special event" },

    ];
    const CustomToolbar = (toolbar) => {
        const goToBack = () => {
            toolbar.onNavigate('PREV');
        };

        const goToNext = () => {
            toolbar.onNavigate('NEXT');
        };

        const goToToday = () => {
            toolbar.onNavigate('');
        };

        return (
            <div className="rbc-toolbar">
                <ArrowBackIosIcon onClick={goToBack} sx={{ cursor: "pointer" }} />
                <Typography sx={{ color: 'Gray', fontSize: 18 }} className="rbc-toolbar-label">
                    {toolbar.label}
                </Typography>
                <hr />
                <ArrowForwardIosIcon onClick={goToNext} sx={{ cursor: "pointer" }} />
            </div>
        );
    };

    //Holidayhomes list
    const holidayHomes = [
        "holidayhome1",
        "holidayhome2",
        "holidayhome3",
        "holidayhome4",
        "nipunResort",
        "holidayhome6",
    ];

    //Month list
    const monthList = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Auguest",
        "September",
        "October",
        "November",
        "December",
    ];




    const handleSearch = () => {

        const newDate = moment(`${selectedYear}-${selectedMonth}-01T00:00:00`).toDate();

    };

    const handleClear = () => {
        setSelectedYear('');
        setSelectedMonth('');
        setSelectedHolidayHome('');
    }

    const [displayedRange, setDisplayedRange] = useState({
        start: moment().startOf('month'),
        end: moment().endOf('month'),
    });

    const handleDateClick = (event) => {
        // const selectedDate = moment(event.start);
        // const today = selectedDate.format('MMMM D, YYYY');
        // const selectedMonth = selectedDate.format('MMMM');
        // const selectedYear = selectedDate.format('YYYY');
        // // const currentMonth = displayedRange.start.format('MMMM');
        // console.log(selectedMonth);
        // console.log(selectedYear);
        console.log("hello");
        console.log('Clicked event:', event);
        const selectedDate = moment(event.start);
        console.log('Selected Date:', selectedDate.format('MMMM D, YYYY'));

    };

    return (
        <ThemeProvider theme={theme}>
            <Box className="main_container" sx={{ width: "100%", backgroundColor: 'primary.main', overflow: 'hidden' }}>
                <Container maxWidth="xl" style={{ padding: 0 }}>
                    <Grid container sx={{ position: 'relative' }}>
                        <Grid className={showNav} xs={3} sx={{ backgroundColor: "primary.main", height: "100vh" }}>
                            <SideNavbar setShowNav={setShowNav}></SideNavbar>
                        </Grid>
                        <Grid className='container_grid' xs={9} sx={{ backgroundColor: 'white', borderTopLeftRadius: '20px', padding: '10px 30px', height: '100vh', position: 'relative' }}>
                            <Box sx={{ height: "100%" }}>
                                <PageTitle setShowNav={setShowNav} title={'Holiday Homes Details'} bell={true} />
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2em', marginBottom: "2em" }}>
                                    <Box>
                                        <Select
                                            sx={{ backgroundColor: "white", opacity: "1", zIndex: "1000" }}
                                            className="basic-single"
                                            classNamePrefix={"Holiday Home"}
                                            isSearchable={true}
                                            name="color"
                                            options={holidayHomes.map((item) => {
                                                return { value: item, label: item }
                                            })}
                                            value={selectedHolidayHome}
                                            onChange={(value) => setSelectedHolidayHome(value)}
                                        />

                                    </Box>
                                    <Box className="input_container" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1em' }}>
                                        <TextField id="outlined-required" label="Year" placeholder='Year' size='small' value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} />
                                    </Box>
                                    <Box>
                                        <Select
                                            sx={{ backgroundColor: "white", opacity: "1", zIndex: "1000" }}
                                            className="basic-single"
                                            classNamePrefix={"Month"}
                                            isSearchable={true}
                                            name="color"
                                            options={monthList.map((item) => {
                                                return { value: item, label: item }
                                            })}
                                            value={selectedMonth}
                                            onChange={(value) => setSelectedMonth(value)}
                                        />

                                    </Box>
                                    <Box sx={{ display: 'flex', gap: "1em" }}>
                                        <Button variant="contained" sx={{ backgroundColor: "primary.main", textTransform: "capitalize", fontWeight: "bold", color: "white" }}><Typography sx={{ fontFamily: "sans-serif" }} variant='p' onClick={handleSearch}>Search</Typography> </Button>
                                        <Button variant="outlined" sx={{ textTransform: "capitalize", fontWeight: "bold", color: "primary.main" }}><Typography sx={{ fontFamily: "sans-serif" }} variant='p' onClick={handleClear}>Cancel</Typography> </Button>
                                    </Box>

                                </Box>
                                <Box sx={{ width: "90%", height: '430px', margin: '0 auto' }}>

                                    <Calendar
                                        localizer={localizer}
                                        events={myEventsList}
                                        views={{ month: true }}

                                        components={{
                                            toolbar: CustomToolbar,
                                        }}
                                        toolbar={true}
                                        ref={calendarRef}
                                        onSelectSlot={handleDateClick}
                                        
                                        selectable

                                    />
                                </Box>


                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default HolidayHomeDetails