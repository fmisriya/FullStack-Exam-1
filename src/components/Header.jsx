import React from "react";
export default function Header() {
    return (
        <header className="header">
            <h1>Tech Conference 2023</h1>
            <nav>
                <ul>
                    <li><a href="#event-details">Event Details</a></li>
                    <li><a href="#speakers">Speakers</a></li>
                    <li><a href="#schedule">Schedule</a></li>   
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}