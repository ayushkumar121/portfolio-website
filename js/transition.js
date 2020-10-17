import Highway from '@dogstudio/highway'
import { TimelineLite } from 'gsap'

class Fade extends Highway.Transition {
    in({ from, to, done }) {
        from.remove()

        const tl = new TimelineLite()
        tl
            .to('.overlay', 0.5, { top: '-100%', ease: 'power2.out' })
            .to('#menu-button svg', 0.5, { fill: '#0a0a0a' })
            .fromTo(to.children[0], 0.5, { opacity: 0 }, {
                opacity: 1, onComplete: done
            })
    }

    out({ from, done }) {
        done()
    }
}

export default Fade