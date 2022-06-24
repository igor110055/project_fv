import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from'./pages/Portfolio';
import ContentResearch from './pages/ContentResearch';
import ContentNewsNEvents from './pages/ContentNewsNEvents';
import BuildAccelerator from './pages/BuildAccelerator';
import BuildHackathon from './pages/BuildHackathon';
import BuildPartner from './pages/BuildPartner';
import Media from './pages/Media';
import MoreTeam from './pages/MoreTeam';
import MoreJobs from './pages/MoreJobs';
import MoreContact from './pages/MoreContact';
import Search from './pages/Search';
import Privacy from './pages/Privacy';


// import Research from'./pages/Research';
// import Partners from'./pages/Partners';
// import Contact from './pages/Contact';
// import Jobs from './pages/Jobs';
// import JobsDetail from './pages/JobsDetail';
// import ResearchDetail from './pages/ResearchDetail';

import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/content/research" element={<ContentResearch />} />
        <Route path="/content/newsnevents" element={<ContentNewsNEvents />} />
        <Route path="/build/accelerator" element={<BuildAccelerator />} />
        <Route path="/build/hackathon" element={<BuildHackathon />} />
        <Route path="/build/partner" element={<BuildPartner />} />
        <Route path="media" element={<Media />} />
        <Route path="/more/team" element={<MoreTeam />} />
        <Route path="/more/jobs" element={<MoreJobs />} />
        <Route path="/more/contact" element={<MoreContact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tos-privacy" element={<Privacy />} />


        {/* 
        <Route path="research" element={<Research />} />
        <Route path="partners" element={<Partners />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/tos-privacy" element={<Privacy />} />
        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobsDetail />} />
        <Route path="/research/:id" element={<ResearchDetail />} /> 
        */}
      </Routes>
    </div>
  );
}

export default App;
