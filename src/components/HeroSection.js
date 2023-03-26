import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

export default function HeroSection() {
    return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Welcome to the Zoo</h1>
        <p>More information can be found below. </p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Animals
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Contact Us <i className='fab '></i>
            </Button>
        </div>
    </div>
    );
}
