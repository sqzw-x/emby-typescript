// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LocalizationAPI from '../../localization';
import * as SubtitlesAPI from './subtitles';
import {
  SubtitleAddParams,
  SubtitleAddResponse,
  SubtitleRetrieveByLanguageParams,
  SubtitleRetrieveByLanguageResponse,
  Subtitles,
} from './subtitles';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RemoteSearch extends APIResource {
  subtitles: SubtitlesAPI.Subtitles = new SubtitlesAPI.Subtitles(this._client);

  /**
   * Requires authentication as administrator
   */
  applySearch(id: string, params: RemoteSearchApplySearchParams, options?: RequestOptions): APIPromise<void> {
    const { ReplaceAllImages, ...body } = params;
    return this._client.post(path`/Items/RemoteSearch/Apply/${id}`, {
      query: { ReplaceAllImages },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  createBook(
    body: RemoteSearchCreateBookParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateBookResponse> {
    return this._client.post('/Items/RemoteSearch/Book', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createBoxSet(
    body: RemoteSearchCreateBoxSetParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateBoxSetResponse> {
    return this._client.post('/Items/RemoteSearch/BoxSet', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createGame(
    body: RemoteSearchCreateGameParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateGameResponse> {
    return this._client.post('/Items/RemoteSearch/Game', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createMovie(
    body: RemoteSearchCreateMovieParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateMovieResponse> {
    return this._client.post('/Items/RemoteSearch/Movie', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createMusicAlbum(
    body: RemoteSearchCreateMusicAlbumParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateMusicAlbumResponse> {
    return this._client.post('/Items/RemoteSearch/MusicAlbum', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createMusicArtist(
    body: RemoteSearchCreateMusicArtistParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateMusicArtistResponse> {
    return this._client.post('/Items/RemoteSearch/MusicArtist', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createMusicVideo(
    body: RemoteSearchCreateMusicVideoParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateMusicVideoResponse> {
    return this._client.post('/Items/RemoteSearch/MusicVideo', { body, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  createPerson(
    body: RemoteSearchCreatePersonParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreatePersonResponse> {
    return this._client.post('/Items/RemoteSearch/Person', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createSeries(
    body: RemoteSearchCreateSeriesParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateSeriesResponse> {
    return this._client.post('/Items/RemoteSearch/Series', { body, ...options });
  }

  /**
   * Requires authentication as user
   */
  createTrailer(
    body: RemoteSearchCreateTrailerParams,
    options?: RequestOptions,
  ): APIPromise<RemoteSearchCreateTrailerResponse> {
    return this._client.post('/Items/RemoteSearch/Trailer', { body, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  retrieveImage(query: RemoteSearchRetrieveImageParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/Items/RemoteSearch/Image', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RemoteSearchResult {
  AlbumArtist?: RemoteSearchResult;

  Artists?: Array<RemoteSearchResult>;

  DisambiguationComment?: string;

  EndDate?: string | null;

  GameSystem?: string;

  ImageUrl?: string;

  IndexNumber?: number | null;

  IndexNumberEnd?: number | null;

  Name?: string;

  OriginalTitle?: string;

  Overview?: string;

  ParentIndexNumber?: number | null;

  PremiereDate?: string | null;

  ProductionYear?: number | null;

  ProviderIds?: Record<string, string>;

  SearchProviderName?: string;

  SortIndexNumber?: number | null;

  SortParentIndexNumber?: number | null;

  StartDate?: string | null;
}

export type RemoteSearchCreateBookResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateBoxSetResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateGameResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateMovieResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateMusicAlbumResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateMusicArtistResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateMusicVideoResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreatePersonResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateSeriesResponse = Array<RemoteSearchResult>;

export type RemoteSearchCreateTrailerResponse = Array<RemoteSearchResult>;

export interface RemoteSearchApplySearchParams {
  /**
   * Query param: Whether or not to replace all images
   */
  ReplaceAllImages?: boolean;

  /**
   * Body param:
   */
  AlbumArtist?: RemoteSearchResult;

  /**
   * Body param:
   */
  Artists?: Array<RemoteSearchResult>;

  /**
   * Body param:
   */
  DisambiguationComment?: string;

  /**
   * Body param:
   */
  EndDate?: string | null;

  /**
   * Body param:
   */
  GameSystem?: string;

  /**
   * Body param:
   */
  ImageUrl?: string;

  /**
   * Body param:
   */
  IndexNumber?: number | null;

  /**
   * Body param:
   */
  IndexNumberEnd?: number | null;

  /**
   * Body param:
   */
  Name?: string;

  /**
   * Body param:
   */
  OriginalTitle?: string;

  /**
   * Body param:
   */
  Overview?: string;

  /**
   * Body param:
   */
  ParentIndexNumber?: number | null;

  /**
   * Body param:
   */
  PremiereDate?: string | null;

  /**
   * Body param:
   */
  ProductionYear?: number | null;

  /**
   * Body param:
   */
  ProviderIds?: Record<string, string>;

  /**
   * Body param:
   */
  SearchProviderName?: string;

  /**
   * Body param:
   */
  SortIndexNumber?: number | null;

  /**
   * Body param:
   */
  SortParentIndexNumber?: number | null;

  /**
   * Body param:
   */
  StartDate?: string | null;
}

export interface RemoteSearchCreateBookParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateBookParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateBookParams {
  export interface SearchInfo {
    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    SeriesName?: string;

    Year?: number | null;
  }
}

export interface RemoteSearchCreateBoxSetParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateBoxSetParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateBoxSetParams {
  export interface SearchInfo {
    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchCreateGameParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateGameParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateGameParams {
  export interface SearchInfo {
    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchCreateMovieParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateMovieParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateMovieParams {
  export interface SearchInfo {
    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchCreateMusicAlbumParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateMusicAlbumParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateMusicAlbumParams {
  export interface SearchInfo {
    AlbumArtists?: Array<string>;

    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    SongInfos?: Array<SearchInfo.SongInfo>;

    Year?: number | null;
  }

  export namespace SearchInfo {
    export interface SongInfo {
      Album?: string;

      AlbumArtists?: Array<string>;

      Artists?: Array<string>;

      Composers?: Array<string>;

      EnableAdultMetadata?: boolean;

      IndexNumber?: number | null;

      IsAutomated?: boolean;

      MetadataCountryCode?: string;

      MetadataLanguage?: string;

      MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

      Name?: string;

      ParentIndexNumber?: number | null;

      PremiereDate?: string | null;

      ProviderIds?: Record<string, string>;

      Year?: number | null;
    }
  }
}

export interface RemoteSearchCreateMusicArtistParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateMusicArtistParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateMusicArtistParams {
  export interface SearchInfo {
    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchCreateMusicVideoParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateMusicVideoParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateMusicVideoParams {
  export interface SearchInfo {
    Artists?: Array<string>;

    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchCreatePersonParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreatePersonParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreatePersonParams {
  export interface SearchInfo {
    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchCreateSeriesParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateSeriesParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateSeriesParams {
  export interface SearchInfo {
    DisplayOrder?: 'Aired' | 'Dvd' | 'Absolute';

    EnableAdultMetadata?: boolean;

    EpisodeAirDate?: string | null;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchCreateTrailerParams {
  IncludeDisabledProviders?: boolean;

  ItemId?: number;

  Providers?: Array<string>;

  SearchInfo?: RemoteSearchCreateTrailerParams.SearchInfo;

  SearchProviderName?: string;
}

export namespace RemoteSearchCreateTrailerParams {
  export interface SearchInfo {
    EnableAdultMetadata?: boolean;

    IndexNumber?: number | null;

    IsAutomated?: boolean;

    MetadataCountryCode?: string;

    MetadataLanguage?: string;

    MetadataLanguages?: Array<LocalizationAPI.CultureDto>;

    Name?: string;

    ParentIndexNumber?: number | null;

    PremiereDate?: string | null;

    ProviderIds?: Record<string, string>;

    Year?: number | null;
  }
}

export interface RemoteSearchRetrieveImageParams {
  /**
   * The image url
   */
  ImageUrl: string;

  ProviderName: string;
}

RemoteSearch.Subtitles = Subtitles;

export declare namespace RemoteSearch {
  export {
    type RemoteSearchResult as RemoteSearchResult,
    type RemoteSearchCreateBookResponse as RemoteSearchCreateBookResponse,
    type RemoteSearchCreateBoxSetResponse as RemoteSearchCreateBoxSetResponse,
    type RemoteSearchCreateGameResponse as RemoteSearchCreateGameResponse,
    type RemoteSearchCreateMovieResponse as RemoteSearchCreateMovieResponse,
    type RemoteSearchCreateMusicAlbumResponse as RemoteSearchCreateMusicAlbumResponse,
    type RemoteSearchCreateMusicArtistResponse as RemoteSearchCreateMusicArtistResponse,
    type RemoteSearchCreateMusicVideoResponse as RemoteSearchCreateMusicVideoResponse,
    type RemoteSearchCreatePersonResponse as RemoteSearchCreatePersonResponse,
    type RemoteSearchCreateSeriesResponse as RemoteSearchCreateSeriesResponse,
    type RemoteSearchCreateTrailerResponse as RemoteSearchCreateTrailerResponse,
    type RemoteSearchApplySearchParams as RemoteSearchApplySearchParams,
    type RemoteSearchCreateBookParams as RemoteSearchCreateBookParams,
    type RemoteSearchCreateBoxSetParams as RemoteSearchCreateBoxSetParams,
    type RemoteSearchCreateGameParams as RemoteSearchCreateGameParams,
    type RemoteSearchCreateMovieParams as RemoteSearchCreateMovieParams,
    type RemoteSearchCreateMusicAlbumParams as RemoteSearchCreateMusicAlbumParams,
    type RemoteSearchCreateMusicArtistParams as RemoteSearchCreateMusicArtistParams,
    type RemoteSearchCreateMusicVideoParams as RemoteSearchCreateMusicVideoParams,
    type RemoteSearchCreatePersonParams as RemoteSearchCreatePersonParams,
    type RemoteSearchCreateSeriesParams as RemoteSearchCreateSeriesParams,
    type RemoteSearchCreateTrailerParams as RemoteSearchCreateTrailerParams,
    type RemoteSearchRetrieveImageParams as RemoteSearchRetrieveImageParams,
  };

  export {
    Subtitles as Subtitles,
    type SubtitleAddResponse as SubtitleAddResponse,
    type SubtitleRetrieveByLanguageResponse as SubtitleRetrieveByLanguageResponse,
    type SubtitleAddParams as SubtitleAddParams,
    type SubtitleRetrieveByLanguageParams as SubtitleRetrieveByLanguageParams,
  };
}
