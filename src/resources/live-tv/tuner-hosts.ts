// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from '../auth/auth';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TunerHosts extends APIResource {
  /**
   * Requires authentication as administrator
   */
  create(body: TunerHostCreateParams, options?: RequestOptions): APIPromise<TunerHostInfo> {
    return this._client.post('/LiveTv/TunerHosts', { body, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  list(options?: RequestOptions): APIPromise<TunerHostListResponse> {
    return this._client.get('/LiveTv/TunerHosts', options);
  }

  /**
   * Requires authentication as administrator
   */
  delete(params: TunerHostDeleteParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { Id } = params ?? {};
    return this._client.post('/LiveTv/TunerHosts/Delete', {
      query: { Id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  getDefault(type: string, options?: RequestOptions): APIPromise<TunerHostInfo> {
    return this._client.get(path`/LiveTv/TunerHosts/Default/${type}`, options);
  }

  /**
   * Requires authentication as user
   */
  listTypes(options?: RequestOptions): APIPromise<TunerHostListTypesResponse> {
    return this._client.get('/LiveTv/TunerHosts/Types', options);
  }
}

export interface TunerHostInfo {
  AllowHWTranscoding?: boolean;

  AllowMappingByNumber?: boolean;

  DataVersion?: number;

  DeviceId?: string;

  FriendlyName?: string;

  Id?: string;

  ImportFavoritesOnly?: boolean;

  ImportGuideData?: boolean;

  PreferEpgChannelImages?: boolean;

  PreferEpgChannelNumbers?: boolean;

  ProviderOptions?: string;

  Referrer?: string;

  SetupUrl?: string;

  Source?: string;

  TunerCount?: number;

  Type?: string;

  Url?: string;

  UserAgent?: string;
}

export type TunerHostListResponse = Array<TunerHostInfo>;

export type TunerHostListTypesResponse = Array<AuthAPI.NameIDPair>;

export interface TunerHostCreateParams {
  AllowHWTranscoding?: boolean;

  AllowMappingByNumber?: boolean;

  DataVersion?: number;

  DeviceId?: string;

  FriendlyName?: string;

  Id?: string;

  ImportFavoritesOnly?: boolean;

  ImportGuideData?: boolean;

  PreferEpgChannelImages?: boolean;

  PreferEpgChannelNumbers?: boolean;

  ProviderOptions?: string;

  Referrer?: string;

  SetupUrl?: string;

  Source?: string;

  TunerCount?: number;

  Type?: string;

  Url?: string;

  UserAgent?: string;
}

export interface TunerHostDeleteParams {
  /**
   * Tuner host id
   */
  Id?: string;
}

export declare namespace TunerHosts {
  export {
    type TunerHostInfo as TunerHostInfo,
    type TunerHostListResponse as TunerHostListResponse,
    type TunerHostListTypesResponse as TunerHostListTypesResponse,
    type TunerHostCreateParams as TunerHostCreateParams,
    type TunerHostDeleteParams as TunerHostDeleteParams,
  };
}
