# Artists

Types:

- <code><a href="./src/resources/artists/artists.ts">BaseItem</a></code>
- <code><a href="./src/resources/artists/artists.ts">LiveTvTimerType</a></code>
- <code><a href="./src/resources/artists/artists.ts">NameValuePair</a></code>
- <code><a href="./src/resources/artists/artists.ts">QueryResultBaseItem</a></code>
- <code><a href="./src/resources/artists/artists.ts">SyncJobItemStatus</a></code>
- <code><a href="./src/resources/artists/artists.ts">ArtistListPrefixesResponse</a></code>

Methods:

- <code title="get /Artists/{Name}">client.artists.<a href="./src/resources/artists/artists.ts">retrieve</a>(name, { ...params }) -> BaseItem</code>
- <code title="get /Artists">client.artists.<a href="./src/resources/artists/artists.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /Artists/InstantMix">client.artists.<a href="./src/resources/artists/artists.ts">createInstantMix</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /Artists/AlbumArtists">client.artists.<a href="./src/resources/artists/artists.ts">listAlbumArtists</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /Artists/Prefixes">client.artists.<a href="./src/resources/artists/artists.ts">listPrefixes</a>({ ...params }) -> ArtistListPrefixesResponse</code>
- <code title="get /Artists/{Id}/Similar">client.artists.<a href="./src/resources/artists/artists.ts">listSimilar</a>(id, { ...params }) -> QueryResultBaseItem</code>

## Images

Methods:

- <code title="get /Artists/{Name}/Images/{Type}">client.artists.images.<a href="./src/resources/artists/images.ts">listByType</a>(type, { ...params }) -> void</code>
- <code title="get /Artists/{Name}/Images/{Type}/{Index}">client.artists.images.<a href="./src/resources/artists/images.ts">retrieveByIndex</a>(index, { ...params }) -> void</code>

# AudioCodecs

Types:

- <code><a href="./src/resources/audio-codecs.ts">TagItem</a></code>

Methods:

- <code title="get /AudioCodecs">client.audioCodecs.<a href="./src/resources/audio-codecs.ts">list</a>({ ...params }) -> TagItem</code>

# AudioLayouts

Methods:

- <code title="get /AudioLayouts">client.audioLayouts.<a href="./src/resources/audio-layouts.ts">list</a>({ ...params }) -> TagItem</code>

# Channels

Methods:

- <code title="get /Channels">client.channels.<a href="./src/resources/channels.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>

# Collections

Types:

- <code><a href="./src/resources/collections/collections.ts">CollectionCreateResponse</a></code>

Methods:

- <code title="post /Collections">client.collections.<a href="./src/resources/collections/collections.ts">create</a>({ ...params }) -> CollectionCreateResponse</code>

## Items

Methods:

- <code title="post /Collections/{Id}/Items/Delete">client.collections.items.<a href="./src/resources/collections/items.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /Collections/{Id}/Items">client.collections.items.<a href="./src/resources/collections/items.ts">add</a>(id, { ...params }) -> void</code>
- <code title="delete /Collections/{Id}/Items">client.collections.items.<a href="./src/resources/collections/items.ts">remove</a>(id, { ...params }) -> void</code>

# Containers

Methods:

- <code title="get /Containers">client.containers.<a href="./src/resources/containers.ts">list</a>({ ...params }) -> TagItem</code>

# Devices

Types:

- <code><a href="./src/resources/devices/devices.ts">DeviceInfo</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /Devices">client.devices.<a href="./src/resources/devices/devices.ts">list</a>({ ...params }) -> DeviceListResponse</code>
- <code title="delete /Devices">client.devices.<a href="./src/resources/devices/devices.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /Devices/Delete">client.devices.<a href="./src/resources/devices/devices.ts">deleteDevice</a>({ ...params }) -> void</code>
- <code title="get /Devices/Info">client.devices.<a href="./src/resources/devices/devices.ts">retrieveInfo</a>({ ...params }) -> DeviceInfo</code>

## Options

Types:

- <code><a href="./src/resources/devices/options.ts">DeviceOptions</a></code>

Methods:

- <code title="get /Devices/Options">client.devices.options.<a href="./src/resources/devices/options.ts">retrieve</a>({ ...params }) -> DeviceOptions</code>
- <code title="post /Devices/Options">client.devices.options.<a href="./src/resources/devices/options.ts">update</a>({ ...params }) -> void</code>

## CameraUploads

Types:

- <code><a href="./src/resources/devices/camera-uploads.ts">CameraUploadListResponse</a></code>

Methods:

- <code title="get /Devices/CameraUploads">client.devices.cameraUploads.<a href="./src/resources/devices/camera-uploads.ts">list</a>() -> CameraUploadListResponse</code>
- <code title="post /Devices/CameraUploads">client.devices.cameraUploads.<a href="./src/resources/devices/camera-uploads.ts">upload</a>({ ...params }) -> void</code>

# ExtendedVideoTypes

Methods:

- <code title="get /ExtendedVideoTypes">client.extendedVideoTypes.<a href="./src/resources/extended-video-types.ts">list</a>({ ...params }) -> TagItem</code>

# Features

Types:

- <code><a href="./src/resources/features.ts">FeatureListResponse</a></code>

Methods:

- <code title="get /Features">client.features.<a href="./src/resources/features.ts">list</a>() -> FeatureListResponse</code>

# GameGenres

Methods:

- <code title="get /GameGenres/{Name}">client.gameGenres.<a href="./src/resources/game-genres/game-genres.ts">retrieve</a>(name, { ...params }) -> BaseItem</code>
- <code title="get /GameGenres">client.gameGenres.<a href="./src/resources/game-genres/game-genres.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>

## Images

Methods:

- <code title="get /GameGenres/{Name}/Images/{Type}/{Index}">client.gameGenres.images.<a href="./src/resources/game-genres/images.ts">retrieve</a>(index, { ...params }) -> void</code>
- <code title="get /GameGenres/{Name}/Images/{Type}">client.gameGenres.images.<a href="./src/resources/game-genres/images.ts">list</a>(type, { ...params }) -> void</code>

# Genres

Methods:

- <code title="get /Genres/{Name}">client.genres.<a href="./src/resources/genres/genres.ts">retrieve</a>(name, { ...params }) -> BaseItem</code>
- <code title="get /Genres">client.genres.<a href="./src/resources/genres/genres.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>

## Images

Methods:

- <code title="get /Genres/{Name}/Images/{Type}/{Index}">client.genres.images.<a href="./src/resources/genres/images.ts">retrieve</a>(index, { ...params }) -> void</code>
- <code title="get /Genres/{Name}/Images/{Type}">client.genres.images.<a href="./src/resources/genres/images.ts">list</a>(type, { ...params }) -> void</code>

# Items

Types:

- <code><a href="./src/resources/items/items.ts">ExternalIDInfo</a></code>
- <code><a href="./src/resources/items/items.ts">MetadataRefreshMode</a></code>
- <code><a href="./src/resources/items/items.ts">ThemeMediaResult</a></code>
- <code><a href="./src/resources/items/items.ts">UserItemShareLevel</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetAncestorsResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetCountsResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetDeleteInfoResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetExternalIDInfosResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetIntrosResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetMetadataEditorResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetThemeMediaResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemGetThumbnailSetResponse</a></code>
- <code><a href="./src/resources/items/items.ts">ItemListPrefixesResponse</a></code>

Methods:

- <code title="post /Items/{ItemId}">client.items.<a href="./src/resources/items/items.ts">update</a>(itemID, { ...params }) -> void</code>
- <code title="get /Items">client.items.<a href="./src/resources/items/items.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="post /Items/{Id}/Delete">client.items.<a href="./src/resources/items/items.ts">delete</a>(id) -> void</code>
- <code title="get /Items/{Id}/InstantMix">client.items.<a href="./src/resources/items/items.ts">createInstantMix</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="delete /Items">client.items.<a href="./src/resources/items/items.ts">deleteAll</a>({ ...params }) -> void</code>
- <code title="get /Items/{Id}/Download">client.items.<a href="./src/resources/items/items.ts">downloadMedia</a>(id) -> void</code>
- <code title="get /Items/{Id}/Ancestors">client.items.<a href="./src/resources/items/items.ts">getAncestors</a>(id, { ...params }) -> ItemGetAncestorsResponse</code>
- <code title="get /Items/Counts">client.items.<a href="./src/resources/items/items.ts">getCounts</a>({ ...params }) -> ItemGetCountsResponse</code>
- <code title="get /Items/{Id}/CriticReviews">client.items.<a href="./src/resources/items/items.ts">getCriticReviews</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Items/{Id}/DeleteInfo">client.items.<a href="./src/resources/items/items.ts">getDeleteInfo</a>(id) -> ItemGetDeleteInfoResponse</code>
- <code title="get /Items/{Id}/ExternalIdInfos">client.items.<a href="./src/resources/items/items.ts">getExternalIDInfos</a>(id) -> ItemGetExternalIDInfosResponse</code>
- <code title="get /Items/Intros">client.items.<a href="./src/resources/items/items.ts">getIntros</a>() -> ItemGetIntrosResponse</code>
- <code title="get /Items/{ItemId}/MetadataEditor">client.items.<a href="./src/resources/items/items.ts">getMetadataEditor</a>(itemID) -> ItemGetMetadataEditorResponse</code>
- <code title="get /Items/{Id}/File">client.items.<a href="./src/resources/items/items.ts">getOriginalFile</a>(id) -> void</code>
- <code title="get /Items/{Id}/Similar">client.items.<a href="./src/resources/items/items.ts">getSimilarItems</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Items/{Id}/ThemeMedia">client.items.<a href="./src/resources/items/items.ts">getThemeMedia</a>(id, { ...params }) -> ItemGetThemeMediaResponse</code>
- <code title="get /Items/{Id}/ThemeSongs">client.items.<a href="./src/resources/items/items.ts">getThemeSongs</a>(id, { ...params }) -> ThemeMediaResult</code>
- <code title="get /Items/{Id}/ThemeVideos">client.items.<a href="./src/resources/items/items.ts">getThemeVideos</a>(id, { ...params }) -> ThemeMediaResult</code>
- <code title="get /Items/{Id}/ThumbnailSet">client.items.<a href="./src/resources/items/items.ts">getThumbnailSet</a>(id, { ...params }) -> ItemGetThumbnailSetResponse</code>
- <code title="get /Items/Prefixes">client.items.<a href="./src/resources/items/items.ts">listPrefixes</a>({ ...params }) -> ItemListPrefixesResponse</code>
- <code title="post /Items/{Id}/MakePrivate">client.items.<a href="./src/resources/items/items.ts">makePrivate</a>(id) -> void</code>
- <code title="post /Items/{Id}/MakePublic">client.items.<a href="./src/resources/items/items.ts">makePublic</a>(id) -> void</code>
- <code title="post /Items/{Id}/Refresh">client.items.<a href="./src/resources/items/items.ts">refreshMetadata</a>(id, { ...params }) -> void</code>
- <code title="post /Items/Access">client.items.<a href="./src/resources/items/items.ts">updateAccess</a>({ ...params }) -> void</code>

## Images

Types:

- <code><a href="./src/resources/items/images.ts">ImageType</a></code>
- <code><a href="./src/resources/items/images.ts">ImageListResponse</a></code>

Methods:

