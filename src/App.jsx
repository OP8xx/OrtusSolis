/*
React based website made to display at the start of your browser.
Displays a different fun header title every time you open this website.
Has multiple useful app icons to direct you to the website of those useful university apps.

Made as a personal fun coding hobby project. Maintained via github and hosted through vercel.
*/

// Component imports
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IconCloud from './components/IconCloud/IconCloud';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

// App.css import to use tailwind.
import './App.css';

function App() {

  return (
    <div className='w-screen h-screen bg-default-background flex flex-col items-center justify-between'>
      <Header/>
      <main className='h-3/4 w-full flex'>
        <WeatherInfo/>
        <IconCloud/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
