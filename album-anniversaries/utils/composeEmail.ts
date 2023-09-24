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
      return `
      - _${album.title}_ by ${album.artist} turns ${
        album.albumAge
      } this month. It was released on ${album.releaseDate.toLocaleDateString()}
    `;
    });
    return list.join("");
  };

  const emailText = `
  Hello. I am Martin the Deficient Virtual Assistant. I have been programmed to say I hope you are well. 
  
  Today's date is ${new Date().toLocaleDateString()}.

  ${variableContent(anniversaryObjects)}

  That is all. Goodbye.
`;
  return emailText;
};
