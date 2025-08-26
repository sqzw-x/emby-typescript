// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArtistsAPI from '../artists/artists';
import * as AuthAPI from '../auth/auth';
import * as ItemsAPI from '../items/items';
import * as SessionsAPI from '../sessions/sessions';
import * as ConfigurationAPI from './configuration';
import { Configuration, ConfigurationUpdateParams, UserConfiguration } from './configuration';
import * as FavoriteItemsAPI from './favorite-items';
import {
  FavoriteItemDeleteParams,
  FavoriteItemUpdateParams,
  FavoriteItems,
  UserItemData,
} from './favorite-items';
import * as ForgotPasswordAPI from './forgot-password';
import {
  ForgotPassword,
  ForgotPasswordInitiateParams,
  ForgotPasswordInitiateResponse,
  ForgotPasswordRedeemPinParams,
  ForgotPasswordRedeemPinResponse,
} from './forgot-password';
import * as PlayedItemsAPI from './played-items';
import { PlayedItemDeleteParams, PlayedItemUpdateParams, PlayedItems } from './played-items';
import * as PlayingItemsAPI from './playing-items';
import {
  PlayMethod,
  PlayingItemDeleteParams,
  PlayingItemProgressParams,
  PlayingItemUpdateParams,
  PlayingItems,
  RepeatMode,
} from './playing-items';
import * as TrackSelectionsAPI from './track-selections';
import { TrackSelectionDeleteParams, TrackSelections } from './track-selections';
import * as TypedSettingsAPI from './typed-settings';
import { TypedSettingRetrieveParams, TypedSettingUpdateParams, TypedSettings } from './typed-settings';
import * as ConnectAPI from './connect/connect';
import { Connect } from './connect/connect';
import * as ImagesAPI from './images/images';
import { ImageRetrieveParams, ImageUpdateParams, Images } from './images/images';
import * as ItemsItemsAPI from './items/items';
import {
  ItemHideFromResumeParams,
  ItemRetrieveIntrosParams,
  ItemRetrieveItemsParams,
  ItemRetrieveLatestParams,
  ItemRetrieveLatestResponse,
  ItemRetrieveLocalTrailersParams,
  ItemRetrieveLocalTrailersResponse,
  ItemRetrieveParams,
  ItemRetrieveResumeParams,
  ItemRetrieveSpecialFeaturesParams,
  ItemRetrieveSpecialFeaturesResponse,
  ItemUserDataParams,
  Items,
} from './items/items';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  forgotPassword: ForgotPasswordAPI.ForgotPassword = new ForgotPasswordAPI.ForgotPassword(this._client);
  configuration: ConfigurationAPI.Configuration = new ConfigurationAPI.Configuration(this._client);
  items: ItemsItemsAPI.Items = new ItemsItemsAPI.Items(this._client);
  trackSelections: TrackSelectionsAPI.TrackSelections = new TrackSelectionsAPI.TrackSelections(this._client);
  typedSettings: TypedSettingsAPI.TypedSettings = new TypedSettingsAPI.TypedSettings(this._client);
  favoriteItems: FavoriteItemsAPI.FavoriteItems = new FavoriteItemsAPI.FavoriteItems(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  playedItems: PlayedItemsAPI.PlayedItems = new PlayedItemsAPI.PlayedItems(this._client);
  playingItems: PlayingItemsAPI.PlayingItems = new PlayingItemsAPI.PlayingItems(this._client);
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);

  /**
   * Requires authentication as administrator
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post('/Users/New', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/Users/${id}`, options);
  }

  /**
   * Requires authentication as user
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Users/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/Users/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  authenticate(
    id: string,
    body: UserAuthenticateParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticationResult> {
    return this._client.post(path`/Users/${id}/Authenticate`, { body, ...options });
  }

  /**
   * ## Authenticate a user by nane and password. A 200 status code indicates success, while anything in the 400 or 500 range indicates failure
   *
   * Requires authentication as user
   */
  authenticateByName(
    params: UserAuthenticateByNameParams,
    options?: RequestOptions,
  ): APIPromise<AuthenticationResult> {
    const { 'X-Emby-Authorization': xEmbyAuthorization, ...body } = params;
    return this._client.post('/Users/AuthenticateByName', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-Emby-Authorization': xEmbyAuthorization }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteByID(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Users/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getSuggestions(
    userID: string,
    query: UserGetSuggestionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Users/${userID}/Suggestions`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getViews(
    userID: string,
    query: UserGetViewsParams,
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Users/${userID}/Views`, { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  listAll(
    query: UserListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueryResultUser> {
    return this._client.get('/Users/Query', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  listItemAccess(
    query: UserListItemAccessParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueryResultUser> {
    return this._client.get('/Users/ItemAccess', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  listPrefixes(
    query: UserListPrefixesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListPrefixesResponse> {
    return this._client.get('/Users/Prefixes', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  listPublic(options?: RequestOptions): APIPromise<UserListPublicResponse> {
    return this._client.get('/Users/Public', options);
  }

  /**
   * Requires authentication as user
   */
  updatePassword(id: string, body: UserUpdatePasswordParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Users/${id}/Password`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  updatePolicy(id: string, body: UserUpdatePolicyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Users/${id}/Policy`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthenticationResult {
  AccessToken?: string;

  ServerId?: string;

  SessionInfo?: SessionsAPI.SessionInfo;

  User?: User;
}

export interface QueryResultUser {
  Items?: Array<User>;

  TotalRecordCount?: number;
}

export interface User {
  Configuration?: ConfigurationAPI.UserConfiguration;

  ConnectLinkType?: 'LinkedUser' | 'Guest';

  ConnectUserName?: string;

  DateCreated?: string | null;

  EnableAutoLogin?: boolean | null;

  /**
   * @deprecated
   */
  HasConfiguredEasyPassword?: boolean;

  HasConfiguredPassword?: boolean;

  HasPassword?: boolean;

  Id?: string;

  LastActivityDate?: string | null;

  LastLoginDate?: string | null;

  Name?: string;

  Policy?: UserPolicy;

  Prefix?: string;

  PrimaryImageAspectRatio?: number | null;

  PrimaryImageTag?: string;

  ServerId?: string;

  ServerName?: string;

  UserItemShareLevel?: ItemsAPI.UserItemShareLevel;
}

export interface UserPolicy {
  AccessSchedules?: Array<UserPolicy.AccessSchedule>;

  AllowCameraUpload?: boolean;

  AllowSharingPersonalItems?: boolean;

  AllowTagOrRating?: boolean;

  AuthenticationProviderId?: string;

  BlockedMediaFolders?: Array<string>;

  BlockedTags?: Array<string>;

  BlockUnratedItems?: Array<
    | 'Movie'
    | 'Trailer'
    | 'Series'
    | 'Music'
    | 'Game'
    | 'Book'
    | 'LiveTvChannel'
    | 'LiveTvProgram'
    | 'ChannelContent'
    | 'Other'
  >;

  EnableAllChannels?: boolean;

  EnableAllDevices?: boolean;

  EnableAllFolders?: boolean;

  EnableAudioPlaybackTranscoding?: boolean;

  EnableContentDeletion?: boolean;

  EnableContentDeletionFromFolders?: Array<string>;

  EnableContentDownloading?: boolean;

  EnabledChannels?: Array<string>;

  EnabledDevices?: Array<string>;

  EnabledFolders?: Array<string>;

  EnableLiveTvAccess?: boolean;

  EnableLiveTvManagement?: boolean;

  EnableMediaConversion?: boolean;

  EnableMediaPlayback?: boolean;

  EnablePlaybackRemuxing?: boolean;

  EnablePublicSharing?: boolean;

  EnableRemoteAccess?: boolean;

  EnableRemoteControlOfOtherUsers?: boolean;

  EnableSharedDeviceControl?: boolean;

  EnableSubtitleDownloading?: boolean;

  EnableSubtitleManagement?: boolean;

  EnableSyncTranscoding?: boolean;

  EnableUserPreferenceAccess?: boolean;

  EnableVideoPlaybackTranscoding?: boolean;

  ExcludedSubFolders?: Array<string>;

  IncludeTags?: Array<string>;

  InvalidLoginAttemptCount?: number;

  IsAdministrator?: boolean;

  IsDisabled?: boolean;

  IsHidden?: boolean;

  IsHiddenFromUnusedDevices?: boolean;

  IsHiddenRemotely?: boolean;

  IsTagBlockingModeInclusive?: boolean;

  LockedOutDate?: number;

  MaxParentalRating?: number | null;

  RemoteClientBitrateLimit?: number;

  RestrictedFeatures?: Array<string>;

  SimultaneousStreamLimit?: number;
}

export namespace UserPolicy {
  export interface AccessSchedule {
    DayOfWeek?:
      | 'Sunday'
      | 'Monday'
      | 'Tuesday'
      | 'Wednesday'
      | 'Thursday'
      | 'Friday'
      | 'Saturday'
      | 'Everyday'
      | 'Weekday'
      | 'Weekend';

    EndHour?: number;

    StartHour?: number;
  }
}

export type UserListPrefixesResponse = Array<AuthAPI.NameIDPair>;

export type UserListPublicResponse = Array<User>;

export interface UserCreateParams {
  CopyFromUserId?: string;

  Name?: string;

  UserCopyOptions?: Array<'UserPolicy' | 'UserConfiguration'>;
}

export interface UserUpdateParams {
  Configuration?: ConfigurationAPI.UserConfiguration;

  ConnectLinkType?: 'LinkedUser' | 'Guest';

  ConnectUserName?: string;

  DateCreated?: string | null;

  EnableAutoLogin?: boolean | null;

  /**
   * @deprecated
   */
  HasConfiguredEasyPassword?: boolean;

  HasConfiguredPassword?: boolean;

  HasPassword?: boolean;

  body_Id?: string;

  LastActivityDate?: string | null;

  LastLoginDate?: string | null;

  Name?: string;

  Policy?: UserPolicy;

  Prefix?: string;

  PrimaryImageAspectRatio?: number | null;

  PrimaryImageTag?: string;

  ServerId?: string;

  ServerName?: string;

  UserItemShareLevel?: ItemsAPI.UserItemShareLevel;
}

export interface UserAuthenticateParams {
  Pw?: string;
}

export interface UserAuthenticateByNameParams {
  /**
   * Header param: The authorization header can be either named 'Authorization' or
   * 'X-Emby-Authorization'.
   * It must be of the following schema:
   * Emby UserId="(guid)", Client="(string)", Device="(string)", DeviceId="(string)",
   * Version="string", Token="(string)"
   * Please consult the documentation for further details.
   */
  'X-Emby-Authorization': string;

  /**
   * Body param:
   */
  Pw?: string;

  /**
   * Body param:
   */
  Username?: string;
}

export interface UserGetSuggestionsParams {
  /**
   * Optional, include image information in output
   */
  EnableImages?: boolean | null;

  /**
   * Optional. The image types to include in the output.
   */
  EnableImageTypes?: string;

  /**
   * Optional, include user data
   */
  EnableUserData?: boolean | null;

  /**
   * Optional. Specify additional fields of information to return in the output. This
   * allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated,
   * Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path,
   * People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios,
   * Taglines, TrailerUrls
   */
  Fields?: string;

  /**
   * Optional, the max number of images to return, per image type
   */
  ImageTypeLimit?: number | null;
}

export interface UserGetViewsParams {
  /**
   * Whether or not to include external views such as channels or live tv
   */
  IncludeExternalContent: boolean | null;
}

export interface UserListAllParams {
  /**
   * Optional filter by IsDisabled=true or false
   */
  IsDisabled?: boolean | null;

  /**
   * Optional filter by IsHidden=true or false
   */
  IsHidden?: boolean | null;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  NameStartsWithOrGreater?: string;

  /**
   * Sort Order - Ascending,Descending
   */
  SortOrder?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number;
}

export interface UserListItemAccessParams {
  /**
   * Optional filter by IsDisabled=true or false
   */
  IsDisabled?: boolean | null;

  /**
   * Optional filter by IsHidden=true or false
   */
  IsHidden?: boolean | null;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  NameStartsWithOrGreater?: string;

  /**
   * Sort Order - Ascending,Descending
   */
  SortOrder?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number;
}

export interface UserListPrefixesParams {
  /**
   * Optional filter by IsDisabled=true or false
   */
  IsDisabled?: boolean | null;

  /**
   * Optional filter by IsHidden=true or false
   */
  IsHidden?: boolean | null;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  NameStartsWithOrGreater?: string;

  /**
   * Sort Order - Ascending,Descending
   */
  SortOrder?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number;
}

export interface UserUpdatePasswordParams {
  body_Id?: string;

  NewPw?: string;

  ResetPassword?: boolean;
}

export interface UserUpdatePolicyParams {
  AccessSchedules?: Array<UserUpdatePolicyParams.AccessSchedule>;

  AllowCameraUpload?: boolean;

  AllowSharingPersonalItems?: boolean;

  AllowTagOrRating?: boolean;

  AuthenticationProviderId?: string;

  BlockedMediaFolders?: Array<string>;

  BlockedTags?: Array<string>;

  BlockUnratedItems?: Array<
    | 'Movie'
    | 'Trailer'
    | 'Series'
    | 'Music'
    | 'Game'
    | 'Book'
    | 'LiveTvChannel'
    | 'LiveTvProgram'
    | 'ChannelContent'
    | 'Other'
  >;

  EnableAllChannels?: boolean;

  EnableAllDevices?: boolean;

  EnableAllFolders?: boolean;

  EnableAudioPlaybackTranscoding?: boolean;

  EnableContentDeletion?: boolean;

  EnableContentDeletionFromFolders?: Array<string>;

  EnableContentDownloading?: boolean;

  EnabledChannels?: Array<string>;

  EnabledDevices?: Array<string>;

  EnabledFolders?: Array<string>;

  EnableLiveTvAccess?: boolean;

  EnableLiveTvManagement?: boolean;

  EnableMediaConversion?: boolean;

  EnableMediaPlayback?: boolean;

  EnablePlaybackRemuxing?: boolean;

  EnablePublicSharing?: boolean;

  EnableRemoteAccess?: boolean;

  EnableRemoteControlOfOtherUsers?: boolean;

  EnableSharedDeviceControl?: boolean;

  EnableSubtitleDownloading?: boolean;

  EnableSubtitleManagement?: boolean;

  EnableSyncTranscoding?: boolean;

  EnableUserPreferenceAccess?: boolean;

  EnableVideoPlaybackTranscoding?: boolean;

  ExcludedSubFolders?: Array<string>;

  IncludeTags?: Array<string>;

  InvalidLoginAttemptCount?: number;

  IsAdministrator?: boolean;

  IsDisabled?: boolean;

  IsHidden?: boolean;

  IsHiddenFromUnusedDevices?: boolean;

  IsHiddenRemotely?: boolean;

  IsTagBlockingModeInclusive?: boolean;

  LockedOutDate?: number;

  MaxParentalRating?: number | null;

  RemoteClientBitrateLimit?: number;

  RestrictedFeatures?: Array<string>;

  SimultaneousStreamLimit?: number;
}

export namespace UserUpdatePolicyParams {
  export interface AccessSchedule {
    DayOfWeek?:
      | 'Sunday'
      | 'Monday'
      | 'Tuesday'
      | 'Wednesday'
      | 'Thursday'
      | 'Friday'
      | 'Saturday'
      | 'Everyday'
      | 'Weekday'
      | 'Weekend';

    EndHour?: number;

    StartHour?: number;
  }
}

Users.ForgotPassword = ForgotPassword;
Users.Configuration = Configuration;
Users.Items = Items;
Users.TrackSelections = TrackSelections;
Users.TypedSettings = TypedSettings;
Users.FavoriteItems = FavoriteItems;
Users.Images = Images;
Users.PlayedItems = PlayedItems;
Users.PlayingItems = PlayingItems;
Users.Connect = Connect;

export declare namespace Users {
  export {
    type AuthenticationResult as AuthenticationResult,
    type QueryResultUser as QueryResultUser,
    type User as User,
    type UserPolicy as UserPolicy,
    type UserListPrefixesResponse as UserListPrefixesResponse,
    type UserListPublicResponse as UserListPublicResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserAuthenticateParams as UserAuthenticateParams,
    type UserAuthenticateByNameParams as UserAuthenticateByNameParams,
    type UserGetSuggestionsParams as UserGetSuggestionsParams,
    type UserGetViewsParams as UserGetViewsParams,
    type UserListAllParams as UserListAllParams,
    type UserListItemAccessParams as UserListItemAccessParams,
    type UserListPrefixesParams as UserListPrefixesParams,
    type UserUpdatePasswordParams as UserUpdatePasswordParams,
    type UserUpdatePolicyParams as UserUpdatePolicyParams,
  };

  export {
    ForgotPassword as ForgotPassword,
    type ForgotPasswordInitiateResponse as ForgotPasswordInitiateResponse,
    type ForgotPasswordRedeemPinResponse as ForgotPasswordRedeemPinResponse,
    type ForgotPasswordInitiateParams as ForgotPasswordInitiateParams,
    type ForgotPasswordRedeemPinParams as ForgotPasswordRedeemPinParams,
  };

  export {
    Configuration as Configuration,
    type UserConfiguration as UserConfiguration,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
  };

  export {
    Items as Items,
    type ItemRetrieveLatestResponse as ItemRetrieveLatestResponse,
    type ItemRetrieveLocalTrailersResponse as ItemRetrieveLocalTrailersResponse,
    type ItemRetrieveSpecialFeaturesResponse as ItemRetrieveSpecialFeaturesResponse,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemHideFromResumeParams as ItemHideFromResumeParams,
    type ItemRetrieveIntrosParams as ItemRetrieveIntrosParams,
    type ItemRetrieveItemsParams as ItemRetrieveItemsParams,
    type ItemRetrieveLatestParams as ItemRetrieveLatestParams,
    type ItemRetrieveLocalTrailersParams as ItemRetrieveLocalTrailersParams,
    type ItemRetrieveResumeParams as ItemRetrieveResumeParams,
    type ItemRetrieveSpecialFeaturesParams as ItemRetrieveSpecialFeaturesParams,
    type ItemUserDataParams as ItemUserDataParams,
  };

  export {
    TrackSelections as TrackSelections,
    type TrackSelectionDeleteParams as TrackSelectionDeleteParams,
  };

  export {
    TypedSettings as TypedSettings,
    type TypedSettingRetrieveParams as TypedSettingRetrieveParams,
    type TypedSettingUpdateParams as TypedSettingUpdateParams,
  };

  export {
    FavoriteItems as FavoriteItems,
    type UserItemData as UserItemData,
    type FavoriteItemUpdateParams as FavoriteItemUpdateParams,
    type FavoriteItemDeleteParams as FavoriteItemDeleteParams,
  };

  export {
    Images as Images,
    type ImageRetrieveParams as ImageRetrieveParams,
    type ImageUpdateParams as ImageUpdateParams,
  };

  export {
    PlayedItems as PlayedItems,
    type PlayedItemUpdateParams as PlayedItemUpdateParams,
    type PlayedItemDeleteParams as PlayedItemDeleteParams,
  };

  export {
    PlayingItems as PlayingItems,
    type PlayMethod as PlayMethod,
    type RepeatMode as RepeatMode,
    type PlayingItemUpdateParams as PlayingItemUpdateParams,
    type PlayingItemDeleteParams as PlayingItemDeleteParams,
    type PlayingItemProgressParams as PlayingItemProgressParams,
  };

  export { Connect as Connect };
}
