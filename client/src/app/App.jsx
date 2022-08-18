import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './App.styles';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { Library } from '../pages/Library';
// genres pages
import { HipHopGenrePage } from '../pages/GenresPages/HipHopGenrePage';
import { PopGenrePage } from '../pages/GenresPages/PopGenrePage';
import { RockGenrePage } from '../pages/GenresPages/RockGenrePage';
import { ElectronicGenrePage } from '../pages/GenresPages/ElectronicGenrePage';
import { ChillGenrePage } from '../pages/GenresPages/ChillGenrePage';
import { IndieGenrePage } from '../pages/GenresPages/IndieGenrePage';
import { JazzGenrePage } from '../pages/GenresPages/JazzGenrePage';
import { FunkGenrePage } from '../pages/GenresPages/FunkGenrePage';
import { AmbientGenrePage } from '../pages/GenresPages/AmbientGenrePage';
import { PunkGenrePage } from '../pages/GenresPages/PunkGenrePage';

const App = () => {
  // Ref
  const audioReferense = useRef(null);
  GlobalStyles();
  return (
    <BrowserRouter>
      <Layout
        audioReferense={audioReferense}
      >
        <Routes>
          <Route
            path="/"
            element={(
              <Home audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/search"
            element={(<Search />)}
          />
          <Route
            path="/library"
            element={(<Library audioReferense={audioReferense} />)}
          />
          <Route
            path="/hiphop"
            element={(
              <HipHopGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/pop"
            element={(
              <PopGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/rock"
            element={(
              <RockGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/electronic"
            element={(
              <ElectronicGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/chill"
            element={(
              <ChillGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/indie"
            element={(
              <IndieGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/jazz"
            element={(
              <JazzGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/funk"
            element={(
              <FunkGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/ambient"
            element={(
              <AmbientGenrePage audioReferense={audioReferense} />
            )}
          />
          <Route
            path="/punk"
            element={(
              <PunkGenrePage audioReferense={audioReferense} />
            )}
          />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
};
export { App };
