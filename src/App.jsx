import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip as MapTooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// EDF Colors
const EDF_COLORS = {
  orange: '#FF6B00',
  blue: '#0058A3',
  green: '#00B050',
  darkBlue: '#003D6D'
};

// Data for charts (September 2024 to September 2025)
const CHART_DATA = [
  { month: 'Sep 24', apprentissage: 50, cafes: 15, bugs: 0, presentations: 0 },
  { month: 'Oct 24', apprentissage: 0, cafes: 0, bugs: 0, presentations: 0 },
  { month: 'Nov 24', apprentissage: 20, cafes: 8, bugs: 5, presentations: 0 },
  { month: 'Déc 24', apprentissage: 0, cafes: 0, bugs: 0, presentations: 0 },
  { month: 'Jan 25', apprentissage: -1, cafes: 0, bugs: 12, presentations: 1 },
  { month: 'Fév 25', apprentissage: 35, cafes: 16, bugs: 22, presentations: -2 },
  { month: 'Mar 25', apprentissage: 0, cafes: 0, bugs: 0, presentations: 2 },
  { month: 'Avr 25', apprentissage: 86, cafes: 20, bugs: 33, presentations: 2 },
  { month: 'Mai 25', apprentissage: 97, cafes: 52, bugs: 61, presentations: 2.5 },
  { month: 'Jun 25', apprentissage: 117, cafes: 36, bugs: 47, presentations: 6 },
  { month: 'Jul 25', apprentissage: 162, cafes: 23, bugs: 38, presentations: 6.5 },
  { month: 'Aoû 25', apprentissage: 193, cafes: 17, bugs: 42, presentations: 7 },
  { month: 'Sep 25', apprentissage: 291, cafes: 10, bugs: 17, presentations: 8 }
];

// Header Component
const Header = () => (
  <div className="text-center py-8 md:py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white px-4">
    <h1 className="text-3xl md:text-6xl font-bold mb-4">Merci EDF</h1>
    <p className="text-lg md:text-2xl mb-2">Grand merci à <b>Alexandra</b> et <b>Guillaume</b>!</p>
    <p className="text-base md:text-lg opacity-80">Septembre 2024 - Septembre 2025</p>
    <p className="text-base md:text-lg opacity-80">Merci aussi à <b>Anne</b>, <b>Lucas</b>, <b>Kalma</b>, <b>Vincenzo</b>, <b>Lise</b> et les OSEs!</p>
    <div className="mt-8 text-xs md:text-sm opacity-70">
      ⬇️ Scrolle pour revivre l'aventure ⬇️
    </div>
  </div>
);

// Intro Section
const IntroSection = ({ isVisible }) => (
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="w-full p-4 md:p-12 mb-12 bg-white shadow-md border-y border-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center" style={{ color: EDF_COLORS.orange }}>
        Une Année Inoubliable !
      </h2>
      <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
        De septembre 2024 à septembre 2025, nous avons codé, debuggé, et partagé des cafés ensemble.
        Après 4 mois loin de l'équipe, je suis super heureux de revenir parmi vous !
      </p>
    </div>
  </div>
);

