import csvToJson from "convert-csv-to-json";
import { checkForAnniversary } from "./utils/checkForAnniversary";
import * as fs from "fs";
import { composeEmail } from "./utils/composeEmail";

const releaseDateJson: {
  number: number;
  title: string;
  artist: string;
  year: number;
  month: number;
  day: number;
}[] = csvToJson
  .fieldDelimiter(",")
  .getJsonFromCsv("./data/album-anniversaries.csv");

const formatted = releaseDateJson.map((album) => {
  return {
    title: album.title,
    artist: album.artist,
    releaseDate: new Date(`${album.year}-${album.month}-${album.day}`),
  };
});

const anniversaryAlbumsThisMonth = formatted
  .map((album: { releaseDate: Date; title: any; artist: any }) => {
    const anniversaryDetails = checkForAnniversary(album.releaseDate);
    return {
      ...album,
      ...anniversaryDetails,
    };
  })
  .filter((anniversaryDetails) => anniversaryDetails.qualifiesForAnniversary)
  .sort((a, b) => a.albumAge - b.albumAge);

// console.log(anniversaryAlbumsThisMonth);

fs.writeFile(
  "email-content.md",
  composeEmail(anniversaryAlbumsThisMonth),
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