- <code title="get /Items/{Id}/Images">client.items.images.<a href="./src/resources/items/images.ts">list</a>(id) -> ImageListResponse</code>
- <code title="post /Items/{Id}/Images/{Type}/Delete">client.items.images.<a href="./src/resources/items/images.ts">delete</a>(type, { ...params }) -> void</code>
- <code title="delete /Items/{Id}/Images/{Type}">client.items.images.<a href="./src/resources/items/images.ts">deleteByType</a>(type, { ...params }) -> void</code>
- <code title="post /Items/{Id}/Images/{Type}/{Index}/Delete">client.items.images.<a href="./src/resources/items/images.ts">deleteByTypeAndIndex</a>(index, { ...params }) -> void</code>
- <code title="get /Items/{Id}/Images/{Type}">client.items.images.<a href="./src/resources/items/images.ts">retrieveByType</a>(type, { ...params }) -> void</code>
- <code title="get /Items/{Id}/Images/{Type}/{Index}">client.items.images.<a href="./src/resources/items/images.ts">retrieveByTypeAndIndex</a>(index, { ...params }) -> void</code>
- <code title="get /Items/{Id}/Images/{Type}/{Index}/{Tag}/{Format}/{MaxWidth}/{MaxHeight}/{PercentPlayed}/{UnPlayedCount}">client.items.images.<a href="./src/resources/items/images.ts">retrieveDetailed</a>(unPlayedCount, { ...params }) -> void</code>
- <code title="post /Items/{Id}/Images/{Type}/{Index}/Index">client.items.images.<a href="./src/resources/items/images.ts">updateIndex</a>(index, { ...params }) -> void</code>
- <code title="post /Items/{Id}/Images/{Type}/{Index}/Url">client.items.images.<a href="./src/resources/items/images.ts">updateURL</a>(index, { ...params }) -> void</code>
- <code title="post /Items/{Id}/Images/{Type}">client.items.images.<a href="./src/resources/items/images.ts">upload</a>(type, { ...params }) -> void</code>
- <code title="post /Items/{Id}/Images/{Type}/{Index}">client.items.images.<a href="./src/resources/items/images.ts">uploadByTypeAndIndex</a>(index, { ...params }) -> void</code>

## RemoteSearch

Types:

- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchResult</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateBookResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateBoxSetResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateGameResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateMovieResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateMusicAlbumResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateMusicArtistResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateMusicVideoResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreatePersonResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateSeriesResponse</a></code>
- <code><a href="./src/resources/items/remote-search/remote-search.ts">RemoteSearchCreateTrailerResponse</a></code>

Methods:

- <code title="post /Items/RemoteSearch/Apply/{Id}">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">applySearch</a>(id, { ...params }) -> void</code>
- <code title="post /Items/RemoteSearch/Book">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createBook</a>({ ...params }) -> RemoteSearchCreateBookResponse</code>
- <code title="post /Items/RemoteSearch/BoxSet">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createBoxSet</a>({ ...params }) -> RemoteSearchCreateBoxSetResponse</code>
- <code title="post /Items/RemoteSearch/Game">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createGame</a>({ ...params }) -> RemoteSearchCreateGameResponse</code>
- <code title="post /Items/RemoteSearch/Movie">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createMovie</a>({ ...params }) -> RemoteSearchCreateMovieResponse</code>
- <code title="post /Items/RemoteSearch/MusicAlbum">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createMusicAlbum</a>({ ...params }) -> RemoteSearchCreateMusicAlbumResponse</code>
- <code title="post /Items/RemoteSearch/MusicArtist">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createMusicArtist</a>({ ...params }) -> RemoteSearchCreateMusicArtistResponse</code>
- <code title="post /Items/RemoteSearch/MusicVideo">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createMusicVideo</a>({ ...params }) -> RemoteSearchCreateMusicVideoResponse</code>
- <code title="post /Items/RemoteSearch/Person">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createPerson</a>({ ...params }) -> RemoteSearchCreatePersonResponse</code>
- <code title="post /Items/RemoteSearch/Series">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createSeries</a>({ ...params }) -> RemoteSearchCreateSeriesResponse</code>
- <code title="post /Items/RemoteSearch/Trailer">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">createTrailer</a>({ ...params }) -> RemoteSearchCreateTrailerResponse</code>
- <code title="get /Items/RemoteSearch/Image">client.items.remoteSearch.<a href="./src/resources/items/remote-search/remote-search.ts">retrieveImage</a>({ ...params }) -> void</code>

### Subtitles

Types:

- <code><a href="./src/resources/items/remote-search/subtitles.ts">SubtitleAddResponse</a></code>
- <code><a href="./src/resources/items/remote-search/subtitles.ts">SubtitleRetrieveByLanguageResponse</a></code>

Methods:

- <code title="post /Items/{Id}/RemoteSearch/Subtitles/{SubtitleId}">client.items.remoteSearch.subtitles.<a href="./src/resources/items/remote-search/subtitles.ts">add</a>(subtitleID, { ...params }) -> SubtitleAddResponse</code>
- <code title="get /Items/{Id}/RemoteSearch/Subtitles/{Language}">client.items.remoteSearch.subtitles.<a href="./src/resources/items/remote-search/subtitles.ts">retrieveByLanguage</a>(language, { ...params }) -> SubtitleRetrieveByLanguageResponse</code>

## Metadata

Methods:

- <code title="post /Items/Metadata/Reset">client.items.metadata.<a href="./src/resources/items/metadata.ts">reset</a>({ ...params }) -> void</code>

## Shared

Methods:

- <code title="post /Items/Shared/Leave">client.items.shared.<a href="./src/resources/items/shared.ts">leave</a>({ ...params }) -> void</code>

## RemoteImages

Types:

- <code><a href="./src/resources/items/remote-images.ts">RemoteImageRetrieveAllResponse</a></code>
- <code><a href="./src/resources/items/remote-images.ts">RemoteImageRetrieveProvidersResponse</a></code>

Methods:

- <code title="post /Items/{Id}/RemoteImages/Download">client.items.remoteImages.<a href="./src/resources/items/remote-images.ts">download</a>(id, { ...params }) -> void</code>
- <code title="get /Items/{Id}/RemoteImages">client.items.remoteImages.<a href="./src/resources/items/remote-images.ts">retrieveAll</a>(id, { ...params }) -> RemoteImageRetrieveAllResponse</code>
- <code title="get /Items/{Id}/RemoteImages/Providers">client.items.remoteImages.<a href="./src/resources/items/remote-images.ts">retrieveProviders</a>(id) -> RemoteImageRetrieveProvidersResponse</code>

## PlaybackInfo

Types:

- <code><a href="./src/resources/items/playback-info.ts">PlaybackInfo</a></code>

Methods:

- <code title="get /Items/{Id}/PlaybackInfo">client.items.playbackInfo.<a href="./src/resources/items/playback-info.ts">retrieve</a>(id, { ...params }) -> PlaybackInfo</code>
- <code title="post /Items/{Id}/PlaybackInfo">client.items.playbackInfo.<a href="./src/resources/items/playback-info.ts">update</a>(id, { ...params }) -> PlaybackInfo</code>

## Tags

Methods:

- <code title="post /Items/{Id}/Tags/Delete">client.items.tags.<a href="./src/resources/items/tags.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /Items/{Id}/Tags/Add">client.items.tags.<a href="./src/resources/items/tags.ts">add</a>(id, { ...params }) -> void</code>

## Subtitles

Methods:

- <code title="delete /Items/{Id}/Subtitles/{Index}">client.items.subtitles.<a href="./src/resources/items/subtitles.ts">delete</a>(index, { ...params }) -> void</code>
- <code title="post /Items/{Id}/Subtitles/{Index}/Delete">client.items.subtitles.<a href="./src/resources/items/subtitles.ts">deleteExternal</a>(index, { ...params }) -> void</code>
- <code title="get /Items/{Id}/{MediaSourceId}/Subtitles/{Index}/Stream.{Format}">client.items.subtitles.<a href="./src/resources/items/subtitles.ts">stream</a>(format, { ...params }) -> void</code>
- <code title="get /Items/{Id}/{MediaSourceId}/Subtitles/{Index}/{StartPositionTicks}/Stream.{Format}">client.items.subtitles.<a href="./src/resources/items/subtitles.ts">streamWithPosition</a>(format, { ...params }) -> void</code>

# ItemTypes

Methods:

- <code title="get /ItemTypes">client.itemTypes.<a href="./src/resources/item-types.ts">list</a>({ ...params }) -> TagItem</code>

# MusicGenres

Methods:

- <code title="get /MusicGenres/{Name}">client.musicGenres.<a href="./src/resources/music-genres/music-genres.ts">retrieve</a>(name, { ...params }) -> BaseItem</code>
- <code title="get /MusicGenres">client.musicGenres.<a href="./src/resources/music-genres/music-genres.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>

## InstantMix

Methods:

- <code title="get /MusicGenres/InstantMix">client.musicGenres.instantMix.<a href="./src/resources/music-genres/instant-mix.ts">create</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /MusicGenres/{Name}/InstantMix">client.musicGenres.instantMix.<a href="./src/resources/music-genres/instant-mix.ts">createForGenre</a>(name, { ...params }) -> QueryResultBaseItem</code>

## Images

Methods:

- <code title="get /MusicGenres/{Name}/Images/{Type}">client.musicGenres.images.<a href="./src/resources/music-genres/images.ts">retrieveByType</a>(type, { ...params }) -> void</code>
- <code title="get /MusicGenres/{Name}/Images/{Type}/{Index}">client.musicGenres.images.<a href="./src/resources/music-genres/images.ts">retrieveByTypeAndIndex</a>(index, { ...params }) -> void</code>

# OfficialRatings

Types:

- <code><a href="./src/resources/official-ratings.ts">OfficialRatingListResponse</a></code>

Methods:

- <code title="get /OfficialRatings">client.officialRatings.<a href="./src/resources/official-ratings.ts">list</a>({ ...params }) -> OfficialRatingListResponse</code>

# OpenAPI

Types:

- <code><a href="./src/resources/openapi.ts">OpenAPIRetrieveResponse</a></code>

Methods:

- <code title="get /openapi">client.openAPI.<a href="./src/resources/openapi.ts">retrieve</a>() -> string</code>

# OpenAPIJson

Types:

- <code><a href="./src/resources/openapi-json.ts">OpenAPIJsonRetrieveResponse</a></code>

Methods:

- <code title="get /openapi.json">client.openAPIJson.<a href="./src/resources/openapi-json.ts">retrieve</a>() -> string</code>

# Packages

Types:

- <code><a href="./src/resources/packages/packages.ts">PackageInfo</a></code>
- <code><a href="./src/resources/packages/packages.ts">PackageVersion</a></code>
- <code><a href="./src/resources/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/packages/packages.ts">PackageListUpdatesResponse</a></code>

Methods:

- <code title="get /Packages/{Name}">client.packages.<a href="./src/resources/packages/packages.ts">retrieve</a>(name, { ...params }) -> PackageInfo</code>
- <code title="get /Packages">client.packages.<a href="./src/resources/packages/packages.ts">list</a>({ ...params }) -> PackageListResponse</code>
- <code title="post /Packages/Installed/{Name}">client.packages.<a href="./src/resources/packages/packages.ts">install</a>(name, { ...params }) -> void</code>
- <code title="get /Packages/Updates">client.packages.<a href="./src/resources/packages/packages.ts">listUpdates</a>({ ...params }) -> PackageListUpdatesResponse</code>

## Installing

Methods:

- <code title="delete /Packages/Installing/{Id}">client.packages.installing.<a href="./src/resources/packages/installing.ts">cancel</a>(id) -> void</code>
- <code title="post /Packages/Installing/{Id}/Delete">client.packages.installing.<a href="./src/resources/packages/installing.ts">cancelInstallation</a>(id) -> void</code>

# Persons

Methods:

- <code title="get /Persons/{Name}">client.persons.<a href="./src/resources/persons/persons.ts">retrieve</a>(name, { ...params }) -> BaseItem</code>
- <code title="get /Persons">client.persons.<a href="./src/resources/persons/persons.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>

## Images

Methods:

- <code title="get /Persons/{Name}/Images/{Type}/{Index}">client.persons.images.<a href="./src/resources/persons/images.ts">retrieve</a>(index, { ...params }) -> void</code>
- <code title="get /Persons/{Name}/Images/{Type}">client.persons.images.<a href="./src/resources/persons/images.ts">list</a>(type, { ...params }) -> void</code>

# Playlists

Types:

- <code><a href="./src/resources/playlists/playlists.ts">PlaylistCreateResponse</a></code>
- <code><a href="./src/resources/playlists/playlists.ts">PlaylistRetrieveAddToPlaylistInfoResponse</a></code>

Methods:

- <code title="post /Playlists">client.playlists.<a href="./src/resources/playlists/playlists.ts">create</a>({ ...params }) -> PlaylistCreateResponse</code>
- <code title="get /Playlists/{Id}/InstantMix">client.playlists.<a href="./src/resources/playlists/playlists.ts">createInstantMix</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Playlists/{Id}/AddToPlaylistInfo">client.playlists.<a href="./src/resources/playlists/playlists.ts">retrieveAddToPlaylistInfo</a>(id, { ...params }) -> unknown</code>

## Items

Types:

- <code><a href="./src/resources/playlists/items.ts">ItemAddResponse</a></code>

Methods:

