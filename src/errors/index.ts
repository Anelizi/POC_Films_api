import * as Application from "@/protocols/protocols";

export function conflictError(message: string) {
  return {
    name: "ConflictError",
    message,
  };
}

export function duplicatedAnimeError(filmsName: string): ApplicationFilmNameError {  
  return {
    name: "DuplicatedAnimeError",
    message: "There is already an anime with given title",
    filmsName,
  };
}

export function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

export function invalidDataError(details: string[]): ApplicationInvalidateDataError {
  return {
    name: 'InvalidDataError',
    message: 'Invalid data',
    details,
  };
}

type ApplicationInvalidateDataError = Application.ApplicationError & {
  details: string[];
};

type ApplicationFilmNameError = Application.ApplicationError & { 
  filmsName: string };
