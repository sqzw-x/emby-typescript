// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DirectoryContents extends APIResource {
  /**
   * Requires authentication as administrator
   */
  create(
    params: DirectoryContentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DirectoryContentCreateResponse> {
    const { Path, IncludeDirectories, IncludeFiles, ...body } = params;
    return this._client.post('/Environment/DirectoryContents', {
      query: { Path, IncludeDirectories, IncludeFiles },
      body,
      ...options,
    });
  }

  /**
   * Requires authentication as administrator
   */
  list(
    query: DirectoryContentListParams,
    options?: RequestOptions,
  ): APIPromise<DirectoryContentListResponse> {
    return this._client.get('/Environment/DirectoryContents', { query, ...options });
  }
}

export interface FileSystemEntryInfo {
  Name?: string;

  Path?: string;

  Type?: 'File' | 'Directory' | 'NetworkComputer' | 'NetworkShare';
}

export type DirectoryContentCreateResponse = Array<FileSystemEntryInfo>;

export type DirectoryContentListResponse = Array<FileSystemEntryInfo>;

export interface DirectoryContentCreateParams {
  /**
   * Query param:
   */
  Path: string;

  /**
   * Query param: An optional filter to include or exclude folders from the results.
   * true/false
   */
  IncludeDirectories?: boolean;

  /**
   * Query param: An optional filter to include or exclude files from the results.
   * true/false
   */
  IncludeFiles?: boolean;

  /**
   * Body param:
   */
  Password?: string;

  /**
   * Body param:
   */
  Username?: string;
}

export interface DirectoryContentListParams {
  Path: string;

  /**
   * An optional filter to include or exclude folders from the results. true/false
   */
  IncludeDirectories?: boolean;

  /**
   * An optional filter to include or exclude files from the results. true/false
   */
  IncludeFiles?: boolean;
}

export declare namespace DirectoryContents {
  export {
    type FileSystemEntryInfo as FileSystemEntryInfo,
    type DirectoryContentCreateResponse as DirectoryContentCreateResponse,
    type DirectoryContentListResponse as DirectoryContentListResponse,
    type DirectoryContentCreateParams as DirectoryContentCreateParams,
    type DirectoryContentListParams as DirectoryContentListParams,
  };
}
