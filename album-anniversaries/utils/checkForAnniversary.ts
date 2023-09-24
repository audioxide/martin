import { AnniversaryObject } from "../types";

export const checkForAnniversary = (
  albumReleaseDate: Date
): AnniversaryObject => {
  const today = new Date();
  const albumAge = today.getFullYear() - albumReleaseDate.getFullYear();

  const getWeek = (date) => {
    const janFirst = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(
      ((date.getTime() - janFirst.getTime()) / 86400000 +
        janFirst.getDay() +
        1) /
        7
    );
  };

  const isSameWeek = (dateA, dateB) => {
    return getWeek(dateA) === getWeek(dateB);
  };

  const qualifiesForAnniversary =
    albumAge % 5 === 0 && albumAge > 0 && isSameWeek(today, albumReleaseDate);

  return {
    albumAge,
    qualifiesForAnniversary,
  };
};
