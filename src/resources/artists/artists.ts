// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LiveStreamsAPI from '../live-streams';
import * as ImagesAPI from './images';
import { ImageListByTypeParams, ImageRetrieveByIndexParams, Images } from './images';
import * as StreamAPI from '../audio/stream';
import * as AuthAPI from '../auth/auth';
import * as ScheduledTasksAPI from '../scheduled-tasks/scheduled-tasks';
import * as FavoriteItemsAPI from '../users/favorite-items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Artists extends APIResource {
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);

  /**
   * Requires authentication as user
   */
  retrieve(
    name: string,
    query: ArtistRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BaseItem> {
    return this._client.get(path`/Artists/${name}`, { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  list(
    query: ArtistListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueryResultBaseItem> {
    return this._client.get('/Artists', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  createInstantMix(
    query: ArtistCreateInstantMixParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueryResultBaseItem> {
    return this._client.get('/Artists/InstantMix', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  listAlbumArtists(
    query: ArtistListAlbumArtistsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueryResultBaseItem> {
    return this._client.get('/Artists/AlbumArtists', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  listPrefixes(
    query: ArtistListPrefixesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArtistListPrefixesResponse> {
    return this._client.get('/Artists/Prefixes', { query, ...options });
  }

  /**
   * Requires authentication as user
   */
  listSimilar(
    id: string,
    query: ArtistListSimilarParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QueryResultBaseItem> {
    return this._client.get(path`/Artists/${id}/Similar`, { query, ...options });
  }
}

export interface BaseItem {
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

  Chapters?: Array<BaseItem.Chapter>;

  ChildCount?: number | null;

  CollectionType?: string;

  CommunityRating?: number | null;

  CompletionPercentage?: number | null;

  Composers?: Array<AuthAPI.NameIDPair>;

  Container?: string;

  CriticRating?: number | null;

  CurrentProgram?: BaseItem;

  CustomRating?: string;

  DateCreated?: string | null;

  Disabled?: boolean | null;

  DisplayOrder?: string;

  DisplayPreferencesId?: string;

  EndDate?: string | null;

  EpisodeTitle?: string;

  Etag?: string;

  ExposureTime?: number | null;

  ExternalUrls?: Array<BaseItem.ExternalURL>;

  ExtraType?: string;

  FileName?: string;

  FocalLength?: number | null;

  ForcedSortName?: string;

  GameSystem?: string;

  GameSystemId?: number | null;

  GenreItems?: Array<BaseItem.GenreItem>;

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

  ImageTags?: Record<string, string>;

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

  MediaStreams?: Array<BaseItem.MediaStream>;

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

  People?: Array<BaseItem.Person>;

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

  ProviderIds?: Record<string, string>;

  RecursiveItemCount?: number | null;

  RemoteTrailers?: Array<BaseItem.RemoteTrailer>;

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

  Studios?: Array<BaseItem.Studio>;

  Subviews?: Array<string>;

  SupportsResume?: boolean | null;

  SupportsSync?: boolean | null;

  SyncStatus?: SyncJobItemStatus;

  TagItems?: Array<BaseItem.TagItem>;

  Taglines?: Array<string>;

  Tags?: Array<string>;

  TimerId?: string;

  TimerType?: LiveTvTimerType;

  Type?: string;

  UserData?: FavoriteItemsAPI.UserItemData;

  Video3DFormat?: 'HalfSideBySide' | 'FullSideBySide' | 'FullTopAndBottom' | 'HalfTopAndBottom' | 'MVC';

  Width?: number | null;
}

export namespace BaseItem {
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

export type LiveTvTimerType = 'Program' | 'DateTime' | 'Keyword';

export interface NameValuePair {
  Name?: string;

  Value?: string;
}

export interface QueryResultBaseItem {
  Items?: Array<BaseItem>;

  TotalRecordCount?: number;
}

export type SyncJobItemStatus =
  | 'Queued'
  | 'Converting'
  | 'ReadyToTransfer'
  | 'Transferring'
  | 'Synced'
  | 'Failed';

export type ArtistListPrefixesResponse = Array<NameValuePair>;

export interface ArtistRetrieveParams {
  /**
   * Optional. Filter by user id, and attach user data
   */
  UserId?: string;
}

export interface ArtistListParams {
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

export interface ArtistCreateInstantMixParams {
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

export interface ArtistListAlbumArtistsParams {
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

export interface ArtistListPrefixesParams {
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

export interface ArtistListSimilarParams {
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

Artists.Images = Images;

export declare namespace Artists {
  export {
    type BaseItem as BaseItem,
    type LiveTvTimerType as LiveTvTimerType,
    type NameValuePair as NameValuePair,
    type QueryResultBaseItem as QueryResultBaseItem,
    type SyncJobItemStatus as SyncJobItemStatus,
    type ArtistListPrefixesResponse as ArtistListPrefixesResponse,
    type ArtistRetrieveParams as ArtistRetrieveParams,
    type ArtistListParams as ArtistListParams,
    type ArtistCreateInstantMixParams as ArtistCreateInstantMixParams,
    type ArtistListAlbumArtistsParams as ArtistListAlbumArtistsParams,
    type ArtistListPrefixesParams as ArtistListPrefixesParams,
    type ArtistListSimilarParams as ArtistListSimilarParams,
  };

  export {
    Images as Images,
    type ImageListByTypeParams as ImageListByTypeParams,
    type ImageRetrieveByIndexParams as ImageRetrieveByIndexParams,
  };
}
