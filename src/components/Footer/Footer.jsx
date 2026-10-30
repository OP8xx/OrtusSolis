/*
Footer component of the website. This component displays the name of the website as well
as the current version of the website.
*/

// Imports for the components
import versionIcon from '../../assets/version-icon.svg';

export default function Footer() {
    return (
        <footer className='w-full h-24 flex justify-center items-center'>
            <div className='flex justify-center items-center gap-2'>
                <img src={versionIcon} alt="" className='w-6 h-6'/>
                <p>1.0</p>
            </div>
        </footer>
    )
}