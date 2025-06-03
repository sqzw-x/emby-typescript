// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PackagesAPI from '../packages/packages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ReleaseNotes extends APIResource {
  /**
   * Requires authentication as user
   */
  list(options?: RequestOptions): APIPromise<PackageVersionInfo> {
    return this._client.get('/System/ReleaseNotes', options);
  }

  /**
   * Requires authentication as user
   */
  listVersions(options?: RequestOptions): APIPromise<ReleaseNoteListVersionsResponse> {
    return this._client.get('/System/ReleaseNotes/Versions', options);
  }
}

export interface PackageVersionInfo {
  checksum?: string;

  classification?: PackagesAPI.PackageVersion;

  description?: string;

  guid?: string;

  infoUrl?: string;

  name?: string;

  requiredVersionStr?: string;

  runtimes?: string;

  sourceUrl?: string;

  targetFilename?: string;

  timestamp?: string | null;

  versionStr?: string;
}

export type ReleaseNoteListVersionsResponse = Array<PackageVersionInfo>;

export declare namespace ReleaseNotes {
  export {
    type PackageVersionInfo as PackageVersionInfo,
    type ReleaseNoteListVersionsResponse as ReleaseNoteListVersionsResponse,
  };
}
