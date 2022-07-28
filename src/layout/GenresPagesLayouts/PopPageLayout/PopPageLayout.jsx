import React from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
  ChangePageButtonContainer,
GanrePageContainer,
GenreImageContainer,
GenreInfoContainer,
GenrePageDescription,
GenrePageName,
GenreTracklist,
NextPageButton,
PrevPageButton,
} from '../GenresPagesLayouts.styles';

const PopPageLayout = ({
genresPagesData,
setCurrentSong,
audioReferense,
currentPlaylist,
setCurrentPlaylist,
}) => {
  const tracklist = genresPagesData[0].pop.musicData;
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
        <img src={genresPagesData[0].pop.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link to="/hiphop">
            <PrevPageButton />
          </Link>
          <Link to="/rock">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].pop.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].pop.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        <h3>songs</h3>
        {renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
  };

export { PopPageLayout };