- <code title="get /Playlists/{Id}/Items">client.playlists.items.<a href="./src/resources/playlists/items.ts">list</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="post /Playlists/{Id}/Items/Delete">client.playlists.items.<a href="./src/resources/playlists/items.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /Playlists/{Id}/Items">client.playlists.items.<a href="./src/resources/playlists/items.ts">add</a>(id, { ...params }) -> ItemAddResponse</code>
- <code title="post /Playlists/{Id}/Items/{ItemId}/Move/{NewIndex}">client.playlists.items.<a href="./src/resources/playlists/items.ts">move</a>(newIndex, { ...params }) -> void</code>
- <code title="delete /Playlists/{Id}/Items">client.playlists.items.<a href="./src/resources/playlists/items.ts">remove</a>(id, { ...params }) -> void</code>

# Plugins

Types:

- <code><a href="./src/resources/plugins/plugins.ts">PluginListResponse</a></code>

Methods:

- <code title="get /Plugins">client.plugins.<a href="./src/resources/plugins/plugins.ts">list</a>() -> PluginListResponse</code>
- <code title="delete /Plugins/{Id}">client.plugins.<a href="./src/resources/plugins/plugins.ts">delete</a>(id) -> void</code>
- <code title="get /Plugins/{Id}/Thumb">client.plugins.<a href="./src/resources/plugins/plugins.ts">retrieveThumb</a>(id) -> void</code>
- <code title="post /Plugins/{Id}/Delete">client.plugins.<a href="./src/resources/plugins/plugins.ts">uninstall</a>(id) -> void</code>

## Configuration

Methods:

- <code title="get /Plugins/{Id}/Configuration">client.plugins.configuration.<a href="./src/resources/plugins/configuration.ts">retrieve</a>(id) -> void</code>
- <code title="post /Plugins/{Id}/Configuration">client.plugins.configuration.<a href="./src/resources/plugins/configuration.ts">update</a>(id, { ...params }) -> void</code>

# ScheduledTasks

Types:

- <code><a href="./src/resources/scheduled-tasks/scheduled-tasks.ts">DayOfWeek</a></code>
- <code><a href="./src/resources/scheduled-tasks/scheduled-tasks.ts">TaskInfo</a></code>
- <code><a href="./src/resources/scheduled-tasks/scheduled-tasks.ts">TaskTriggerInfo</a></code>
- <code><a href="./src/resources/scheduled-tasks/scheduled-tasks.ts">ScheduledTaskListResponse</a></code>

Methods:

- <code title="get /ScheduledTasks/{Id}">client.scheduledTasks.<a href="./src/resources/scheduled-tasks/scheduled-tasks.ts">retrieve</a>(id) -> TaskInfo</code>
- <code title="get /ScheduledTasks">client.scheduledTasks.<a href="./src/resources/scheduled-tasks/scheduled-tasks.ts">list</a>({ ...params }) -> ScheduledTaskListResponse</code>
- <code title="post /ScheduledTasks/{Id}/Triggers">client.scheduledTasks.<a href="./src/resources/scheduled-tasks/scheduled-tasks.ts">updateTriggers</a>(id, [ ...body ]) -> void</code>

## Running

Methods:

- <code title="post /ScheduledTasks/Running/{Id}/Delete">client.scheduledTasks.running.<a href="./src/resources/scheduled-tasks/running.ts">forceStop</a>(id) -> void</code>
- <code title="post /ScheduledTasks/Running/{Id}">client.scheduledTasks.running.<a href="./src/resources/scheduled-tasks/running.ts">start</a>(id) -> void</code>
- <code title="delete /ScheduledTasks/Running/{Id}">client.scheduledTasks.running.<a href="./src/resources/scheduled-tasks/running.ts">stop</a>(id) -> void</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions/sessions.ts">SessionInfo</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">VpStepInfo</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionListResponse</a></code>

Methods:

- <code title="get /Sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">list</a>({ ...params }) -> SessionListResponse</code>
- <code title="get /Sessions/PlayQueue">client.sessions.<a href="./src/resources/sessions/sessions.ts">getPlayQueue</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="post /Sessions/{Id}/System/{Command}">client.sessions.<a href="./src/resources/sessions/sessions.ts">issueSystemCommand</a>(command, { ...params }) -> void</code>
- <code title="post /Sessions/Logout">client.sessions.<a href="./src/resources/sessions/sessions.ts">logout</a>() -> void</code>
- <code title="post /Sessions/{Id}/Message">client.sessions.<a href="./src/resources/sessions/sessions.ts">sendMessage</a>(id, { ...params }) -> void</code>
- <code title="post /Sessions/{Id}/Viewing">client.sessions.<a href="./src/resources/sessions/sessions.ts">viewItem</a>(id, { ...params }) -> void</code>

## Capabilities

Methods:

- <code title="post /Sessions/Capabilities">client.sessions.capabilities.<a href="./src/resources/sessions/capabilities.ts">update</a>({ ...params }) -> void</code>
- <code title="post /Sessions/Capabilities/Full">client.sessions.capabilities.<a href="./src/resources/sessions/capabilities.ts">updateFull</a>({ ...params }) -> void</code>

## Playing

Types:

- <code><a href="./src/resources/sessions/playing.ts">PlaystateCommand</a></code>
- <code><a href="./src/resources/sessions/playing.ts">ProgressEvent</a></code>
- <code><a href="./src/resources/sessions/playing.ts">QueueItem</a></code>

Methods:

- <code title="post /Sessions/{Id}/Playing/{Command}">client.sessions.playing.<a href="./src/resources/sessions/playing.ts">issuePlaystateCommand</a>(command, { ...params }) -> void</code>
- <code title="post /Sessions/Playing/Ping">client.sessions.playing.<a href="./src/resources/sessions/playing.ts">ping</a>({ ...params }) -> void</code>
- <code title="post /Sessions/{Id}/Playing">client.sessions.playing.<a href="./src/resources/sessions/playing.ts">playItem</a>(id, { ...params }) -> void</code>
- <code title="post /Sessions/Playing/Progress">client.sessions.playing.<a href="./src/resources/sessions/playing.ts">reportProgress</a>({ ...params }) -> void</code>
- <code title="post /Sessions/Playing">client.sessions.playing.<a href="./src/resources/sessions/playing.ts">reportStarted</a>({ ...params }) -> void</code>
- <code title="post /Sessions/Playing/Stopped">client.sessions.playing.<a href="./src/resources/sessions/playing.ts">reportStopped</a>({ ...params }) -> void</code>

## Command

Methods:

- <code title="post /Sessions/{Id}/Command">client.sessions.command.<a href="./src/resources/sessions/command.ts">issueCommand</a>(id, { ...params }) -> void</code>
- <code title="post /Sessions/{Id}/Command/{Command}">client.sessions.command.<a href="./src/resources/sessions/command.ts">issueSpecificCommand</a>(command, { ...params }) -> void</code>

## Users

Methods:

- <code title="post /Sessions/{Id}/Users/{UserId}">client.sessions.users.<a href="./src/resources/sessions/users.ts">addUser</a>(userID, { ...params }) -> void</code>
- <code title="post /Sessions/{Id}/Users/{UserId}/Delete">client.sessions.users.<a href="./src/resources/sessions/users.ts">deleteUser</a>(userID, { ...params }) -> void</code>
- <code title="delete /Sessions/{Id}/Users/{UserId}">client.sessions.users.<a href="./src/resources/sessions/users.ts">removeUser</a>(userID, { ...params }) -> void</code>

# StreamLanguages

Methods:

- <code title="get /StreamLanguages">client.streamLanguages.<a href="./src/resources/stream-languages.ts">list</a>({ ...params }) -> TagItem</code>

# Studios

Methods:

- <code title="get /Studios/{Name}">client.studios.<a href="./src/resources/studios/studios.ts">retrieve</a>(name, { ...params }) -> BaseItem</code>
- <code title="get /Studios">client.studios.<a href="./src/resources/studios/studios.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>

## Images

Methods:

- <code title="get /Studios/{Name}/Images/{Type}/{Index}">client.studios.images.<a href="./src/resources/studios/images.ts">retrieve</a>(index, { ...params }) -> void</code>
- <code title="get /Studios/{Name}/Images/{Type}">client.studios.images.<a href="./src/resources/studios/images.ts">list</a>(type, { ...params }) -> void</code>

# SubtitleCodecs

Methods:

- <code title="get /SubtitleCodecs">client.subtitleCodecs.<a href="./src/resources/subtitle-codecs.ts">list</a>({ ...params }) -> TagItem</code>

# Swagger

Types:

- <code><a href="./src/resources/swagger.ts">SwaggerRetrieveResponse</a></code>

Methods:

- <code title="get /swagger">client.swagger.<a href="./src/resources/swagger.ts">retrieve</a>() -> string</code>

# SwaggerJson

Types:

- <code><a href="./src/resources/swagger-json.ts">SwaggerJsonRetrieveResponse</a></code>

Methods:

- <code title="get /swagger.json">client.swaggerJson.<a href="./src/resources/swagger-json.ts">retrieve</a>() -> string</code>

# Tags

Methods:

- <code title="get /Tags">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagItem</code>

# Trailers

Methods:

- <code title="get /Trailers">client.trailers.<a href="./src/resources/trailers.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /Trailers/{Id}/Similar">client.trailers.<a href="./src/resources/trailers.ts">retrieveSimilar</a>(id, { ...params }) -> QueryResultBaseItem</code>

# VideoCodecs

Methods:

- <code title="get /VideoCodecs">client.videoCodecs.<a href="./src/resources/video-codecs.ts">list</a>({ ...params }) -> TagItem</code>

# AudioBooks

Methods:

- <code title="get /AudioBooks/NextUp">client.audioBooks.<a href="./src/resources/audio-books.ts">listNextUp</a>({ ...params }) -> QueryResultBaseItem</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">NameIDPair</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthListProvidersResponse</a></code>

Methods:

- <code title="get /Auth/Providers">client.auth.<a href="./src/resources/auth/auth.ts">listProviders</a>() -> AuthListProvidersResponse</code>

## Keys

Methods:

- <code title="post /Auth/Keys">client.auth.keys.<a href="./src/resources/auth/keys.ts">create</a>({ ...params }) -> void</code>
- <code title="get /Auth/Keys">client.auth.keys.<a href="./src/resources/auth/keys.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /Auth/Keys/{Key}">client.auth.keys.<a href="./src/resources/auth/keys.ts">delete</a>(key) -> void</code>
- <code title="post /Auth/Keys/{Key}/Delete">client.auth.keys.<a href="./src/resources/auth/keys.ts">forceDelete</a>(key) -> void</code>

# BackupRestore

Types:

- <code><a href="./src/resources/backup-restore.ts">BackupInfo</a></code>
- <code><a href="./src/resources/backup-restore.ts">BackupRestoreBackupInfoResponse</a></code>

Methods:

- <code title="get /BackupRestore/BackupInfo">client.backupRestore.<a href="./src/resources/backup-restore.ts">backupInfo</a>() -> BackupRestoreBackupInfoResponse</code>
- <code title="post /BackupRestore/Restore">client.backupRestore.<a href="./src/resources/backup-restore.ts">restore</a>({ ...params }) -> void</code>
- <code title="post /BackupRestore/RestoreData">client.backupRestore.<a href="./src/resources/backup-restore.ts">restoreData</a>({ ...params }) -> void</code>

# Branding

Types:

- <code><a href="./src/resources/branding.ts">BrandingRetrieveConfigurationResponse</a></code>

Methods:

- <code title="get /Branding/Configuration">client.branding.<a href="./src/resources/branding.ts">retrieveConfiguration</a>() -> BrandingRetrieveConfigurationResponse</code>
- <code title="get /Branding/Css">client.branding.<a href="./src/resources/branding.ts">retrieveCss</a>() -> void</code>
- <code title="get /Branding/Css.css">client.branding.<a href="./src/resources/branding.ts">retrieveCssFile</a>() -> void</code>

# Connect

Types:

- <code><a href="./src/resources/connect.ts">ConnectRetrieveExchangeResponse</a></code>

Methods:

- <code title="get /Connect/Pending">client.connect.<a href="./src/resources/connect.ts">listPending</a>() -> void</code>
- <code title="get /Connect/Exchange">client.connect.<a href="./src/resources/connect.ts">retrieveExchange</a>({ ...params }) -> ConnectRetrieveExchangeResponse</code>

