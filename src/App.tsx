import styles from './App.module.scss';
import classNames from 'classnames';
import { Navbar } from './components/navbar/navbar';
import { HeroScreen } from './components/hero-screen/hero-screen';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <>
            <ThemeProvider>
                <Navbar />
                <main>
                    <HeroScreen />
                </main>
            </ThemeProvider>
        </>
    );
}

export default App;
