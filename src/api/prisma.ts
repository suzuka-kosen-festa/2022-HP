/* eslint-disable no-redeclare */
/**
 * Model Student
 *
 */
export type Student = {
  studentId: string;
  kana: string;
  email: string;
};

/**
 * Model Guest
 *
 */
export type Guest = {
  guestId: string;
  sex: string;
  jobs: string;
  name: string;
  hostId: string | null;
  hostJhsId: string | null;
};

/**
 * Model Sponsor
 *
 */
export type Sponsor = {
  sponsorId: string;
  email: string;
  name: string;
};

/**
 * Model JHStudent
 *
 */
export type JHStudent = {
  jhsId: string;
  age: string;
  name: string;
  email: string;
};

/**
 * Model OB
 *
 */
export type OB = {
  obId: string;
  name: string;
  email: string;
};

/**
 * Model History
 *
 */
export type History = {
  id: number;
  timeStamp: Date;
  guestId: string | null;
  sponsorId: string | null;
  jhsId: string | null;
  obId: string | null;
};

/**
 * Model SponsorCompany
 *
 */
export type SponsorCompany = {
  id: number;
  name: string;
};

/**
 * Model LiveEvent
 *
 */
export type LiveEvent = {
  id: number;
  title: string;
  descriptions: string;
  date: string;
  venue: string;
  start_time: string;
  end_time: string;
  stage: LiveStage;
};

/**
 * Model Bazaar
 *
 */
export type Bazaar = {
  id: number;
  name: string;
  descriptions: string;
  image: string;
  group: string;
  group_type: BazaarType;
};

/**
 * Model BazaarPrices
 *
 */
export type BazaarPrices = {
  id: number;
  price: string;
  bazaarId: number;
};

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export type BazaarType = "eating" | "recreation";

export type LiveStage = "main" | "sub" | "live" | "game";
