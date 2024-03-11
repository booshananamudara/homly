import { Typography } from '@mui/material';
import React, { useState } from 'react';
import './reviews.css';
import profilepicture from '../../Assets/images/profile picture-1 2.png';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

function App() {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));


    const FacilityRating = ({ title, value }) => (
        <div className="facility-rating">
            <div className="title">{title}</div>
            <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress variant="determinate" value={value} />
            </Box>
        </div>
    );

    const [cards] = useState([
        {
            title: 'user 1',date:'10/02/2024',
            text: `Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum. Lorem ipsum Lorem
            .`
        },
        {
            title: 'user - 2', date:'10/02/2024',
            text: `Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum. Lorem ipsum Lorem
             ipsum Lorem ipsum Lorem ipsum Lorem ipsum.`
        },
        {
            title: 'user - 3', date:'10/02/2024',
            text: `Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum. Lorem ipsum Lorem
             ipsum Lorem ipsum Lorem ipsum Lorem ipsum.`
        },
        {
            title: 'user - 4', date:'10/02/2024',
            text: `Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum. Lorem ipsum Lorem
             ipsum Lorem ipsum Lorem ipsum Lorem ipsum.`
        },
        {
            title: 'user - 5', date:'10/02/2024',
            text: `Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum. Lorem ipsum Lorem
             ipsum Lorem ipsum Lorem ipsum Lorem ipsum.`
        },
        {
            title: 'user - 6', date:'10/02/2024',
            text: `Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum. Lorem ipsum Lorem
             ipsum Lorem ipsum Lorem ipsum Lorem ipsum.`
        }
    ]);

    return (
        <div>
            <section>
                <div className='container'>
                    <h2>Reviews</h2>

                {/* //proges bar */}
                        <div className="facility-ratings">
                    <div className="row">
                        <div className="column">
                            <FacilityRating title="Staff" value={80} />
                            <FacilityRating title="Cleanliness" value={70} />
                            <FacilityRating title="Value for Money" value={85} />
                        </div>
                        <div className="column">
                            <FacilityRating title="Facilities" value={75} />
                            <FacilityRating title="Comfort" value={90} />
                            <FacilityRating title="Location" value={65} />
                        </div>
                    </div>
                </div>



                    <div className='cards'>
                        {cards.map((card, i) => (
                            <div key={i} className='card'>

                                <div className='userinfo'> 
                                <div class="userpic"> <img src={profilepicture}  alt="ProfilePic" /> 
                                <div className='name1'>
                                <h3>{card.title}</h3>
                                 <h4>{card.date}</h4>
                                </div> </div>
                                </div>

                              <div className="cardText">  <Typography>{card.text}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
