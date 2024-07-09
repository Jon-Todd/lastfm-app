import './App.scss';
import { useQuery } from '@apollo/client';
import { GET_UserTopTracks } from './utils/queries';
import { Song, SongTile } from './components/SongTile';

let key = 0;


export const App = () => {

  const { loading, error, data } = useQuery(GET_UserTopTracks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.userTopSongs)

  return (
    <>
      <h1>My Top Tracks</h1>
      {data.userTopSongs.map((song: Song) => (
        <SongTile song={song} key={key++} />
      ))}
    </>
  )
}

