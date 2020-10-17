import Highway from '@dogstudio/highway'

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Fade from './transition'

const menuTrigger = document.querySelector('#menu-button')

const _pageTransition = new Highway.Core({
    transitions: {
        default: Fade
    }
})

document.querySelectorAll('.animated-text').forEach(at => {
    gsap.from(at, 1, {
        scrollTrigger: at,
        y: 50,
        opacity: 0
    });
})

var menuToggled = false

menuTrigger.addEventListener('click', () => {
    if (!menuToggled) {
        gsap.to('.overlay', .5, { top: '0%', ease: 'power2.out' })
        gsap.to('#menu-button svg', .5, { fill: '#fff' })
    }
    else {
        gsap.to('.overlay', .5, { top: '-100%', ease: 'power2.out' })
        gsap.to('#menu-button svg', .5, { fill: '#0a0a0a' })
    }

    menuToggled = !menuToggled
})