// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectionmanagerAPI from './connectionmanager';
import { Connectionmanager, ConnectionmanagerProcessControlParams } from './connectionmanager';
import * as ContentdirectoryAPI from './contentdirectory';
import { Contentdirectory, ContentdirectoryProcessControlParams } from './contentdirectory';
import * as IconsAPI from './icons';
import { IconRetrieveForServerParams, IconRetrieveParams, Icons } from './icons';
import * as ProfilesAPI from './profiles';
import {
  CodecProfile,
  ContainerProfile,
  DirectPlayProfile,
  DlnaProfile,
  DlnaProfileType,
  ProfileCondition,
  ProfileCreateParams,
  ProfileUpdateParams,
  Profiles,
  ResponseProfile,
  SubtitleProfile,
  TranscodingProfile,
} from './profiles';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Dlna extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  icons: IconsAPI.Icons = new IconsAPI.Icons(this._client);
  contentdirectory: ContentdirectoryAPI.Contentdirectory = new ContentdirectoryAPI.Contentdirectory(
    this._client,
  );
  connectionmanager: ConnectionmanagerAPI.Connectionmanager = new ConnectionmanagerAPI.Connectionmanager(
    this._client,
  );

  /**
   * Requires authentication as administrator
   */
  listProfiles(options?: RequestOptions): APIPromise<DlnaListProfilesResponse> {
    return this._client.get('/Dlna/ProfileInfos', options);
  }

  /**
   * No authentication required
   */
  retrieveDescription(uuID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Dlna/${uuID}/description`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * No authentication required
   */
  retrieveDescriptionXml(uuID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Dlna/${uuID}/description.xml`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type DlnaListProfilesResponse = Array<ProfilesAPI.DlnaProfile>;

Dlna.Profiles = Profiles;
Dlna.Icons = Icons;
Dlna.Contentdirectory = Contentdirectory;
Dlna.Connectionmanager = Connectionmanager;

export declare namespace Dlna {
  export { type DlnaListProfilesResponse as DlnaListProfilesResponse };

  export {
    Profiles as Profiles,
    type CodecProfile as CodecProfile,
    type ContainerProfile as ContainerProfile,
    type DirectPlayProfile as DirectPlayProfile,
    type DlnaProfile as DlnaProfile,
    type DlnaProfileType as DlnaProfileType,
    type ProfileCondition as ProfileCondition,
    type ResponseProfile as ResponseProfile,
    type SubtitleProfile as SubtitleProfile,
    type TranscodingProfile as TranscodingProfile,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    Icons as Icons,
    type IconRetrieveParams as IconRetrieveParams,
    type IconRetrieveForServerParams as IconRetrieveForServerParams,
  };

  export {
    Contentdirectory as Contentdirectory,
    type ContentdirectoryProcessControlParams as ContentdirectoryProcessControlParams,
  };

  export {
    Connectionmanager as Connectionmanager,
    type ConnectionmanagerProcessControlParams as ConnectionmanagerProcessControlParams,
  };
}
