// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Metadata extends APIResource {
  /**
   * Requires authentication as administrator
   */
  reset(params: MetadataResetParams, options?: RequestOptions): APIPromise<void> {
    const { ItemIds } = params;
    return this._client.post('/Items/Metadata/Reset', {
      query: { ItemIds },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MetadataResetParams {
  /**
   * The item ids
   */
  ItemIds: string;
}

export declare namespace Metadata {
  export { type MetadataResetParams as MetadataResetParams };
}
