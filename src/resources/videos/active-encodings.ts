// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ActiveEncodings extends APIResource {
  /**
   * Requires authentication as user
   */
  delete(params: ActiveEncodingDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { DeviceId, PlaySessionId } = params;
    return this._client.delete('/Videos/ActiveEncodings', {
      query: { DeviceId, PlaySessionId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  deleteActive(params: ActiveEncodingDeleteActiveParams, options?: RequestOptions): APIPromise<void> {
    const { DeviceId, PlaySessionId } = params;
    return this._client.post('/Videos/ActiveEncodings/Delete', {
      query: { DeviceId, PlaySessionId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActiveEncodingDeleteParams {
  /**
   * The device id of the client requesting. Used to stop encoding processes when
   * needed.
   */
  DeviceId: string;

  /**
   * The play session id
   */
  PlaySessionId: string;
}

export interface ActiveEncodingDeleteActiveParams {
  /**
   * The device id of the client requesting. Used to stop encoding processes when
   * needed.
   */
  DeviceId: string;

  /**
   * The play session id
   */
  PlaySessionId: string;
}

export declare namespace ActiveEncodings {
  export {
    type ActiveEncodingDeleteParams as ActiveEncodingDeleteParams,
    type ActiveEncodingDeleteActiveParams as ActiveEncodingDeleteActiveParams,
  };
}
