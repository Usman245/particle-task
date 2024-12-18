import {useCallback} from 'react';
import Particles from 'react-tsparticles';
import './App.css';
import {loadSlim} from 'tsparticles-slim'
import Main from './components/Main';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PricingTable from './components/PricingTable';

const App = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <div>
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 8,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#CB0926",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }} />
            <Router>
            <div className="content">
     <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/features' element={<PricingTable/>}/>
     </Routes>
      </div>

            </Router>
    
    </div>
  );
};

export default App;
