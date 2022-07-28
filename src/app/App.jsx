import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalStyles } from './App.styles';
import Layout from '../layout/Layout';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { Library } from '../pages/Library';
// json data
import { Genres } from '../data/genresSearchPageData';
import { GenresIndividualData } from '../data/genresIndividualPageData';
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

    // States
    const isPlaying = useSelector((state) => state.isPlaying.value);
    const [isOpenPlayer, setIsOpenPlayer] = useState(false);
    const [startPageSongs, setStartPageSongs] = useState(GenresIndividualData[0].recommended);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const [genresSearchPageData, setGenresSearchPageData] = useState(Genres);
    const [genresPagesData, setGenresPagesData] = useState(GenresIndividualData);
    const [currentSong, setCurrentSong] = useState(startPageSongs[0]);
    genresPagesData[0].listen_again;
    // state for audio time
    const [songTimeInfo, setSongTimeInfo] = useState({
    currentTrackTime: 0,
    currentTrackDuration: 0,
  });

  const timeUpdateHandler = (e) => {
    const { currentTime } = e.target;
    const { duration } = e.target;
    setSongTimeInfo({
    ...songTimeInfo,
    currentTrackTime: currentTime,
    currentTrackDuration: duration,
      });
  };

  const autoSkipAudio = async () => {
    const currentTrackIndex = currentPlaylist.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(currentPlaylist[(currentTrackIndex + 1) % currentPlaylist.length]);
    if (isPlaying) audioReferense.current.play();
};

    GlobalStyles();
    return (
      <BrowserRouter>
        <Layout
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songTimeInfo={songTimeInfo}
          setSongTimeInfo={setSongTimeInfo}
          timeUpdateHandler={timeUpdateHandler}
          audioReferense={audioReferense}
          autoSkipAudio={autoSkipAudio}
          currentPlaylist={currentPlaylist}
          setCurrentPlaylist={setCurrentPlaylist}
          isOpenPlayer={isOpenPlayer}
          setIsOpenPlayer={setIsOpenPlayer}
        >
          <Routes>
            <Route
              path="/"
              element={(
                <Home
                  startPageSongs={startPageSongs}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                  genresPagesData={genresPagesData}
                  // isOpenPlayer={isOpenPlayer}
                />
          )}
            />
            <Route
              path="/search"
              element={(
                <Search
                  genresSearchPageData={genresSearchPageData}
                />
)}
            />
            <Route
              path="/library"
              element={(
                <Library />
)}
            />
            <Route
              path="/hiphop"
              element={(
                <HipHopGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/pop"
              element={(
                <PopGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
          )}
            />
            <Route
              path="/rock"
              element={(
                <RockGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/electronic"
              element={(
                <ElectronicGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/chill"
              element={(
                <ChillGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/indie"
              element={(
                <IndieGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/jazz"
              element={(
                <JazzGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/funk"
              element={(
                <FunkGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/ambient"
              element={(
                <AmbientGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
            <Route
              path="/punk"
              element={(
                <PunkGenrePage
                  genresPagesData={genresPagesData}
                  setCurrentSong={setCurrentSong}
                  audioReferense={audioReferense}
                  currentPlaylist={currentPlaylist}
                  setCurrentPlaylist={setCurrentPlaylist}
                />
)}
            />
          </Routes>
        </Layout>
      </BrowserRouter>

    );
};
export { App };
