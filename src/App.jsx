
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo1 } from './assets';
import { Home, Challenges, Proposals, Proposers, Funds, Project, AChallenge } from './pages';
import { Footer, NavBar } from './components';
import { React, useState } from 'react';
const App = () => {

  return (
    <BrowserRouter>
      <header className="w-full sticky top-0 z-50">
        <NavBar />
      </header>

      <main className="sm:p-8 px-10 py-8 w-full bg-[#fdfefe] min-h-[calc(100vh-73px)] relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/proposals/:proposalId" element={<Proposals />} />
          <Route path="/proposers" element={<Proposers />} />
          <Route path="/funds/:fundId" element={<Funds />} />
          <Route path="/project" element={<Project />} />
          <Route path="/challenges/:challengeId" element={<AChallenge />} />

        </Routes>

      </main>
      <Footer />
    </BrowserRouter>

  ),
    { basename: '/eth-search' }
};

export default App;

