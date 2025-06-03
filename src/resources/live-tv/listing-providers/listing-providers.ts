// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ArtistsAPI from '../../artists/artists';
import * as AuthAPI from '../../auth/auth';
import * as SchedulesDirectAPI from './schedules-direct';
import { SchedulesDirect } from './schedules-direct';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class ListingProviders extends APIResource {
  schedulesDirect: SchedulesDirectAPI.SchedulesDirect = new SchedulesDirectAPI.SchedulesDirect(this._client);

  /**
   * Requires authentication as administrator
   */
  create(body: ListingProviderCreateParams, options?: RequestOptions): APIPromise<ListingsProviderInfo> {
    return this._client.post('/LiveTv/ListingProviders', { body, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  list(query: ListingProviderListParams, options?: RequestOptions): APIPromise<ListingProviderListResponse> {
    return this._client.get('/LiveTv/ListingProviders', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  delete(
    params: ListingProviderDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id } = params ?? {};
    return this._client.delete('/LiveTv/ListingProviders', {
      query: { Id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteProvider(
    params: ListingProviderDeleteProviderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id } = params ?? {};
    return this._client.post('/LiveTv/ListingProviders/Delete', {
      query: { Id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  listAvailable(options?: RequestOptions): APIPromise<ListingProviderListAvailableResponse> {
    return this._client.get('/LiveTv/ListingProviders/Available', options);
  }

  /**
   * Requires authentication as administrator
   */
  listLineups(
    query: ListingProviderListLineupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListingProviderListLineupsResponse> {
    return this._client.get('/LiveTv/ListingProviders/Lineups', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  retrieveDefault(options?: RequestOptions): APIPromise<ListingsProviderInfo> {
    return this._client.get('/LiveTv/ListingProviders/Default', options);
  }
}

export interface ListingsProviderInfo {
  ChannelMappings?: Array<ArtistsAPI.NameValuePair>;

  Country?: string;

  DataVersion?: string;

  EnableAllTuners?: boolean;

  EnabledTuners?: Array<string>;

  Id?: string;

  KidsCategories?: Array<string>;

  ListingsId?: string;

  MovieCategories?: Array<string>;

  MoviePrefix?: string;

  Name?: string;

  NewsCategories?: Array<string>;

  Password?: string;

  Path?: string;

  PreferredLanguage?: string;

  SetupUrl?: string;

  SportsCategories?: Array<string>;

  TvgShiftTicks?: number;

  Type?: string;

  UserAgent?: string;

  Username?: string;

  ZipCode?: string;
}

export type ListingProviderListResponse = Array<ListingsProviderInfo>;

export type ListingProviderListAvailableResponse =
  Array<ListingProviderListAvailableResponse.ListingProviderListAvailableResponseItem>;

export namespace ListingProviderListAvailableResponse {
  export interface ListingProviderListAvailableResponseItem {
    Id?: string;

    Name?: string;

    SetupUrl?: string;
  }
}

export type ListingProviderListLineupsResponse = Array<AuthAPI.NameIDPair>;

export interface ListingProviderCreateParams {
  ChannelMappings?: Array<ArtistsAPI.NameValuePair>;

  Country?: string;

  DataVersion?: string;

  EnableAllTuners?: boolean;

  EnabledTuners?: Array<string>;

  Id?: string;

  KidsCategories?: Array<string>;

  ListingsId?: string;

  MovieCategories?: Array<string>;

  MoviePrefix?: string;

  Name?: string;

  NewsCategories?: Array<string>;

  Password?: string;

  Path?: string;

  PreferredLanguage?: string;

  SetupUrl?: string;

  SportsCategories?: Array<string>;

  TvgShiftTicks?: number;

  Type?: string;

  UserAgent?: string;

  Username?: string;

  ZipCode?: string;
}

export interface ListingProviderListParams {
  /**
   * Channel id
   */
  ChannelId: string;
}

export interface ListingProviderDeleteParams {
  /**
   * Provider id
   */
  Id?: string;
}

export interface ListingProviderDeleteProviderParams {
  /**
   * Provider id
   */
  Id?: string;
}

export interface ListingProviderListLineupsParams {
  /**
   * Country
   */
  Country?: string;

  /**
   * Provider id
   */
  Id?: string;

  /**
   * Location
   */
  Location?: string;

  /**
   * Provider Type
   */
  Type?: string;
}

ListingProviders.SchedulesDirect = SchedulesDirect;

export declare namespace ListingProviders {
  export {
    type ListingsProviderInfo as ListingsProviderInfo,
    type ListingProviderListResponse as ListingProviderListResponse,
    type ListingProviderListAvailableResponse as ListingProviderListAvailableResponse,
    type ListingProviderListLineupsResponse as ListingProviderListLineupsResponse,
    type ListingProviderCreateParams as ListingProviderCreateParams,
    type ListingProviderListParams as ListingProviderListParams,
    type ListingProviderDeleteParams as ListingProviderDeleteParams,
    type ListingProviderDeleteProviderParams as ListingProviderDeleteProviderParams,
    type ListingProviderListLineupsParams as ListingProviderListLineupsParams,
  };

  export { SchedulesDirect as SchedulesDirect };
}
