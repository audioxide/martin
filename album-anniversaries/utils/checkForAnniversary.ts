import { AnniversaryObject } from "../types";

export const checkForAnniversary = (
  albumReleaseDate: Date
): AnniversaryObject => {
  const today = new Date();

  const albumAge = today.getFullYear() - albumReleaseDate.getFullYear();

  const qualifiesForAnniversary =
    albumAge % 5 === 0 &&
    albumAge > 0 &&
    today.getMonth() === albumReleaseDate.getMonth();

  return {
    albumAge,
    qualifiesForAnniversary,
  };
};
