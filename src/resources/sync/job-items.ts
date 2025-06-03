// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class JobItems extends APIResource {
  /**
   * Requires authentication as user
   */
  cancelJobItem(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/JobItems/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  enableJobItem(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/JobItems/${id}/Enable`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getAdditionalFiles(
    id: string,
    query: JobItemGetAdditionalFilesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/Sync/JobItems/${id}/AdditionalFiles`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getFile(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Sync/JobItems/${id}/File`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  listJobItems(
    query: JobItemListJobItemsParams,
    options?: RequestOptions,
  ): APIPromise<JobItemListJobItemsResponse> {
    return this._client.get('/Sync/JobItems', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  markForRemoval(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/JobItems/${id}/MarkForRemoval`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  reportTransferred(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/JobItems/${id}/Transferred`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  unmarkForRemoval(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Sync/JobItems/${id}/UnmarkForRemoval`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface JobItemListJobItemsResponse {
  Items?: Array<JobsAPI.SyncJobItem>;

  TotalRecordCount?: number;
}

export interface JobItemGetAdditionalFilesParams {
  /**
   * Name
   */
  Name: string;
}

export interface JobItemListJobItemsParams {
  /**
   * TargetId
   */
  TargetId: string;
}

export declare namespace JobItems {
  export {
    type JobItemListJobItemsResponse as JobItemListJobItemsResponse,
    type JobItemGetAdditionalFilesParams as JobItemGetAdditionalFilesParams,
    type JobItemListJobItemsParams as JobItemListJobItemsParams,
  };
}
