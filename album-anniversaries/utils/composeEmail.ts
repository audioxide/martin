export const composeEmail = (
  anniversaryObjects: {
    albumAge: number;
    qualifiesForAnniversary: boolean;
    releaseDate: Date;
    title: any;
    artist: any;
  }[]
) => {
  const variableContent = (anniversaryObjects) => {
    if (anniversaryObjects.length === 0) {
      return "There are no albums _Audioxide_ has reviewed celebrating an anniversary of note this month.";
    }
    const list = anniversaryObjects.map((album) => {
      return `- _${album.title}_ by ${album.artist} turns ${
        album.albumAge
      } this month. It was released on ${album.releaseDate.toLocaleDateString()}
      `;
    });
    return list.join("");
  };

  const emailText = `
  Hello! 
  
  Martin here. I have been programmed to say I hope you are well. 
  
  Today's date is ${new Date().toLocaleDateString()}. That means it's time for me to check whether there are any _Audioxide_ album anniversaries coming up. The results are in...

  ${variableContent(anniversaryObjects)}
  That is all. Goodbye.

  Coldly,

  Martin the Deficient Virtual Assistant
`;
  return emailText.replace(/^ +/gm, "");
};
