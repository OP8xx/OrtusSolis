/*
Iconcloud component of the website. This is the main component of the website, which
displays a iconcloud with icons floating in it.
*/

// Imports for the component
import { Cloud } from 'react-icon-cloud';
import { icons } from './icons';

// Settings for the icon cloud
const cloudOptions = {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'pointer',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.03,
    minSpeed: 0.02,
    zoom: 0.80,
};

export default function IconCloud() {
    return (
      <div className="w-1/2 h-full flex justify-center items-center">
        <Cloud options={cloudOptions}>
          {icons.map((icon) => (
            <a 
            key={icon.name} 
            href={icon.url} 
            rel='noopener noreferrer'
            >
              <img src={icon.src} alt={icon.name} width="64" height="64" />
            </a>
          ))}
        </Cloud>
      </div>
    );
}