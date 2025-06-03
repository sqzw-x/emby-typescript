// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LiveStreamsAPI from '../live-streams';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Capabilities extends APIResource {
  /**
   * Requires authentication as user
   */
  update(params: CapabilityUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { Id, PlayableMediaTypes, SupportedCommands, SupportsMediaControl, SupportsSync } = params;
    return this._client.post('/Sessions/Capabilities', {
      query: { Id, PlayableMediaTypes, SupportedCommands, SupportsMediaControl, SupportsSync },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  updateFull(params: CapabilityUpdateFullParams, options?: RequestOptions): APIPromise<void> {
    const { Id, ...body } = params;
    return this._client.post('/Sessions/Capabilities/Full', {
      query: { Id },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CapabilityUpdateParams {
  /**
   * Session Id
   */
  Id: string;

  /**
   * A list of playable media types, comma delimited. Audio, Video, Book, Game,
   * Photo.
   */
  PlayableMediaTypes?: string;

  /**
   * A list of supported remote control commands, comma delimited
   */
  SupportedCommands?: string;

  /**
   * Determines whether media can be played remotely.
   */
  SupportsMediaControl?: boolean;

  /**
   * Determines whether sync is supported.
   */
  SupportsSync?: boolean;
}

export interface CapabilityUpdateFullParams {
  /**
   * Query param: Session Id
   */
  Id: string;

  /**
   * Body param:
   */
  AppId?: string;

  /**
   * Body param:
   */
  DeviceProfile?: LiveStreamsAPI.DeviceProfile;

  /**
   * Body param:
   */
  IconUrl?: string;

  /**
   * Body param:
   */
  PlayableMediaTypes?: Array<string>;

  /**
   * Body param:
   */
  PushToken?: string;

  /**
   * Body param:
   */
  PushTokenType?: string;

  /**
   * Body param:
   */
  SupportedCommands?: Array<string>;

  /**
   * Body param:
   */
  SupportsMediaControl?: boolean;

  /**
   * Body param:
   */
  SupportsSync?: boolean;
}

export declare namespace Capabilities {
  export {
    type CapabilityUpdateParams as CapabilityUpdateParams,
    type CapabilityUpdateFullParams as CapabilityUpdateFullParams,
  };
}