# DisplayPreferences

Types:

- <code><a href="./src/resources/display-preferences.ts">DisplayPreference</a></code>

Methods:

- <code title="get /DisplayPreferences/{Id}">client.displayPreferences.<a href="./src/resources/display-preferences.ts">retrieve</a>(id, { ...params }) -> DisplayPreference</code>
- <code title="post /DisplayPreferences/{DisplayPreferencesId}">client.displayPreferences.<a href="./src/resources/display-preferences.ts">update</a>(displayPreferencesID, { ...params }) -> void</code>

# Dlna

Types:

- <code><a href="./src/resources/dlna/dlna.ts">DlnaListProfilesResponse</a></code>

Methods:

- <code title="get /Dlna/ProfileInfos">client.dlna.<a href="./src/resources/dlna/dlna.ts">listProfiles</a>() -> DlnaListProfilesResponse</code>
- <code title="get /Dlna/{UuId}/description">client.dlna.<a href="./src/resources/dlna/dlna.ts">retrieveDescription</a>(uuID) -> void</code>
- <code title="get /Dlna/{UuId}/description.xml">client.dlna.<a href="./src/resources/dlna/dlna.ts">retrieveDescriptionXml</a>(uuID) -> void</code>

## Profiles

Types:

- <code><a href="./src/resources/dlna/profiles.ts">CodecProfile</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">ContainerProfile</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">DirectPlayProfile</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">DlnaProfile</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">DlnaProfileType</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">ProfileCondition</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">ResponseProfile</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">SubtitleProfile</a></code>
- <code><a href="./src/resources/dlna/profiles.ts">TranscodingProfile</a></code>

Methods:

- <code title="post /Dlna/Profiles">client.dlna.profiles.<a href="./src/resources/dlna/profiles.ts">create</a>({ ...params }) -> void</code>
- <code title="get /Dlna/Profiles/{Id}">client.dlna.profiles.<a href="./src/resources/dlna/profiles.ts">retrieve</a>(id) -> DlnaProfile</code>
- <code title="post /Dlna/Profiles/{Id}">client.dlna.profiles.<a href="./src/resources/dlna/profiles.ts">update</a>(id, { ...params }) -> void</code>
- <code title="delete /Dlna/Profiles/{Id}">client.dlna.profiles.<a href="./src/resources/dlna/profiles.ts">delete</a>(id) -> void</code>
- <code title="get /Dlna/Profiles/Default">client.dlna.profiles.<a href="./src/resources/dlna/profiles.ts">retrieveDefault</a>() -> DlnaProfile</code>

## Icons

Methods:

- <code title="get /Dlna/icons/{Filename}">client.dlna.icons.<a href="./src/resources/dlna/icons.ts">retrieve</a>(filename, { ...params }) -> void</code>
- <code title="get /Dlna/{UuId}/icons/{Filename}">client.dlna.icons.<a href="./src/resources/dlna/icons.ts">retrieveForServer</a>(filename, { ...params }) -> void</code>

## Contentdirectory

Methods:

- <code title="get /Dlna/{UuId}/contentdirectory/contentdirectory">client.dlna.contentdirectory.<a href="./src/resources/dlna/contentdirectory.ts">retrieve</a>(uuID) -> void</code>
- <code title="post /Dlna/{UuId}/contentdirectory/control">client.dlna.contentdirectory.<a href="./src/resources/dlna/contentdirectory.ts">processControl</a>(uuID, { ...params }) -> void</code>
- <code title="get /Dlna/{UuId}/contentdirectory/contentdirectory.xml">client.dlna.contentdirectory.<a href="./src/resources/dlna/contentdirectory.ts">retrieveXml</a>(uuID) -> void</code>

## Connectionmanager

Methods:

- <code title="get /Dlna/{UuId}/connectionmanager/connectionmanager">client.dlna.connectionmanager.<a href="./src/resources/dlna/connectionmanager.ts">retrieve</a>(uuID) -> void</code>
- <code title="post /Dlna/{UuId}/connectionmanager/control">client.dlna.connectionmanager.<a href="./src/resources/dlna/connectionmanager.ts">processControl</a>(uuID, { ...params }) -> void</code>
- <code title="get /Dlna/{UuId}/connectionmanager/connectionmanager.xml">client.dlna.connectionmanager.<a href="./src/resources/dlna/connectionmanager.ts">retrieveXml</a>(uuID) -> void</code>

# Encoding

Types:

- <code><a href="./src/resources/encoding/encoding.ts">EncodingGetCodecConfigurationDefaultsResponse</a></code>
- <code><a href="./src/resources/encoding/encoding.ts">EncodingGetCodecInformationVideoResponse</a></code>
- <code><a href="./src/resources/encoding/encoding.ts">EncodingGetToneMapOptionsResponse</a></code>

Methods:

- <code title="get /Encoding/CodecConfiguration/Defaults">client.encoding.<a href="./src/resources/encoding/encoding.ts">getCodecConfigurationDefaults</a>() -> EncodingGetCodecConfigurationDefaultsResponse</code>
- <code title="get /Encoding/CodecInformation/Video">client.encoding.<a href="./src/resources/encoding/encoding.ts">getCodecInformationVideo</a>() -> EncodingGetCodecInformationVideoResponse</code>
- <code title="get /Encoding/CodecParameters">client.encoding.<a href="./src/resources/encoding/encoding.ts">getCodecParameters</a>({ ...params }) -> EditObjectContainer</code>
- <code title="get /Encoding/FfmpegOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">getFfmpegOptions</a>() -> EditObjectContainer</code>
- <code title="get /Encoding/FullToneMapOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">getFullToneMapOptions</a>() -> EditObjectContainer</code>
- <code title="get /Encoding/PublicToneMapOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">getPublicToneMapOptions</a>() -> EditObjectContainer</code>
- <code title="get /Encoding/SubtitleOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">getSubtitleOptions</a>() -> EditObjectContainer</code>
- <code title="get /Encoding/ToneMapOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">getToneMapOptions</a>() -> EncodingGetToneMapOptionsResponse</code>
- <code title="post /Encoding/CodecParameters">client.encoding.<a href="./src/resources/encoding/encoding.ts">updateCodecParameters</a>({ ...params }) -> void</code>
- <code title="post /Encoding/FfmpegOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">updateFfmpegOptions</a>({ ...params }) -> void</code>
- <code title="post /Encoding/FullToneMapOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">updateFullToneMapOptions</a>({ ...params }) -> void</code>
- <code title="post /Encoding/PublicToneMapOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">updatePublicToneMapOptions</a>({ ...params }) -> void</code>
- <code title="post /Encoding/SubtitleOptions">client.encoding.<a href="./src/resources/encoding/encoding.ts">updateSubtitleOptions</a>({ ...params }) -> void</code>

## FullToneMapOptions

Types:

- <code><a href="./src/resources/encoding/full-tone-map-options.ts">EditObjectContainer</a></code>
- <code><a href="./src/resources/encoding/full-tone-map-options.ts">EditorTypes</a></code>

## CodecParameters

Types:

- <code><a href="./src/resources/encoding/codec-parameters.ts">CodecParameterContext</a></code>

## CodecInformation

Types:

- <code><a href="./src/resources/encoding/codec-information.ts">BitRate</a></code>
- <code><a href="./src/resources/encoding/codec-information.ts">SecondaryFrameworks</a></code>

# Environment

Types:

- <code><a href="./src/resources/environment/environment.ts">EnvironmentDefaultDirectoryBrowserResponse</a></code>
- <code><a href="./src/resources/environment/environment.ts">EnvironmentDrivesResponse</a></code>
- <code><a href="./src/resources/environment/environment.ts">EnvironmentNetworkDevicesResponse</a></code>
- <code><a href="./src/resources/environment/environment.ts">EnvironmentNetworkSharesResponse</a></code>
- <code><a href="./src/resources/environment/environment.ts">EnvironmentParentPathResponse</a></code>

Methods:

- <code title="get /Environment/DefaultDirectoryBrowser">client.environment.<a href="./src/resources/environment/environment.ts">defaultDirectoryBrowser</a>() -> EnvironmentDefaultDirectoryBrowserResponse</code>
- <code title="get /Environment/Drives">client.environment.<a href="./src/resources/environment/environment.ts">drives</a>() -> EnvironmentDrivesResponse</code>
- <code title="get /Environment/NetworkDevices">client.environment.<a href="./src/resources/environment/environment.ts">networkDevices</a>() -> EnvironmentNetworkDevicesResponse</code>
- <code title="get /Environment/NetworkShares">client.environment.<a href="./src/resources/environment/environment.ts">networkShares</a>({ ...params }) -> EnvironmentNetworkSharesResponse</code>
- <code title="get /Environment/ParentPath">client.environment.<a href="./src/resources/environment/environment.ts">parentPath</a>({ ...params }) -> string</code>
- <code title="post /Environment/ValidatePath">client.environment.<a href="./src/resources/environment/environment.ts">validatePath</a>({ ...params }) -> void</code>

## DirectoryContents

Types:

- <code><a href="./src/resources/environment/directory-contents.ts">FileSystemEntryInfo</a></code>
- <code><a href="./src/resources/environment/directory-contents.ts">DirectoryContentCreateResponse</a></code>
- <code><a href="./src/resources/environment/directory-contents.ts">DirectoryContentListResponse</a></code>

Methods:

- <code title="post /Environment/DirectoryContents">client.environment.directoryContents.<a href="./src/resources/environment/directory-contents.ts">create</a>({ ...params }) -> DirectoryContentCreateResponse</code>
- <code title="get /Environment/DirectoryContents">client.environment.directoryContents.<a href="./src/resources/environment/directory-contents.ts">list</a>({ ...params }) -> DirectoryContentListResponse</code>

# Images

Methods:

- <code title="get /Images/Remote">client.images.<a href="./src/resources/images.ts">retrieveRemote</a>({ ...params }) -> void</code>

# LiveStreams

Types:

- <code><a href="./src/resources/live-streams.ts">DeviceProfile</a></code>
- <code><a href="./src/resources/live-streams.ts">MediaProtocol</a></code>
- <code><a href="./src/resources/live-streams.ts">MediaSourceInfo</a></code>
- <code><a href="./src/resources/live-streams.ts">LiveStreamOpenResponse</a></code>

Methods:

- <code title="post /LiveStreams/Close">client.liveStreams.<a href="./src/resources/live-streams.ts">close</a>({ ...params }) -> void</code>
- <code title="post /LiveStreams/MediaInfo">client.liveStreams.<a href="./src/resources/live-streams.ts">getMediaInfo</a>({ ...params }) -> void</code>
- <code title="post /LiveStreams/Open">client.liveStreams.<a href="./src/resources/live-streams.ts">open</a>({ ...params }) -> LiveStreamOpenResponse</code>

# LiveTv

Types:

- <code><a href="./src/resources/live-tv/live-tv.ts">ChannelType</a></code>
- <code><a href="./src/resources/live-tv/live-tv.ts">NameIDDescriptionPair</a></code>
- <code><a href="./src/resources/live-tv/live-tv.ts">LiveTvListAvailableRecordingOptionsResponse</a></code>
- <code><a href="./src/resources/live-tv/live-tv.ts">LiveTvRetrieveEpgResponse</a></code>
- <code><a href="./src/resources/live-tv/live-tv.ts">LiveTvRetrieveGuideInfoResponse</a></code>
- <code><a href="./src/resources/live-tv/live-tv.ts">LiveTvRetrieveInfoResponse</a></code>

Methods:

- <code title="get /LiveTv/AvailableRecordingOptions">client.liveTv.<a href="./src/resources/live-tv/live-tv.ts">listAvailableRecordingOptions</a>() -> LiveTvListAvailableRecordingOptionsResponse</code>
- <code title="get /LiveTv/EPG">client.liveTv.<a href="./src/resources/live-tv/live-tv.ts">retrieveEpg</a>({ ...params }) -> LiveTvRetrieveEpgResponse</code>
- <code title="get /LiveTv/Folder">client.liveTv.<a href="./src/resources/live-tv/live-tv.ts">retrieveFolder</a>() -> BaseItem</code>
- <code title="get /LiveTv/GuideInfo">client.liveTv.<a href="./src/resources/live-tv/live-tv.ts">retrieveGuideInfo</a>() -> LiveTvRetrieveGuideInfoResponse</code>
- <code title="get /LiveTv/Info">client.liveTv.<a href="./src/resources/live-tv/live-tv.ts">retrieveInfo</a>() -> LiveTvRetrieveInfoResponse</code>

