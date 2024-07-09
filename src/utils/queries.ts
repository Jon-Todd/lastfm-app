import { gql } from "@apollo/client";

export const GET_LCDSoundSystem = gql`
  query {
    artists(query: "LCD Soundsystem", limit: 1) {
      name
      bio
    }
}
`;

export const GET_UserTopTracks = gql`
    query {
        userTopSongs(user: "JonnyTodd77") {
            name
            artist {
                name
            }
        }
    }
    `;