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
NextPageButton,
PrevPageButton,
ChangePageButtonContainer,
} from '../GenresPagesLayouts.styles';

const ChillPageLayout = ({
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,

 }) => {
  const tracklist = genresPagesData[0].chill.musicData;
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
        <img src={genresPagesData[0].chill.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link to="/electronic">
            <PrevPageButton />
          </Link>
          <Link to="/indie">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>

        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].chill.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].chill.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        <h3>songs</h3>
        {renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
  };

export { ChillPageLayout };
