/*
Header component of the website. This component displays a simple greeting message which
changes with every re-render of the screen.
*/

// Imports for the component
import { greetings } from './greetings'; // Importing the list of greetings.
import Typewriter from "typewriter-effect"; // Typewriter effect for the heading.
import { useEffect, useState } from 'react';

export default function Header() {

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    function generateRandomGreeting() {
        // Function to generate a random greeting from the imported greetings list.
        let greetingsLength = (greetings.length + 1);
        let greetingIndex = Math.floor(Math.random() * greetingsLength);
        
        return greetings[greetingIndex];
    }

    return (
        <header className='w-full h-32 flex justify-center items-center relative'>
            <h1 className='text-5xl text-default-text font-main dark:text-default-background'>
                <Typewriter options={{
                    strings: generateRandomGreeting(),
                    autoStart: true,
                    cursor: "_",
                    delay: 50
                }}/>
            </h1>

            <div className='h-full w-32 mr-10 absolute right-0 top-0 flex justify-center items-center'>
                <p 
                className='w-1/4 flex justify-center border border-gray-300 rounded-lg hover:cursor-pointer dark:border-gray-500'
                onClick={() => setTheme('light')}
                >L</p>

                <p className='w-1/4 flex justify-center'>/</p>

                <p 
                className='w-1/4 flex justify-center border border-gray-300 rounded-lg hover:cursor-pointer dark:border-gray-500'
                onClick={() => setTheme('dark')}
                >D</p>
            </div>
        </header>
    )
}