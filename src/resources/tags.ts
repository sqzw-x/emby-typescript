// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AudioCodecsAPI from './audio-codecs';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tags extends APIResource {
  /**
   * Requires authentication as user
   */
  list(
    query: TagListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AudioCodecsAPI.TagItem> {
    return this._client.get('/Tags', { query, ...options });
  }
}

export interface TagListParams {
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

export declare namespace Tags {
  export { type TagListParams as TagListParams };
}
