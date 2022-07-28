import React from 'react';
import { Link } from 'react-router-dom';
import { GenrePageTracklistItem } from '../../../components/GenrePageTracklistItem/GenrePageTracklistItem';
import {
GanrePageContainer,
GenreImageContainer,
GenreInfoContainer,
GenrePageDescription,
ChangePageButtonContainer,
GenrePageName,
GenreTracklist,
NextPageButton,
PrevPageButton,
} from '../GenresPagesLayouts.styles';

const RockPageLayout = ({
  genresPagesData,
  setCurrentSong,
  audioReferense,
  currentPlaylist,
  setCurrentPlaylist,
 }) => {
  const tracklist = genresPagesData[0].rock.musicData;
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
        <img src={genresPagesData[0].rock.pageImage} alt="" />
        <ChangePageButtonContainer>
          <Link to="/pop">
            <PrevPageButton />
          </Link>
          <Link to="/electronic">
            <NextPageButton>Pop</NextPageButton>
          </Link>
        </ChangePageButtonContainer>
        <GenreInfoContainer>
          <GenrePageName>{genresPagesData[0].rock.heading}</GenrePageName>
          <GenrePageDescription>{genresPagesData[0].rock.pageDescription}</GenrePageDescription>
        </GenreInfoContainer>
      </GenreImageContainer>
      <GenreTracklist>
        <h3>songs</h3>
        {renderTracklist}
      </GenreTracklist>
    </GanrePageContainer>
  );
  };

export { RockPageLayout };