## ChannelTags

Types:

- <code><a href="./src/resources/live-tv/channel-tags.ts">ChannelTagListPrefixesResponse</a></code>

Methods:

- <code title="get /LiveTv/ChannelTags">client.liveTv.channelTags.<a href="./src/resources/live-tv/channel-tags.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /LiveTv/ChannelTags/Prefixes">client.liveTv.channelTags.<a href="./src/resources/live-tv/channel-tags.ts">listPrefixes</a>({ ...params }) -> ChannelTagListPrefixesResponse</code>

## ChannelMappings

Types:

- <code><a href="./src/resources/live-tv/channel-mappings.ts">SetChannelMapping</a></code>

Methods:

- <code title="post /LiveTv/ChannelMappings">client.liveTv.channelMappings.<a href="./src/resources/live-tv/channel-mappings.ts">create</a>({ ...params }) -> void</code>
- <code title="put /LiveTv/ChannelMappings">client.liveTv.channelMappings.<a href="./src/resources/live-tv/channel-mappings.ts">update</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/ChannelMappings">client.liveTv.channelMappings.<a href="./src/resources/live-tv/channel-mappings.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /LiveTv/ChannelMappings">client.liveTv.channelMappings.<a href="./src/resources/live-tv/channel-mappings.ts">delete</a>({ ...params }) -> void</code>

## ChannelMappingOptions

Methods:

- <code title="post /LiveTv/ChannelMappingOptions">client.liveTv.channelMappingOptions.<a href="./src/resources/live-tv/channel-mapping-options.ts">create</a>({ ...params }) -> void</code>
- <code title="put /LiveTv/ChannelMappingOptions">client.liveTv.channelMappingOptions.<a href="./src/resources/live-tv/channel-mapping-options.ts">update</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/ChannelMappingOptions">client.liveTv.channelMappingOptions.<a href="./src/resources/live-tv/channel-mapping-options.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /LiveTv/ChannelMappingOptions">client.liveTv.channelMappingOptions.<a href="./src/resources/live-tv/channel-mapping-options.ts">delete</a>({ ...params }) -> void</code>

## ListingProviders

Types:

- <code><a href="./src/resources/live-tv/listing-providers/listing-providers.ts">ListingsProviderInfo</a></code>
- <code><a href="./src/resources/live-tv/listing-providers/listing-providers.ts">ListingProviderListResponse</a></code>
- <code><a href="./src/resources/live-tv/listing-providers/listing-providers.ts">ListingProviderListAvailableResponse</a></code>
- <code><a href="./src/resources/live-tv/listing-providers/listing-providers.ts">ListingProviderListLineupsResponse</a></code>

Methods:

- <code title="post /LiveTv/ListingProviders">client.liveTv.listingProviders.<a href="./src/resources/live-tv/listing-providers/listing-providers.ts">create</a>({ ...params }) -> ListingsProviderInfo</code>
- <code title="get /LiveTv/ListingProviders">client.liveTv.listingProviders.<a href="./src/resources/live-tv/listing-providers/listing-providers.ts">list</a>({ ...params }) -> ListingProviderListResponse</code>
- <code title="delete /LiveTv/ListingProviders">client.liveTv.listingProviders.<a href="./src/resources/live-tv/listing-providers/listing-providers.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /LiveTv/ListingProviders/Delete">client.liveTv.listingProviders.<a href="./src/resources/live-tv/listing-providers/listing-providers.ts">deleteProvider</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/ListingProviders/Available">client.liveTv.listingProviders.<a href="./src/resources/live-tv/listing-providers/listing-providers.ts">listAvailable</a>() -> ListingProviderListAvailableResponse</code>
- <code title="get /LiveTv/ListingProviders/Lineups">client.liveTv.listingProviders.<a href="./src/resources/live-tv/listing-providers/listing-providers.ts">listLineups</a>({ ...params }) -> ListingProviderListLineupsResponse</code>
- <code title="get /LiveTv/ListingProviders/Default">client.liveTv.listingProviders.<a href="./src/resources/live-tv/listing-providers/listing-providers.ts">retrieveDefault</a>() -> ListingsProviderInfo</code>

### SchedulesDirect

Methods:

- <code title="get /LiveTv/ListingProviders/SchedulesDirect/Countries">client.liveTv.listingProviders.schedulesDirect.<a href="./src/resources/live-tv/listing-providers/schedules-direct.ts">listCountries</a>() -> void</code>

## TunerHosts

Types:

- <code><a href="./src/resources/live-tv/tuner-hosts.ts">TunerHostInfo</a></code>
- <code><a href="./src/resources/live-tv/tuner-hosts.ts">TunerHostListResponse</a></code>
- <code><a href="./src/resources/live-tv/tuner-hosts.ts">TunerHostListTypesResponse</a></code>

Methods:

- <code title="post /LiveTv/TunerHosts">client.liveTv.tunerHosts.<a href="./src/resources/live-tv/tuner-hosts.ts">create</a>({ ...params }) -> TunerHostInfo</code>
- <code title="get /LiveTv/TunerHosts">client.liveTv.tunerHosts.<a href="./src/resources/live-tv/tuner-hosts.ts">list</a>() -> TunerHostListResponse</code>
- <code title="post /LiveTv/TunerHosts/Delete">client.liveTv.tunerHosts.<a href="./src/resources/live-tv/tuner-hosts.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/TunerHosts/Default/{Type}">client.liveTv.tunerHosts.<a href="./src/resources/live-tv/tuner-hosts.ts">getDefault</a>(type) -> TunerHostInfo</code>
- <code title="get /LiveTv/TunerHosts/Types">client.liveTv.tunerHosts.<a href="./src/resources/live-tv/tuner-hosts.ts">listTypes</a>() -> TunerHostListTypesResponse</code>

## Channels

Methods:

- <code title="get /LiveTv/Channels/{Id}">client.liveTv.channels.<a href="./src/resources/live-tv/channels.ts">retrieve</a>(id, { ...params }) -> BaseItem</code>
- <code title="get /LiveTv/Channels">client.liveTv.channels.<a href="./src/resources/live-tv/channels.ts">list</a>({ ...params }) -> QueryResultBaseItem</code>

## Programs

Types:

- <code><a href="./src/resources/live-tv/programs.ts">KeywordType</a></code>

Methods:

- <code title="post /LiveTv/Programs">client.liveTv.programs.<a href="./src/resources/live-tv/programs.ts">create</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/Programs/{Id}">client.liveTv.programs.<a href="./src/resources/live-tv/programs.ts">retrieve</a>(id) -> BaseItem</code>
- <code title="get /LiveTv/Programs">client.liveTv.programs.<a href="./src/resources/live-tv/programs.ts">list</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/Programs/Recommended">client.liveTv.programs.<a href="./src/resources/live-tv/programs.ts">listRecommended</a>({ ...params }) -> QueryResultBaseItem</code>

## Recordings

Types:

- <code><a href="./src/resources/live-tv/recordings.ts">RecordingStatus</a></code>
- <code><a href="./src/resources/live-tv/recordings.ts">RecordingListFoldersResponse</a></code>

Methods:

- <code title="get /LiveTv/Recordings/{Id}">client.liveTv.recordings.<a href="./src/resources/live-tv/recordings.ts">retrieve</a>(id, { ...params }) -> BaseItem</code>
- <code title="get /LiveTv/Recordings">client.liveTv.recordings.<a href="./src/resources/live-tv/recordings.ts">list</a>({ ...params }) -> void</code>
- <code title="post /LiveTv/Recordings/{Id}/Delete">client.liveTv.recordings.<a href="./src/resources/live-tv/recordings.ts">delete</a>(id) -> void</code>
- <code title="get /LiveTv/Recordings/Folders">client.liveTv.recordings.<a href="./src/resources/live-tv/recordings.ts">listFolders</a>({ ...params }) -> RecordingListFoldersResponse</code>
- <code title="get /LiveTv/Recordings/Groups">client.liveTv.recordings.<a href="./src/resources/live-tv/recordings.ts">listGroups</a>() -> QueryResultBaseItem</code>
- <code title="get /LiveTv/Recordings/Series">client.liveTv.recordings.<a href="./src/resources/live-tv/recordings.ts">listSeries</a>() -> QueryResultBaseItem</code>

## Timers

Types:

- <code><a href="./src/resources/live-tv/timers.ts">KeepUntil</a></code>
- <code><a href="./src/resources/live-tv/timers.ts">SeriesTimerInfoDto</a></code>
- <code><a href="./src/resources/live-tv/timers.ts">TimerInfoDto</a></code>
- <code><a href="./src/resources/live-tv/timers.ts">TimerListResponse</a></code>

Methods:

- <code title="post /LiveTv/Timers">client.liveTv.timers.<a href="./src/resources/live-tv/timers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/Timers/{Id}">client.liveTv.timers.<a href="./src/resources/live-tv/timers.ts">retrieve</a>(id) -> TimerInfoDto</code>
- <code title="post /LiveTv/Timers/{Id}">client.liveTv.timers.<a href="./src/resources/live-tv/timers.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /LiveTv/Timers">client.liveTv.timers.<a href="./src/resources/live-tv/timers.ts">list</a>({ ...params }) -> TimerListResponse</code>
- <code title="post /LiveTv/Timers/{Id}/Delete">client.liveTv.timers.<a href="./src/resources/live-tv/timers.ts">cancel</a>(id) -> void</code>
- <code title="get /LiveTv/Timers/Defaults">client.liveTv.timers.<a href="./src/resources/live-tv/timers.ts">getDefaults</a>({ ...params }) -> SeriesTimerInfoDto</code>

## SeriesTimers

Types:

- <code><a href="./src/resources/live-tv/series-timers.ts">KeywordInfo</a></code>
- <code><a href="./src/resources/live-tv/series-timers.ts">SeriesTimerInfo</a></code>
- <code><a href="./src/resources/live-tv/series-timers.ts">SortOrder</a></code>
- <code><a href="./src/resources/live-tv/series-timers.ts">SeriesTimerListResponse</a></code>

Methods:

- <code title="post /LiveTv/SeriesTimers">client.liveTv.seriesTimers.<a href="./src/resources/live-tv/series-timers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /LiveTv/SeriesTimers/{Id}">client.liveTv.seriesTimers.<a href="./src/resources/live-tv/series-timers.ts">retrieve</a>(id) -> TimerInfoDto</code>
- <code title="post /LiveTv/SeriesTimers/{Id}">client.liveTv.seriesTimers.<a href="./src/resources/live-tv/series-timers.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /LiveTv/SeriesTimers">client.liveTv.seriesTimers.<a href="./src/resources/live-tv/series-timers.ts">list</a>({ ...params }) -> SeriesTimerListResponse</code>
- <code title="post /LiveTv/SeriesTimers/{Id}/Delete">client.liveTv.seriesTimers.<a href="./src/resources/live-tv/series-timers.ts">cancel</a>(id) -> void</code>

## Manage

### Channels

Types:

- <code><a href="./src/resources/live-tv/manage/channels.ts">ChannelManagementInfo</a></code>

Methods:

- <code title="get /LiveTv/Manage/Channels">client.liveTv.manage.channels.<a href="./src/resources/live-tv/manage/channels.ts">list</a>({ ...params }) -> ChannelManagementInfo</code>
- <code title="post /LiveTv/Manage/Channels/{Id}/Disabled">client.liveTv.manage.channels.<a href="./src/resources/live-tv/manage/channels.ts">setDisabled</a>(id, { ...params }) -> ChannelManagementInfo</code>
- <code title="post /LiveTv/Manage/Channels/{Id}/SortIndex">client.liveTv.manage.channels.<a href="./src/resources/live-tv/manage/channels.ts">setSortIndex</a>(id, { ...params }) -> ChannelManagementInfo</code>

## Tuners

Types:

- <code><a href="./src/resources/live-tv/tuners.ts">TunerDiscoverResponse</a></code>

Methods:

- <code title="get /LiveTv/Tuners/Discvover">client.liveTv.tuners.<a href="./src/resources/live-tv/tuners.ts">discover</a>() -> TunerDiscoverResponse</code>
- <code title="post /LiveTv/Tuners/{Id}/Reset">client.liveTv.tuners.<a href="./src/resources/live-tv/tuners.ts">reset</a>(id) -> void</code>

