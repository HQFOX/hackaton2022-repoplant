import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A single film. */
export type Film = Node & {
  __typename?: "Film";
  characterConnection?: Maybe<FilmCharactersConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars["String"]>;
  /** The name of the director of this film. */
  director?: Maybe<Scalars["String"]>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars["String"]>;
  /** The episode number of this film. */
  episodeID?: Maybe<Scalars["Int"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars["String"]>;
  planetConnection?: Maybe<FilmPlanetsConnection>;
  /** The name(s) of the producer(s) of this film. */
  producers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars["String"]>;
  speciesConnection?: Maybe<FilmSpeciesConnection>;
  starshipConnection?: Maybe<FilmStarshipsConnection>;
  /** The title of this film. */
  title?: Maybe<Scalars["String"]>;
  vehicleConnection?: Maybe<FilmVehiclesConnection>;
};

/** A single film. */
export type FilmCharacterConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single film. */
export type FilmPlanetConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single film. */
export type FilmSpeciesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single film. */
export type FilmStarshipConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single film. */
export type FilmVehicleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A connection to a list of items. */
export type FilmCharactersConnection = {
  __typename?: "FilmCharactersConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: Maybe<Array<Maybe<Person>>>;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type FilmCharactersEdge = {
  __typename?: "FilmCharactersEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Person>;
};

/** A connection to a list of items. */
export type FilmPlanetsConnection = {
  __typename?: "FilmPlanetsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmPlanetsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type FilmPlanetsEdge = {
  __typename?: "FilmPlanetsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Planet>;
};

/** A connection to a list of items. */
export type FilmSpeciesConnection = {
  __typename?: "FilmSpeciesConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmSpeciesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type FilmSpeciesEdge = {
  __typename?: "FilmSpeciesEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Species>;
};

/** A connection to a list of items. */
export type FilmStarshipsConnection = {
  __typename?: "FilmStarshipsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmStarshipsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type FilmStarshipsEdge = {
  __typename?: "FilmStarshipsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
};

/** A connection to a list of items. */
export type FilmVehiclesConnection = {
  __typename?: "FilmVehiclesConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmVehiclesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type FilmVehiclesEdge = {
  __typename?: "FilmVehiclesEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
};

/** A connection to a list of items. */
export type FilmsConnection = {
  __typename?: "FilmsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type FilmsEdge = {
  __typename?: "FilmsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Film>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** A connection to a list of items. */
export type PeopleConnection = {
  __typename?: "PeopleConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PeopleEdge = {
  __typename?: "PeopleEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Person>;
};

/** An individual person or character within the Star Wars universe. */
export type Person = Node & {
  __typename?: "Person";
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: Maybe<Scalars["String"]>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars["String"]>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars["String"]>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: Maybe<Scalars["String"]>;
  filmConnection?: Maybe<PersonFilmsConnection>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: Maybe<Scalars["String"]>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: Maybe<Scalars["String"]>;
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars["Int"]>;
  /** A planet that this person was born on or inhabits. */
  homeworld?: Maybe<Planet>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars["Float"]>;
  /** The name of this person. */
  name?: Maybe<Scalars["String"]>;
  /** The skin color of this person. */
  skinColor?: Maybe<Scalars["String"]>;
  /** The species that this person belongs to, or null if unknown. */
  species?: Maybe<Species>;
  starshipConnection?: Maybe<PersonStarshipsConnection>;
  vehicleConnection?: Maybe<PersonVehiclesConnection>;
};

/** An individual person or character within the Star Wars universe. */
export type PersonFilmConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** An individual person or character within the Star Wars universe. */
export type PersonStarshipConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** An individual person or character within the Star Wars universe. */
export type PersonVehicleConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A connection to a list of items. */
export type PersonFilmsConnection = {
  __typename?: "PersonFilmsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PersonFilmsEdge = {
  __typename?: "PersonFilmsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Film>;
};

/** A connection to a list of items. */
export type PersonStarshipsConnection = {
  __typename?: "PersonStarshipsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonStarshipsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PersonStarshipsEdge = {
  __typename?: "PersonStarshipsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
};

/** A connection to a list of items. */
export type PersonVehiclesConnection = {
  __typename?: "PersonVehiclesConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonVehiclesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type PersonVehiclesEdge = {
  __typename?: "PersonVehiclesEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type Planet = Node & {
  __typename?: "Planet";
  /** The climates of this planet. */
  climates?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars["String"]>;
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars["Int"]>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars["String"]>;
  filmConnection?: Maybe<PlanetFilmsConnection>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: Maybe<Scalars["String"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The name of this planet. */
  name?: Maybe<Scalars["String"]>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: Maybe<Scalars["Int"]>;
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars["Float"]>;
  residentConnection?: Maybe<PlanetResidentsConnection>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: Maybe<Scalars["Int"]>;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater?: Maybe<Scalars["Float"]>;
  /** The terrains of this planet. */
  terrains?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetFilmConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetResidentConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A connection to a list of items. */
export type PlanetFilmsConnection = {
  __typename?: "PlanetFilmsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PlanetFilmsEdge = {
  __typename?: "PlanetFilmsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Film>;
};

/** A connection to a list of items. */
export type PlanetResidentsConnection = {
  __typename?: "PlanetResidentsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetResidentsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PlanetResidentsEdge = {
  __typename?: "PlanetResidentsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Person>;
};

/** A connection to a list of items. */
export type PlanetsConnection = {
  __typename?: "PlanetsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type PlanetsEdge = {
  __typename?: "PlanetsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Planet>;
};

export type Root = {
  __typename?: "Root";
  allFilms?: Maybe<FilmsConnection>;
  allPeople?: Maybe<PeopleConnection>;
  allPlanets?: Maybe<PlanetsConnection>;
  allSpecies?: Maybe<SpeciesConnection>;
  allStarships?: Maybe<StarshipsConnection>;
  allVehicles?: Maybe<VehiclesConnection>;
  film?: Maybe<Film>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  person?: Maybe<Person>;
  planet?: Maybe<Planet>;
  species?: Maybe<Species>;
  starship?: Maybe<Starship>;
  vehicle?: Maybe<Vehicle>;
};

export type RootAllFilmsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RootAllPeopleArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RootAllPlanetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RootAllSpeciesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RootAllStarshipsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RootAllVehiclesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RootFilmArgs = {
  filmID?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type RootNodeArgs = {
  id: Scalars["ID"];
};

export type RootPersonArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  personID?: InputMaybe<Scalars["ID"]>;
};

export type RootPlanetArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  planetID?: InputMaybe<Scalars["ID"]>;
};

export type RootSpeciesArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  speciesID?: InputMaybe<Scalars["ID"]>;
};

export type RootStarshipArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  starshipID?: InputMaybe<Scalars["ID"]>;
};

export type RootVehicleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  vehicleID?: InputMaybe<Scalars["ID"]>;
};

