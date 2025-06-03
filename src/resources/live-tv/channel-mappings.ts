// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ChannelMappings extends APIResource {
  /**
   * Requires authentication as administrator
   */
  create(params: ChannelMappingCreateParams, options?: RequestOptions): APIPromise<void> {
    const { ProviderId, ...body } = params;
    return this._client.post('/LiveTv/ChannelMappings', {
      query: { ProviderId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  update(params: ChannelMappingUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { ProviderId, ...body } = params;
    return this._client.put('/LiveTv/ChannelMappings', {
      query: { ProviderId },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  list(query: ChannelMappingListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/LiveTv/ChannelMappings', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  delete(params: ChannelMappingDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { ProviderId } = params;
    return this._client.delete('/LiveTv/ChannelMappings', {
      query: { ProviderId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SetChannelMapping {
  ProviderChannelId?: string;

  TunerChannelId?: string;
}

export interface ChannelMappingCreateParams {
  /**
   * Query param: Provider id
   */
  ProviderId: string;

  /**
   * Body param:
   */
  ProviderChannelId?: string;

  /**
   * Body param:
   */
  TunerChannelId?: string;
}

export interface ChannelMappingUpdateParams {
  /**
   * Query param: Provider id
   */
  ProviderId: string;

  /**
   * Body param:
   */
  ProviderChannelId?: string;

  /**
   * Body param:
   */
  TunerChannelId?: string;
}

export interface ChannelMappingListParams {
  /**
   * Provider id
   */
  ProviderId: string;
}

export interface ChannelMappingDeleteParams {
  /**
   * Provider id
   */
  ProviderId: string;
}

export declare namespace ChannelMappings {
  export {
    type SetChannelMapping as SetChannelMapping,
    type ChannelMappingCreateParams as ChannelMappingCreateParams,
    type ChannelMappingUpdateParams as ChannelMappingUpdateParams,
    type ChannelMappingListParams as ChannelMappingListParams,
    type ChannelMappingDeleteParams as ChannelMappingDeleteParams,
  };
}
