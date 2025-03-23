import { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const cursorContainerRef = useRef(null);
    const cursorRingRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        // Variables for cursor position
        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;
        let dotX = 0;
        let dotY = 0;

        // Update mouse position on mousemove
        const updateMousePosition = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // Animation function for smooth following effect
        const animateCursor = () => {
            // Ring follows with delay (smoother effect)
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            
            // Dot follows more quickly (more responsive)
            dotX += (mouseX - dotX) * 0.35;
            dotY += (mouseY - dotY) * 0.35;
            
            if (cursorRingRef.current && cursorDotRef.current) {
                cursorRingRef.current.style.left = `${ringX}px`;
                cursorRingRef.current.style.top = `${ringY}px`;
                
                cursorDotRef.current.style.left = `${dotX}px`;
                cursorDotRef.current.style.top = `${dotY}px`;
            }
            
            requestAnimationFrame(animateCursor);
        };

        // Add hover effect for interactive elements
        const addInteractivity = () => {
            const interactiveElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], .clickable');
            
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorRingRef.current.classList.add('cursor-hover');
                    cursorDotRef.current.classList.add('cursor-hover');
                });
                
                el.addEventListener('mouseleave', () => {
                    cursorRingRef.current.classList.remove('cursor-hover');
                    cursorDotRef.current.classList.remove('cursor-hover');
                });
            });
        };

        // Initialize
        document.addEventListener('mousemove', updateMousePosition);
        animateCursor();
        addInteractivity();
        
        // Hide default cursor
        document.body.style.cursor = 'none';
        
        // Cleanup
        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div className="cursor-ring" ref={cursorRingRef}></div>
            <div className="cursor-dot" ref={cursorDotRef}></div>
        </>
    );
};

export default Cursor;