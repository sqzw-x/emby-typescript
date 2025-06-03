// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Icons extends APIResource {
  /**
   * No authentication required
   */
  retrieve(
    filename: string,
    query: IconRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Dlna/icons/${filename}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * No authentication required
   */
  retrieveForServer(
    filename: string,
    params: IconRetrieveForServerParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { UuId } = params;
    return this._client.get(path`/Dlna/${UuId}/icons/${filename}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IconRetrieveParams {
  /**
   * Server UuId
   */
  UuId?: string;
}

export interface IconRetrieveForServerParams {
  /**
   * Server UuId
   */
  UuId: string;
}

export declare namespace Icons {
  export {
    type IconRetrieveParams as IconRetrieveParams,
    type IconRetrieveForServerParams as IconRetrieveForServerParams,
  };
}
