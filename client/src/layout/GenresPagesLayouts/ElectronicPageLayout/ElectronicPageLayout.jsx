import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
  GanrePageContainer,
  GenreImageContainer,
  GenreInfoContainer,
  GenrePageDescription,
  GenrePageName,
  GenreTracklist,
  ChangePageButtonContainer,
  PrevPageButton,
  NextPageButton,
  SongListTitle,
  BlackLineContainer,
} from '../GenresPagesLayouts.styles';
import { LoadingBar } from '../../../components/LoadingBar/LoadingBar';

const ElectronicPageLayout = ({
  audioReferense,
}) => {
  const [backendData, setBackendData] = useState([]);

  const [genreInfo, setGenreInfo] = useState({
    GenreName: 'Electronic',
    GenrePageImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cm9uaWMlMjAlMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    GenreDescription: 'Electronic music is a genre of music that employs electronic musical instruments, digital instruments, or circuitry-based music technology in its creation. It includes both music made using electronic and electromechanical means (electroacoustic music). Pure electronic instruments depended entirely on circuitry-based sound generation, for instance using devices such as an electronic oscillator, theremin, or synthesizer. Electromechanical instruments can have mechanical parts such as strings, hammers, and electric elements including magnetic pickups, power amplifiers and loudspeakers. Such electromechanical devices include the telharmonium, Hammond organ, electric piano and the electric guitar',

  });

  useEffect(() => {
    fetch('http://localhost:3200/api/electronicdata')
      .then((resp) => resp.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const renderTracklist = backendData.map((song) => (
    <GenrePageTracklistItem
      key={song.id}
      song={song}
      tracklist={backendData}
      audioReferense={audioReferense}
    />
  ));

  return (
    <GanrePageContainer>
      <BlackLineContainer>
        <ChangePageButtonContainer>
          <Link to="/rock">
            <PrevPageButton />
          </Link>
          <Link to="/chill">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
      </BlackLineContainer>
      <GenreImageContainer>
        <img src={genreInfo.GenrePageImage} alt={genreInfo.GenreName} />

        <GenreInfoContainer>
          <GenrePageName>{genreInfo.GenreName}</GenrePageName>
          <GenrePageDescription>
            {genreInfo.GenreDescription}
          </GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        {backendData.length === 0
          ? <SongListTitle>Loading...</SongListTitle>
          : <SongListTitle>Songs</SongListTitle>}
        {backendData.length === 0
          ? <LoadingBar />
          : renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
};

export { ElectronicPageLayout };
