import React from 'react';
import './statistics.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Statistics = () => {

    const statistics = [
        { placed: "181", year: "2023 - 2024" },
        { placed: "181", year: "2022 - 2023" },
        { placed: "181", year: "2021 - 2022" },
        { placed: "181", year: "2020 - 2021" },
        { placed: "181", year: "2019 - 2020" },
        { placed: "181", year: "2018 - 2019" },
        { placed: "181", year: "2017 - 2018" },
        { placed: "181", year: "2016 - 2017" },
        { placed: "181", year: "2015 - 2016" },
        { placed: "181", year: "2014 - 2015" },
        { placed: "181", year: "2013 - 2014" },
        { placed: "181", year: "2012 - 2013" },
        { placed: "181", year: "2011 - 2012" },
    ];

    return (
        <div className='statistics-container'>
            <div className='statistics-container-inside'>
                <div><h2 className='statistics-title'>OUR STATISTICS</h2></div>
                <div className='stats-details-container'>
                    {statistics.map((stats, index) => (
                        <div className="stats-details">
                            <div className='placed-stats'>{stats.placed}</div>
                            <div className='year-flex'>
                            <div><CalendarMonthIcon style={{color: '#05624d'}} /></div>

                                <div>{stats.year}</div></div>
                        </div>
                    ))}
                </div>
            </div>
            <div class="arrow-left"></div>
        </div>
    );
};

export default Statistics;