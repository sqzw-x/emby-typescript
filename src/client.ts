// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import { AlbumCreateInstantMixParams, AlbumListSimilarParams, Albums } from './resources/albums';
import { AudioBookListNextUpParams, AudioBooks } from './resources/audio-books';
import { AudioCodecListParams, AudioCodecs, TagItem } from './resources/audio-codecs';
import { AudioLayoutListParams, AudioLayouts } from './resources/audio-layouts';
import {
  BackupInfo,
  BackupRestore,
  BackupRestoreBackupInfoResponse,
  BackupRestoreRestoreDataParams,
  BackupRestoreRestoreParams,
} from './resources/backup-restore';
import { Branding, BrandingRetrieveConfigurationResponse } from './resources/branding';
import { ChannelListParams, Channels } from './resources/channels';
import { Connect, ConnectRetrieveExchangeParams, ConnectRetrieveExchangeResponse } from './resources/connect';
import { ContainerListParams, Containers } from './resources/containers';
import {
  DisplayPreference,
  DisplayPreferenceRetrieveParams,
  DisplayPreferenceUpdateParams,
  DisplayPreferences,
} from './resources/display-preferences';
import { ExtendedVideoTypeListParams, ExtendedVideoTypes } from './resources/extended-video-types';
import { FeatureListResponse, Features } from './resources/features';
import { GameFindSimilarParams, Games } from './resources/games';
import { ImageRetrieveRemoteParams, Images } from './resources/images';
import { ItemTypeListParams, ItemTypes } from './resources/item-types';
import {
  DeviceProfile,
  LiveStreamCloseParams,
  LiveStreamGetMediaInfoParams,
  LiveStreamOpenParams,
  LiveStreamOpenResponse,
  LiveStreams,
  MediaProtocol,
  MediaSourceInfo,
} from './resources/live-streams';
import {
  CountryInfo,
  CultureDto,
  Localization,
  LocalizationGetCountriesResponse,
  LocalizationGetCulturesResponse,
  LocalizationGetOptionsResponse,
  LocalizationGetParentalRatingsResponse,
  ParentalRating,
} from './resources/localization';
import {
  MovieGetRecommendationsParams,
  MovieGetRecommendationsResponse,
  MovieGetSimilarParams,
  Movies,
} from './resources/movies';
import {
  OfficialRatingListParams,
  OfficialRatingListResponse,
  OfficialRatings,
} from './resources/official-ratings';
import { OpenAPI, OpenAPIRetrieveResponse } from './resources/openapi';
import { OpenAPIJson, OpenAPIJsonRetrieveResponse } from './resources/openapi-json';
import { Playback, PlaybackBitrateTestParams } from './resources/playback';
import {
  ShowListEpisodesParams,
  ShowListMissingParams,
  ShowListNextUpParams,
  ShowListSeasonsParams,
  ShowListSimilarParams,
  ShowListUpcomingParams,
  Shows,
} from './resources/shows';
import { SongCreateInstantMixParams, Songs } from './resources/songs';
import { StreamLanguageListParams, StreamLanguages } from './resources/stream-languages';
import { SubtitleCodecListParams, SubtitleCodecs } from './resources/subtitle-codecs';
import { Swagger, SwaggerRetrieveResponse } from './resources/swagger';
import { SwaggerJson, SwaggerJsonRetrieveResponse } from './resources/swagger-json';
import { TagListParams, Tags } from './resources/tags';
import { TrailerListParams, TrailerRetrieveSimilarParams, Trailers } from './resources/trailers';
import { Ui, UiExecuteCommandParams, UiRetrieveViewParams, UiViewInfo } from './resources/ui';
import { VideoCodecListParams, VideoCodecs } from './resources/video-codecs';
import {
  Version,
  Web,
  WebListConfigurationPagesResponse,
  WebRetrieveStringSetResponse,
} from './resources/web';
import {
  ArtistCreateInstantMixParams,
  ArtistListAlbumArtistsParams,
  ArtistListParams,
  ArtistListPrefixesParams,
  ArtistListPrefixesResponse,
  ArtistListSimilarParams,
  ArtistRetrieveParams,
  Artists,
  BaseItem,
  LiveTvTimerType,
  NameValuePair,
  QueryResultBaseItem,
  SyncJobItemStatus,
} from './resources/artists/artists';
import {
  Audio,
  AudioRetrieveHls1SegmentParams,
  AudioRetrieveHlsSegmentParams,
  AudioRetrieveLiveStreamParams,
  AudioRetrieveMainStreamParams,
  AudioRetrieveMasterStreamParams,
  AudioRetrieveStreamFileParams,
} from './resources/audio/audio';
import { Auth, AuthListProvidersResponse, NameIDPair } from './resources/auth/auth';
import {
  CollectionCreateParams,
  CollectionCreateResponse,
  Collections,
} from './resources/collections/collections';
import {
  DeviceDeleteDeviceParams,
  DeviceDeleteParams,
  DeviceInfo,
  DeviceListParams,
  DeviceListResponse,
  DeviceRetrieveInfoParams,
  Devices,
} from './resources/devices/devices';
import { Dlna, DlnaListProfilesResponse } from './resources/dlna/dlna';
import {
  Encoding,
  EncodingGetCodecConfigurationDefaultsResponse,
  EncodingGetCodecInformationVideoResponse,
  EncodingGetCodecParametersParams,
  EncodingGetToneMapOptionsResponse,
  EncodingUpdateCodecParametersParams,
} from './resources/encoding/encoding';
import {
  Environment,
  EnvironmentDefaultDirectoryBrowserResponse,
  EnvironmentDrivesResponse,
  EnvironmentNetworkDevicesResponse,
  EnvironmentNetworkSharesParams,
  EnvironmentNetworkSharesResponse,
  EnvironmentParentPathParams,
  EnvironmentParentPathResponse,
  EnvironmentValidatePathParams,
} from './resources/environment/environment';
import {
  GameGenreListParams,
  GameGenreRetrieveParams,
  GameGenres,
} from './resources/game-genres/game-genres';
import { GenreListParams, GenreRetrieveParams, Genres } from './resources/genres/genres';
import {
  ExternalIDInfo,
  ItemCreateInstantMixParams,
  ItemDeleteAllParams,
  ItemGetAncestorsParams,
  ItemGetAncestorsResponse,
  ItemGetCountsParams,
  ItemGetCountsResponse,
  ItemGetCriticReviewsParams,
  ItemGetDeleteInfoResponse,
  ItemGetExternalIDInfosResponse,
  ItemGetIntrosResponse,
  ItemGetMetadataEditorResponse,
  ItemGetSimilarItemsParams,
  ItemGetThemeMediaParams,
  ItemGetThemeMediaResponse,
  ItemGetThemeSongsParams,
  ItemGetThemeVideosParams,
  ItemGetThumbnailSetParams,
  ItemGetThumbnailSetResponse,
  ItemListParams,
  ItemListPrefixesParams,
  ItemListPrefixesResponse,
  ItemRefreshMetadataParams,
  ItemUpdateAccessParams,
  ItemUpdateParams,
  Items,
  MetadataRefreshMode,
  ThemeMediaResult,
  UserItemShareLevel,
} from './resources/items/items';
import {
  ImageOption,
  Libraries,
  LibraryListAvailableOptionsResponse,
  LibraryListMediaFoldersParams,
  LibraryListPhysicalPathsResponse,
  LibraryListSelectableMediaFoldersResponse,
  LibraryOptionInfo,
} from './resources/libraries/libraries';
import {
  ChannelType,
  LiveTv,
  LiveTvListAvailableRecordingOptionsResponse,
  LiveTvRetrieveEpgParams,
  LiveTvRetrieveEpgResponse,
  LiveTvRetrieveGuideInfoResponse,
  LiveTvRetrieveInfoResponse,
  NameIDDescriptionPair,
} from './resources/live-tv/live-tv';
import {
  MusicGenreListParams,
  MusicGenreRetrieveParams,
  MusicGenres,
} from './resources/music-genres/music-genres';
import {
  NotificationListTypesResponse,
  NotificationSendToAdminParams,
  Notifications,
} from './resources/notifications/notifications';
import {
  PackageInfo,
  PackageInstallParams,
  PackageListParams,
  PackageListResponse,
  PackageListUpdatesParams,
  PackageListUpdatesResponse,
  PackageRetrieveParams,
  PackageVersion,
  Packages,
} from './resources/packages/packages';
import { PersonListParams, PersonRetrieveParams, Persons } from './resources/persons/persons';
import {
  PlaylistCreateInstantMixParams,
  PlaylistCreateParams,
  PlaylistCreateResponse,
  PlaylistRetrieveAddToPlaylistInfoParams,
  PlaylistRetrieveAddToPlaylistInfoResponse,
  Playlists,
} from './resources/playlists/playlists';
import { PluginListResponse, Plugins } from './resources/plugins/plugins';
import { Providers } from './resources/providers/providers';
import {
  DayOfWeek,
  ScheduledTaskListParams,
  ScheduledTaskListResponse,
  ScheduledTaskUpdateTriggersParams,
  ScheduledTasks,
  TaskInfo,
  TaskTriggerInfo,
} from './resources/scheduled-tasks/scheduled-tasks';
import {
  SessionGetPlayQueueParams,
  SessionInfo,
  SessionIssueSystemCommandParams,
  SessionListParams,
  SessionListResponse,
  SessionSendMessageParams,
  SessionViewItemParams,
  Sessions,
  VpStepInfo,
} from './resources/sessions/sessions';
import { StudioListParams, StudioRetrieveParams, Studios } from './resources/studios/studios';
import {
  Sync,
  SyncCategory,
  SyncGetItemStatusParams,
  SyncListOptionsParams,
  SyncListOptionsResponse,
  SyncListTargetsParams,
  SyncListTargetsResponse,
  SyncReportOfflineActionParams,
  SyncSyncDataParams,
  SyncSyncDataResponse,
  SyncTarget,
} from './resources/sync/sync';
import {
  System,
  SystemRetrieveEndpointInfoResponse,
  SystemRetrieveWakeOnLanInfoResponse,
  WakeOnLanInfo,
} from './resources/system/system';
import {
  AuthenticationResult,
  QueryResultUser,
  User,
  UserAuthenticateByNameParams,
  UserAuthenticateParams,
  UserCreateParams,
  UserGetSuggestionsParams,
  UserGetViewsParams,
  UserListAllParams,
  UserListItemAccessParams,
  UserListPrefixesParams,
  UserListPrefixesResponse,
  UserListPublicResponse,
  UserPolicy,
  UserUpdateParams,
  UserUpdatePasswordParams,
  UserUpdatePolicyParams,
  Users,
} from './resources/users/users';
import {
  VideoMergeVersionsParams,
  VideoRetrieveAdditionalPartsParams,
  VideoRetrieveHlsSegment1Params,
  VideoRetrieveHlsSegmentParams,
  VideoRetrieveIndexBifParams,
  VideoRetrieveLiveStreamParams,
  VideoRetrieveLiveSubtitlesPlaylistParams,
  VideoRetrieveMainStreamParams,
  VideoRetrieveMasterStreamParams,
  VideoRetrieveStreamParams,
  VideoRetrieveSubtitlesPlaylistParams,
  Videos,
} from './resources/videos/videos';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * **ApiKey Authentication**
   * API keys are static access tokens providing access to the Emby API for external applications.
   * Keys can be created from the Server Dashboard under **Advanced > Security**
   * The api key can alternatively be specified in an http header named _X-Emby-Token_
   * For details please see the [API Documentation: ApiKey Authentication](https://github.com/MediaBrowser/Emby/wiki/ApiKeyAuthentication)
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['EMBY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['EMBY_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Emby API.
 */
export class Emby {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Emby API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['EMBY_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['EMBY_BASE_URL'] ?? http://localhost:8096/emby] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('EMBY_BASE_URL'),
    apiKey = readEnv('EMBY_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.EmbyError(
        "The EMBY_API_KEY environment variable is missing or empty; either provide it, or instantiate the Emby client with an apiKey option, like new Emby({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `http://localhost:8096/emby`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Emby.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('EMBY_LOG'), "process.env['EMBY_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'http://localhost:8096/emby';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ 'X-Emby-Token': this.apiKey }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Emby = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static EmbyError = Errors.EmbyError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  artists: API.Artists = new API.Artists(this);
  audioCodecs: API.AudioCodecs = new API.AudioCodecs(this);
  audioLayouts: API.AudioLayouts = new API.AudioLayouts(this);
  channels: API.Channels = new API.Channels(this);
  collections: API.Collections = new API.Collections(this);
  containers: API.Containers = new API.Containers(this);
  devices: API.Devices = new API.Devices(this);
  extendedVideoTypes: API.ExtendedVideoTypes = new API.ExtendedVideoTypes(this);
  features: API.Features = new API.Features(this);
  gameGenres: API.GameGenres = new API.GameGenres(this);
  genres: API.Genres = new API.Genres(this);
  items: API.Items = new API.Items(this);
  itemTypes: API.ItemTypes = new API.ItemTypes(this);
  musicGenres: API.MusicGenres = new API.MusicGenres(this);
  officialRatings: API.OfficialRatings = new API.OfficialRatings(this);
  openAPI: API.OpenAPI = new API.OpenAPI(this);
  openAPIJson: API.OpenAPIJson = new API.OpenAPIJson(this);
  packages: API.Packages = new API.Packages(this);
  persons: API.Persons = new API.Persons(this);
  playlists: API.Playlists = new API.Playlists(this);
  plugins: API.Plugins = new API.Plugins(this);
  scheduledTasks: API.ScheduledTasks = new API.ScheduledTasks(this);
  sessions: API.Sessions = new API.Sessions(this);
  streamLanguages: API.StreamLanguages = new API.StreamLanguages(this);
  studios: API.Studios = new API.Studios(this);
  subtitleCodecs: API.SubtitleCodecs = new API.SubtitleCodecs(this);
  swagger: API.Swagger = new API.Swagger(this);
  swaggerJson: API.SwaggerJson = new API.SwaggerJson(this);
  tags: API.Tags = new API.Tags(this);
  trailers: API.Trailers = new API.Trailers(this);
  videoCodecs: API.VideoCodecs = new API.VideoCodecs(this);
  audioBooks: API.AudioBooks = new API.AudioBooks(this);
  auth: API.Auth = new API.Auth(this);
  backupRestore: API.BackupRestore = new API.BackupRestore(this);
  branding: API.Branding = new API.Branding(this);
  connect: API.Connect = new API.Connect(this);
  displayPreferences: API.DisplayPreferences = new API.DisplayPreferences(this);
  dlna: API.Dlna = new API.Dlna(this);
  encoding: API.Encoding = new API.Encoding(this);
  environment: API.Environment = new API.Environment(this);
  images: API.Images = new API.Images(this);
  liveStreams: API.LiveStreams = new API.LiveStreams(this);
  liveTv: API.LiveTv = new API.LiveTv(this);
  localization: API.Localization = new API.Localization(this);
  movies: API.Movies = new API.Movies(this);
  notifications: API.Notifications = new API.Notifications(this);
  playback: API.Playback = new API.Playback(this);
  shows: API.Shows = new API.Shows(this);
  sync: API.Sync = new API.Sync(this);
  system: API.System = new API.System(this);
  ui: API.Ui = new API.Ui(this);
  users: API.Users = new API.Users(this);
  videos: API.Videos = new API.Videos(this);
  web: API.Web = new API.Web(this);
  albums: API.Albums = new API.Albums(this);
  audio: API.Audio = new API.Audio(this);
  games: API.Games = new API.Games(this);
  songs: API.Songs = new API.Songs(this);
  providers: API.Providers = new API.Providers(this);
  libraries: API.Libraries = new API.Libraries(this);
}
Emby.Artists = Artists;
Emby.AudioCodecs = AudioCodecs;
Emby.AudioLayouts = AudioLayouts;
Emby.Channels = Channels;
Emby.Collections = Collections;
Emby.Containers = Containers;
Emby.Devices = Devices;
Emby.ExtendedVideoTypes = ExtendedVideoTypes;
Emby.Features = Features;
Emby.GameGenres = GameGenres;
Emby.Genres = Genres;
Emby.Items = Items;
Emby.ItemTypes = ItemTypes;
Emby.MusicGenres = MusicGenres;
Emby.OfficialRatings = OfficialRatings;
Emby.OpenAPI = OpenAPI;
Emby.OpenAPIJson = OpenAPIJson;
Emby.Packages = Packages;
Emby.Persons = Persons;
Emby.Playlists = Playlists;
Emby.Plugins = Plugins;
Emby.ScheduledTasks = ScheduledTasks;
Emby.Sessions = Sessions;
Emby.StreamLanguages = StreamLanguages;
Emby.Studios = Studios;
Emby.SubtitleCodecs = SubtitleCodecs;
Emby.Swagger = Swagger;
Emby.SwaggerJson = SwaggerJson;
Emby.Tags = Tags;
Emby.Trailers = Trailers;
Emby.VideoCodecs = VideoCodecs;
Emby.AudioBooks = AudioBooks;
Emby.Auth = Auth;
Emby.BackupRestore = BackupRestore;
Emby.Branding = Branding;
Emby.Connect = Connect;
Emby.DisplayPreferences = DisplayPreferences;
Emby.Dlna = Dlna;
Emby.Encoding = Encoding;
Emby.Environment = Environment;
Emby.Images = Images;
Emby.LiveStreams = LiveStreams;
Emby.LiveTv = LiveTv;
Emby.Localization = Localization;
Emby.Movies = Movies;
Emby.Notifications = Notifications;
Emby.Playback = Playback;
Emby.Shows = Shows;
Emby.Sync = Sync;
Emby.System = System;
Emby.Ui = Ui;
Emby.Users = Users;
Emby.Videos = Videos;
Emby.Web = Web;
Emby.Albums = Albums;
Emby.Audio = Audio;
Emby.Games = Games;
Emby.Songs = Songs;
Emby.Providers = Providers;
Emby.Libraries = Libraries;
export declare namespace Emby {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Artists as Artists,
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
    AudioCodecs as AudioCodecs,
    type TagItem as TagItem,
    type AudioCodecListParams as AudioCodecListParams,
  };

  export { AudioLayouts as AudioLayouts, type AudioLayoutListParams as AudioLayoutListParams };

  export { Channels as Channels, type ChannelListParams as ChannelListParams };

  export {
    Collections as Collections,
    type CollectionCreateResponse as CollectionCreateResponse,
    type CollectionCreateParams as CollectionCreateParams,
  };

  export { Containers as Containers, type ContainerListParams as ContainerListParams };

  export {
    Devices as Devices,
    type DeviceInfo as DeviceInfo,
    type DeviceListResponse as DeviceListResponse,
    type DeviceListParams as DeviceListParams,
    type DeviceDeleteParams as DeviceDeleteParams,
    type DeviceDeleteDeviceParams as DeviceDeleteDeviceParams,
    type DeviceRetrieveInfoParams as DeviceRetrieveInfoParams,
  };

  export {
    ExtendedVideoTypes as ExtendedVideoTypes,
    type ExtendedVideoTypeListParams as ExtendedVideoTypeListParams,
  };

  export { Features as Features, type FeatureListResponse as FeatureListResponse };

  export {
    GameGenres as GameGenres,
    type GameGenreRetrieveParams as GameGenreRetrieveParams,
    type GameGenreListParams as GameGenreListParams,
  };

  export {
    Genres as Genres,
    type GenreRetrieveParams as GenreRetrieveParams,
    type GenreListParams as GenreListParams,
  };

  export {
    Items as Items,
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

  export { ItemTypes as ItemTypes, type ItemTypeListParams as ItemTypeListParams };

  export {
    MusicGenres as MusicGenres,
    type MusicGenreRetrieveParams as MusicGenreRetrieveParams,
    type MusicGenreListParams as MusicGenreListParams,
  };

  export {
    OfficialRatings as OfficialRatings,
    type OfficialRatingListResponse as OfficialRatingListResponse,
    type OfficialRatingListParams as OfficialRatingListParams,
  };

  export { OpenAPI as OpenAPI, type OpenAPIRetrieveResponse as OpenAPIRetrieveResponse };

  export { OpenAPIJson as OpenAPIJson, type OpenAPIJsonRetrieveResponse as OpenAPIJsonRetrieveResponse };

  export {
    Packages as Packages,
    type PackageInfo as PackageInfo,
    type PackageVersion as PackageVersion,
    type PackageListResponse as PackageListResponse,
    type PackageListUpdatesResponse as PackageListUpdatesResponse,
    type PackageRetrieveParams as PackageRetrieveParams,
    type PackageListParams as PackageListParams,
    type PackageInstallParams as PackageInstallParams,
    type PackageListUpdatesParams as PackageListUpdatesParams,
  };

  export {
    Persons as Persons,
    type PersonRetrieveParams as PersonRetrieveParams,
    type PersonListParams as PersonListParams,
  };

  export {
    Playlists as Playlists,
    type PlaylistCreateResponse as PlaylistCreateResponse,
    type PlaylistRetrieveAddToPlaylistInfoResponse as PlaylistRetrieveAddToPlaylistInfoResponse,
    type PlaylistCreateParams as PlaylistCreateParams,
    type PlaylistCreateInstantMixParams as PlaylistCreateInstantMixParams,
    type PlaylistRetrieveAddToPlaylistInfoParams as PlaylistRetrieveAddToPlaylistInfoParams,
  };

  export { Plugins as Plugins, type PluginListResponse as PluginListResponse };

  export {
    ScheduledTasks as ScheduledTasks,
    type DayOfWeek as DayOfWeek,
    type TaskInfo as TaskInfo,
    type TaskTriggerInfo as TaskTriggerInfo,
    type ScheduledTaskListResponse as ScheduledTaskListResponse,
    type ScheduledTaskListParams as ScheduledTaskListParams,
    type ScheduledTaskUpdateTriggersParams as ScheduledTaskUpdateTriggersParams,
  };

  export {
    Sessions as Sessions,
    type SessionInfo as SessionInfo,
    type VpStepInfo as VpStepInfo,
    type SessionListResponse as SessionListResponse,
    type SessionListParams as SessionListParams,
    type SessionGetPlayQueueParams as SessionGetPlayQueueParams,
    type SessionIssueSystemCommandParams as SessionIssueSystemCommandParams,
    type SessionSendMessageParams as SessionSendMessageParams,
    type SessionViewItemParams as SessionViewItemParams,
  };

  export { StreamLanguages as StreamLanguages, type StreamLanguageListParams as StreamLanguageListParams };

  export {
    Studios as Studios,
    type StudioRetrieveParams as StudioRetrieveParams,
    type StudioListParams as StudioListParams,
  };

  export { SubtitleCodecs as SubtitleCodecs, type SubtitleCodecListParams as SubtitleCodecListParams };

  export { Swagger as Swagger, type SwaggerRetrieveResponse as SwaggerRetrieveResponse };

  export { SwaggerJson as SwaggerJson, type SwaggerJsonRetrieveResponse as SwaggerJsonRetrieveResponse };

  export { Tags as Tags, type TagListParams as TagListParams };

  export {
    Trailers as Trailers,
    type TrailerListParams as TrailerListParams,
    type TrailerRetrieveSimilarParams as TrailerRetrieveSimilarParams,
  };

  export { VideoCodecs as VideoCodecs, type VideoCodecListParams as VideoCodecListParams };

  export { AudioBooks as AudioBooks, type AudioBookListNextUpParams as AudioBookListNextUpParams };

  export {
    Auth as Auth,
    type NameIDPair as NameIDPair,
    type AuthListProvidersResponse as AuthListProvidersResponse,
  };

  export {
    BackupRestore as BackupRestore,
    type BackupInfo as BackupInfo,
    type BackupRestoreBackupInfoResponse as BackupRestoreBackupInfoResponse,
    type BackupRestoreRestoreParams as BackupRestoreRestoreParams,
    type BackupRestoreRestoreDataParams as BackupRestoreRestoreDataParams,
  };

  export {
    Branding as Branding,
    type BrandingRetrieveConfigurationResponse as BrandingRetrieveConfigurationResponse,
  };

  export {
    Connect as Connect,
    type ConnectRetrieveExchangeResponse as ConnectRetrieveExchangeResponse,
    type ConnectRetrieveExchangeParams as ConnectRetrieveExchangeParams,
  };

  export {
    DisplayPreferences as DisplayPreferences,
    type DisplayPreference as DisplayPreference,
    type DisplayPreferenceRetrieveParams as DisplayPreferenceRetrieveParams,
    type DisplayPreferenceUpdateParams as DisplayPreferenceUpdateParams,
  };

  export { Dlna as Dlna, type DlnaListProfilesResponse as DlnaListProfilesResponse };

  export {
    Encoding as Encoding,
    type EncodingGetCodecConfigurationDefaultsResponse as EncodingGetCodecConfigurationDefaultsResponse,
    type EncodingGetCodecInformationVideoResponse as EncodingGetCodecInformationVideoResponse,
    type EncodingGetToneMapOptionsResponse as EncodingGetToneMapOptionsResponse,
    type EncodingGetCodecParametersParams as EncodingGetCodecParametersParams,
    type EncodingUpdateCodecParametersParams as EncodingUpdateCodecParametersParams,
  };

  export {
    Environment as Environment,
    type EnvironmentDefaultDirectoryBrowserResponse as EnvironmentDefaultDirectoryBrowserResponse,
    type EnvironmentDrivesResponse as EnvironmentDrivesResponse,
    type EnvironmentNetworkDevicesResponse as EnvironmentNetworkDevicesResponse,
    type EnvironmentNetworkSharesResponse as EnvironmentNetworkSharesResponse,
    type EnvironmentParentPathResponse as EnvironmentParentPathResponse,
    type EnvironmentNetworkSharesParams as EnvironmentNetworkSharesParams,
    type EnvironmentParentPathParams as EnvironmentParentPathParams,
    type EnvironmentValidatePathParams as EnvironmentValidatePathParams,
  };

  export { Images as Images, type ImageRetrieveRemoteParams as ImageRetrieveRemoteParams };

  export {
    LiveStreams as LiveStreams,
    type DeviceProfile as DeviceProfile,
    type MediaProtocol as MediaProtocol,
    type MediaSourceInfo as MediaSourceInfo,
    type LiveStreamOpenResponse as LiveStreamOpenResponse,
    type LiveStreamCloseParams as LiveStreamCloseParams,
    type LiveStreamGetMediaInfoParams as LiveStreamGetMediaInfoParams,
    type LiveStreamOpenParams as LiveStreamOpenParams,
  };

  export {
    LiveTv as LiveTv,
    type ChannelType as ChannelType,
    type NameIDDescriptionPair as NameIDDescriptionPair,
    type LiveTvListAvailableRecordingOptionsResponse as LiveTvListAvailableRecordingOptionsResponse,
    type LiveTvRetrieveEpgResponse as LiveTvRetrieveEpgResponse,
    type LiveTvRetrieveGuideInfoResponse as LiveTvRetrieveGuideInfoResponse,
    type LiveTvRetrieveInfoResponse as LiveTvRetrieveInfoResponse,
    type LiveTvRetrieveEpgParams as LiveTvRetrieveEpgParams,
  };

  export {
    Localization as Localization,
    type CountryInfo as CountryInfo,
    type CultureDto as CultureDto,
    type ParentalRating as ParentalRating,
    type LocalizationGetCountriesResponse as LocalizationGetCountriesResponse,
    type LocalizationGetCulturesResponse as LocalizationGetCulturesResponse,
    type LocalizationGetOptionsResponse as LocalizationGetOptionsResponse,
    type LocalizationGetParentalRatingsResponse as LocalizationGetParentalRatingsResponse,
  };

  export {
    Movies as Movies,
    type MovieGetRecommendationsResponse as MovieGetRecommendationsResponse,
    type MovieGetRecommendationsParams as MovieGetRecommendationsParams,
    type MovieGetSimilarParams as MovieGetSimilarParams,
  };

  export {
    Notifications as Notifications,
    type NotificationListTypesResponse as NotificationListTypesResponse,
    type NotificationSendToAdminParams as NotificationSendToAdminParams,
  };

  export { Playback as Playback, type PlaybackBitrateTestParams as PlaybackBitrateTestParams };

  export {
    Shows as Shows,
    type ShowListEpisodesParams as ShowListEpisodesParams,
    type ShowListMissingParams as ShowListMissingParams,
    type ShowListNextUpParams as ShowListNextUpParams,
    type ShowListSeasonsParams as ShowListSeasonsParams,
    type ShowListSimilarParams as ShowListSimilarParams,
    type ShowListUpcomingParams as ShowListUpcomingParams,
  };

  export {
    Sync as Sync,
    type SyncCategory as SyncCategory,
    type SyncTarget as SyncTarget,
    type SyncListOptionsResponse as SyncListOptionsResponse,
    type SyncListTargetsResponse as SyncListTargetsResponse,
    type SyncSyncDataResponse as SyncSyncDataResponse,
    type SyncGetItemStatusParams as SyncGetItemStatusParams,
    type SyncListOptionsParams as SyncListOptionsParams,
    type SyncListTargetsParams as SyncListTargetsParams,
    type SyncReportOfflineActionParams as SyncReportOfflineActionParams,
    type SyncSyncDataParams as SyncSyncDataParams,
  };

  export {
    System as System,
    type WakeOnLanInfo as WakeOnLanInfo,
    type SystemRetrieveEndpointInfoResponse as SystemRetrieveEndpointInfoResponse,
    type SystemRetrieveWakeOnLanInfoResponse as SystemRetrieveWakeOnLanInfoResponse,
  };

  export {
    Ui as Ui,
    type UiViewInfo as UiViewInfo,
    type UiExecuteCommandParams as UiExecuteCommandParams,
    type UiRetrieveViewParams as UiRetrieveViewParams,
  };

  export {
    Users as Users,
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
    Videos as Videos,
    type VideoMergeVersionsParams as VideoMergeVersionsParams,
    type VideoRetrieveAdditionalPartsParams as VideoRetrieveAdditionalPartsParams,
    type VideoRetrieveHlsSegmentParams as VideoRetrieveHlsSegmentParams,
    type VideoRetrieveHlsSegment1Params as VideoRetrieveHlsSegment1Params,
    type VideoRetrieveIndexBifParams as VideoRetrieveIndexBifParams,
    type VideoRetrieveLiveStreamParams as VideoRetrieveLiveStreamParams,
    type VideoRetrieveLiveSubtitlesPlaylistParams as VideoRetrieveLiveSubtitlesPlaylistParams,
    type VideoRetrieveMainStreamParams as VideoRetrieveMainStreamParams,
    type VideoRetrieveMasterStreamParams as VideoRetrieveMasterStreamParams,
    type VideoRetrieveStreamParams as VideoRetrieveStreamParams,
    type VideoRetrieveSubtitlesPlaylistParams as VideoRetrieveSubtitlesPlaylistParams,
  };

  export {
    Web as Web,
    type Version as Version,
    type WebListConfigurationPagesResponse as WebListConfigurationPagesResponse,
    type WebRetrieveStringSetResponse as WebRetrieveStringSetResponse,
  };

  export {
    Albums as Albums,
    type AlbumCreateInstantMixParams as AlbumCreateInstantMixParams,
    type AlbumListSimilarParams as AlbumListSimilarParams,
  };

  export {
    Audio as Audio,
    type AudioRetrieveHlsSegmentParams as AudioRetrieveHlsSegmentParams,
    type AudioRetrieveHls1SegmentParams as AudioRetrieveHls1SegmentParams,
    type AudioRetrieveLiveStreamParams as AudioRetrieveLiveStreamParams,
    type AudioRetrieveMainStreamParams as AudioRetrieveMainStreamParams,
    type AudioRetrieveMasterStreamParams as AudioRetrieveMasterStreamParams,
    type AudioRetrieveStreamFileParams as AudioRetrieveStreamFileParams,
  };

  export { Games as Games, type GameFindSimilarParams as GameFindSimilarParams };

  export { Songs as Songs, type SongCreateInstantMixParams as SongCreateInstantMixParams };

  export { Providers as Providers };

  export {
    Libraries as Libraries,
    type ImageOption as ImageOption,
    type LibraryOptionInfo as LibraryOptionInfo,
    type LibraryListAvailableOptionsResponse as LibraryListAvailableOptionsResponse,
    type LibraryListPhysicalPathsResponse as LibraryListPhysicalPathsResponse,
    type LibraryListSelectableMediaFoldersResponse as LibraryListSelectableMediaFoldersResponse,
    type LibraryListMediaFoldersParams as LibraryListMediaFoldersParams,
  };
}
