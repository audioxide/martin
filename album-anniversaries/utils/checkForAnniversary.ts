export const checkForAnniversary = (
  todaysDate: Date,
  albumReleaseDate: Date
) => {
  const today = new Date();
  const albumAge = today.getFullYear() - albumReleaseDate.getFullYear();

  const getWeek = (date: Date) => {
    const janFirst = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(
      ((date.getTime() - janFirst.getTime()) / 86400000 +
        janFirst.getDay() +
        1) /
        7
    );
  };

  const isSameWeek = (dateA: Date, dateB: Date) => {
    return getWeek(dateA) === getWeek(dateB);
  };

  const qualifiesForAnniversary =
    albumAge % 5 === 0 &&
    albumAge > 0 &&
    isSameWeek(todaysDate, albumReleaseDate);

  return {
    albumAge,
    qualifiesForAnniversary,
  };
};
