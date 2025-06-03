// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Configuration extends APIResource {
  /**
   * Requires authentication as administrator
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Plugins/${id}/Configuration`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  update(id: string, params: ConfigurationUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/Plugins/${id}/Configuration`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface ConfigurationUpdateParams {
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Configuration {
  export { type ConfigurationUpdateParams as ConfigurationUpdateParams };
}
