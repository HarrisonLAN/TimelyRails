
import Link from 'next/link';
import Image from 'next/image'
import anime from 'animejs'
import { useEffect } from 'react';

export default function hero() {
    useEffect(() => {
        anime({
            targets: '.trainLine1',
            width: '10%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
            duration: 10000
          }),
          anime({
            targets: '.trianLine2',
            width: '20%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
            duration: 10000
          }),
          anime({
            targets: '.trainLine3',
            width: '30%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
            duration: 10000
          }),
          anime({
            targets: '.trainLine4',
            width: '40%',
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
            duration: 10000
          });
    }, []);


    return (
        <div className="h-40 relative flex flex-wrap justify-center items-center w-full relative">
            <div className="trainLine1"></div>
            <div className="trianLine2"></div>
            <div className="trainLine3"></div>
            <div className="trainLine4"></div>
            <div className='text-searchBTN font-bold text-4xl  m-auto h-auto absolute'> Live Trains</div>
        </div>
    )
}