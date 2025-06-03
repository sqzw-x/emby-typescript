// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Paths extends APIResource {
  /**
   * Requires authentication as administrator
   */
  create(body: PathCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/VirtualFolders/Paths', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  update(body: PathUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/VirtualFolders/Paths/Update', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  delete(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/Library/VirtualFolders/Paths', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deletePath(body: PathDeletePathParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/VirtualFolders/Paths/Delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MediaPathInfo {
  NetworkPath?: string;

  Password?: string;

  Path?: string;

  Username?: string;
}

export interface PathCreateParams {
  Id?: string;

  Path?: string;

  PathInfo?: MediaPathInfo;

  RefreshLibrary?: boolean;
}

export interface PathUpdateParams {
  Id?: string;

  PathInfo?: MediaPathInfo;
}

export interface PathDeletePathParams {
  Id?: string;

  Path?: string;

  RefreshLibrary?: boolean;
}

export declare namespace Paths {
  export {
    type MediaPathInfo as MediaPathInfo,
    type PathCreateParams as PathCreateParams,
    type PathUpdateParams as PathUpdateParams,
    type PathDeletePathParams as PathDeletePathParams,
  };
}
