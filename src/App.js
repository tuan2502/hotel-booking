import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Search from './pages/search/Search';
import Main from './layout/Main';
import Header from './layout/Header';
import Navbar from './layout/navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="search"
          element={<Search />}
        />
        <Route
          path="detail"
          element={<Detail />}
        />
      </Route>
    </Routes>
  );
}

export default App;