## LiveStreamFiles

Methods:

- <code title="get /LiveTv/LiveStreamFiles/{Id}/stream.{Container}">client.liveTv.liveStreamFiles.<a href="./src/resources/live-tv/live-stream-files/live-stream-files.ts">retrieve</a>(container, { ...params }) -> void</code>

### Hls

Methods:

- <code title="get /LiveTv/LiveStreamFiles/{Id}/hls/live.m3u8">client.liveTv.liveStreamFiles.hls.<a href="./src/resources/live-tv/live-stream-files/hls.ts">getLive</a>(id) -> void</code>
- <code title="get /LiveTv/LiveStreamFiles/{Id}/hls/master.m3u8">client.liveTv.liveStreamFiles.hls.<a href="./src/resources/live-tv/live-stream-files/hls.ts">getMaster</a>(id) -> void</code>
- <code title="get /LiveTv/LiveStreamFiles/{Id}/hls/{Segment}">client.liveTv.liveStreamFiles.hls.<a href="./src/resources/live-tv/live-stream-files/hls.ts">getSegment</a>(segment, { ...params }) -> void</code>

## LiveRecordings

Methods:

- <code title="get /LiveTv/LiveRecordings/{Id}/stream">client.liveTv.liveRecordings.<a href="./src/resources/live-tv/live-recordings/live-recordings.ts">retrieve</a>(id) -> void</code>

### Hls

Methods:

- <code title="get /LiveTv/LiveRecordings/{Id}/hls/live.m3u8">client.liveTv.liveRecordings.hls.<a href="./src/resources/live-tv/live-recordings/hls.ts">getLive</a>(id) -> void</code>
- <code title="get /LiveTv/LiveRecordings/{Id}/hls/master.m3u8">client.liveTv.liveRecordings.hls.<a href="./src/resources/live-tv/live-recordings/hls.ts">getMaster</a>(id) -> void</code>
- <code title="get /LiveTv/LiveRecordings/{Id}/hls/{Segment}">client.liveTv.liveRecordings.hls.<a href="./src/resources/live-tv/live-recordings/hls.ts">getSegment</a>(segment, { ...params }) -> void</code>

# Localization

Types:

- <code><a href="./src/resources/localization.ts">CountryInfo</a></code>
- <code><a href="./src/resources/localization.ts">CultureDto</a></code>
- <code><a href="./src/resources/localization.ts">ParentalRating</a></code>
- <code><a href="./src/resources/localization.ts">LocalizationGetCountriesResponse</a></code>
- <code><a href="./src/resources/localization.ts">LocalizationGetCulturesResponse</a></code>
- <code><a href="./src/resources/localization.ts">LocalizationGetOptionsResponse</a></code>
- <code><a href="./src/resources/localization.ts">LocalizationGetParentalRatingsResponse</a></code>

Methods:

- <code title="get /Localization/Countries">client.localization.<a href="./src/resources/localization.ts">getCountries</a>() -> LocalizationGetCountriesResponse</code>
- <code title="get /Localization/Cultures">client.localization.<a href="./src/resources/localization.ts">getCultures</a>() -> LocalizationGetCulturesResponse</code>
- <code title="get /Localization/Options">client.localization.<a href="./src/resources/localization.ts">getOptions</a>() -> LocalizationGetOptionsResponse</code>
- <code title="get /Localization/ParentalRatings">client.localization.<a href="./src/resources/localization.ts">getParentalRatings</a>() -> LocalizationGetParentalRatingsResponse</code>

# Movies

Types:

- <code><a href="./src/resources/movies.ts">MovieGetRecommendationsResponse</a></code>

Methods:

- <code title="get /Movies/Recommendations">client.movies.<a href="./src/resources/movies.ts">getRecommendations</a>({ ...params }) -> MovieGetRecommendationsResponse</code>
- <code title="get /Movies/{Id}/Similar">client.movies.<a href="./src/resources/movies.ts">getSimilar</a>(id, { ...params }) -> QueryResultBaseItem</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications/notifications.ts">NotificationListTypesResponse</a></code>

Methods:

- <code title="get /Notifications/Types">client.notifications.<a href="./src/resources/notifications/notifications.ts">listTypes</a>() -> NotificationListTypesResponse</code>
- <code title="post /Notifications/Admin">client.notifications.<a href="./src/resources/notifications/notifications.ts">sendToAdmin</a>({ ...params }) -> void</code>

## Services

Types:

- <code><a href="./src/resources/notifications/services.ts">UserNotificationInfo</a></code>

Methods:

- <code title="get /Notifications/Services/Defaults">client.notifications.services.<a href="./src/resources/notifications/services.ts">getDefaults</a>() -> UserNotificationInfo</code>
- <code title="post /Notifications/Services/Test">client.notifications.services.<a href="./src/resources/notifications/services.ts">sendTest</a>({ ...params }) -> void</code>

# Playback

Methods:

- <code title="get /Playback/BitrateTest">client.playback.<a href="./src/resources/playback.ts">bitrateTest</a>({ ...params }) -> void</code>

# Shows

Methods:

- <code title="get /Shows/{Id}/Episodes">client.shows.<a href="./src/resources/shows.ts">listEpisodes</a>(id, { ...params }) -> void</code>
- <code title="get /Shows/Missing">client.shows.<a href="./src/resources/shows.ts">listMissing</a>({ ...params }) -> void</code>
- <code title="get /Shows/NextUp">client.shows.<a href="./src/resources/shows.ts">listNextUp</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /Shows/{Id}/Seasons">client.shows.<a href="./src/resources/shows.ts">listSeasons</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Shows/{Id}/Similar">client.shows.<a href="./src/resources/shows.ts">listSimilar</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Shows/Upcoming">client.shows.<a href="./src/resources/shows.ts">listUpcoming</a>({ ...params }) -> void</code>

# Sync

Types:

- <code><a href="./src/resources/sync/sync.ts">SyncCategory</a></code>
- <code><a href="./src/resources/sync/sync.ts">SyncTarget</a></code>
- <code><a href="./src/resources/sync/sync.ts">SyncListOptionsResponse</a></code>
- <code><a href="./src/resources/sync/sync.ts">SyncListTargetsResponse</a></code>
- <code><a href="./src/resources/sync/sync.ts">SyncSyncDataResponse</a></code>

Methods:

- <code title="post /Sync/{ItemId}/Status">client.sync.<a href="./src/resources/sync/sync.ts">getItemStatus</a>(itemID, { ...params }) -> void</code>
- <code title="get /Sync/Options">client.sync.<a href="./src/resources/sync/sync.ts">listOptions</a>({ ...params }) -> SyncListOptionsResponse</code>
- <code title="get /Sync/Targets">client.sync.<a href="./src/resources/sync/sync.ts">listTargets</a>({ ...params }) -> SyncListTargetsResponse</code>
- <code title="post /Sync/OfflineActions">client.sync.<a href="./src/resources/sync/sync.ts">reportOfflineAction</a>([ ...body ]) -> void</code>
- <code title="post /Sync/Data">client.sync.<a href="./src/resources/sync/sync.ts">syncData</a>({ ...params }) -> SyncSyncDataResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/sync/jobs.ts">SyncJob</a></code>
- <code><a href="./src/resources/sync/jobs.ts">SyncJobItem</a></code>
- <code><a href="./src/resources/sync/jobs.ts">JobCreateJobResponse</a></code>
- <code><a href="./src/resources/sync/jobs.ts">JobListJobsResponse</a></code>

Methods:

- <code title="post /Sync/Jobs/{Id}/Delete">client.sync.jobs.<a href="./src/resources/sync/jobs.ts">cancelJob</a>(id) -> void</code>
- <code title="post /Sync/Jobs">client.sync.jobs.<a href="./src/resources/sync/jobs.ts">createJob</a>({ ...params }) -> JobCreateJobResponse</code>
- <code title="get /Sync/Jobs">client.sync.jobs.<a href="./src/resources/sync/jobs.ts">listJobs</a>() -> JobListJobsResponse</code>
- <code title="get /Sync/Jobs/{Id}">client.sync.jobs.<a href="./src/resources/sync/jobs.ts">retrieveJob</a>(id) -> SyncJob</code>
- <code title="post /Sync/Jobs/{Id}">client.sync.jobs.<a href="./src/resources/sync/jobs.ts">updateJob</a>(id, { ...params }) -> void</code>

## JobItems

Types:

- <code><a href="./src/resources/sync/job-items.ts">JobItemListJobItemsResponse</a></code>

Methods:

- <code title="post /Sync/JobItems/{Id}/Delete">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">cancelJobItem</a>(id) -> void</code>
- <code title="post /Sync/JobItems/{Id}/Enable">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">enableJobItem</a>(id) -> void</code>
- <code title="get /Sync/JobItems/{Id}/AdditionalFiles">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">getAdditionalFiles</a>(id, { ...params }) -> void</code>
- <code title="get /Sync/JobItems/{Id}/File">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">getFile</a>(id) -> void</code>
- <code title="get /Sync/JobItems">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">listJobItems</a>({ ...params }) -> JobItemListJobItemsResponse</code>
- <code title="post /Sync/JobItems/{Id}/MarkForRemoval">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">markForRemoval</a>(id) -> void</code>
- <code title="post /Sync/JobItems/{Id}/Transferred">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">reportTransferred</a>(id) -> void</code>
- <code title="post /Sync/JobItems/{Id}/UnmarkForRemoval">client.sync.jobItems.<a href="./src/resources/sync/job-items.ts">unmarkForRemoval</a>(id) -> void</code>

## Items

Types:

- <code><a href="./src/resources/sync/items.ts">ItemFileInfo</a></code>
- <code><a href="./src/resources/sync/items.ts">ItemListReadyItemsResponse</a></code>

Methods:

- <code title="post /Sync/{TargetId}/Items/Delete">client.sync.items.<a href="./src/resources/sync/items.ts">cancelItems</a>(targetID, { ...params }) -> void</code>
- <code title="get /Sync/Items/Ready">client.sync.items.<a href="./src/resources/sync/items.ts">listReadyItems</a>({ ...params }) -> ItemListReadyItemsResponse</code>

# System

Types:

- <code><a href="./src/resources/system/system.ts">WakeOnLanInfo</a></code>
- <code><a href="./src/resources/system/system.ts">SystemRetrieveEndpointInfoResponse</a></code>
- <code><a href="./src/resources/system/system.ts">SystemRetrieveWakeOnLanInfoResponse</a></code>

Methods:

- <code title="post /System/Restart">client.system.<a href="./src/resources/system/system.ts">restart</a>() -> void</code>
- <code title="get /System/Endpoint">client.system.<a href="./src/resources/system/system.ts">retrieveEndpointInfo</a>() -> SystemRetrieveEndpointInfoResponse</code>
- <code title="get /System/WakeOnLanInfo">client.system.<a href="./src/resources/system/system.ts">retrieveWakeOnLanInfo</a>() -> SystemRetrieveWakeOnLanInfoResponse</code>
- <code title="post /System/Shutdown">client.system.<a href="./src/resources/system/system.ts">shutdown</a>() -> void</code>

## Configuration

Types:

- <code><a href="./src/resources/system/configuration.ts">ServerConfiguration</a></code>

Methods:

- <code title="get /System/Configuration">client.system.configuration.<a href="./src/resources/system/configuration.ts">retrieve</a>() -> ServerConfiguration</code>
- <code title="post /System/Configuration">client.system.configuration.<a href="./src/resources/system/configuration.ts">update</a>({ ...params }) -> void</code>
- <code title="get /System/Configuration/{Key}">client.system.configuration.<a href="./src/resources/system/configuration.ts">retrieveNamed</a>(key) -> void</code>
- <code title="post /System/Configuration/{Key}">client.system.configuration.<a href="./src/resources/system/configuration.ts">updateNamed</a>(key, { ...params }) -> void</code>
- <code title="post /System/Configuration/Partial">client.system.configuration.<a href="./src/resources/system/configuration.ts">updatePartial</a>({ ...params }) -> void</code>

## ReleaseNotes

Types:

- <code><a href="./src/resources/system/release-notes.ts">PackageVersionInfo</a></code>
- <code><a href="./src/resources/system/release-notes.ts">ReleaseNoteListVersionsResponse</a></code>

Methods:

