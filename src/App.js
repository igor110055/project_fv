import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './containers/nav';

import Home from './pages/Home';
import Portfolio from'./pages/Portfolio';
import Research from'./pages/Research';
import Partners from'./pages/Partners';
import Search from './pages/Search';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Jobs from './pages/Jobs';

import JobsDetail from './pages/JobsDetail';
import ResearchDetail from './pages/ResearchDetail';

import './App.css';



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="research" element={<Research />} />
        <Route path="partners" element={<Partners />} />
        <Route path="search" element={<Search />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/tos-privacy" element={<Privacy />} />
        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobsDetail />} />
        <Route path="/research/:id" element={<ResearchDetail />} />
      </Routes>
    </div>
  );
}

export default App;
