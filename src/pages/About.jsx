import NavBar from "../componenti/NavBar";
import useCounterProva from "../hooks/useCounterProva";

function About() { 
    useCounterProva();
    return (
        <>    
            <NavBar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
                <h1 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">
                  Chi Siamo                    
               </h1>
                <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
                    Benvenuti su WanderCards! Siamo appassionati di viaggi e amiamo esplorare nuove città e luoghi affascinanti in tutto il mondo.
                    La nostra missione è ispirare e guidare i viaggiatori a scoprire nuove destinazioni attraverso esperienze autentiche e memorabili.
                </p>
                <div className="mt-8 flex flex-wrap justify-center">
                    <div className="m-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
                        <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Esplora le Città</h2>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                Ogni città ha la sua unica storia e fascino. Da New York a Tokyo, esplora le destinazioni più iconiche del mondo.
                            </p>
                        </div>
                    </div>
                    <div className="m-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
                        <img src="https://images.unsplash.com/photo-1499570023676-b0a761678e07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Landscape" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Scopri i Paesaggi</h2>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                Dai monti maestosi alle spiagge incontaminate, scopri la bellezza naturale che il nostro pianeta ha da offrire.
                            </p>
                        </div>
                    </div>
                    <div className="m-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
                        <img src="https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Culture" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Vivi le Culture</h2>
                            <p className="mt-2 text-gray-700 dark:text-gray-300">
                                Immergiti nelle culture locali, assapora la cucina tipica e partecipa alle tradizioni che rendono ogni luogo unico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default About;
