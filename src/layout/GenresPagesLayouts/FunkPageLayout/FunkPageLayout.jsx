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

const FunkPageLayout = ({
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
 }) => {
  const tracklist = genresPagesData[0].funk.musicData;
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
        <img src={genresPagesData[0].funk.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link to="/jazz">
            <PrevPageButton />
          </Link>
          <Link to="/ambient">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].funk.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].funk.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        <h3>songs</h3>
        {renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
  };

export { FunkPageLayout };
