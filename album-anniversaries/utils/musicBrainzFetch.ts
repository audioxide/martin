// import { checkForAnniversary } from "./checkForAnniversary";

// const realAlbums = reviewData.filter(
//   (review) => review.metadata.reviewType !== "gag"
// );

// const fetchAlbumReleaseDate = async (albumMusicBrainzId: string) => {
//   const albumReleaseDate = await fetch(
//     `https://musicbrainz.org/ws/2/release-group/${albumMusicBrainzId}?fmt=json`
//   )
//     .then((response) => response.json())
//     .then((data) => data["first-release-date"])
//     .catch((error) => console.log(error));
//   return albumReleaseDate;
// };

// const getReleaseDate = (
//   albumTitle: string,
//   musicBrainzID: string,
//   i: number
// ) => {
//   setTimeout(() => {
//     fetchAlbumReleaseDate(musicBrainzID).then((releaseDate) => {
//       const anniversaryInfo = checkForAnniversary(releaseDate);
//       if (anniversaryInfo.albumAge === 0) {
//         console.log(
//           `There was an error getting the release date for ${albumTitle}.`
//         );
//       } else if (anniversaryInfo.qualifiesForAnniversary) {
//         albumsWithUpcomingAnniversaries.push({
//           ...anniversaryInfo,
//           albumTitle,
//           releaseDate,
//         });
//         console.log(
//           `${albumTitle} was released ${anniversaryInfo.albumAge} years ago.`
//         );
//       }
//     });
//   }, 1000 * i); // MusicBrainz API has a rate limit of 1 request per second. Source: https://wiki.musicbrainz.org/MusicBrainz_API/Rate_Limiting
// };

// const albumsWithUpcomingAnniversaries = [];

// for (let i = 0; i < realAlbums.length; i++) {
//   const { album, albumMBID } = realAlbums[i].metadata;
//   getReleaseDate(album, albumMBID, i);
// }

// console.log(albumsWithUpcomingAnniversaries);
