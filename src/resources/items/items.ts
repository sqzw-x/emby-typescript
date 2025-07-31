// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LiveStreamsAPI from '../live-streams';
import * as LocalizationAPI from '../localization';
import * as ArtistsAPI from '../artists/artists';
import * as StreamAPI from '../audio/stream';
import * as AuthAPI from '../auth/auth';
import * as ImagesAPI from './images';
import {
  ImageDeleteByTypeAndIndexParams,
  ImageDeleteByTypeParams,
  ImageDeleteParams,
  ImageListResponse,
  ImageRetrieveByTypeAndIndexParams,
  ImageRetrieveByTypeParams,
  ImageRetrieveDetailedParams,
  ImageType,
  ImageUpdateIndexParams,
  ImageUpdateURLParams,
  Images,
} from './images';
import * as MetadataAPI from './metadata';
import { Metadata, MetadataResetParams } from './metadata';
import * as PlaybackInfoAPI from './playback-info';
import {
  PlaybackInfo,
  PlaybackInfoResource,
  PlaybackInfoRetrieveParams,
  PlaybackInfoUpdateParams,
} from './playback-info';
import * as RemoteImagesAPI from './remote-images';
import {
  RemoteImageDownloadParams,
  RemoteImageRetrieveAllParams,
  RemoteImageRetrieveAllResponse,
  RemoteImageRetrieveProvidersResponse,
  RemoteImages,
} from './remote-images';
import * as SharedAPI from './shared';
import { Shared, SharedLeaveParams } from './shared';
import * as SubtitlesAPI from './subtitles';
import {
  SubtitleDeleteExternalParams,
  SubtitleDeleteParams,
  SubtitleStreamParams,
  SubtitleStreamWithPositionParams,
  Subtitles,
} from './subtitles';
import * as TagsAPI from './tags';
import { TagAddParams, TagDeleteParams, Tags } from './tags';
import * as ScheduledTasksAPI from '../scheduled-tasks/scheduled-tasks';
import * as FavoriteItemsAPI from '../users/favorite-items';
import * as RemoteSearchAPI from './remote-search/remote-search';
import {
  RemoteSearch,
  RemoteSearchApplySearchParams,
  RemoteSearchCreateBookParams,
  RemoteSearchCreateBookResponse,
  RemoteSearchCreateBoxSetParams,
  RemoteSearchCreateBoxSetResponse,
  RemoteSearchCreateGameParams,
  RemoteSearchCreateGameResponse,
  RemoteSearchCreateMovieParams,
  RemoteSearchCreateMovieResponse,
  RemoteSearchCreateMusicAlbumParams,
  RemoteSearchCreateMusicAlbumResponse,
  RemoteSearchCreateMusicArtistParams,
  RemoteSearchCreateMusicArtistResponse,
  RemoteSearchCreateMusicVideoParams,
  RemoteSearchCreateMusicVideoResponse,
  RemoteSearchCreatePersonParams,
  RemoteSearchCreatePersonResponse,
  RemoteSearchCreateSeriesParams,
  RemoteSearchCreateSeriesResponse,
  RemoteSearchCreateTrailerParams,
  RemoteSearchCreateTrailerResponse,
  RemoteSearchResult,
  RemoteSearchRetrieveImageParams,
} from './remote-search/remote-search';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  remoteSearch: RemoteSearchAPI.RemoteSearch = new RemoteSearchAPI.RemoteSearch(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  shared: SharedAPI.Shared = new SharedAPI.Shared(this._client);
  remoteImages: RemoteImagesAPI.RemoteImages = new RemoteImagesAPI.RemoteImages(this._client);
  playbackInfo: PlaybackInfoAPI.PlaybackInfoResource = new PlaybackInfoAPI.PlaybackInfoResource(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
  subtitles: SubtitlesAPI.Subtitles = new SubtitlesAPI.Subtitles(this._client);

  /**
   * Requires authentication as administrator
   */
  update(itemID: string, body: ItemUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Items/${itemID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  list(
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get('/Items', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Items/${id}/Delete`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  createInstantMix(
    id: string,
    query: ItemCreateInstantMixParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Items/${id}/InstantMix`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  deleteAll(params: ItemDeleteAllParams, options?: RequestOptions): APIPromise<void> {
    const { Ids } = params;
    return this._client.delete('/Items', {
      query: { Ids },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  downloadMedia(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Items/${id}/Download`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getAncestors(
    id: string,
    query: ItemGetAncestorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemGetAncestorsResponse> {
    return this._client.get(path`/Items/${id}/Ancestors`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getCounts(
    query: ItemGetCountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemGetCountsResponse> {
    return this._client.get('/Items/Counts', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getCriticReviews(
    id: string,
    query: ItemGetCriticReviewsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Items/${id}/CriticReviews`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getDeleteInfo(id: string, options?: RequestOptions): APIPromise<ItemGetDeleteInfoResponse> {
    return this._client.get(path`/Items/${id}/DeleteInfo`, options);
  }

  /**
   * Requires authentication as administrator
   */
  getExternalIDInfos(id: string, options?: RequestOptions): APIPromise<ItemGetExternalIDInfosResponse> {
    return this._client.get(path`/Items/${id}/ExternalIdInfos`, options);
  }

  /**
   * Requires authentication as administrator
   */
  getIntros(options?: RequestOptions): APIPromise<ItemGetIntrosResponse> {
    return this._client.get('/Items/Intros', options);
  }

  /**
   * Requires authentication as administrator
   */
  getMetadataEditor(itemID: string, options?: RequestOptions): APIPromise<ItemGetMetadataEditorResponse> {
    return this._client.get(path`/Items/${itemID}/MetadataEditor`, options);
  }

  /**
   * Requires authentication as user
   */
  getOriginalFile(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/Items/${id}/File`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  getSimilarItems(
    id: string,
    query: ItemGetSimilarItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistsAPI.QueryResultBaseItem> {
    return this._client.get(path`/Items/${id}/Similar`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getThemeMedia(
    id: string,
    query: ItemGetThemeMediaParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemGetThemeMediaResponse> {
    return this._client.get(path`/Items/${id}/ThemeMedia`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getThemeSongs(
    id: string,
    query: ItemGetThemeSongsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThemeMediaResult> {
    return this._client.get(path`/Items/${id}/ThemeSongs`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getThemeVideos(
    id: string,
    query: ItemGetThemeVideosParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThemeMediaResult> {
    return this._client.get(path`/Items/${id}/ThemeVideos`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  getThumbnailSet(
    id: string,
    query: ItemGetThumbnailSetParams,
    options?: RequestOptions,
  ): APIPromise<ItemGetThumbnailSetResponse> {
    return this._client.get(path`/Items/${id}/ThumbnailSet`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  listPrefixes(
    query: ItemListPrefixesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemListPrefixesResponse> {
    return this._client.get('/Items/Prefixes', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  makePrivate(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Items/${id}/MakePrivate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  makePublic(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/Items/${id}/MakePublic`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  refreshMetadata(
    id: string,
    params: ItemRefreshMetadataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { ImageRefreshMode, MetadataRefreshMode, Recursive, ReplaceAllImages, ReplaceAllMetadata } =
      params ?? {};
    return this._client.post(path`/Items/${id}/Refresh`, {
      query: { ImageRefreshMode, MetadataRefreshMode, Recursive, ReplaceAllImages, ReplaceAllMetadata },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Requires authentication as user
   */
  updateAccess(body: ItemUpdateAccessParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/Items/Access', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ExternalIDInfo {
  IsSupportedAsIdentifier?: boolean;

  Key?: string;

  Name?: string;

  UrlFormatString?: string;

  Website?: string;
}

export type MetadataRefreshMode = 'ValidationOnly' | 'Default' | 'FullRefresh';

export interface ThemeMediaResult {
  Items?: Array<ArtistsAPI.BaseItem>;

  OwnerId?: number;

  TotalRecordCount?: number;
}

export type UserItemShareLevel = 'None' | 'Read' | 'Write' | 'Manage' | 'ManageDelete';

export type ItemGetAncestorsResponse = Array<ArtistsAPI.BaseItem>;

export interface ItemGetCountsResponse {
  AlbumCount?: number;

  ArtistCount?: number;

  BookCount?: number;

  BoxSetCount?: number;

  EpisodeCount?: number;

  GameCount?: number;

  GameSystemCount?: number;

  ItemCount?: number;

  MovieCount?: number;

  MusicVideoCount?: number;

  ProgramCount?: number;

  SeriesCount?: number;

  SongCount?: number;

  TrailerCount?: number;
}

export interface ItemGetDeleteInfoResponse {
  Paths?: Array<string>;
}

export type ItemGetExternalIDInfosResponse = Array<ExternalIDInfo>;

export type ItemGetIntrosResponse = Array<ItemGetIntrosResponse.ItemGetIntrosResponseItem>;

export namespace ItemGetIntrosResponse {
  export interface ItemGetIntrosResponseItem {
    End?: number;

    Id?: number;

    Path?: string;

    Start?: number;
  }
}

export interface ItemGetMetadataEditorResponse {
  Countries?: Array<LocalizationAPI.CountryInfo>;

  Cultures?: Array<LocalizationAPI.CultureDto>;

  ExternalIdInfos?: Array<ExternalIDInfo>;

  ParentalRatingOptions?: Array<LocalizationAPI.ParentalRating>;
}

export interface ItemGetThemeMediaResponse {
  SoundtrackSongsResult?: ThemeMediaResult;

  ThemeSongsResult?: ThemeMediaResult;

  ThemeVideosResult?: ThemeMediaResult;
}

export interface ItemGetThumbnailSetResponse {
  AspectRatio?: number | null;

  Thumbnails?: Array<ItemGetThumbnailSetResponse.Thumbnail>;
}

export namespace ItemGetThumbnailSetResponse {
  export interface Thumbnail {
    ImageTag?: string;

    PositionTicks?: number;
  }
}

export type ItemListPrefixesResponse = Array<ArtistsAPI.NameValuePair>;

export interface ItemUpdateParams {
  AffiliateCallSign?: string;

  AirDays?: Array<ScheduledTasksAPI.DayOfWeek>;

  Album?: string;

  AlbumArtist?: string;

  AlbumArtists?: Array<AuthAPI.NameIDPair>;

  AlbumCount?: number | null;

  AlbumId?: string;

  AlbumPrimaryImageTag?: string;

  Altitude?: number | null;

  Aperture?: number | null;

  ArtistItems?: Array<AuthAPI.NameIDPair>;

  Artists?: Array<string>;

  AsSeries?: boolean | null;

  BackdropImageTags?: Array<string>;

  Bitrate?: number | null;

  CameraMake?: string;

  CameraModel?: string;

  CanDelete?: boolean | null;

  CanDownload?: boolean | null;

  CanEditItems?: boolean | null;

  CanLeaveContent?: boolean | null;

  CanMakePublic?: boolean | null;

  CanManageAccess?: boolean | null;

  ChannelId?: string;

  ChannelName?: string;

  ChannelNumber?: string;

  ChannelPrimaryImageTag?: string;

  Chapters?: Array<ItemUpdateParams.Chapter>;

  ChildCount?: number | null;

  CollectionType?: string;

  CommunityRating?: number | null;

  CompletionPercentage?: number | null;

  Composers?: Array<AuthAPI.NameIDPair>;

  Container?: string;

  CriticRating?: number | null;

  CurrentProgram?: ArtistsAPI.BaseItem;

  CustomRating?: string;

  DateCreated?: string | null;

  Disabled?: boolean | null;

  DisplayOrder?: string;

  DisplayPreferencesId?: string;

  EndDate?: string | null;

  EpisodeTitle?: string;

  Etag?: string;

  ExposureTime?: number | null;

  ExternalUrls?: Array<ItemUpdateParams.ExternalURL>;

  ExtraType?: string;

  FileName?: string;

  FocalLength?: number | null;

  ForcedSortName?: string;

  GameSystem?: string;

  GameSystemId?: number | null;

  GenreItems?: Array<ItemUpdateParams.GenreItem>;

  Genres?: Array<string>;

  Guid?: string;

  Height?: number | null;

  Id?: string;

  ImageOrientation?:
    | 'TopLeft'
    | 'TopRight'
    | 'BottomRight'
    | 'BottomLeft'
    | 'LeftTop'
    | 'RightTop'
    | 'RightBottom'
    | 'LeftBottom';

  ImageTags?: { [key: string]: string };

  IndexNumber?: number | null;

  IndexNumberEnd?: number | null;

  IsFolder?: boolean | null;

  IsKids?: boolean | null;

  IsLive?: boolean | null;

  IsMovie?: boolean | null;

  IsNew?: boolean | null;

  IsNews?: boolean | null;

  IsoSpeedRating?: number | null;

  IsPremiere?: boolean | null;

  IsRepeat?: boolean | null;

  IsSeries?: boolean | null;

  IsSports?: boolean | null;

  Latitude?: number | null;

  ListingsChannelId?: string;

  ListingsChannelName?: string;

  ListingsChannelNumber?: string;

  ListingsId?: string;

  ListingsPath?: string;

  ListingsProviderId?: string;

  LocalTrailerCount?: number | null;

  LocationType?: 'FileSystem' | 'Virtual';

  LockData?: boolean | null;

  LockedFields?: Array<
    | 'Cast'
    | 'Genres'
    | 'ProductionLocations'
    | 'Studios'
    | 'Tags'
    | 'Name'
    | 'Overview'
    | 'Runtime'
    | 'OfficialRating'
    | 'Collections'
    | 'ChannelNumber'
    | 'SortName'
    | 'OriginalTitle'
    | 'SortIndexNumber'
    | 'SortParentIndexNumber'
    | 'CommunityRating'
    | 'CriticRating'
    | 'Tagline'
  >;

  Longitude?: number | null;

  ManagementId?: string;

  MediaSources?: Array<LiveStreamsAPI.MediaSourceInfo>;

  MediaStreams?: Array<ItemUpdateParams.MediaStream>;

  MediaType?: string;

  MovieCount?: number | null;

  MusicVideoCount?: number | null;

  Name?: string;

  Number?: string;

  OfficialRating?: string;

  OriginalTitle?: string;

  Overview?: string;

  ParentBackdropImageTags?: Array<string>;

  ParentBackdropItemId?: string;

  ParentId?: string;

  ParentIndexNumber?: number | null;

  ParentLogoImageTag?: string;

  ParentLogoItemId?: string;

  ParentThumbImageTag?: string;

  ParentThumbItemId?: string;

  PartCount?: number | null;

  Path?: string;

  People?: Array<ItemUpdateParams.Person>;

  PlaylistItemId?: string;

  PreferredMetadataCountryCode?: string;

  PreferredMetadataLanguage?: string;

  Prefix?: string;

  PremiereDate?: string | null;

  PresentationUniqueKey?: string;

  PrimaryImageAspectRatio?: number | null;

  PrimaryImageItemId?: string;

  PrimaryImageTag?: string;

  ProductionLocations?: Array<string>;

  ProductionYear?: number | null;

  ProviderIds?: { [key: string]: string };

  RecursiveItemCount?: number | null;

  RemoteTrailers?: Array<ItemUpdateParams.RemoteTrailer>;

  RunTimeTicks?: number | null;

  SeasonId?: string;

  SeasonName?: string;

  SeriesCount?: number | null;

  SeriesId?: string;

  SeriesName?: string;

  SeriesPrimaryImageTag?: string;

  SeriesStudio?: string;

  SeriesTimerId?: string;

  ServerId?: string;

  ShutterSpeed?: number | null;

  Size?: number | null;

  Software?: string;

  SongCount?: number | null;

  SortIndexNumber?: number | null;

  SortName?: string;

  SortParentIndexNumber?: number | null;

  SpecialFeatureCount?: number | null;

  StartDate?: string | null;

  Status?: string;

  Studios?: Array<ItemUpdateParams.Studio>;

  Subviews?: Array<string>;

  SupportsResume?: boolean | null;

  SupportsSync?: boolean | null;

  SyncStatus?: ArtistsAPI.SyncJobItemStatus;

  TagItems?: Array<ItemUpdateParams.TagItem>;

  Taglines?: Array<string>;

  Tags?: Array<string>;

  TimerId?: string;

  TimerType?: ArtistsAPI.LiveTvTimerType;

  Type?: string;

  UserData?: FavoriteItemsAPI.UserItemData;

  Video3DFormat?: 'HalfSideBySide' | 'FullSideBySide' | 'FullTopAndBottom' | 'HalfTopAndBottom' | 'MVC';

  Width?: number | null;
}

export namespace ItemUpdateParams {
  export interface Chapter {
    ChapterIndex?: number;

    ImageTag?: string;

    MarkerType?: 'Chapter' | 'IntroStart' | 'IntroEnd' | 'CreditsStart';

    Name?: string;

    StartPositionTicks?: number;
  }

  export interface ExternalURL {
    Name?: string;

    Url?: string;
  }

  export interface GenreItem {
    Id?: number;

    Name?: string;
  }

  export interface MediaStream {
    AspectRatio?: string;

    AttachmentSize?: number | null;

    AverageFrameRate?: number | null;

    BitDepth?: number | null;

    BitRate?: number | null;

    ChannelLayout?: string;

    Channels?: number | null;

    Codec?: string;

    CodecTag?: string;

    ColorPrimaries?: string;

    ColorSpace?: string;

    ColorTransfer?: string;

    Comment?: string;

    DeliveryMethod?: StreamAPI.SubtitleDeliveryMethod;

    DeliveryUrl?: string;

    DisplayLanguage?: string;

    DisplayTitle?: string;

    ExtendedVideoSubType?:
      | 'None'
      | 'Hdr10'
      | 'HyperLogGamma'
      | 'Hdr10Plus0'
      | 'DoviProfile02'
      | 'DoviProfile10'
      | 'DoviProfile22'
      | 'DoviProfile30'
      | 'DoviProfile42'
      | 'DoviProfile50'
      | 'DoviProfile61'
      | 'DoviProfile76'
      | 'DoviProfile81'
      | 'DoviProfile82'
      | 'DoviProfile83'
      | 'DoviProfile84'
      | 'DoviProfile85'
      | 'DoviProfile92';

    ExtendedVideoSubTypeDescription?: string;

    ExtendedVideoType?: 'None' | 'Hdr10' | 'Hdr10Plus' | 'HyperLogGamma' | 'DolbyVision';

    Extradata?: string;

    Height?: number | null;

    Index?: number;

    IsAnamorphic?: boolean | null;

    /**
     * @deprecated
     */
    IsAVC?: boolean | null;

    IsDefault?: boolean;

    IsExternal?: boolean;

    IsExternalUrl?: boolean | null;

    IsForced?: boolean;

    IsHearingImpaired?: boolean;

    IsInterlaced?: boolean;

    IsTextSubtitleStream?: boolean;

    ItemId?: string;

    Language?: string;

    Level?: number | null;

    MimeType?: string;

    NalLengthSize?: string;

    Path?: string;

    PixelFormat?: string;

    Profile?: string;

    Protocol?: LiveStreamsAPI.MediaProtocol;

    RealFrameRate?: number | null;

    RefFrames?: number | null;

    Rotation?: number | null;

    SampleRate?: number | null;

    ServerId?: string;

    StreamStartTimeTicks?: number | null;

    SubtitleLocationType?: 'InternalStream' | 'VideoSideData';

    SupportsExternalStream?: boolean;

    TimeBase?: string;

    Title?: string;

    Type?: 'Unknown' | 'Audio' | 'Video' | 'Subtitle' | 'EmbeddedImage' | 'Attachment' | 'Data';

    VideoRange?: string;

    Width?: number | null;
  }

  export interface Person {
    Id?: string;

    Name?: string;

    PrimaryImageTag?: string;

    Role?: string;

    Type?: 'Actor' | 'Director' | 'Writer' | 'Producer' | 'GuestStar' | 'Composer' | 'Conductor' | 'Lyricist';
  }

  export interface RemoteTrailer {
    Name?: string;

    Url?: string;
  }

  export interface Studio {
    Id?: number;

    Name?: string;
  }

  export interface TagItem {
    Id?: number;

    Name?: string;
  }
}

export interface ItemListParams {
  /**
   * Optional. Return items that are siblings of a supplied item.
   */
  AdjacentTo?: string;

  /**
   * Gets all episodes that aired during a season, including specials.
   */
  AiredDuringSeason?: number | null;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  AlbumArtistStartsWithOrGreater?: string;

  /**
   * Optional. If specified, results will be filtered based on album. This allows
   * multiple, pipe delimeted.
   */
  Albums?: string;

  /**
   * Optional. If specified, result will be filtered to contain only items which
   * match at least one of the specified IDs. Each provider ID must be in the form
   * 'prov.id', e.g. 'imdb.tt123456'. This allows multiple, comma delimeted value
   * pairs.
   */
  AnyProviderIdEquals?: string;

  /**
   * Optional. If specified, results will be filtered based on artist. This allows
   * multiple, pipe delimeted.
   */
  ArtistIds?: string;

  /**
   * Optional. If specified, results will be filtered based on artist. This allows
   * multiple, pipe delimeted.
   */
  Artists?: string;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  ArtistStartsWithOrGreater?: string;

  /**
   * Artist or AlbumArtist
   */
  ArtistType?: string;

  /**
   * Optional filter by AudioCodec. Allows multiple, comma delimeted.
   */
  AudioCodecs?: string;

  /**
   * Optional filter by AudioLayout. Allows multiple, comma delimeted.
   */
  AudioLayouts?: string;

  /**
   * Optional filter by Container. Allows multiple, comma delimeted.
   */
  Containers?: string;

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
   * Optional. If specified, results will be filtered by exxcluding item ids. This
   * allows multiple, comma delimeted.
   */
  ExcludeItemIds?: string;

  /**
   * Optional. If specified, results will be filtered based on item type. This allows
   * multiple, comma delimeted.
   */
  ExcludeItemTypes?: string;

  /**
   * Optional. If specified, results will be filtered based on tag. This allows
   * multiple, pipe delimeted.
   */
  ExcludeTags?: string;

  /**
   * Optional filter by ExtendedVideoType. Allows multiple, comma delimeted.
   */
  ExtendedVideoTypes?: string;

  /**
   * Optional. Specify additional fields of information to return in the output. This
   * allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated,
   * Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path,
   * People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios,
   * Taglines
   */
  Fields?: string;

  /**
   * Optional. Specify additional filters to apply. This allows multiple, comma
   * delimeted. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite,
   * IsResumable, Likes, Dislikes
   */
  Filters?: string;

  /**
   * Optional. If specified, results will be filtered based on genre. This allows
   * multiple, pipe delimeted.
   */
  Genres?: string;

  /**
   * Whether or not to hide items behind their boxsets.
   */
  GroupItemsIntoCollections?: boolean;

  /**
   * Optional filter by items that have an imdb id or not.
   */
  HasImdbId?: boolean | null;

  /**
   * Optional filter by items that have official ratings
   */
  HasOfficialRating?: boolean | null;

  /**
   * Optional filter by items that have an overview or not.
   */
  HasOverview?: boolean | null;

  /**
   * Optional filter by items that have or do not have a parental rating
   */
  HasParentalRating?: boolean | null;

  /**
   * Optional filter by items with special features.
   */
  HasSpecialFeature?: boolean | null;

  /**
   * Optional filter by items with subtitles.
   */
  HasSubtitles?: boolean | null;

  /**
   * Optional filter by items with theme songs.
   */
  HasThemeSong?: boolean | null;

  /**
   * Optional filter by items with theme videos.
   */
  HasThemeVideo?: boolean | null;

  /**
   * Optional filter by items that have a tmdb id or not.
   */
  HasTmdbId?: boolean | null;

  /**
   * Optional filter by items with trailers.
   */
  HasTrailer?: boolean | null;

  /**
   * Optional filter by items that have a tvdb id or not.
   */
  HasTvdbId?: boolean | null;

  /**
   * Optional. If specific items are needed, specify a list of item id's to retrieve.
   * This allows multiple, comma delimited.
   */
  Ids?: string;

  /**
   * Optional, the max number of images to return, per image type
   */
  ImageTypeLimit?: number | null;

  /**
   * Optional. If specified, results will be filtered based on those containing image
   * types. This allows multiple, comma delimited.
   */
  ImageTypes?: string;

  /**
   * Optional. If specified, results will be filtered based on item type. This allows
   * multiple, comma delimeted.
   */
  IncludeItemTypes?: string;

  /**
   * Optional filter by items that are 3D, or not.
   */
  Is3D?: boolean | null;

  /**
   * Optional filter by items that are marked as favorite, or not.
   */
  IsFavorite?: boolean | null;

  /**
   * Optional filter for folders.
   */
  IsFolder?: boolean | null;

  /**
   * Optional filter by items that are HD or not.
   */
  IsHD?: boolean | null;

  /**
   * Optional filter for kids.
   */
  IsKids?: boolean | null;

  /**
   * Optional filter by items that are locked.
   */
  IsLocked?: boolean | null;

  /**
   * Optional filter for movies.
   */
  IsMovie?: boolean | null;

  /**
   * Optional filter for IsNew.
   */
  IsNew?: boolean | null;

  /**
   * Optional filter for IsNewOrPremiere.
   */
  IsNewOrPremiere?: boolean | null;

  /**
   * Optional filter for news.
   */
  IsNews?: boolean | null;

  /**
   * Optional filter by items that are placeholders
   */
  IsPlaceHolder?: boolean | null;

  /**
   * Optional filter by items that are played, or not.
   */
  IsPlayed?: boolean | null;

  /**
   * Optional filter for IsPremiere.
   */
  IsPremiere?: boolean | null;

  /**
   * Optional filter for IsRepeat.
   */
  IsRepeat?: boolean | null;

  /**
   * Optional filter for series.
   */
  IsSeries?: boolean | null;

  /**
   * Optional filter for sports.
   */
  IsSports?: boolean | null;

  /**
   * Optional filter by items that are unaired episodes or not.
   */
  IsUnaired?: boolean | null;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The maximum premiere date. Format = ISO
   */
  MaxEndDate?: string;

  /**
   * Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
   */
  MaxOfficialRating?: string;

  /**
   * Optional filter by maximum number of game players.
   */
  MaxPlayers?: number | null;

  /**
   * Optional. The maximum premiere date. Format = ISO
   */
  MaxPremiereDate?: string;

  /**
   * Optional. The maximum premiere date. Format = ISO
   */
  MaxStartDate?: string;

  /**
   * Optional filter by MediaType. Allows multiple, comma delimited.
   */
  MediaTypes?: string;

  /**
   * Optional filter by minimum community rating.
   */
  MinCommunityRating?: number | null;

  /**
   * Optional filter by minimum critic rating.
   */
  MinCriticRating?: number | null;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinDateLastSaved?: string;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinDateLastSavedForUser?: string;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinEndDate?: string;

  /**
   * Optional filter by minimum index number.
   */
  MinIndexNumber?: number | null;

  /**
   * Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
   */
  MinOfficialRating?: string;

  /**
   * Optional filter by minimum number of game players.
   */
  MinPlayers?: number | null;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinPremiereDate?: string;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinStartDate?: string;

  /**
   * Optional filter by items whose name is equally or lesser than a given input
   * string.
   */
  NameLessThan?: string;

  /**
   * Optional filter by items whose name is sorted equally than a given input string.
   */
  NameStartsWith?: string;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  NameStartsWithOrGreater?: string;

  /**
   * Optional. If specified, results will be filtered based on OfficialRating. This
   * allows multiple, pipe delimeted.
   */
  OfficialRatings?: string;

  /**
   * Specify this to localize the search to a specific item or folder. Omit to use
   * the root
   */
  ParentId?: string;

  /**
   * Optional filter by parent index number.
   */
  ParentIndexNumber?: number | null;

  /**
   * Optional filter by Path.
   */
  Path?: string;

  /**
   * Optional. If specified, results will be filtered to include only those
   * containing the specified person.
   */
  Person?: string;

  /**
   * Optional. If specified, results will be filtered to include only those
   * containing the specified person.
   */
  PersonIds?: string;

  /**
   * Optional. If specified, along with Person, results will be filtered to include
   * only those containing the specified person and PersonType. Allows multiple,
   * comma-delimited
   */
  PersonTypes?: string;

  /**
   * ProjectToMedia
   */
  ProjectToMedia?: boolean;

  /**
   * When searching within folders, this determines whether or not the search will be
   * recursive. true/false
   */
  Recursive?: boolean;

  /**
   * Enter a search term to perform a search request
   */
  SearchTerm?: string;

  /**
   * Optional filter by Series Status. Allows multiple, comma delimeted.
   */
  SeriesStatus?: string;

  /**
   * Optional. Specify one or more sort orders, comma delimeted. Options: Album,
   * AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated,
   * DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue,
   * Runtime
   */
  SortBy?: string;

  /**
   * Sort Order - Ascending,Descending
   */
  SortOrder?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;

  /**
   * Optional. If specified, results will be filtered based on studio. This allows
   * multiple, pipe delimeted.
   */
  StudioIds?: string;

  /**
   * Optional. If specified, results will be filtered based on studio. This allows
   * multiple, pipe delimeted.
   */
  Studios?: string;

  /**
   * Optional filter by SubtitleCodec. Allows multiple, comma delimeted.
   */
  SubtitleCodecs?: string;

  /**
   * Optional. If specified, results will be filtered based on tag. This allows
   * multiple, pipe delimeted.
   */
  Tags?: string;

  /**
   * User Id
   */
  UserId?: string;

  /**
   * Optional filter by VideoCodec. Allows multiple, comma delimeted.
   */
  VideoCodecs?: string;

  /**
   * Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple,
   * comma delimeted.
   */
  VideoTypes?: string;

  /**
   * Optional. If specified, results will be filtered based on production year. This
   * allows multiple, comma delimeted.
   */
  Years?: string;
}

export interface ItemCreateInstantMixParams {
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

  /**
   * Optional. If specified, results will be filtered based on item type. This allows
   * multiple, comma delimeted.
   */
  IncludeItemTypes?: string;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface ItemDeleteAllParams {
  /**
   * Ids
   */
  Ids: string;
}

export interface ItemGetAncestorsParams {
  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface ItemGetCountsParams {
  /**
   * Optional. Get counts of favorite items
   */
  IsFavorite?: boolean | null;

  /**
   * Optional. Get counts from a specific user's library.
   */
  UserId?: string;
}

export interface ItemGetCriticReviewsParams {
  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;
}

export interface ItemGetSimilarItemsParams {
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

  /**
   * Optional. If specified, results will be filtered based on item type. This allows
   * multiple, comma delimeted.
   */
  IncludeItemTypes?: string;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface ItemGetThemeMediaParams {
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

  /**
   * Determines whether or not parent items should be searched for theme media.
   */
  InheritFromParent?: boolean;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface ItemGetThemeSongsParams {
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

  /**
   * Determines whether or not parent items should be searched for theme media.
   */
  InheritFromParent?: boolean;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface ItemGetThemeVideosParams {
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

  /**
   * Determines whether or not parent items should be searched for theme media.
   */
  InheritFromParent?: boolean;

  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface ItemGetThumbnailSetParams {
  Width: number;
}

export interface ItemListPrefixesParams {
  /**
   * Optional. Return items that are siblings of a supplied item.
   */
  AdjacentTo?: string;

  /**
   * Gets all episodes that aired during a season, including specials.
   */
  AiredDuringSeason?: number | null;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  AlbumArtistStartsWithOrGreater?: string;

  /**
   * Optional. If specified, results will be filtered based on album. This allows
   * multiple, pipe delimeted.
   */
  Albums?: string;

  /**
   * Optional. If specified, result will be filtered to contain only items which
   * match at least one of the specified IDs. Each provider ID must be in the form
   * 'prov.id', e.g. 'imdb.tt123456'. This allows multiple, comma delimeted value
   * pairs.
   */
  AnyProviderIdEquals?: string;

  /**
   * Optional. If specified, results will be filtered based on artist. This allows
   * multiple, pipe delimeted.
   */
  ArtistIds?: string;

  /**
   * Optional. If specified, results will be filtered based on artist. This allows
   * multiple, pipe delimeted.
   */
  Artists?: string;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  ArtistStartsWithOrGreater?: string;

  /**
   * Artist or AlbumArtist
   */
  ArtistType?: string;

  /**
   * Optional filter by AudioCodec. Allows multiple, comma delimeted.
   */
  AudioCodecs?: string;

  /**
   * Optional filter by AudioLayout. Allows multiple, comma delimeted.
   */
  AudioLayouts?: string;

  /**
   * Optional filter by Container. Allows multiple, comma delimeted.
   */
  Containers?: string;

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
   * Optional. If specified, results will be filtered by exxcluding item ids. This
   * allows multiple, comma delimeted.
   */
  ExcludeItemIds?: string;

  /**
   * Optional. If specified, results will be filtered based on item type. This allows
   * multiple, comma delimeted.
   */
  ExcludeItemTypes?: string;

  /**
   * Optional. If specified, results will be filtered based on tag. This allows
   * multiple, pipe delimeted.
   */
  ExcludeTags?: string;

  /**
   * Optional filter by ExtendedVideoType. Allows multiple, comma delimeted.
   */
  ExtendedVideoTypes?: string;

  /**
   * Optional. Specify additional fields of information to return in the output. This
   * allows multiple, comma delimeted. Options: Budget, Chapters, DateCreated,
   * Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path,
   * People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios,
   * Taglines
   */
  Fields?: string;

  /**
   * Optional. Specify additional filters to apply. This allows multiple, comma
   * delimeted. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite,
   * IsResumable, Likes, Dislikes
   */
  Filters?: string;

  /**
   * Optional. If specified, results will be filtered based on genre. This allows
   * multiple, pipe delimeted.
   */
  Genres?: string;

  /**
   * Whether or not to hide items behind their boxsets.
   */
  GroupItemsIntoCollections?: boolean;

  /**
   * Optional filter by items that have an imdb id or not.
   */
  HasImdbId?: boolean | null;

  /**
   * Optional filter by items that have official ratings
   */
  HasOfficialRating?: boolean | null;

  /**
   * Optional filter by items that have an overview or not.
   */
  HasOverview?: boolean | null;

  /**
   * Optional filter by items that have or do not have a parental rating
   */
  HasParentalRating?: boolean | null;

  /**
   * Optional filter by items with special features.
   */
  HasSpecialFeature?: boolean | null;

  /**
   * Optional filter by items with subtitles.
   */
  HasSubtitles?: boolean | null;

  /**
   * Optional filter by items with theme songs.
   */
  HasThemeSong?: boolean | null;

  /**
   * Optional filter by items with theme videos.
   */
  HasThemeVideo?: boolean | null;

  /**
   * Optional filter by items that have a tmdb id or not.
   */
  HasTmdbId?: boolean | null;

  /**
   * Optional filter by items with trailers.
   */
  HasTrailer?: boolean | null;

  /**
   * Optional filter by items that have a tvdb id or not.
   */
  HasTvdbId?: boolean | null;

  /**
   * Optional. If specific items are needed, specify a list of item id's to retrieve.
   * This allows multiple, comma delimited.
   */
  Ids?: string;

  /**
   * Optional, the max number of images to return, per image type
   */
  ImageTypeLimit?: number | null;

  /**
   * Optional. If specified, results will be filtered based on those containing image
   * types. This allows multiple, comma delimited.
   */
  ImageTypes?: string;

  /**
   * Optional. If specified, results will be filtered based on item type. This allows
   * multiple, comma delimeted.
   */
  IncludeItemTypes?: string;

  /**
   * Optional filter by items that are 3D, or not.
   */
  Is3D?: boolean | null;

  /**
   * Optional filter by items that are marked as favorite, or not.
   */
  IsFavorite?: boolean | null;

  /**
   * Optional filter for folders.
   */
  IsFolder?: boolean | null;

  /**
   * Optional filter by items that are HD or not.
   */
  IsHD?: boolean | null;

  /**
   * Optional filter for kids.
   */
  IsKids?: boolean | null;

  /**
   * Optional filter by items that are locked.
   */
  IsLocked?: boolean | null;

  /**
   * Optional filter for movies.
   */
  IsMovie?: boolean | null;

  /**
   * Optional filter for IsNew.
   */
  IsNew?: boolean | null;

  /**
   * Optional filter for IsNewOrPremiere.
   */
  IsNewOrPremiere?: boolean | null;

  /**
   * Optional filter for news.
   */
  IsNews?: boolean | null;

  /**
   * Optional filter by items that are placeholders
   */
  IsPlaceHolder?: boolean | null;

  /**
   * Optional filter by items that are played, or not.
   */
  IsPlayed?: boolean | null;

  /**
   * Optional filter for IsPremiere.
   */
  IsPremiere?: boolean | null;

  /**
   * Optional filter for IsRepeat.
   */
  IsRepeat?: boolean | null;

  /**
   * Optional filter for series.
   */
  IsSeries?: boolean | null;

  /**
   * Optional filter for sports.
   */
  IsSports?: boolean | null;

  /**
   * Optional filter by items that are unaired episodes or not.
   */
  IsUnaired?: boolean | null;

  /**
   * Optional. The maximum number of records to return
   */
  Limit?: number | null;

  /**
   * Optional. The maximum premiere date. Format = ISO
   */
  MaxEndDate?: string;

  /**
   * Optional filter by maximum official rating (PG, PG-13, TV-MA, etc).
   */
  MaxOfficialRating?: string;

  /**
   * Optional filter by maximum number of game players.
   */
  MaxPlayers?: number | null;

  /**
   * Optional. The maximum premiere date. Format = ISO
   */
  MaxPremiereDate?: string;

  /**
   * Optional. The maximum premiere date. Format = ISO
   */
  MaxStartDate?: string;

  /**
   * Optional filter by MediaType. Allows multiple, comma delimited.
   */
  MediaTypes?: string;

  /**
   * Optional filter by minimum community rating.
   */
  MinCommunityRating?: number | null;

  /**
   * Optional filter by minimum critic rating.
   */
  MinCriticRating?: number | null;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinDateLastSaved?: string;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinDateLastSavedForUser?: string;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinEndDate?: string;

  /**
   * Optional filter by minimum index number.
   */
  MinIndexNumber?: number | null;

  /**
   * Optional filter by minimum official rating (PG, PG-13, TV-MA, etc).
   */
  MinOfficialRating?: string;

  /**
   * Optional filter by minimum number of game players.
   */
  MinPlayers?: number | null;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinPremiereDate?: string;

  /**
   * Optional. The minimum premiere date. Format = ISO
   */
  MinStartDate?: string;

  /**
   * Optional filter by items whose name is equally or lesser than a given input
   * string.
   */
  NameLessThan?: string;

  /**
   * Optional filter by items whose name is sorted equally than a given input string.
   */
  NameStartsWith?: string;

  /**
   * Optional filter by items whose name is sorted equally or greater than a given
   * input string.
   */
  NameStartsWithOrGreater?: string;

  /**
   * Optional. If specified, results will be filtered based on OfficialRating. This
   * allows multiple, pipe delimeted.
   */
  OfficialRatings?: string;

  /**
   * Specify this to localize the search to a specific item or folder. Omit to use
   * the root
   */
  ParentId?: string;

  /**
   * Optional filter by parent index number.
   */
  ParentIndexNumber?: number | null;

  /**
   * Optional filter by Path.
   */
  Path?: string;

  /**
   * Optional. If specified, results will be filtered to include only those
   * containing the specified person.
   */
  Person?: string;

  /**
   * Optional. If specified, results will be filtered to include only those
   * containing the specified person.
   */
  PersonIds?: string;

  /**
   * Optional. If specified, along with Person, results will be filtered to include
   * only those containing the specified person and PersonType. Allows multiple,
   * comma-delimited
   */
  PersonTypes?: string;

  /**
   * ProjectToMedia
   */
  ProjectToMedia?: boolean;

  /**
   * When searching within folders, this determines whether or not the search will be
   * recursive. true/false
   */
  Recursive?: boolean;

  /**
   * Enter a search term to perform a search request
   */
  SearchTerm?: string;

  /**
   * Optional filter by Series Status. Allows multiple, comma delimeted.
   */
  SeriesStatus?: string;

  /**
   * Optional. Specify one or more sort orders, comma delimeted. Options: Album,
   * AlbumArtist, Artist, Budget, CommunityRating, CriticRating, DateCreated,
   * DatePlayed, PlayCount, PremiereDate, ProductionYear, SortName, Random, Revenue,
   * Runtime
   */
  SortBy?: string;

  /**
   * Sort Order - Ascending,Descending
   */
  SortOrder?: string;

  /**
   * Optional. The record index to start at. All items with a lower index will be
   * dropped from the results.
   */
  StartIndex?: number | null;

  /**
   * Optional. If specified, results will be filtered based on studio. This allows
   * multiple, pipe delimeted.
   */
  StudioIds?: string;

  /**
   * Optional. If specified, results will be filtered based on studio. This allows
   * multiple, pipe delimeted.
   */
  Studios?: string;

  /**
   * Optional filter by SubtitleCodec. Allows multiple, comma delimeted.
   */
  SubtitleCodecs?: string;

  /**
   * Optional. If specified, results will be filtered based on tag. This allows
   * multiple, pipe delimeted.
   */
  Tags?: string;

  /**
   * User Id
   */
  UserId?: string;

  /**
   * Optional filter by VideoCodec. Allows multiple, comma delimeted.
   */
  VideoCodecs?: string;

  /**
   * Optional filter by VideoType (videofile, dvd, bluray, iso). Allows multiple,
   * comma delimeted.
   */
  VideoTypes?: string;

  /**
   * Optional. If specified, results will be filtered based on production year. This
   * allows multiple, comma delimeted.
   */
  Years?: string;
}

export interface ItemRefreshMetadataParams {
  /**
   * Specifies the image refresh mode
   */
  ImageRefreshMode?: MetadataRefreshMode;

  /**
   * Specifies the metadata refresh mode
   */
  MetadataRefreshMode?: MetadataRefreshMode;

  /**
   * Indicates if the refresh should occur recursively.
   */
  Recursive?: boolean;

  /**
   * Determines if images should be replaced. Only applicable if mode is FullRefresh
   */
  ReplaceAllImages?: boolean;

  /**
   * Determines if metadata should be replaced. Only applicable if mode is
   * FullRefresh
   */
  ReplaceAllMetadata?: boolean;
}

export interface ItemUpdateAccessParams {
  ItemAccess?: UserItemShareLevel;

  ItemIds?: Array<string>;

  UserIds?: Array<string>;
}

Items.Images = Images;
Items.RemoteSearch = RemoteSearch;
Items.Metadata = Metadata;
Items.Shared = Shared;
Items.RemoteImages = RemoteImages;
Items.PlaybackInfoResource = PlaybackInfoResource;
Items.Tags = Tags;
Items.Subtitles = Subtitles;

export declare namespace Items {
  export {
    type ExternalIDInfo as ExternalIDInfo,
    type MetadataRefreshMode as MetadataRefreshMode,
    type ThemeMediaResult as ThemeMediaResult,
    type UserItemShareLevel as UserItemShareLevel,
    type ItemGetAncestorsResponse as ItemGetAncestorsResponse,
    type ItemGetCountsResponse as ItemGetCountsResponse,
    type ItemGetDeleteInfoResponse as ItemGetDeleteInfoResponse,
    type ItemGetExternalIDInfosResponse as ItemGetExternalIDInfosResponse,
    type ItemGetIntrosResponse as ItemGetIntrosResponse,
    type ItemGetMetadataEditorResponse as ItemGetMetadataEditorResponse,
    type ItemGetThemeMediaResponse as ItemGetThemeMediaResponse,
    type ItemGetThumbnailSetResponse as ItemGetThumbnailSetResponse,
    type ItemListPrefixesResponse as ItemListPrefixesResponse,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemCreateInstantMixParams as ItemCreateInstantMixParams,
    type ItemDeleteAllParams as ItemDeleteAllParams,
    type ItemGetAncestorsParams as ItemGetAncestorsParams,
    type ItemGetCountsParams as ItemGetCountsParams,
    type ItemGetCriticReviewsParams as ItemGetCriticReviewsParams,
    type ItemGetSimilarItemsParams as ItemGetSimilarItemsParams,
    type ItemGetThemeMediaParams as ItemGetThemeMediaParams,
    type ItemGetThemeSongsParams as ItemGetThemeSongsParams,
    type ItemGetThemeVideosParams as ItemGetThemeVideosParams,
    type ItemGetThumbnailSetParams as ItemGetThumbnailSetParams,
    type ItemListPrefixesParams as ItemListPrefixesParams,
    type ItemRefreshMetadataParams as ItemRefreshMetadataParams,
    type ItemUpdateAccessParams as ItemUpdateAccessParams,
  };

  export {
    Images as Images,
    type ImageType as ImageType,
    type ImageListResponse as ImageListResponse,
    type ImageDeleteParams as ImageDeleteParams,
    type ImageDeleteByTypeParams as ImageDeleteByTypeParams,
    type ImageDeleteByTypeAndIndexParams as ImageDeleteByTypeAndIndexParams,
    type ImageRetrieveByTypeParams as ImageRetrieveByTypeParams,
    type ImageRetrieveByTypeAndIndexParams as ImageRetrieveByTypeAndIndexParams,
    type ImageRetrieveDetailedParams as ImageRetrieveDetailedParams,
    type ImageUpdateIndexParams as ImageUpdateIndexParams,
    type ImageUpdateURLParams as ImageUpdateURLParams,
  };

  export {
    RemoteSearch as RemoteSearch,
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

  export { Metadata as Metadata, type MetadataResetParams as MetadataResetParams };

  export { Shared as Shared, type SharedLeaveParams as SharedLeaveParams };

  export {
    RemoteImages as RemoteImages,
    type RemoteImageRetrieveAllResponse as RemoteImageRetrieveAllResponse,
    type RemoteImageRetrieveProvidersResponse as RemoteImageRetrieveProvidersResponse,
    type RemoteImageDownloadParams as RemoteImageDownloadParams,
    type RemoteImageRetrieveAllParams as RemoteImageRetrieveAllParams,
  };

  export {
    PlaybackInfoResource as PlaybackInfoResource,
    type PlaybackInfo as PlaybackInfo,
    type PlaybackInfoRetrieveParams as PlaybackInfoRetrieveParams,
    type PlaybackInfoUpdateParams as PlaybackInfoUpdateParams,
  };

  export { Tags as Tags, type TagDeleteParams as TagDeleteParams, type TagAddParams as TagAddParams };

  export {
    Subtitles as Subtitles,
    type SubtitleDeleteParams as SubtitleDeleteParams,
    type SubtitleDeleteExternalParams as SubtitleDeleteExternalParams,
    type SubtitleStreamParams as SubtitleStreamParams,
    type SubtitleStreamWithPositionParams as SubtitleStreamWithPositionParams,
  };
}