// Line Chart Component
const ApprentissageChart = ({ isVisible }) => (
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="w-full p-4 md:p-12 mb-12 bg-white shadow-md border-y border-gray-100">
      <h3 className="text-xl md:text-3xl font-bold mb-6 text-center" style={{ color: EDF_COLORS.blue }}>
        📈 Taux d'Apprentissage
      </h3>
      <div className="h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} interval={1} />
            <YAxis domain={[0, 100]} label={{ value: 'Taux (%)', angle: -90, position: 'insideLeft' }} />
            <ChartTooltip />
            <Line type="monotone" dataKey="apprentissage" stroke={EDF_COLORS.orange} strokeWidth={3} dot={{ fill: EDF_COLORS.orange, r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

// Cafés Chart
const CafesChart = ({ isVisible }) => (
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="w-full p-4 md:p-12 mb-12 bg-white shadow-md border-y border-gray-100">
      <h3 className="text-xl md:text-3xl font-bold mb-6 text-center" style={{ color: EDF_COLORS.blue }}>
        ☕ Cafés Partagés Ensemble
      </h3>
      <div className="h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} interval={1} />
            <YAxis label={{ value: 'Nombre de cafés', angle: -90, position: 'insideLeft' }} />
            <ChartTooltip />
            <Bar dataKey="cafes" fill={EDF_COLORS.blue} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

// Bugs Chart
const BugsChart = ({ isVisible }) => (
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="w-full p-4 md:p-12 mb-12 bg-white shadow-md border-y border-gray-100">
      <h3 className="text-xl md:text-3xl font-bold mb-6 text-center" style={{ color: EDF_COLORS.blue }}>
        🐛 Bugs Corrigés en Équipe
      </h3>
      <div className="h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} interval={1} />
            <YAxis label={{ value: 'Bugs corrigés', angle: -90, position: 'insideLeft' }} />
            <ChartTooltip />
            <Bar dataKey="bugs" fill={EDF_COLORS.green} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

// Presentations Chart
const PresentationsChart = ({ isVisible }) => (
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="w-full p-4 md:p-12 mb-12 bg-white shadow-md border-y border-gray-100">
      <h3 className="text-xl md:text-3xl font-bold mb-6 text-center" style={{ color: EDF_COLORS.blue }}>
        🎤 Score de Mes Présentations
      </h3>
      <div className="h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} interval={1} />
            <YAxis domain={[0, 10]} label={{ value: 'Score /10', angle: -90, position: 'insideLeft' }} />
            <ChartTooltip />
            <Bar dataKey="presentations" fill={EDF_COLORS.orange} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

// Map Component (SVG-based with accurate France outline)
const MapComponent = ({ isVisible }) => (
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="w-full p-4 md:p-12 mb-12 bg-white shadow-md border-y border-gray-100">
      <h3 className="text-xl md:text-3xl font-bold mb-6 text-center" style={{ color: EDF_COLORS.blue }}>
        🗺️ Carte des Voyages
      </h3>
      <div className="relative w-full h-64 md:h-96 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={[48.5, 0]}
          zoom={8}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%', zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Paris */}
          <CircleMarker
            center={[48.8566, 2.3522]}
            radius={8}
            pathOptions={{ color: 'white', fillColor: EDF_COLORS.blue, fillOpacity: 1, weight: 2 }}
          >
            <MapTooltip direction="top" offset={[0, -10]} opacity={1} permanent>
              Paris 🏢
            </MapTooltip>
          </CircleMarker>

          {/* Rennes */}
          <CircleMarker
            center={[48.1173, -1.6778]}
            radius={8}
            pathOptions={{ color: 'white', fillColor: EDF_COLORS.green, fillOpacity: 1, weight: 2 }}
          >
            <MapTooltip direction="top" offset={[0, -10]} opacity={1} permanent>
              Rennes 🚄
            </MapTooltip>
          </CircleMarker>

          {/* Path */}
          <Polyline
            positions={[[48.8566, 2.3522], [48.1173, -1.6778]]}
            pathOptions={{ color: EDF_COLORS.orange, dashArray: '10, 10', weight: 4, opacity: 0.8 }}
          />
        </MapContainer>
      </div>
      <p className="text-center mt-4 text-sm md:text-base text-gray-600">
        Plus de 350 km parcourus entre nos deux sites ! (OpenStreetMap)
      </p>
    </div>
  </div>
);

// Conclusion Section
const ConclusionSection = ({ isVisible }) => (
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="w-full p-4 md:p-12 mb-12 bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl text-white border-y border-orange-400">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
        Etes-vous prêt pour la suite ?
      </h2>
      <p className="text-lg md:text-xl text-center leading-relaxed mb-8">
        Merci d'avoir accepté mon retour dans l'équipe. Prêt à créer de nouvelles
        stats ensemble à partir de maintenant !
      </p>
      <div className="text-center text-sm opacity-90">
        Continue à scroller... ⬇️
      </div>
    </div>
  </div>
);

// Main App Component
export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    intro: false,
    apprentissage: false,
    cafes: false,
    bugs: false,
    presentations: false,
    map: false,
    conclusion: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const progress = (scrollTop / maxScroll) * 100;

      setScrollProgress(progress);

      // Trigger End Scene when reaching the very end
      if (progress > 99 && !isFinished) {
        setIsFinished(true);
      }

      // Show sections based on scroll position
      const sections = ['intro', 'apprentissage', 'cafes', 'bugs', 'presentations', 'map', 'conclusion'];
      const newVisible = {};

      sections.forEach((section, index) => {
        const threshold = (index + 1) * (100 / (sections.length + 1));
        newVisible[section] = progress > threshold - 10;
      });

      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFinished]);

  if (isFinished) {
    return (
      <div className="fixed inset-0 min-h-screen w-full flex items-center justify-center z-50 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-white">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl px-6 text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium tracking-wider uppercase mb-4 animate-bounce-subtle">
              Une nouvelle étape
            </div>

            <h1 className="text-3xl md:text-6xl font-serif text-gray-900 leading-tight">
              Et là mes camarades, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                une nouvelle histoire
              </span> commence.
            </h1>

            <div className="pt-8">
              <p className="text-lg md:text-2xl text-gray-500 font-light italic mb-12">
                Comment disent les brésiliens :
              </p>

              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <span className="relative px-8 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center divide-x divide-gray-200">
                  <span className="pr-6 text-gray-900 group-hover:text-blue-600 transition duration-200 text-2xl md:text-5xl font-black tracking-tighter">
                    SO BORA ! 🚀
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            background: `linear-gradient(to right, ${EDF_COLORS.blue}, ${EDF_COLORS.orange}, ${EDF_COLORS.green})`
          }}
        />
      </div>

      <Header />

      <div className="pb-32">
        <IntroSection isVisible={visibleSections.intro} />

        <ApprentissageChart isVisible={visibleSections.apprentissage} />

        <CafesChart isVisible={visibleSections.cafes} />

        <BugsChart isVisible={visibleSections.bugs} />

        <PresentationsChart isVisible={visibleSections.presentations} />

        <MapComponent isVisible={visibleSections.map} />

        <ConclusionSection isVisible={visibleSections.conclusion} />
      </div>
    </div>
  );
}