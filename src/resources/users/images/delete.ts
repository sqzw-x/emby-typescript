// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ImagesAPI from '../../items/images';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Delete extends APIResource {
  /**
   * Requires authentication as user
   */
  delete(index: number, params: DeleteDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { Id, Type } = params;
    return this._client.post(path`/Users/${Id}/Images/${Type}/${index}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DeleteDeleteParams {
  /**
   * User Id
   */
  Id: string;

  /**
   * Image Type
   */
  Type: ImagesAPI.ImageType;
}

export declare namespace Delete {
  export { type DeleteDeleteParams as DeleteDeleteParams };
}
