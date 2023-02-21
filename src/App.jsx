
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo1 } from './assets';
import { Home, Challenges, Proposals, Proposers, Funds } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo1} alt="logo" className="w-28 object-contain" />
        </Link>

      <Link to="https://easterntownhall.com/" className="font-nunito font-bold text-[#DF5F3D] px-4 py-2 rounded-md">Docs</Link>
      <Link to="/funds" className="font-nunito font-bold text-[#DF5F3D] px-4 py-2 rounded-md">Funds</Link>
      <Link to="/challenges" className="font-nunito font-bold text-[#DF5F3D] px-4 py-2 rounded-md">Challenges</Link>
      <Link to="/proposals" className="font-nunito font-bold text-[#DF5F3D] px-4 py-2 rounded-md">Proposals</Link>
      <Link to="/proposers" className="font-nunito font-bold text-[#DF5F3D] px-4 py-2 rounded-md">Proposers</Link>

    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/proposers" element={<Proposers />} />
        <Route path="/funds" element={<Funds />} />

      </Routes>
    </main>
    </BrowserRouter>
  )

  };

  export default App;

