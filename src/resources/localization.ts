// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Localization extends APIResource {
  /**
   * Requires authentication as user
   */
  getCountries(options?: RequestOptions): APIPromise<LocalizationGetCountriesResponse> {
    return this._client.get('/Localization/Countries', options);
  }

  /**
   * Requires authentication as user
   */
  getCultures(options?: RequestOptions): APIPromise<LocalizationGetCulturesResponse> {
    return this._client.get('/Localization/Cultures', options);
  }

  /**
   * Requires authentication as user
   */
  getOptions(options?: RequestOptions): APIPromise<LocalizationGetOptionsResponse> {
    return this._client.get('/Localization/Options', options);
  }

  /**
   * Requires authentication as user
   */
  getParentalRatings(options?: RequestOptions): APIPromise<LocalizationGetParentalRatingsResponse> {
    return this._client.get('/Localization/ParentalRatings', options);
  }
}

export interface CountryInfo {
  DisplayName?: string;

  EnglishName?: string;

  Name?: string;

  ThreeLetterISORegionName?: string;

  TwoLetterISORegionName?: string;
}

export interface CultureDto {
  DisplayName?: string;

  Name?: string;

  ThreeLetterISOLanguageName?: string;

  ThreeLetterISOLanguageNames?: Array<string>;

  TwoLetterISOLanguageName?: string;

  TwoLetterISOLanguageNames?: Array<string>;
}

export interface ParentalRating {
  Name?: string;

  Value?: number;
}

export type LocalizationGetCountriesResponse = Array<CountryInfo>;

export type LocalizationGetCulturesResponse = Array<CultureDto>;

export type LocalizationGetOptionsResponse =
  Array<LocalizationGetOptionsResponse.LocalizationGetOptionsResponseItem>;

export namespace LocalizationGetOptionsResponse {
  export interface LocalizationGetOptionsResponseItem {
    Name?: string;

    Value?: string;
  }
}

export type LocalizationGetParentalRatingsResponse = Array<ParentalRating>;

export declare namespace Localization {
  export {
    type CountryInfo as CountryInfo,
    type CultureDto as CultureDto,
    type ParentalRating as ParentalRating,
    type LocalizationGetCountriesResponse as LocalizationGetCountriesResponse,
    type LocalizationGetCulturesResponse as LocalizationGetCulturesResponse,
    type LocalizationGetOptionsResponse as LocalizationGetOptionsResponse,
    type LocalizationGetParentalRatingsResponse as LocalizationGetParentalRatingsResponse,
  };
}
