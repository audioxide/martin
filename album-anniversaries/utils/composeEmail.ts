export const composeEmail = (
  todaysDate: Date,
  anniversaryObjects: {
    albumAge: number;
    qualifiesForAnniversary: boolean;
    releaseDate: Date;
    title: string;
    artist: string;
  }[]
) => {
  const variableContent = (anniversaryObjects) => {
    if (anniversaryObjects.length === 0) {
      return "And there are no albums _Audioxide_ has reviewed celebrating an anniversary of note this week. Too bad. Maybe try pulling your finger out and reviewing more albums, you slobs.\n";
    }
    const list = anniversaryObjects.map((album) => {
      return `- [_${album.title}_](${inferLink(
        album.artist,
        album.title
      )}) by ${album.artist} turns ${
        album.albumAge
      } this week. It was released on ${album.releaseDate.toLocaleDateString()}
      `;
    });
    return list.join("");
  };

  const inferLink = (artistName: string, albumTitle: string) => {
    const artistSection = artistName.toLowerCase().replaceAll(" ", "-");
    const albumSection = albumTitle.toLowerCase().replaceAll(" ", "-");
    return `https://audioxide.com/reviews/${artistSection}-${albumSection}`;
  };

  const emailText = `
  Hello! 
  
  Martin here. I have been programmed to say I hope you are well. 
  
  Today's date is ${todaysDate.toDateString()}. That means it's time for me to check whether there are any _Audioxide_ album anniversaries coming up this week. The results are in...

  ${variableContent(anniversaryObjects)}
  That is all. Goodbye.

  Coldly,

  Martin the Deficient Virtual Assistant
`;
  return emailText.replace(/^ +/gm, "");
};
