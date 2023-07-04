import React from 'react';

const Book = () => {
    return (
        <div className='every_other_page'>
            <div className='book_appointment'>
                CLICK HERE TO BOOK
                <br/>
                YOUR APPOINTMENT
            </div>
            <div className='courses'>
                <div className='course'>
                    <div className='course_border'>
                        <ul className='course_text'>
                            <img href='/' className='booking_img' src={'https://em-content.zobj.net/thumbs/160/apple/354/alarm-clock_23f0.png'}   alt='img'/> 90 minutes
                            <br/>
                        
                            <img href='/' className='booking_img' src={'https://em-content.zobj.net/thumbs/160/apple/354/artist-palette_1f3a8.png'}   alt='img'/> intro to personal color and pccs tones
                            <br/>
                        
                            <img href='/' className='booking_img' src={'https://em-content.zobj.net/thumbs/120/apple/354/rainbow_1f308.png'}   alt='img'/> 120 + color fabric draping 
                            <br/>
                        
                            <img href='/' className='booking_img' src={'https://em-content.zobj.net/thumbs/160/apple/354/spiral-notepad_1f5d2-fe0f.png'}   alt='img'/> personal color palette explanation 
                            <br/>
                            (physical palette card provided)
                        </ul>
                    </div>
                    <div className='course_amount'>
                        Palette Course
                        <div className='course_amount_money'>
                            <div><s>$120</s></div> <div>$50 limited only</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Book;