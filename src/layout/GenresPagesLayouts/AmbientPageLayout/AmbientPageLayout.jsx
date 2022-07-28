import React from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
GanrePageContainer,
GenreImageContainer,
GenrePageDescription,
GenreInfoContainer,
GenrePageName,
GenreTracklist,
ChangePageButtonContainer,
PrevPageButton,
NextPageButton,
} from '../GenresPagesLayouts.styles';

const AmbientPageLayout = ({
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
 }) => {
  const tracklist = genresPagesData[0].ambient.musicData;
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
        <img src={genresPagesData[0].ambient.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link to="/funk">
            <PrevPageButton />
          </Link>
          <Link to="/punk">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].ambient.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].ambient.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        <h3>songs</h3>
        {renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
  };

export { AmbientPageLayout };
