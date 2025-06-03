// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DirectoryContentsAPI from './directory-contents';
import {
  DirectoryContentCreateParams,
  DirectoryContentCreateResponse,
  DirectoryContentListParams,
  DirectoryContentListResponse,
  DirectoryContents,
  FileSystemEntryInfo,
} from './directory-contents';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Environment extends APIResource {
  directoryContents: DirectoryContentsAPI.DirectoryContents = new DirectoryContentsAPI.DirectoryContents(
    this._client,
  );

  /**
   * Requires authentication as administrator
   */
  defaultDirectoryBrowser(options?: RequestOptions): APIPromise<EnvironmentDefaultDirectoryBrowserResponse> {
    return this._client.get('/Environment/DefaultDirectoryBrowser', options);
  }

  /**
   * Requires authentication as administrator
   */
  drives(options?: RequestOptions): APIPromise<EnvironmentDrivesResponse> {
    return this._client.get('/Environment/Drives', options);
  }

  /**
   * Requires authentication as administrator
   */
  networkDevices(options?: RequestOptions): APIPromise<EnvironmentNetworkDevicesResponse> {
    return this._client.get('/Environment/NetworkDevices', options);
  }

  /**
   * Requires authentication as administrator
   */
  networkShares(
    query: EnvironmentNetworkSharesParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentNetworkSharesResponse> {
    return this._client.get('/Environment/NetworkShares', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  parentPath(query: EnvironmentParentPathParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/Environment/ParentPath', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  validatePath(params: EnvironmentValidatePathParams, options?: RequestOptions): APIPromise<void> {
    const { Path, ...body } = params;
    return this._client.post('/Environment/ValidatePath', {
      query: { Path },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EnvironmentDefaultDirectoryBrowserResponse {
  Path?: string;
}

export type EnvironmentDrivesResponse = Array<DirectoryContentsAPI.FileSystemEntryInfo>;

export type EnvironmentNetworkDevicesResponse = Array<DirectoryContentsAPI.FileSystemEntryInfo>;

export type EnvironmentNetworkSharesResponse = Array<DirectoryContentsAPI.FileSystemEntryInfo>;

export type EnvironmentParentPathResponse = string;

export interface EnvironmentNetworkSharesParams {
  Path: string;
}

export interface EnvironmentParentPathParams {
  Path: string;
}

export interface EnvironmentValidatePathParams {
  /**
   * Query param:
   */
  Path: string;

  /**
   * Body param:
   */
  IsFile?: boolean | null;

  /**
   * Body param:
   */
  Password?: string;

  /**
   * Body param:
   */
  Username?: string;

  /**
   * Body param:
   */
  ValidateWriteable?: boolean;
}

Environment.DirectoryContents = DirectoryContents;

export declare namespace Environment {
  export {
    type EnvironmentDefaultDirectoryBrowserResponse as EnvironmentDefaultDirectoryBrowserResponse,
    type EnvironmentDrivesResponse as EnvironmentDrivesResponse,
    type EnvironmentNetworkDevicesResponse as EnvironmentNetworkDevicesResponse,
    type EnvironmentNetworkSharesResponse as EnvironmentNetworkSharesResponse,
    type EnvironmentParentPathResponse as EnvironmentParentPathResponse,
    type EnvironmentNetworkSharesParams as EnvironmentNetworkSharesParams,
    type EnvironmentParentPathParams as EnvironmentParentPathParams,
    type EnvironmentValidatePathParams as EnvironmentValidatePathParams,
  };

  export {
    DirectoryContents as DirectoryContents,
    type FileSystemEntryInfo as FileSystemEntryInfo,
    type DirectoryContentCreateResponse as DirectoryContentCreateResponse,
    type DirectoryContentListResponse as DirectoryContentListResponse,
    type DirectoryContentCreateParams as DirectoryContentCreateParams,
    type DirectoryContentListParams as DirectoryContentListParams,
  };
}
