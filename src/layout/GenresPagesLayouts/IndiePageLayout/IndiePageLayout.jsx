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

const IndiePageLayout = ({
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
 }) => {
  const tracklist = genresPagesData[0].indie.musicData;
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
        <img src={genresPagesData[0].indie.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link to="/chill">
            <PrevPageButton />
          </Link>
          <Link to="/jazz">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].indie.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].indie.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        <h3>songs</h3>
        {renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
};

export { IndiePageLayout };
