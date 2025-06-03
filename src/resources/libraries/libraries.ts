// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LibrariesAPI from './libraries';
import * as ArtistsAPI from '../artists/artists';
import * as ImagesAPI from '../items/images';
import * as MediaAPI from './media';
import { Media, MediaReportUpdatedParams } from './media';
import * as MoviesAPI from './movies';
import { Movies } from './movies';
import * as SeriesAPI from './series';
import { Series } from './series';
import * as VirtualFoldersAPI from './virtual-folders/virtual-folders';
import {
  LibraryOptions,
  VirtualFolderCreateParams,
  VirtualFolderDeleteFolderParams,
  VirtualFolderRetrieveQueryParams,
  VirtualFolderRetrieveQueryResponse,
  VirtualFolderSetLibraryOptionsParams,
  VirtualFolderSetNameParams,
  VirtualFolders,
} from './virtual-folders/virtual-folders';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Libraries extends APIResource {
  virtualFolders: VirtualFoldersAPI.VirtualFolders = new VirtualFoldersAPI.VirtualFolders(this._client);
  series: SeriesAPI.Series = new SeriesAPI.Series(this._client);
  media: MediaAPI.Media = new MediaAPI.Media(this._client);
  movies: MoviesAPI.Movies = new MoviesAPI.Movies(this._client);

  /**
   * Requires authentication as user
   */
  listAvailableOptions(options?: RequestOptions): APIPromise<LibraryListAvailableOptionsResponse> {
    return this._client.get('/Libraries/AvailableOptions', options);
  }

  /**
   * Requires authentication as user
   */
  listMediaFolders(
    query: LibraryListMediaFoldersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get('/Library/MediaFolders', { query, ...options });
  }

  /**
   * Requires authentication as administrator
   */
  listPhysicalPaths(options?: RequestOptions): APIPromise<LibraryListPhysicalPathsResponse> {
    return this._client.get('/Library/PhysicalPaths', options);
  }

  /**
   * Requires authentication as user
   */
  listSelectableMediaFolders(
    options?: RequestOptions,
  ): APIPromise<LibraryListSelectableMediaFoldersResponse> {
    return this._client.get('/Library/SelectableMediaFolders', options);
  }

  /**
   * Requires authentication as administrator
   */
  startLibraryScan(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Library/Refresh', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ImageOption {
  Limit?: number;

  MinWidth?: number;

  Type?: ImagesAPI.ImageType;
}

export interface LibraryOptionInfo {
  DefaultEnabled?: boolean;

  Features?: Array<'Collections' | 'Adult' | 'RequiredSetup'>;

  Name?: string;

  SetupUrl?: string;
}

export interface LibraryListAvailableOptionsResponse {
  LyricsFetchers?: Array<LibraryOptionInfo>;

  MetadataReaders?: Array<LibraryOptionInfo>;

  MetadataSavers?: Array<LibraryOptionInfo>;

  SubtitleFetchers?: Array<LibraryOptionInfo>;

  TypeOptions?: Array<LibraryListAvailableOptionsResponse.TypeOption>;
}

export namespace LibraryListAvailableOptionsResponse {
  export interface TypeOption {
    DefaultImageOptions?: Array<LibrariesAPI.ImageOption>;

    ImageFetchers?: Array<LibrariesAPI.LibraryOptionInfo>;

    MetadataFetchers?: Array<LibrariesAPI.LibraryOptionInfo>;

    SupportedImageTypes?: Array<ImagesAPI.ImageType>;

    Type?: string;
  }
}

export type LibraryListPhysicalPathsResponse = Array<string>;

export type LibraryListSelectableMediaFoldersResponse =
  Array<LibraryListSelectableMediaFoldersResponse.LibraryListSelectableMediaFoldersResponseItem>;

export namespace LibraryListSelectableMediaFoldersResponse {
  export interface LibraryListSelectableMediaFoldersResponseItem {
    Guid?: string;

    Id?: string;

    IsUserAccessConfigurable?: boolean;

    Name?: string;

    SubFolders?: Array<LibraryListSelectableMediaFoldersResponseItem.SubFolder>;
  }

  export namespace LibraryListSelectableMediaFoldersResponseItem {
    export interface SubFolder {
      Id?: string;

      IsUserAccessConfigurable?: boolean;

      Name?: string;

      Path?: string;
    }
  }
}

export interface LibraryListMediaFoldersParams {
  /**
   * Optional. Filter by folders that are marked hidden, or not.
   */
  IsHidden?: boolean | null;
}

Libraries.VirtualFolders = VirtualFolders;
Libraries.Series = Series;
Libraries.Media = Media;
Libraries.Movies = Movies;

export declare namespace Libraries {
  export {
    type ImageOption as ImageOption,
    type LibraryOptionInfo as LibraryOptionInfo,
    type LibraryListAvailableOptionsResponse as LibraryListAvailableOptionsResponse,
    type LibraryListPhysicalPathsResponse as LibraryListPhysicalPathsResponse,
    type LibraryListSelectableMediaFoldersResponse as LibraryListSelectableMediaFoldersResponse,
    type LibraryListMediaFoldersParams as LibraryListMediaFoldersParams,
  };

  export {
    VirtualFolders as VirtualFolders,
    type LibraryOptions as LibraryOptions,
    type VirtualFolderRetrieveQueryResponse as VirtualFolderRetrieveQueryResponse,
    type VirtualFolderCreateParams as VirtualFolderCreateParams,
    type VirtualFolderDeleteFolderParams as VirtualFolderDeleteFolderParams,
    type VirtualFolderRetrieveQueryParams as VirtualFolderRetrieveQueryParams,
    type VirtualFolderSetLibraryOptionsParams as VirtualFolderSetLibraryOptionsParams,
    type VirtualFolderSetNameParams as VirtualFolderSetNameParams,
  };

  export { Series as Series };

  export { Media as Media, type MediaReportUpdatedParams as MediaReportUpdatedParams };

  export { Movies as Movies };
}
