// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InstallingAPI from './installing';
import { Installing } from './installing';
import * as ReleaseNotesAPI from '../system/release-notes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Packages extends APIResource {
  installing: InstallingAPI.Installing = new InstallingAPI.Installing(this._client);

  /**
   * Requires authentication as user
   */
  retrieve(
    name: string,
    query: PackageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PackageInfo> {
    return this._client.get(path`/Packages/${name}`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  list(
    query: PackageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PackageListResponse> {
    return this._client.get('/Packages', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  install(
    name: string,
    params: PackageInstallParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { AssemblyGuid, UpdateClass, Version } = params ?? {};
    return this._client.post(path`/Packages/Installed/${name}`, {
      query: { AssemblyGuid, UpdateClass, Version },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  listUpdates(
    query: PackageListUpdatesParams,
    options?: RequestOptions,
  ): APIPromise<PackageListUpdatesResponse> {
    return this._client.get('/Packages/Updates', { query, ...options });
  }
}

export interface PackageInfo {
  id?: string;

  adult?: boolean;

  category?: string;

  enableInAppStore?: boolean;

  expDate?: string;

  featureId?: string;

  guid?: string;

  installs?: number;

  isPremium?: boolean;

  isRegistered?: boolean;

  name?: string;

  overview?: string;

  owner?: string;

  previewImage?: string;

  price?: number | null;

  richDescUrl?: string;

  shortDescription?: string;

  targetFilename?: string;

  targetSystem?: 'Server' | 'MBTheater' | 'MBClassic' | 'Other';

  thumbImage?: string;

  tileColor?: string;

  type?: string;

  versions?: Array<ReleaseNotesAPI.PackageVersionInfo>;
}

export type PackageVersion = 'Release' | 'Beta' | 'Dev';

export type PackageListResponse = Array<PackageInfo>;

export type PackageListUpdatesResponse = Array<ReleaseNotesAPI.PackageVersionInfo>;

export interface PackageRetrieveParams {
  /**
   * The guid of the associated assembly
   */
  AssemblyGuid?: string;
}

export interface PackageListParams {
  /**
   * Optional. Filter by package that contain adult content.
   */
  IsAdult?: boolean | null;

  /**
   * Optional. Filter by premium status
   */
  IsPremium?: boolean | null;

  /**
   * Optional package type filter (System/UserInstalled)
   */
  PackageType?: string;

  /**
   * Optional. Filter by target system type. Allows multiple, comma delimited.
   */
  TargetSystems?: string;
}

export interface PackageInstallParams {
  /**
   * Guid of the associated assembly
   */
  AssemblyGuid?: string;

  /**
   * Optional update class (Dev, Beta, Release). Defaults to Release.
   */
  UpdateClass?: PackageVersion;

  /**
   * Optional version. Defaults to latest version.
   */
  Version?: string;
}

export interface PackageListUpdatesParams {
  /**
   * Package type filter (System/UserInstalled)
   */
  PackageType: string;
}

Packages.Installing = Installing;

export declare namespace Packages {
  export {
    type PackageInfo as PackageInfo,
    type PackageVersion as PackageVersion,
    type PackageListResponse as PackageListResponse,
    type PackageListUpdatesResponse as PackageListUpdatesResponse,
    type PackageRetrieveParams as PackageRetrieveParams,
    type PackageListParams as PackageListParams,
    type PackageInstallParams as PackageInstallParams,
    type PackageListUpdatesParams as PackageListUpdatesParams,
  };

  export { Installing as Installing };
}
