import React from 'react';
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
} from '../GenresPagesLayouts.styles';

const JazzPageLayout = ({
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
 }) => {
  const tracklist = genresPagesData[0].jazz.musicData;
  const renderTracklist = tracklist.map((song) => (
    <GenrePageTracklistItem
      song={song}
      tracklist={tracklist}
      setCurrentSong={setCurrentSong}
      audioReferense={audioReferense}
      currentPlaylist={currentPlaylist}
      setCurrentPlaylist={setCurrentPlaylist}
    />
 ));

  return (
    <GanrePageContainer>
      <GenreImageContainer>
        <img src={genresPagesData[0].jazz.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link to="/indie">
            <PrevPageButton />
          </Link>
          <Link to="/funk">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].jazz.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].jazz.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        <h3>songs</h3>
        {renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
};

export { JazzPageLayout };
