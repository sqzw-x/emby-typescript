// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TypedSettings extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(key: string, params: TypedSettingRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { UserId } = params;
    return this._client.get(path`/Users/${UserId}/TypedSettings/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  update(key: string, params: TypedSettingUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { UserId, body } = params;
    return this._client.post(path`/Users/${UserId}/TypedSettings/${key}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface TypedSettingRetrieveParams {
  UserId: string;
}

export interface TypedSettingUpdateParams {
  /**
   * Path param:
   */
  UserId: string;

  /**
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace TypedSettings {
  export {
    type TypedSettingRetrieveParams as TypedSettingRetrieveParams,
    type TypedSettingUpdateParams as TypedSettingUpdateParams,
  };
}
