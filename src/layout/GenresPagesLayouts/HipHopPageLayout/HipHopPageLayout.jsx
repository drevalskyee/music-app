import React from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
GanrePageContainer,
GenreImageContainer,
ChangePageButtonContainer,
GenrePageName,
GenreTracklist,
GenrePageDescription,
GenreInfoContainer,
NextPageButton,
PrevPageButton,
} from '../GenresPagesLayouts.styles';

const HipHopPageLayout = ({
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
}) => {
  const tracklist = genresPagesData[0].hiphop.musicData;
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
        <img src={genresPagesData[0].hiphop.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link style={{ background: 'transparent' }} to="/punk">
            <PrevPageButton />
          </Link>
          <Link to="/pop">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].hiphop.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].hiphop.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>

        <h3>songs</h3>
        {renderTracklist}
        {/* {console.log(tracklist, '-tracklist', renderTracklist.song, '-renderTracklist')} */}
      </GenreTracklist>
    </GanrePageContainer>
  );
  };

export { HipHopPageLayout };
