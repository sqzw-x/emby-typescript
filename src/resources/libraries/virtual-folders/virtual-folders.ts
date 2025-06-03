// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as VirtualFoldersAPI from './virtual-folders';
import * as LibrariesAPI from '../libraries';
import * as PathsAPI from './paths';
import { MediaPathInfo, PathCreateParams, PathDeletePathParams, PathUpdateParams, Paths } from './paths';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class VirtualFolders extends APIResource {
  paths: PathsAPI.Paths = new PathsAPI.Paths(this._client);

  /**
   * Requires authentication as administrator
   */
  create(body: VirtualFolderCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/VirtualFolders', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  delete(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/Library/VirtualFolders', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  deleteFolder(body: VirtualFolderDeleteFolderParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/VirtualFolders/Delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  retrieveQuery(
    query: VirtualFolderRetrieveQueryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VirtualFolderRetrieveQueryResponse> {
    return this._client.get('/Library/VirtualFolders/Query', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  setLibraryOptions(body: VirtualFolderSetLibraryOptionsParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/VirtualFolders/LibraryOptions', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as administrator
   */
  setName(body: VirtualFolderSetNameParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/VirtualFolders/Name', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface LibraryOptions {
  AutoGenerateChapters?: boolean;

  AutomaticRefreshIntervalDays?: number;

  CacheImages?: boolean;

  CollapseSingleItemFolders?: boolean;

  ContentType?: string;

  DisabledLocalMetadataReaders?: Array<string>;

  DisabledLyricsFetchers?: Array<string>;

  DisabledSubtitleFetchers?: Array<string>;

  DownloadImagesInAdvance?: boolean;

  EnableAdultMetadata?: boolean;

  EnableArchiveMediaFiles?: boolean;

  EnableAudioResume?: boolean;

  EnableAutomaticSeriesGrouping?: boolean;

  EnableChapterImageExtraction?: boolean;

  EnableEmbeddedTitles?: boolean;

  EnableMarkerDetection?: boolean;

  EnableMarkerDetectionDuringLibraryScan?: boolean;

  EnablePhotos?: boolean;

  EnableRealtimeMonitor?: boolean;

  ExtractChapterImagesDuringLibraryScan?: boolean;

  ForcedSubtitlesOnly?: boolean;

  HearingImpairedSubtitlesOnly?: boolean;

  IgnoreFileExtensions?: Array<string>;

  IgnoreHiddenFiles?: boolean;

  ImportCollections?: boolean;

  ImportPlaylists?: boolean;

  IntroDetectionFingerprintLength?: number;

  LocalMetadataReaderOrder?: Array<string>;

  LyricsDownloadLanguages?: Array<string>;

  LyricsDownloadMaxAgeDays?: number;

  LyricsFetcherOrder?: Array<string>;

  MaxResumePct?: number;

  MetadataCountryCode?: string;

  MetadataSavers?: Array<string>;

  MinCollectionItems?: number;

  MinResumeDurationSeconds?: number;

  MinResumePct?: number;

  MusicFolderStructure?: string;

  PathInfos?: Array<PathsAPI.MediaPathInfo>;

  PlaceholderMetadataRefreshIntervalDays?: number;

  PreferredImageLanguage?: string;

  PreferredMetadataLanguage?: string;

  RequirePerfectSubtitleMatch?: boolean;

  SampleIgnoreSize?: number;

  SaveLocalMetadata?: boolean;

  SaveLocalThumbnailSets?: boolean;

  SaveLyricsWithMedia?: boolean;

  SaveMetadataHidden?: boolean;

  SaveSubtitlesWithMedia?: boolean;

  ShareEmbeddedMusicAlbumImages?: boolean;

  SkipSubtitlesIfAudioTrackMatches?: boolean;

  SkipSubtitlesIfEmbeddedSubtitlesPresent?: boolean;

  SubtitleDownloadLanguages?: Array<string>;

  SubtitleDownloadMaxAgeDays?: number;

  SubtitleFetcherOrder?: Array<string>;

  ThumbnailImagesIntervalSeconds?: number;

  TypeOptions?: Array<LibraryOptions.TypeOption>;
}

export namespace LibraryOptions {
  export interface TypeOption {
    ImageFetcherOrder?: Array<string>;

    ImageFetchers?: Array<string>;

    ImageOptions?: Array<LibrariesAPI.ImageOption>;

    MetadataFetcherOrder?: Array<string>;

    MetadataFetchers?: Array<string>;

    Type?: string;
  }
}

export interface VirtualFolderRetrieveQueryResponse {
  Items?: Array<VirtualFolderRetrieveQueryResponse.Item>;

  TotalRecordCount?: number;
}

export namespace VirtualFolderRetrieveQueryResponse {
  export interface Item {
    CollectionType?: string;

    Guid?: string;

    Id?: string;

    ItemId?: string;

    LibraryOptions?: VirtualFoldersAPI.LibraryOptions;

    Locations?: Array<string>;

    Name?: string;

    PrimaryImageItemId?: string;

    RefreshProgress?: number | null;

    RefreshStatus?: string;
  }
}

export interface VirtualFolderCreateParams {
  CollectionType?: string;

  LibraryOptions?: LibraryOptions;

  Name?: string;

  Paths?: Array<string>;

  RefreshLibrary?: boolean;
}

export interface VirtualFolderDeleteFolderParams {
  Id?: string;

  RefreshLibrary?: boolean;
}

export interface VirtualFolderRetrieveQueryParams {
  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number;
}

export interface VirtualFolderSetLibraryOptionsParams {
  Id?: string;

  LibraryOptions?: LibraryOptions;
}

export interface VirtualFolderSetNameParams {
  Id?: string;

  NewName?: string;
}

VirtualFolders.Paths = Paths;

export declare namespace VirtualFolders {
  export {
    type LibraryOptions as LibraryOptions,
    type VirtualFolderRetrieveQueryResponse as VirtualFolderRetrieveQueryResponse,
    type VirtualFolderCreateParams as VirtualFolderCreateParams,
    type VirtualFolderDeleteFolderParams as VirtualFolderDeleteFolderParams,
    type VirtualFolderRetrieveQueryParams as VirtualFolderRetrieveQueryParams,
    type VirtualFolderSetLibraryOptionsParams as VirtualFolderSetLibraryOptionsParams,
    type VirtualFolderSetNameParams as VirtualFolderSetNameParams,
  };

  export {
    Paths as Paths,
    type MediaPathInfo as MediaPathInfo,
    type PathCreateParams as PathCreateParams,
    type PathUpdateParams as PathUpdateParams,
    type PathDeletePathParams as PathDeletePathParams,
  };
}
