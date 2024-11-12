import styles from './App.module.scss';
import classNames from 'classnames';
import { Navbar } from './components/navbar/navbar';
import { HeroScreen } from './components/hero-screen/hero-screen';
import { ThemeProvider } from './context/ThemeContext';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Experts } from './pages/experts/experts';

function App() {
    return (
        <Router>
            <ThemeProvider>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HeroScreen />} />
                        <Route path="/experts" element={<Experts />} />
                    </Routes>
                </main>
            </ThemeProvider>
        </Router>
    );
}

export default App;
