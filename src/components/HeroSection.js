import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

export default function HeroSection() {
    return (
    <div className='hero-container'>
        <video src="/videos/hero.mp4" autoPlay loop muted />
        <h1>Welcome to the Zoo</h1>
        <p>A Zoo where we obeserve the wildlife not trap it </p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Animals
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Contact<i className='fab '></i>
            </Button>
        </div>
    </div>
    );
}