- <code title="get /System/ReleaseNotes">client.system.releaseNotes.<a href="./src/resources/system/release-notes.ts">list</a>() -> PackageVersionInfo</code>
- <code title="get /System/ReleaseNotes/Versions">client.system.releaseNotes.<a href="./src/resources/system/release-notes.ts">listVersions</a>() -> ReleaseNoteListVersionsResponse</code>

## Ping

Methods:

- <code title="get /System/Ping">client.system.ping.<a href="./src/resources/system/ping.ts">check</a>() -> void</code>
- <code title="post /System/Ping">client.system.ping.<a href="./src/resources/system/ping.ts">send</a>() -> void</code>

## Info

Types:

- <code><a href="./src/resources/system/info.ts">InfoRetrieveResponse</a></code>
- <code><a href="./src/resources/system/info.ts">InfoRetrievePublicResponse</a></code>

Methods:

- <code title="get /System/Info">client.system.info.<a href="./src/resources/system/info.ts">retrieve</a>() -> InfoRetrieveResponse</code>
- <code title="get /System/Info/Public">client.system.info.<a href="./src/resources/system/info.ts">retrievePublic</a>() -> InfoRetrievePublicResponse</code>

## Logs

Types:

- <code><a href="./src/resources/system/logs.ts">LogListAvailableResponse</a></code>
- <code><a href="./src/resources/system/logs.ts">LogRetrieveLinesResponse</a></code>

Methods:

- <code title="get /System/Logs/{Name}">client.system.logs.<a href="./src/resources/system/logs.ts">retrieve</a>(name, { ...params }) -> void</code>
- <code title="get /System/Logs/Query">client.system.logs.<a href="./src/resources/system/logs.ts">listAvailable</a>({ ...params }) -> LogListAvailableResponse</code>
- <code title="get /System/Logs/{Name}/Lines">client.system.logs.<a href="./src/resources/system/logs.ts">retrieveLines</a>(name) -> LogRetrieveLinesResponse</code>

## ActivityLog

Types:

- <code><a href="./src/resources/system/activity-log.ts">ActivityLogListEntriesResponse</a></code>

Methods:

- <code title="get /System/ActivityLog/Entries">client.system.activityLog.<a href="./src/resources/system/activity-log.ts">listEntries</a>({ ...params }) -> ActivityLogListEntriesResponse</code>

# Ui

Types:

- <code><a href="./src/resources/ui.ts">UiViewInfo</a></code>

Methods:

- <code title="post /UI/Command">client.ui.<a href="./src/resources/ui.ts">executeCommand</a>({ ...params }) -> UiViewInfo</code>
- <code title="get /UI/View">client.ui.<a href="./src/resources/ui.ts">retrieveView</a>({ ...params }) -> UiViewInfo</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">AuthenticationResult</a></code>
- <code><a href="./src/resources/users/users.ts">QueryResultUser</a></code>
- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserPolicy</a></code>
- <code><a href="./src/resources/users/users.ts">UserListPrefixesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListPublicResponse</a></code>

Methods:

