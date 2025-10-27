import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import PlayerStats from './pages/PlayerStats';
import GameReviews from './pages/GameReviews';
import TrendyGame from './pages/TrendyGames';

export default function Project() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="player-status" element={<PlayerStats />} />
					<Route path="reviews" element={<GameReviews />} />
					<Route path="trendy-games" element={<TrendyGame />} />
					<Route path="about" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Project />
  </React.StrictMode>
);
