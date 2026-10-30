/*
Header component of the website. This component displays a simple greeting message which
changes with every re-render of the screen.
*/

// Imports for the component
import { greetings } from './greetings'; // Importing the list of greetings.
import Typewriter from "typewriter-effect"; // Typewriter effect for the heading.

export default function Header() {

    function generateRandomGreeting() {
        // Function to generate a random greeting from the imported greetings list.
        let greetingsLength = (greetings.length + 1);
        let greetingIndex = Math.floor(Math.random() * greetingsLength);
        
        return greetings[greetingIndex];
    }

    return (
        <header className='w-full h-32 flex justify-center items-center'>
            <h1 className='text-5xl text-default-text font-main'>
                <Typewriter options={{
                    strings: generateRandomGreeting(),
                    autoStart: true,
                    cursor: "_",
                    delay: 50
                }}/>
            </h1>
        </header>
    )
}