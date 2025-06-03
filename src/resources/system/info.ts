// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PackagesAPI from '../packages/packages';
import * as SystemAPI from './system';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Info extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(options?: RequestOptions): APIPromise<InfoRetrieveResponse> {
    return this._client.get('/System/Info', options);
  }

  /**
   * Requires authentication as user
   */
  retrievePublic(options?: RequestOptions): APIPromise<InfoRetrievePublicResponse> {
    return this._client.get('/System/Info/Public', options);
  }
}

export interface InfoRetrieveResponse {
  CachePath?: string;

  CanLaunchWebBrowser?: boolean;

  CanSelfRestart?: boolean;

  CanSelfUpdate?: boolean;

  CompletedInstallations?: Array<InfoRetrieveResponse.CompletedInstallation>;

  HardwareAccelerationRequiresPremiere?: boolean;

  HasImageEnhancers?: boolean;

  HasPendingRestart?: boolean;

  HasUpdateAvailable?: boolean;

  HttpServerPortNumber?: number;

  HttpsPortNumber?: number;

  Id?: string;

  InternalMetadataPath?: string;

  IsShuttingDown?: boolean;

  ItemsByNamePath?: string;

  LocalAddress?: string;

  LocalAddresses?: Array<string>;

  LogPath?: string;

  OperatingSystem?: string;

  OperatingSystemDisplayName?: string;

  PackageName?: string;

  ProgramDataPath?: string;

  RemoteAddresses?: Array<string>;

  ServerName?: string;

  SupportsAutoRunAtStartup?: boolean;

  SupportsHttps?: boolean;

  SupportsLibraryMonitor?: boolean;

  SupportsLocalPortConfiguration?: boolean;

  SupportsWakeServer?: boolean;

  SystemUpdateLevel?: PackagesAPI.PackageVersion;

  TranscodingTempPath?: string;

  Version?: string;

  WakeOnLanInfo?: Array<SystemAPI.WakeOnLanInfo>;

  WanAddress?: string;

  WebSocketPortNumber?: number;
}

export namespace InfoRetrieveResponse {
  export interface CompletedInstallation {
    AssemblyGuid?: string;

    Id?: string;

    Name?: string;

    PercentComplete?: number | null;

    UpdateClass?: PackagesAPI.PackageVersion;

    Version?: string;
  }
}

export interface InfoRetrievePublicResponse {
  Id?: string;

  LocalAddress?: string;

  LocalAddresses?: Array<string>;

  RemoteAddresses?: Array<string>;

  ServerName?: string;

  Version?: string;

  WanAddress?: string;
}

export declare namespace Info {
  export {
    type InfoRetrieveResponse as InfoRetrieveResponse,
    type InfoRetrievePublicResponse as InfoRetrievePublicResponse,
  };
}
