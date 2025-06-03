// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Configuration extends APIResource {
  /**
   * Requires authentication as user
   */
  retrieve(options?: RequestOptions): APIPromise<ServerConfiguration> {
    return this._client.get('/System/Configuration', options);
  }

  /**
   * Requires authentication as administrator
   */
  update(body: ConfigurationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/System/Configuration', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveNamed(key: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/System/Configuration/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updateNamed(
    key: string,
    params: ConfigurationUpdateNamedParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/System/Configuration/${key}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updatePartial(params: ConfigurationUpdatePartialParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/System/Configuration/Partial', {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface ServerConfiguration {
  AllowLegacyLocalNetworkPassword?: boolean;

  AutoRunWebApp?: boolean;

  CachePath?: string;

  CertificatePassword?: string;

  CertificatePath?: string;

  CollapseVideoFolders?: boolean;

  DashboardSourcePath?: string;

  DatabaseAnalysisLimit?: number;

  DatabaseCacheSizeMB?: number;

  DisableAsyncIO?: boolean;

  EnableAutomaticRestart?: boolean;

  EnableAutoUpdate?: boolean;

  EnableCaseSensitiveItemIds?: boolean;

  EnableDashboardResponseCaching?: boolean;

  EnableDebugLevelLogging?: boolean;

  EnableExternalContentInSuggestions?: boolean;

  EnableHttps?: boolean;

  EnableOriginalTrackTitles?: boolean;

  EnablePeopleLetterSubFolders?: boolean;

  EnableRemoteAccess?: boolean;

  EnableSavedMetadataForPeople?: boolean;

  EnableSqLiteMmio?: boolean;

  EnableUPnP?: boolean;

  HttpServerPortNumber?: number;

  HttpsPortNumber?: number;

  ImageExtractionTimeoutMs?: number;

  ImageExtractorUpgraded1?: boolean;

  ImageSavingConvention?: 'Legacy' | 'Compatible';

  IsBehindProxy?: boolean;

  IsPortAuthorized?: boolean;

  IsRemoteIPFilterBlacklist?: boolean;

  IsStartupWizardCompleted?: boolean;

  LibraryMonitorDelaySeconds?: number;

  LocalNetworkAddresses?: Array<string>;

  LocalNetworkSubnets?: Array<string>;

  LogAllQueryTimes?: boolean;

  LogFileRetentionDays?: number;

  MetadataCountryCode?: string;

  MetadataNetworkPath?: string;

  MetadataPath?: string;

  MigratedLibraryOptionsToDb?: boolean;

  MigratedToUserItemShares8?: boolean;

  OptimizeDatabaseOnShutdown?: boolean;

  PathSubstitutions?: Array<ServerConfiguration.PathSubstitution>;

  PlaylistsUpgradedToM3U?: boolean;

  PreferredDetectedRemoteAddressFamily?:
    | 'Unspecified'
    | 'Unix'
    | 'InterNetwork'
    | 'ImpLink'
    | 'Pup'
    | 'Chaos'
    | 'NS'
    | 'Ipx'
    | 'Osi'
    | 'Iso'
    | 'Ecma'
    | 'DataKit'
    | 'Ccitt'
    | 'Sna'
    | 'DecNet'
    | 'DataLink'
    | 'Lat'
    | 'HyperChannel'
    | 'AppleTalk'
    | 'NetBios'
    | 'VoiceView'
    | 'FireFox'
    | 'Banyan'
    | 'Atm'
    | 'InterNetworkV6'
    | 'Cluster'
    | 'Ieee12844'
    | 'Irda'
    | 'NetworkDesigners'
    | 'Max'
    | 'Packet'
    | 'ControllerAreaNetwork'
    | 'Unknown';

  PreferredMetadataLanguage?: string;

  ProxyHeaderMode?: 'None' | 'LanAddressesOnly' | 'RemoteAddressesOnly' | 'AllAddresses';

  PublicHttpsPort?: number;

  PublicPort?: number;

  RemoteClientBitrateLimit?: number;

  RemoteIPFilter?: Array<string>;

  RequireHttps?: boolean;

  RevertDebugLogging?: string;

  RunAtStartup?: boolean;

  ServerName?: string;

  SimultaneousStreamLimit?: number;

  SortRemoveWords?: Array<string>;

  TvChannelsRefreshed?: boolean;

  UICulture?: string;

  UninstalledPlugins?: Array<string>;

  VacuumDatabaseOnStartup?: boolean;

  WanDdns?: string;
}

export namespace ServerConfiguration {
  export interface PathSubstitution {
    From?: string;

    To?: string;
  }
}

export interface ConfigurationUpdateParams {
  AllowLegacyLocalNetworkPassword?: boolean;

  AutoRunWebApp?: boolean;

  CachePath?: string;

  CertificatePassword?: string;

  CertificatePath?: string;

  CollapseVideoFolders?: boolean;

  DashboardSourcePath?: string;

  DatabaseAnalysisLimit?: number;

  DatabaseCacheSizeMB?: number;

  DisableAsyncIO?: boolean;

  EnableAutomaticRestart?: boolean;

  EnableAutoUpdate?: boolean;

  EnableCaseSensitiveItemIds?: boolean;

  EnableDashboardResponseCaching?: boolean;

  EnableDebugLevelLogging?: boolean;

  EnableExternalContentInSuggestions?: boolean;

  EnableHttps?: boolean;

  EnableOriginalTrackTitles?: boolean;

  EnablePeopleLetterSubFolders?: boolean;

  EnableRemoteAccess?: boolean;

  EnableSavedMetadataForPeople?: boolean;

  EnableSqLiteMmio?: boolean;

  EnableUPnP?: boolean;

  HttpServerPortNumber?: number;

  HttpsPortNumber?: number;

  ImageExtractionTimeoutMs?: number;

  ImageExtractorUpgraded1?: boolean;

  ImageSavingConvention?: 'Legacy' | 'Compatible';

  IsBehindProxy?: boolean;

  IsPortAuthorized?: boolean;

  IsRemoteIPFilterBlacklist?: boolean;

  IsStartupWizardCompleted?: boolean;

  LibraryMonitorDelaySeconds?: number;

  LocalNetworkAddresses?: Array<string>;

  LocalNetworkSubnets?: Array<string>;

  LogAllQueryTimes?: boolean;

  LogFileRetentionDays?: number;

  MetadataCountryCode?: string;

  MetadataNetworkPath?: string;

  MetadataPath?: string;

  MigratedLibraryOptionsToDb?: boolean;

  MigratedToUserItemShares8?: boolean;

  OptimizeDatabaseOnShutdown?: boolean;

  PathSubstitutions?: Array<ConfigurationUpdateParams.PathSubstitution>;

  PlaylistsUpgradedToM3U?: boolean;

  PreferredDetectedRemoteAddressFamily?:
    | 'Unspecified'
    | 'Unix'
    | 'InterNetwork'
    | 'ImpLink'
    | 'Pup'
    | 'Chaos'
    | 'NS'
    | 'Ipx'
    | 'Osi'
    | 'Iso'
    | 'Ecma'
    | 'DataKit'
    | 'Ccitt'
    | 'Sna'
    | 'DecNet'
    | 'DataLink'
    | 'Lat'
    | 'HyperChannel'
    | 'AppleTalk'
    | 'NetBios'
    | 'VoiceView'
    | 'FireFox'
    | 'Banyan'
    | 'Atm'
    | 'InterNetworkV6'
    | 'Cluster'
    | 'Ieee12844'
    | 'Irda'
    | 'NetworkDesigners'
    | 'Max'
    | 'Packet'
    | 'ControllerAreaNetwork'
    | 'Unknown';

  PreferredMetadataLanguage?: string;

  ProxyHeaderMode?: 'None' | 'LanAddressesOnly' | 'RemoteAddressesOnly' | 'AllAddresses';

  PublicHttpsPort?: number;

  PublicPort?: number;

  RemoteClientBitrateLimit?: number;

  RemoteIPFilter?: Array<string>;

  RequireHttps?: boolean;

  RevertDebugLogging?: string;

  RunAtStartup?: boolean;

  ServerName?: string;

  SimultaneousStreamLimit?: number;

  SortRemoveWords?: Array<string>;

  TvChannelsRefreshed?: boolean;

  UICulture?: string;

  UninstalledPlugins?: Array<string>;

  VacuumDatabaseOnStartup?: boolean;

  WanDdns?: string;
}

export namespace ConfigurationUpdateParams {
  export interface PathSubstitution {
    From?: string;

    To?: string;
  }
}

export interface ConfigurationUpdateNamedParams {
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export interface ConfigurationUpdatePartialParams {
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Configuration {
  export {
    type ServerConfiguration as ServerConfiguration,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationUpdateNamedParams as ConfigurationUpdateNamedParams,
    type ConfigurationUpdatePartialParams as ConfigurationUpdatePartialParams,
  };
}
