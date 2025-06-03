// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ChannelMappingOptions extends APIResource {
  /**
   * Requires authentication as administrator
   */
  create(params: ChannelMappingOptionCreateParams, options?: RequestOptions): APIPromise<void> {
    const { ProviderId } = params;
    return this._client.post('/LiveTv/ChannelMappingOptions', {
      query: { ProviderId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  update(params: ChannelMappingOptionUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { ProviderId } = params;
    return this._client.put('/LiveTv/ChannelMappingOptions', {
      query: { ProviderId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  list(query: ChannelMappingOptionListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/LiveTv/ChannelMappingOptions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  delete(params: ChannelMappingOptionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { ProviderId } = params;
    return this._client.delete('/LiveTv/ChannelMappingOptions', {
      query: { ProviderId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ChannelMappingOptionCreateParams {
  /**
   * Provider id
   */
  ProviderId: string;
}

export interface ChannelMappingOptionUpdateParams {
  /**
   * Provider id
   */
  ProviderId: string;
}

export interface ChannelMappingOptionListParams {
  /**
   * Provider id
   */
  ProviderId: string;
}

export interface ChannelMappingOptionDeleteParams {
  /**
   * Provider id
   */
  ProviderId: string;
}

export declare namespace ChannelMappingOptions {
  export {
    type ChannelMappingOptionCreateParams as ChannelMappingOptionCreateParams,
    type ChannelMappingOptionUpdateParams as ChannelMappingOptionUpdateParams,
    type ChannelMappingOptionListParams as ChannelMappingOptionListParams,
    type ChannelMappingOptionDeleteParams as ChannelMappingOptionDeleteParams,
  };
}
