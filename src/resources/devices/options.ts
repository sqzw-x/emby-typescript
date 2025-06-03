// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Options extends APIResource {
  /**
   * Requires authentication as administrator
   */
  retrieve(query: OptionRetrieveParams, options?: RequestOptions): APIPromise<DeviceOptions> {
    return this._client.get('/Devices/Options', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  update(params: OptionUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { Id, ...body } = params;
    return this._client.post('/Devices/Options', {
      query: { Id },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DeviceOptions {
  CustomName?: string;
}

export interface OptionRetrieveParams {
  /**
   * Device Id
   */
  Id: string;
}

export interface OptionUpdateParams {
  /**
   * Query param: Device Id
   */
  Id: string;

  /**
   * Body param:
   */
  CustomName?: string;
}

export declare namespace Options {
  export {
    type DeviceOptions as DeviceOptions,
    type OptionRetrieveParams as OptionRetrieveParams,
    type OptionUpdateParams as OptionUpdateParams,
  };
}
