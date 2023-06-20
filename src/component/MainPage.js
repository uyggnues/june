import React from 'react';

const MainPage = () => {
    return (
        <div className='mainpage'>
            <img href='/'className='main_pic' src={'https://digitalsynopsis.com/wp-content/uploads/2017/06/beautiful-color-palettes-combinations-schemes-pastel-rainbow.png'} alt='img'/>
            <p className="homepage_text">PALETTE BY HAZEL IS A BRAND DEDICATED TO PERSONAL COLOR ANALYSIS, DRIVEN BY A MISSION TO CELEBRATE THE UNIQUENESS OF EACH INDIVIDUAL. OUR ULTIMATE AIM IS TO ACHIEVE A HARMONIOUS BALANCE. WITH A PALETTE OF 17 MAIN TYPES, OUR GREATEST SATISFACTION LIES IN WITNESSING INDIVIDUALS DISCOVERING A PROFOUND LOVE AND APPRECIATION FOR THEMSELVES THROUGH THE EXPLORATION OF THEIR OWN IDENTITY.</p>
            <div className="home_info">
                <ul>
                Hazel Lee
                <br/>
                EMAIL | palettebyhazel@gmail.com
                <br/>
                PHONE | 7142512064
                </ul>
                <ul>OPEN | WED — SAT (1PM — 6PM)
                CLOSED | SUN — TUES</ul>
                <ul><p>ADDRESS |</p> <p> 3313 Hyland Ave
                Costa Mesa, CA 92626
                United States</p></ul>
                <ul>INSTAGRAM | @palettebyhazel</ul>
            </div>
        </div>
    );
}

export default MainPage;
