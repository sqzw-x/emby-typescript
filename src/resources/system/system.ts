// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActivityLogAPI from './activity-log';
import { ActivityLog, ActivityLogListEntriesParams, ActivityLogListEntriesResponse } from './activity-log';
import * as ConfigurationAPI from './configuration';
import {
  Configuration,
  ConfigurationUpdateNamedParams,
  ConfigurationUpdateParams,
  ConfigurationUpdatePartialParams,
  ServerConfiguration,
} from './configuration';
import * as InfoAPI from './info';
import { Info, InfoRetrievePublicResponse, InfoRetrieveResponse } from './info';
import * as LogsAPI from './logs';
import {
  LogListAvailableParams,
  LogListAvailableResponse,
  LogRetrieveLinesResponse,
  LogRetrieveParams,
  Logs,
} from './logs';
import * as PingAPI from './ping';
import { Ping } from './ping';
import * as ReleaseNotesAPI from './release-notes';
import { PackageVersionInfo, ReleaseNoteListVersionsResponse, ReleaseNotes } from './release-notes';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class System extends APIResource {
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
  releaseNotes: ReleaseNotesAPI.ReleaseNotes = new ReleaseNotesAPI.ReleaseNotes(this._client);
  ping: PingAPI.Ping = new PingAPI.Ping(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  activityLog: ActivityLogAPI.ActivityLog = new ActivityLogAPI.ActivityLog(this._client);

  /**
   * Requires authentication as administrator
   */
  restart(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/System/Restart', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveEndpointInfo(options?: RequestOptions): APIPromise<SystemRetrieveEndpointInfoResponse> {
    return this._client.get('/System/Endpoint', options);
  }

  /**
   * Requires authentication as user
   */
  retrieveWakeOnLanInfo(options?: RequestOptions): APIPromise<SystemRetrieveWakeOnLanInfoResponse> {
    return this._client.get('/System/WakeOnLanInfo', options);
  }

  /**
   * Requires authentication as administrator
   */
  shutdown(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/System/Shutdown', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WakeOnLanInfo {
  BroadcastAddress?: string;

  MacAddress?: string;

  Port?: number;
}

export interface SystemRetrieveEndpointInfoResponse {
  IsInNetwork?: boolean;

  IsLocal?: boolean;
}

export type SystemRetrieveWakeOnLanInfoResponse = Array<WakeOnLanInfo>;

System.Configuration = Configuration;
System.ReleaseNotes = ReleaseNotes;
System.Ping = Ping;
System.Info = Info;
System.Logs = Logs;
System.ActivityLog = ActivityLog;

export declare namespace System {
  export {
    type WakeOnLanInfo as WakeOnLanInfo,
    type SystemRetrieveEndpointInfoResponse as SystemRetrieveEndpointInfoResponse,
    type SystemRetrieveWakeOnLanInfoResponse as SystemRetrieveWakeOnLanInfoResponse,
  };

  export {
    Configuration as Configuration,
    type ServerConfiguration as ServerConfiguration,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationUpdateNamedParams as ConfigurationUpdateNamedParams,
    type ConfigurationUpdatePartialParams as ConfigurationUpdatePartialParams,
  };

  export {
    ReleaseNotes as ReleaseNotes,
    type PackageVersionInfo as PackageVersionInfo,
    type ReleaseNoteListVersionsResponse as ReleaseNoteListVersionsResponse,
  };

  export { Ping as Ping };

  export {
    Info as Info,
    type InfoRetrieveResponse as InfoRetrieveResponse,
    type InfoRetrievePublicResponse as InfoRetrievePublicResponse,
  };

  export {
    Logs as Logs,
    type LogListAvailableResponse as LogListAvailableResponse,
    type LogRetrieveLinesResponse as LogRetrieveLinesResponse,
    type LogRetrieveParams as LogRetrieveParams,
    type LogListAvailableParams as LogListAvailableParams,
  };

  export {
    ActivityLog as ActivityLog,
    type ActivityLogListEntriesResponse as ActivityLogListEntriesResponse,
    type ActivityLogListEntriesParams as ActivityLogListEntriesParams,
  };
}
