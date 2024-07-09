import './App.scss';
import { useQuery } from '@apollo/client';
import { GET_UserTopTracks } from './utils/queries';
import { Song, SongPanel } from './components/SongTile';

let key = 0;


export const App = () => {

  const { loading, error, data } = useQuery(GET_UserTopTracks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.userTopSongs)

  return (
    <div className="m-4">
      <h1 className='mb-4 text-4xl font-extrabold leading-none'>My Top Tracks</h1>
      <div className='grid grid-cols-6 auto-cols-auto gap-4'>
        {data.userTopSongs.map((song: Song, index: number) => (
          <SongPanel song={song} key={key++} rank={index + 1} />
        ))}
      </div>
    </div>
  )
}

