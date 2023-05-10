import Calendar from "react-calendar";
import React, { useState } from 'react';
// import 'react-calendar/dist/Calendar.css';

function MyCalendarCard() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="my-trail-card">
            <h1>My Calendar</h1>
            <div className="calendar-card-container">
                <Calendar locale='en-US' weekStartsOn={0} onChange={onChange} value={value}/>
            </div>
        </div>
    )
}
export default MyCalendarCard;