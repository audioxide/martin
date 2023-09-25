export const checkForAnniversary = (
  todaysDate: Date,
  albumReleaseDate: Date
) => {
  const sevenDaysFromToday = new Date(
    todaysDate.getFullYear(),
    todaysDate.getMonth(),
    todaysDate.getDate() + 7
  );
  const albumReleaseDateThisYear = new Date(
    todaysDate.getFullYear(),
    albumReleaseDate.getMonth(),
    albumReleaseDate.getDate()
  );
  const albumAge = todaysDate.getFullYear() - albumReleaseDate.getFullYear();

  const qualifiesForAnniversary =
    albumAge % 5 === 0 &&
    albumAge > 0 &&
    albumReleaseDateThisYear < sevenDaysFromToday &&
    albumReleaseDateThisYear > todaysDate;

  return {
    albumAge,
    qualifiesForAnniversary,
  };
};
