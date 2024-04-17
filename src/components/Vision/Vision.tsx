"use client"
import { useEffect, useState, useRef } from 'react';
import Responsivecontainer from './Responsivecontainer';
import Container from './Container';

const MotionPathAnimation = () => {


    return (
        <div className="container min-h-screen py-8 md:py-32">
            <div className="px-2 py-4 text-center text-4xl font-semibold capitalize md:px-0 md:text-5xl">
                design, build and scale your
                <br />
                vision with us
            </div>
            <Responsivecontainer />
            <Container />
        </div>
    );
};

export default MotionPathAnimation;
