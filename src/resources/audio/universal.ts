// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Universal extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(
    id: string,
    query: UniversalRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Audio/${id}/universal`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveWithContainer(
    container: string,
    params: UniversalRetrieveWithContainerParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { Id, ...query } = params;
    return this._client.get(path`/Audio/${Id}/universal.${container}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UniversalRetrieveParams {
  /**
   * The device id of the client requesting. Used to stop encoding processes when
   * needed.
   */
  DeviceId?: string;

  /**
   * Optional. Specify a starting offset, in ticks. 1ms = 10000 ticks.
   */
  StartTimeTicks?: number | null;
}

export interface UniversalRetrieveWithContainerParams {
  /**
   * Path param: Item Id
   */
  Id: string;

  /**
   * Query param: The device id of the client requesting. Used to stop encoding
   * processes when needed.
   */
  DeviceId?: string;

  /**
   * Query param: Optional. Specify a starting offset, in ticks. 1ms = 10000 ticks.
   */
  StartTimeTicks?: number | null;
}

export declare namespace Universal {
  export {
    type UniversalRetrieveParams as UniversalRetrieveParams,
    type UniversalRetrieveWithContainerParams as UniversalRetrieveWithContainerParams,
  };
}
