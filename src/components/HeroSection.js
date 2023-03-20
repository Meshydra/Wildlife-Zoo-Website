import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

export default function HeroSection() {
    return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Sample Sites</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Trailer <i className='fab '></i>
            </Button>
        </div>
    </div>
    );
}