- <code title="post /Users/New">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> User</code>
- <code title="get /Users/{Id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(id) -> User</code>
- <code title="post /Users/{Id}">client.users.<a href="./src/resources/users/users.ts">update</a>(id, { ...params }) -> void</code>
- <code title="delete /Users/{Id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(id) -> void</code>
- <code title="post /Users/{Id}/Authenticate">client.users.<a href="./src/resources/users/users.ts">authenticate</a>(id, { ...params }) -> AuthenticationResult</code>
- <code title="post /Users/AuthenticateByName">client.users.<a href="./src/resources/users/users.ts">authenticateByName</a>({ ...params }) -> AuthenticationResult</code>
- <code title="post /Users/{Id}/Delete">client.users.<a href="./src/resources/users/users.ts">deleteByID</a>(id) -> void</code>
- <code title="get /Users/{UserId}/Suggestions">client.users.<a href="./src/resources/users/users.ts">getSuggestions</a>(userID, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Users/{UserId}/Views">client.users.<a href="./src/resources/users/users.ts">getViews</a>(userID, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Users/Query">client.users.<a href="./src/resources/users/users.ts">listAll</a>({ ...params }) -> QueryResultUser</code>
- <code title="get /Users/ItemAccess">client.users.<a href="./src/resources/users/users.ts">listItemAccess</a>({ ...params }) -> QueryResultUser</code>
- <code title="get /Users/Prefixes">client.users.<a href="./src/resources/users/users.ts">listPrefixes</a>({ ...params }) -> UserListPrefixesResponse</code>
- <code title="get /Users/Public">client.users.<a href="./src/resources/users/users.ts">listPublic</a>() -> UserListPublicResponse</code>
- <code title="post /Users/{Id}/Password">client.users.<a href="./src/resources/users/users.ts">updatePassword</a>(id, { ...params }) -> void</code>
- <code title="post /Users/{Id}/Policy">client.users.<a href="./src/resources/users/users.ts">updatePolicy</a>(id, { ...params }) -> void</code>

## ForgotPassword

Types:

- <code><a href="./src/resources/users/forgot-password.ts">ForgotPasswordInitiateResponse</a></code>
- <code><a href="./src/resources/users/forgot-password.ts">ForgotPasswordRedeemPinResponse</a></code>

Methods:

- <code title="post /Users/ForgotPassword">client.users.forgotPassword.<a href="./src/resources/users/forgot-password.ts">initiate</a>({ ...params }) -> ForgotPasswordInitiateResponse</code>
- <code title="post /Users/ForgotPassword/Pin">client.users.forgotPassword.<a href="./src/resources/users/forgot-password.ts">redeemPin</a>({ ...params }) -> ForgotPasswordRedeemPinResponse</code>

## Configuration

Types:

- <code><a href="./src/resources/users/configuration.ts">UserConfiguration</a></code>

Methods:

- <code title="post /Users/{Id}/Configuration">client.users.configuration.<a href="./src/resources/users/configuration.ts">update</a>(id, { ...params }) -> void</code>
- <code title="post /Users/{Id}/Configuration/Partial">client.users.configuration.<a href="./src/resources/users/configuration.ts">updatePartial</a>(id, { ...params }) -> void</code>

## Items

Types:

- <code><a href="./src/resources/users/items/items.ts">ItemRetrieveLatestResponse</a></code>
- <code><a href="./src/resources/users/items/items.ts">ItemRetrieveLocalTrailersResponse</a></code>
- <code><a href="./src/resources/users/items/items.ts">ItemRetrieveSpecialFeaturesResponse</a></code>

Methods:

- <code title="get /Users/{UserId}/Items/{Id}">client.users.items.<a href="./src/resources/users/items/items.ts">retrieve</a>(id, { ...params }) -> BaseItem</code>
- <code title="post /Users/{UserId}/Items/{Id}/HideFromResume">client.users.items.<a href="./src/resources/users/items/items.ts">hideFromResume</a>(id, { ...params }) -> UserItemData</code>
- <code title="get /Users/{UserId}/Items/{Id}/Intros">client.users.items.<a href="./src/resources/users/items/items.ts">retrieveIntros</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Users/{UserId}/Items">client.users.items.<a href="./src/resources/users/items/items.ts">retrieveItems</a>(userID, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Users/{UserId}/Items/Latest">client.users.items.<a href="./src/resources/users/items/items.ts">retrieveLatest</a>(userID, { ...params }) -> ItemRetrieveLatestResponse</code>
- <code title="get /Users/{UserId}/Items/{Id}/LocalTrailers">client.users.items.<a href="./src/resources/users/items/items.ts">retrieveLocalTrailers</a>(id, { ...params }) -> ItemRetrieveLocalTrailersResponse</code>
- <code title="get /Users/{UserId}/Items/Resume">client.users.items.<a href="./src/resources/users/items/items.ts">retrieveResume</a>(userID, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Users/{UserId}/Items/Root">client.users.items.<a href="./src/resources/users/items/items.ts">retrieveRoot</a>(userID) -> BaseItem</code>
- <code title="get /Users/{UserId}/Items/{Id}/SpecialFeatures">client.users.items.<a href="./src/resources/users/items/items.ts">retrieveSpecialFeatures</a>(id, { ...params }) -> ItemRetrieveSpecialFeaturesResponse</code>
- <code title="post /Users/{UserId}/Items/{ItemId}/UserData">client.users.items.<a href="./src/resources/users/items/items.ts">userData</a>(itemID, { ...params }) -> void</code>

### Rating

Methods:

- <code title="post /Users/{UserId}/Items/{Id}/Rating/Delete">client.users.items.rating.<a href="./src/resources/users/items/rating.ts">delete</a>(id, { ...params }) -> UserItemData</code>
- <code title="delete /Users/{UserId}/Items/{Id}/Rating">client.users.items.rating.<a href="./src/resources/users/items/rating.ts">deleteRating</a>(id, { ...params }) -> UserItemData</code>
- <code title="post /Users/{UserId}/Items/{Id}/Rating">client.users.items.rating.<a href="./src/resources/users/items/rating.ts">rating</a>(id, { ...params }) -> UserItemData</code>

## TrackSelections

Methods:

- <code title="post /Users/{Id}/TrackSelections/{TrackType}/Delete">client.users.trackSelections.<a href="./src/resources/users/track-selections.ts">delete</a>(trackType, { ...params }) -> void</code>

## TypedSettings

Methods:

- <code title="get /Users/{UserId}/TypedSettings/{Key}">client.users.typedSettings.<a href="./src/resources/users/typed-settings.ts">retrieve</a>(key, { ...params }) -> void</code>
- <code title="post /Users/{UserId}/TypedSettings/{Key}">client.users.typedSettings.<a href="./src/resources/users/typed-settings.ts">update</a>(key, { ...params }) -> void</code>

## FavoriteItems

Types:

- <code><a href="./src/resources/users/favorite-items.ts">UserItemData</a></code>

Methods:

- <code title="post /Users/{UserId}/FavoriteItems/{Id}">client.users.favoriteItems.<a href="./src/resources/users/favorite-items.ts">update</a>(id, { ...params }) -> UserItemData</code>
- <code title="post /Users/{UserId}/FavoriteItems/{Id}/Delete">client.users.favoriteItems.<a href="./src/resources/users/favorite-items.ts">delete</a>(id, { ...params }) -> UserItemData</code>

## Images

Methods:

- <code title="get /Users/{Id}/Images/{Type}/{Index}">client.users.images.<a href="./src/resources/users/images/images.ts">retrieve</a>(index, { ...params }) -> void</code>
- <code title="post /Users/{Id}/Images/{Type}/{Index}">client.users.images.<a href="./src/resources/users/images/images.ts">update</a>(index, { ...params }) -> void</code>

### Delete

Methods:

- <code title="post /Users/{Id}/Images/{Type}/{Index}/Delete">client.users.images.delete.<a href="./src/resources/users/images/delete.ts">delete</a>(index, { ...params }) -> void</code>

## PlayedItems

Methods:

- <code title="post /Users/{UserId}/PlayedItems/{Id}">client.users.playedItems.<a href="./src/resources/users/played-items.ts">update</a>(id, { ...params }) -> UserItemData</code>
- <code title="post /Users/{UserId}/PlayedItems/{Id}/Delete">client.users.playedItems.<a href="./src/resources/users/played-items.ts">delete</a>(id, { ...params }) -> UserItemData</code>

## PlayingItems

Types:

- <code><a href="./src/resources/users/playing-items.ts">PlayMethod</a></code>
- <code><a href="./src/resources/users/playing-items.ts">RepeatMode</a></code>

Methods:

- <code title="post /Users/{UserId}/PlayingItems/{Id}">client.users.playingItems.<a href="./src/resources/users/playing-items.ts">update</a>(id, { ...params }) -> void</code>
- <code title="post /Users/{UserId}/PlayingItems/{Id}/Delete">client.users.playingItems.<a href="./src/resources/users/playing-items.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /Users/{UserId}/PlayingItems/{Id}/Progress">client.users.playingItems.<a href="./src/resources/users/playing-items.ts">progress</a>(id, { ...params }) -> void</code>

## Connect

### Link

Types:

- <code><a href="./src/resources/users/connect/link.ts">LinkLinkResponse</a></code>

Methods:

- <code title="post /Users/{Id}/Connect/Link/Delete">client.users.connect.link.<a href="./src/resources/users/connect/link.ts">delete</a>(id) -> void</code>
- <code title="delete /Users/{Id}/Connect/Link">client.users.connect.link.<a href="./src/resources/users/connect/link.ts">deleteLink</a>(id) -> void</code>
- <code title="post /Users/{Id}/Connect/Link">client.users.connect.link.<a href="./src/resources/users/connect/link.ts">link</a>(id, { ...params }) -> LinkLinkResponse</code>

# Videos

Methods:

- <code title="post /Videos/MergeVersions">client.videos.<a href="./src/resources/videos/videos.ts">mergeVersions</a>({ ...params }) -> void</code>
- <code title="get /Videos/{Id}/AdditionalParts">client.videos.<a href="./src/resources/videos/videos.ts">retrieveAdditionalParts</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Videos/{Id}/hls/{PlaylistId}/{SegmentId}.{SegmentContainer}">client.videos.<a href="./src/resources/videos/videos.ts">retrieveHlsSegment</a>(segmentContainer, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/hls1/{PlaylistId}/{SegmentId}.{SegmentContainer}">client.videos.<a href="./src/resources/videos/videos.ts">retrieveHlsSegment1</a>(segmentContainer, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/index.bif">client.videos.<a href="./src/resources/videos/videos.ts">retrieveIndexBif</a>(id, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/live.m3u8">client.videos.<a href="./src/resources/videos/videos.ts">retrieveLiveStream</a>(id, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/live_subtitles.m3u8">client.videos.<a href="./src/resources/videos/videos.ts">retrieveLiveSubtitlesPlaylist</a>(id, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/main.m3u8">client.videos.<a href="./src/resources/videos/videos.ts">retrieveMainStream</a>(id, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/master.m3u8">client.videos.<a href="./src/resources/videos/videos.ts">retrieveMasterStream</a>(id, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/{StreamFileName}">client.videos.<a href="./src/resources/videos/videos.ts">retrieveStream</a>(streamFileName, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/subtitles.m3u8">client.videos.<a href="./src/resources/videos/videos.ts">retrieveSubtitlesPlaylist</a>(id, { ...params }) -> void</code>

## ActiveEncodings

Methods:

- <code title="delete /Videos/ActiveEncodings">client.videos.activeEncodings.<a href="./src/resources/videos/active-encodings.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /Videos/ActiveEncodings/Delete">client.videos.activeEncodings.<a href="./src/resources/videos/active-encodings.ts">deleteActive</a>({ ...params }) -> void</code>

## AlternateSources

Methods:

- <code title="delete /Videos/{Id}/AlternateSources">client.videos.alternateSources.<a href="./src/resources/videos/alternate-sources.ts">delete</a>(id) -> void</code>
- <code title="post /Videos/{Id}/AlternateSources/Delete">client.videos.alternateSources.<a href="./src/resources/videos/alternate-sources.ts">deleteActive</a>(id) -> void</code>

## Stream

Methods:

- <code title="get /Videos/{Id}/stream">client.videos.stream.<a href="./src/resources/videos/stream.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/stream.{Container}">client.videos.stream.<a href="./src/resources/videos/stream.ts">retrieveStream</a>(container, { ...params }) -> void</code>

## Subtitles

Methods:

- <code title="delete /Videos/{Id}/Subtitles/{Index}">client.videos.subtitles.<a href="./src/resources/videos/subtitles/subtitles.ts">delete</a>(index, { ...params }) -> void</code>
- <code title="post /Videos/{Id}/Subtitles/{Index}/Delete">client.videos.subtitles.<a href="./src/resources/videos/subtitles/subtitles.ts">deleteActive</a>(index, { ...params }) -> void</code>

### Stream

Methods:

- <code title="get /Videos/{Id}/{MediaSourceId}/Subtitles/{Index}/Stream.{Format}">client.videos.subtitles.stream.<a href="./src/resources/videos/subtitles/stream.ts">retrieve</a>(format, { ...params }) -> void</code>
- <code title="get /Videos/{Id}/{MediaSourceId}/Subtitles/{Index}/{StartPositionTicks}/Stream.{Format}">client.videos.subtitles.stream.<a href="./src/resources/videos/subtitles/stream.ts">retrieveWithPosition</a>(format, { ...params }) -> void</code>

# Web

Types:

- <code><a href="./src/resources/web.ts">Version</a></code>
- <code><a href="./src/resources/web.ts">WebListConfigurationPagesResponse</a></code>
- <code><a href="./src/resources/web.ts">WebRetrieveStringSetResponse</a></code>

Methods:

- <code title="get /web/ConfigurationPages">client.web.<a href="./src/resources/web.ts">listConfigurationPages</a>() -> WebListConfigurationPagesResponse</code>
- <code title="get /web/strings">client.web.<a href="./src/resources/web.ts">listStrings</a>() -> void</code>
- <code title="get /web/ConfigurationPage">client.web.<a href="./src/resources/web.ts">retrieveConfigurationPage</a>() -> void</code>
- <code title="get /web/stringset">client.web.<a href="./src/resources/web.ts">retrieveStringSet</a>() -> WebRetrieveStringSetResponse</code>

# Albums

Methods:

- <code title="get /Albums/{Id}/InstantMix">client.albums.<a href="./src/resources/albums.ts">createInstantMix</a>(id, { ...params }) -> QueryResultBaseItem</code>
- <code title="get /Albums/{Id}/Similar">client.albums.<a href="./src/resources/albums.ts">listSimilar</a>(id, { ...params }) -> QueryResultBaseItem</code>

# Audio

Methods:

- <code title="get /Audio/{Id}/hls/{PlaylistId}/{SegmentId}.{SegmentContainer}">client.audio.<a href="./src/resources/audio/audio.ts">retrieveHlsSegment</a>(segmentContainer, { ...params }) -> void</code>
- <code title="get /Audio/{Id}/hls1/{PlaylistId}/{SegmentId}.{SegmentContainer}">client.audio.<a href="./src/resources/audio/audio.ts">retrieveHls1Segment</a>(segmentContainer, { ...params }) -> void</code>
- <code title="get /Audio/{Id}/live.m3u8">client.audio.<a href="./src/resources/audio/audio.ts">retrieveLiveStream</a>(id, { ...params }) -> void</code>
- <code title="get /Audio/{Id}/main.m3u8">client.audio.<a href="./src/resources/audio/audio.ts">retrieveMainStream</a>(id, { ...params }) -> void</code>
- <code title="get /Audio/{Id}/master.m3u8">client.audio.<a href="./src/resources/audio/audio.ts">retrieveMasterStream</a>(id, { ...params }) -> void</code>
- <code title="get /Audio/{Id}/{StreamFileName}">client.audio.<a href="./src/resources/audio/audio.ts">retrieveStreamFile</a>(streamFileName, { ...params }) -> void</code>

## Universal

Methods:

- <code title="get /Audio/{Id}/universal">client.audio.universal.<a href="./src/resources/audio/universal.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /Audio/{Id}/universal.{Container}">client.audio.universal.<a href="./src/resources/audio/universal.ts">retrieveWithContainer</a>(container, { ...params }) -> void</code>

## Stream

Types:

- <code><a href="./src/resources/audio/stream.ts">SubtitleDeliveryMethod</a></code>

Methods:

- <code title="get /Audio/{Id}/stream">client.audio.stream.<a href="./src/resources/audio/stream.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /Audio/{Id}/stream.{Container}">client.audio.stream.<a href="./src/resources/audio/stream.ts">retrieveWithContainer</a>(container, { ...params }) -> void</code>

# Games

Methods:

- <code title="get /Games/{Id}/Similar">client.games.<a href="./src/resources/games.ts">findSimilar</a>(id, { ...params }) -> QueryResultBaseItem</code>

# Songs

Methods:

- <code title="get /Songs/{Id}/InstantMix">client.songs.<a href="./src/resources/songs.ts">createInstantMix</a>(id, { ...params }) -> QueryResultBaseItem</code>

# Providers

## Subtitles

Methods:

- <code title="get /Providers/Subtitles/Subtitles/{Id}">client.providers.subtitles.<a href="./src/resources/providers/subtitles.ts">retrieve</a>(id) -> void</code>

# Libraries

Types:

- <code><a href="./src/resources/libraries/libraries.ts">ImageOption</a></code>
- <code><a href="./src/resources/libraries/libraries.ts">LibraryOptionInfo</a></code>
- <code><a href="./src/resources/libraries/libraries.ts">LibraryListAvailableOptionsResponse</a></code>
- <code><a href="./src/resources/libraries/libraries.ts">LibraryListPhysicalPathsResponse</a></code>
- <code><a href="./src/resources/libraries/libraries.ts">LibraryListSelectableMediaFoldersResponse</a></code>

Methods:

- <code title="get /Libraries/AvailableOptions">client.libraries.<a href="./src/resources/libraries/libraries.ts">listAvailableOptions</a>() -> LibraryListAvailableOptionsResponse</code>
- <code title="get /Library/MediaFolders">client.libraries.<a href="./src/resources/libraries/libraries.ts">listMediaFolders</a>({ ...params }) -> QueryResultBaseItem</code>
- <code title="get /Library/PhysicalPaths">client.libraries.<a href="./src/resources/libraries/libraries.ts">listPhysicalPaths</a>() -> LibraryListPhysicalPathsResponse</code>
- <code title="get /Library/SelectableMediaFolders">client.libraries.<a href="./src/resources/libraries/libraries.ts">listSelectableMediaFolders</a>() -> LibraryListSelectableMediaFoldersResponse</code>
- <code title="post /Library/Refresh">client.libraries.<a href="./src/resources/libraries/libraries.ts">startLibraryScan</a>() -> void</code>

## VirtualFolders

Types:

- <code><a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">LibraryOptions</a></code>
- <code><a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">VirtualFolderRetrieveQueryResponse</a></code>

Methods:

- <code title="post /Library/VirtualFolders">client.libraries.virtualFolders.<a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">create</a>({ ...params }) -> void</code>
- <code title="delete /Library/VirtualFolders">client.libraries.virtualFolders.<a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">delete</a>() -> void</code>
- <code title="post /Library/VirtualFolders/Delete">client.libraries.virtualFolders.<a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">deleteFolder</a>({ ...params }) -> void</code>
- <code title="get /Library/VirtualFolders/Query">client.libraries.virtualFolders.<a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">retrieveQuery</a>({ ...params }) -> VirtualFolderRetrieveQueryResponse</code>
- <code title="post /Library/VirtualFolders/LibraryOptions">client.libraries.virtualFolders.<a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">setLibraryOptions</a>({ ...params }) -> void</code>
- <code title="post /Library/VirtualFolders/Name">client.libraries.virtualFolders.<a href="./src/resources/libraries/virtual-folders/virtual-folders.ts">setName</a>({ ...params }) -> void</code>

### Paths

Types:

- <code><a href="./src/resources/libraries/virtual-folders/paths.ts">MediaPathInfo</a></code>

Methods:

- <code title="post /Library/VirtualFolders/Paths">client.libraries.virtualFolders.paths.<a href="./src/resources/libraries/virtual-folders/paths.ts">create</a>({ ...params }) -> void</code>
- <code title="post /Library/VirtualFolders/Paths/Update">client.libraries.virtualFolders.paths.<a href="./src/resources/libraries/virtual-folders/paths.ts">update</a>({ ...params }) -> void</code>
- <code title="delete /Library/VirtualFolders/Paths">client.libraries.virtualFolders.paths.<a href="./src/resources/libraries/virtual-folders/paths.ts">delete</a>() -> void</code>
- <code title="post /Library/VirtualFolders/Paths/Delete">client.libraries.virtualFolders.paths.<a href="./src/resources/libraries/virtual-folders/paths.ts">deletePath</a>({ ...params }) -> void</code>

## Series

Methods:

- <code title="post /Library/Series/Added">client.libraries.series.<a href="./src/resources/libraries/series.ts">added</a>() -> void</code>
- <code title="post /Library/Series/Updated">client.libraries.series.<a href="./src/resources/libraries/series.ts">updated</a>() -> void</code>

## Media

Methods:

- <code title="post /Library/Media/Updated">client.libraries.media.<a href="./src/resources/libraries/media.ts">reportUpdated</a>({ ...params }) -> void</code>

## Movies

Methods:

- <code title="post /Library/Movies/Added">client.libraries.movies.<a href="./src/resources/libraries/movies.ts">added</a>() -> void</code>
- <code title="post /Library/Movies/Updated">client.libraries.movies.<a href="./src/resources/libraries/movies.ts">updated</a>() -> void</code>
