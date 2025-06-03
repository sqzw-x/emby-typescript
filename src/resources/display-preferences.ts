// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SeriesTimersAPI from './live-tv/series-timers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DisplayPreferences extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(
    id: string,
    query: DisplayPreferenceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DisplayPreference> {
    return this._client.get(path`/DisplayPreferences/${id}`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  update(
    displayPreferencesID: string,
    params: DisplayPreferenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { UserId, ...body } = params;
    return this._client.post(path`/DisplayPreferences/${displayPreferencesID}`, {
      query: { UserId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DisplayPreference {
  Client?: string;

  CustomPrefs?: Record<string, string>;

  Id?: string;

  SortBy?: string;

  SortOrder?: SeriesTimersAPI.SortOrder;
}

export interface DisplayPreferenceRetrieveParams {
  /**
   * Client
   */
  Client: string;

  /**
   * User Id
   */
  UserId: string;
}

export interface DisplayPreferenceUpdateParams {
  /**
   * Query param: User Id
   */
  UserId: string;

  /**
   * Body param:
   */
  Client?: string;

  /**
   * Body param:
   */
  CustomPrefs?: Record<string, string>;

  /**
   * Body param:
   */
  Id?: string;

  /**
   * Body param:
   */
  SortBy?: string;

  /**
   * Body param:
   */
  SortOrder?: SeriesTimersAPI.SortOrder;
}

export declare namespace DisplayPreferences {
  export {
    type DisplayPreference as DisplayPreference,
    type DisplayPreferenceRetrieveParams as DisplayPreferenceRetrieveParams,
    type DisplayPreferenceUpdateParams as DisplayPreferenceUpdateParams,
  };
}