/** A type of person or character within the Star Wars Universe. */
export type Species = Node & {
  __typename?: "Species";
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars["Float"]>;
  /** The average lifespan of this species in years, null if unknown. */
  averageLifespan?: Maybe<Scalars["Int"]>;
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars["String"]>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars["String"]>;
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars["String"]>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars["String"]>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  filmConnection?: Maybe<SpeciesFilmsConnection>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A planet that this species originates from. */
  homeworld?: Maybe<Planet>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars["String"]>;
  /** The name of this species. */
  name?: Maybe<Scalars["String"]>;
  personConnection?: Maybe<SpeciesPeopleConnection>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** A type of person or character within the Star Wars Universe. */
export type SpeciesFilmConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A type of person or character within the Star Wars Universe. */
export type SpeciesPersonConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A connection to a list of items. */
export type SpeciesConnection = {
  __typename?: "SpeciesConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type SpeciesEdge = {
  __typename?: "SpeciesEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Species>;
};

/** A connection to a list of items. */
export type SpeciesFilmsConnection = {
  __typename?: "SpeciesFilmsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type SpeciesFilmsEdge = {
  __typename?: "SpeciesFilmsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Film>;
};

/** A connection to a list of items. */
export type SpeciesPeopleConnection = {
  __typename?: "SpeciesPeopleConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesPeopleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type SpeciesPeopleEdge = {
  __typename?: "SpeciesPeopleEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Person>;
};

/** A single transport craft that has hyperdrive capability. */
export type Starship = Node & {
  __typename?: "Starship";
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: Maybe<Scalars["Int"]>;
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars["Float"]>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars["String"]>;
  /** The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars["Float"]>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars["String"]>;
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars["String"]>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars["String"]>;
  filmConnection?: Maybe<StarshipFilmsConnection>;
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars["Float"]>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The length of this starship in meters. */
  length?: Maybe<Scalars["Float"]>;
  /** The manufacturers of this starship. */
  manufacturers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: Maybe<Scalars["Int"]>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: Maybe<Scalars["String"]>;
  /** The name of this starship. The common name, such as "Death Star". */
  name?: Maybe<Scalars["String"]>;
  /** The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars["String"]>;
  pilotConnection?: Maybe<StarshipPilotsConnection>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: Maybe<Scalars["String"]>;
};

/** A single transport craft that has hyperdrive capability. */
export type StarshipFilmConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single transport craft that has hyperdrive capability. */
export type StarshipPilotConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A connection to a list of items. */
export type StarshipFilmsConnection = {
  __typename?: "StarshipFilmsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type StarshipFilmsEdge = {
  __typename?: "StarshipFilmsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Film>;
};

/** A connection to a list of items. */
export type StarshipPilotsConnection = {
  __typename?: "StarshipPilotsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipPilotsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type StarshipPilotsEdge = {
  __typename?: "StarshipPilotsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Person>;
};

/** A connection to a list of items. */
export type StarshipsConnection = {
  __typename?: "StarshipsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type StarshipsEdge = {
  __typename?: "StarshipsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
};

/** A single transport craft that does not have hyperdrive capability */
export type Vehicle = Node & {
  __typename?: "Vehicle";
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars["Float"]>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars["String"]>;
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars["Float"]>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars["String"]>;
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars["String"]>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars["String"]>;
  filmConnection?: Maybe<VehicleFilmsConnection>;
  /** The ID of an object */
  id: Scalars["ID"];
  /** The length of this vehicle in meters. */
  length?: Maybe<Scalars["Float"]>;
  /** The manufacturers of this vehicle. */
  manufacturers?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The maximum speed of this vehicle in atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars["Int"]>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: Maybe<Scalars["String"]>;
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: Maybe<Scalars["String"]>;
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars["String"]>;
  pilotConnection?: Maybe<VehiclePilotsConnection>;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  vehicleClass?: Maybe<Scalars["String"]>;
};

/** A single transport craft that does not have hyperdrive capability */
export type VehicleFilmConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A single transport craft that does not have hyperdrive capability */
export type VehiclePilotConnectionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** A connection to a list of items. */
export type VehicleFilmsConnection = {
  __typename?: "VehicleFilmsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehicleFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type VehicleFilmsEdge = {
  __typename?: "VehicleFilmsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Film>;
};

/** A connection to a list of items. */
export type VehiclePilotsConnection = {
  __typename?: "VehiclePilotsConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehiclePilotsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
};

/** An edge in a connection. */
export type VehiclePilotsEdge = {
  __typename?: "VehiclePilotsEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Person>;
};

/** A connection to a list of items. */
export type VehiclesConnection = {
  __typename?: "VehiclesConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehiclesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars["Int"]>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type VehiclesEdge = {
  __typename?: "VehiclesEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"];
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
};

export type FilmCountQueryVariables = Exact<{ [key: string]: never }>;

export type FilmCountQuery = {
  __typename?: "Root";
  allPeople?:
    | {
        __typename?: "PeopleConnection";
        totalCount?: number | null | undefined;
        people?:
          | Array<
              | {
                  __typename?: "Person";
                  filmConnection?:
                    | {
                        __typename?: "PersonFilmsConnection";
                        totalCount?: number | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type StarshipCountQueryVariables = Exact<{ [key: string]: never }>;

export type StarshipCountQuery = {
  __typename?: "Root";
  allPeople?:
    | {
        __typename?: "PeopleConnection";
        totalCount?: number | null | undefined;
        people?:
          | Array<
              | {
                  __typename?: "Person";
                  starshipConnection?:
                    | {
                        __typename?: "PersonStarshipsConnection";
                        totalCount?: number | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type VehicleCountQueryVariables = Exact<{ [key: string]: never }>;

export type VehicleCountQuery = {
  __typename?: "Root";
  allPeople?:
    | {
        __typename?: "PeopleConnection";
        totalCount?: number | null | undefined;
        people?:
          | Array<
              | {
                  __typename?: "Person";
                  vehicleConnection?:
                    | {
                        __typename?: "PersonVehiclesConnection";
                        totalCount?: number | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetPeopleQueryVariables = Exact<{ [key: string]: never }>;

export type GetPeopleQuery = {
  __typename?: "Root";
  allPeople?:
    | {
        __typename?: "PeopleConnection";
        edges?:
          | Array<
              | {
                  __typename?: "PeopleEdge";
                  node?:
                    | {
                        __typename?: "Person";
                        id: string;
                        name?: string | null | undefined;
                        birthYear?: string | null | undefined;
                        homeworld?:
                          | {
                              __typename?: "Planet";
                              name?: string | null | undefined;
                            }
                          | null
                          | undefined;
                        species?:
                          | {
                              __typename?: "Species";
                              name?: string | null | undefined;
                            }
                          | null
                          | undefined;
                        filmConnection?:
                          | {
                              __typename?: "PersonFilmsConnection";
                              edges?:
                                | Array<
                                    | {
                                        __typename?: "PersonFilmsEdge";
                                        node?:
                                          | {
                                              __typename?: "Film";
                                              title?: string | null | undefined;
                                            }
                                          | null
                                          | undefined;
                                      }
                                    | null
                                    | undefined
                                  >
                                | null
                                | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetCharacterQueryVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]>;
}>;

export type GetCharacterQuery = {
  __typename?: "Root";
  person?:
    | {
        __typename?: "Person";
        name?: string | null | undefined;
        birthYear?: string | null | undefined;
        eyeColor?: string | null | undefined;
        gender?: string | null | undefined;
        hairColor?: string | null | undefined;
        height?: number | null | undefined;
        mass?: number | null | undefined;
        skinColor?: string | null | undefined;
        homeworld?:
          | { __typename?: "Planet"; name?: string | null | undefined }
          | null
          | undefined;
        species?:
          | { __typename?: "Species"; name?: string | null | undefined }
          | null
          | undefined;
        filmConnection?:
          | {
              __typename?: "PersonFilmsConnection";
              totalCount?: number | null | undefined;
              films?:
                | Array<
                    | {
                        __typename?: "Film";
                        title?: string | null | undefined;
                        episodeID?: number | null | undefined;
                        openingCrawl?: string | null | undefined;
                        director?: string | null | undefined;
                        producers?:
                          | Array<string | null | undefined>
                          | null
                          | undefined;
                        releaseDate?: string | null | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        starshipConnection?:
          | {
              __typename?: "PersonStarshipsConnection";
              totalCount?: number | null | undefined;
              starships?:
                | Array<
                    | {
                        __typename?: "Starship";
                        id: string;
                        name?: string | null | undefined;
                        model?: string | null | undefined;
                        starshipClass?: string | null | undefined;
                        costInCredits?: number | null | undefined;
                        length?: number | null | undefined;
                        passengers?: string | null | undefined;
                        crew?: string | null | undefined;
                        MGLT?: number | null | undefined;
                        maxAtmospheringSpeed?: number | null | undefined;
                        hyperdriveRating?: number | null | undefined;
                        manufacturers?:
                          | Array<string | null | undefined>
                          | null
                          | undefined;
                        consumables?: string | null | undefined;
                        cargoCapacity?: number | null | undefined;
                        pilotConnection?:
                          | {
                              __typename?: "StarshipPilotsConnection";
                              pilots?:
                                | Array<
                                    | {
                                        __typename?: "Person";
                                        id: string;
                                        name?: string | null | undefined;
                                      }
                                    | null
                                    | undefined
                                  >
                                | null
                                | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
        vehicleConnection?:
          | {
              __typename?: "PersonVehiclesConnection";
              totalCount?: number | null | undefined;
              vehicles?:
                | Array<
                    | {
                        __typename?: "Vehicle";
                        name?: string | null | undefined;
                        model?: string | null | undefined;
                        vehicleClass?: string | null | undefined;
                        manufacturers?:
                          | Array<string | null | undefined>
                          | null
                          | undefined;
                        costInCredits?: number | null | undefined;
                        length?: number | null | undefined;
                        crew?: string | null | undefined;
                        passengers?: string | null | undefined;
                        maxAtmospheringSpeed?: number | null | undefined;
                        cargoCapacity?: number | null | undefined;
                        consumables?: string | null | undefined;
                        id: string;
                        pilotConnection?:
                          | {
                              __typename?: "VehiclePilotsConnection";
                              pilots?:
                                | Array<
                                    | {
                                        __typename?: "Person";
                                        id: string;
                                        name?: string | null | undefined;
                                      }
                                    | null
                                    | undefined
                                  >
                                | null
                                | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type GetSpaceshipsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSpaceshipsQuery = {
  __typename?: "Root";
  allStarships?:
    | {
        __typename?: "StarshipsConnection";
        edges?:
          | Array<
              | {
                  __typename?: "StarshipsEdge";
                  node?:
                    | {
                        __typename?: "Starship";
                        id: string;
                        name?: string | null | undefined;
                        model?: string | null | undefined;
                        passengers?: string | null | undefined;
                        crew?: string | null | undefined;
                        length?: number | null | undefined;
                        cargoCapacity?: number | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const FilmCountDocument = gql`
  query FilmCount {
    allPeople {
      totalCount
      people {
        filmConnection {
          totalCount
        }
      }
    }
  }
`;

/**
 * __useFilmCountQuery__
 *
 * To run a query within a React component, call `useFilmCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilmCountQuery(
  baseOptions?: Apollo.QueryHookOptions<FilmCountQuery, FilmCountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FilmCountQuery, FilmCountQueryVariables>(
    FilmCountDocument,
    options
  );
}
export function useFilmCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FilmCountQuery,
    FilmCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FilmCountQuery, FilmCountQueryVariables>(
    FilmCountDocument,
    options
  );
}
export type FilmCountQueryHookResult = ReturnType<typeof useFilmCountQuery>;
export type FilmCountLazyQueryHookResult = ReturnType<
  typeof useFilmCountLazyQuery
>;
export type FilmCountQueryResult = Apollo.QueryResult<
  FilmCountQuery,
  FilmCountQueryVariables
>;
export const StarshipCountDocument = gql`
  query StarshipCount {
    allPeople {
      totalCount
      people {
        starshipConnection {
          totalCount
        }
      }
    }
  }
`;

/**
 * __useStarshipCountQuery__
 *
 * To run a query within a React component, call `useStarshipCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useStarshipCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStarshipCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useStarshipCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    StarshipCountQuery,
    StarshipCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StarshipCountQuery, StarshipCountQueryVariables>(
    StarshipCountDocument,
    options
  );
}
export function useStarshipCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StarshipCountQuery,
    StarshipCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StarshipCountQuery, StarshipCountQueryVariables>(
    StarshipCountDocument,
    options
  );
}
export type StarshipCountQueryHookResult = ReturnType<
  typeof useStarshipCountQuery
>;
export type StarshipCountLazyQueryHookResult = ReturnType<
  typeof useStarshipCountLazyQuery
>;
export type StarshipCountQueryResult = Apollo.QueryResult<
  StarshipCountQuery,
  StarshipCountQueryVariables
>;
export const VehicleCountDocument = gql`
  query VehicleCount {
    allPeople {
      totalCount
      people {
        vehicleConnection {
          totalCount
        }
      }
    }
  }
`;

/**
 * __useVehicleCountQuery__
 *
 * To run a query within a React component, call `useVehicleCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useVehicleCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    VehicleCountQuery,
    VehicleCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<VehicleCountQuery, VehicleCountQueryVariables>(
    VehicleCountDocument,
    options
  );
}
export function useVehicleCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VehicleCountQuery,
    VehicleCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<VehicleCountQuery, VehicleCountQueryVariables>(
    VehicleCountDocument,
    options
  );
}
export type VehicleCountQueryHookResult = ReturnType<
  typeof useVehicleCountQuery
>;
export type VehicleCountLazyQueryHookResult = ReturnType<
  typeof useVehicleCountLazyQuery
>;
export type VehicleCountQueryResult = Apollo.QueryResult<
  VehicleCountQuery,
  VehicleCountQueryVariables
>;
export const GetPeopleDocument = gql`
  query GetPeople {
    allPeople {
      edges {
        node {
          id
          name
          birthYear
          homeworld {
            name
          }
          species {
            name
          }
          filmConnection {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetPeopleQuery__
 *
 * To run a query within a React component, call `useGetPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPeopleQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPeopleQuery, GetPeopleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPeopleQuery, GetPeopleQueryVariables>(
    GetPeopleDocument,
    options
  );
}
export function useGetPeopleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPeopleQuery,
    GetPeopleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPeopleQuery, GetPeopleQueryVariables>(
    GetPeopleDocument,
    options
  );
}
export type GetPeopleQueryHookResult = ReturnType<typeof useGetPeopleQuery>;
export type GetPeopleLazyQueryHookResult = ReturnType<
  typeof useGetPeopleLazyQuery
>;
export type GetPeopleQueryResult = Apollo.QueryResult<
  GetPeopleQuery,
  GetPeopleQueryVariables
>;
export const GetCharacterDocument = gql`
  query GetCharacter($id: ID) {
    person(id: $id) {
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        name
      }
      species {
        name
      }
      filmConnection {
        totalCount
        films {
          title
          episodeID
          openingCrawl
          director
          producers
          releaseDate
        }
      }
      starshipConnection {
        totalCount
        starships {
          id
          name
          model
          starshipClass
          costInCredits
          length
          passengers
          crew
          MGLT
          maxAtmospheringSpeed
          hyperdriveRating
          manufacturers
          consumables
          cargoCapacity
          pilotConnection {
            pilots {
              id
              name
            }
          }
        }
      }
      vehicleConnection {
        totalCount
        vehicles {
          name
          model
          vehicleClass
          manufacturers
          costInCredits
          length
          crew
          passengers
          maxAtmospheringSpeed
          cargoCapacity
          consumables
          pilotConnection {
            pilots {
              id
              name
            }
          }
          id
        }
      }
    }
  }
`;

/**
 * __useGetCharacterQuery__
 *
 * To run a query within a React component, call `useGetCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options
  );
}
export function useGetCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GetCharacterDocument,
    options
  );
}
export type GetCharacterQueryHookResult = ReturnType<
  typeof useGetCharacterQuery
>;
export type GetCharacterLazyQueryHookResult = ReturnType<
  typeof useGetCharacterLazyQuery
>;
export type GetCharacterQueryResult = Apollo.QueryResult<
  GetCharacterQuery,
  GetCharacterQueryVariables
>;
export const GetSpaceshipsDocument = gql`
  query GetSpaceships {
    allStarships {
      edges {
        node {
          id
          name
          model
          passengers
          crew
          length
          cargoCapacity
        }
      }
    }
  }
`;

/**
 * __useGetSpaceshipsQuery__
 *
 * To run a query within a React component, call `useGetSpaceshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpaceshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpaceshipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpaceshipsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSpaceshipsQuery,
    GetSpaceshipsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSpaceshipsQuery, GetSpaceshipsQueryVariables>(
    GetSpaceshipsDocument,
    options
  );
}
export function useGetSpaceshipsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSpaceshipsQuery,
    GetSpaceshipsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSpaceshipsQuery, GetSpaceshipsQueryVariables>(
    GetSpaceshipsDocument,
    options
  );
}
export type GetSpaceshipsQueryHookResult = ReturnType<
  typeof useGetSpaceshipsQuery
>;
export type GetSpaceshipsLazyQueryHookResult = ReturnType<
  typeof useGetSpaceshipsLazyQuery
>;
export type GetSpaceshipsQueryResult = Apollo.QueryResult<
  GetSpaceshipsQuery,
  GetSpaceshipsQueryVariables
>;
