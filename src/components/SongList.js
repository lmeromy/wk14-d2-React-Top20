import React from 'react';
import Song from './Song';
import './SongList.css';

const SongList = (props) => {

// {song.id.attributes.["im:id"]}
  const topsongs = props.songs.map((song, index) => {
    return (
      <Song key={index}
            title={song["im:name"].label}
            artist={song["im:artist"].label}
            image={song["im:image"][2].label}/>
    )
  });


  return (
    <div className="song-list">
      <ol>
        {topsongs}
      </ol>
    </div>

  )

}

export default SongList;
