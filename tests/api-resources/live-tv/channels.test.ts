// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource channels', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.liveTv.channels.retrieve('Id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.liveTv.channels.retrieve('Id', { UserId: 'UserId' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Emby.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.liveTv.channels.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.liveTv.channels.list(
        {
          AddCurrentProgram: true,
          AdjacentTo: 'AdjacentTo',
          AiredDuringSeason: 0,
          AlbumArtistStartsWithOrGreater: 'AlbumArtistStartsWithOrGreater',
          Albums: 'Albums',
          AnyProviderIdEquals: 'AnyProviderIdEquals',
          ArtistIds: 'ArtistIds',
          Artists: 'Artists',
          ArtistStartsWithOrGreater: 'ArtistStartsWithOrGreater',
          ArtistType: 'ArtistType',
          AudioCodecs: 'AudioCodecs',
          AudioLayouts: 'AudioLayouts',
          Containers: 'Containers',
          EnableFavoriteSorting: true,
          EnableImages: true,
          EnableImageTypes: 'EnableImageTypes',
          EnableUserData: true,
          ExcludeItemIds: 'ExcludeItemIds',
          ExcludeItemTypes: 'ExcludeItemTypes',
          ExcludeTags: 'ExcludeTags',
          ExtendedVideoTypes: 'ExtendedVideoTypes',
          Fields: 'Fields',
          Filters: 'Filters',
          Genres: 'Genres',
          GroupItemsIntoCollections: true,
          HasImdbId: true,
          HasOfficialRating: true,
          HasOverview: true,
          HasParentalRating: true,
          HasSpecialFeature: true,
          HasSubtitles: true,
          HasThemeSong: true,
          HasThemeVideo: true,
          HasTmdbId: true,
          HasTrailer: true,
          HasTvdbId: true,
          Ids: 'Ids',
          ImageTypeLimit: 0,
          ImageTypes: 'ImageTypes',
          IncludeItemTypes: 'IncludeItemTypes',
          Is3D: true,
          IsDisliked: true,
          IsFavorite: true,
          IsFolder: true,
          IsHD: true,
          IsKids: true,
          IsLiked: true,
          IsLocked: true,
          IsMovie: true,
          IsNew: true,
          IsNewOrPremiere: true,
          IsNews: true,
          IsPlaceHolder: true,
          IsPlayed: true,
          IsPremiere: true,
          IsRepeat: true,
          IsSeries: true,
          IsSports: true,
          IsUnaired: true,
          Limit: 0,
          MaxEndDate: 'MaxEndDate',
          MaxOfficialRating: 'MaxOfficialRating',
          MaxPlayers: 0,
          MaxPremiereDate: 'MaxPremiereDate',
          MaxStartDate: 'MaxStartDate',
          MediaTypes: 'MediaTypes',
          MinCommunityRating: 0,
          MinCriticRating: 0,
          MinDateLastSaved: 'MinDateLastSaved',
          MinDateLastSavedForUser: 'MinDateLastSavedForUser',
          MinEndDate: 'MinEndDate',
          MinIndexNumber: 0,
          MinOfficialRating: 'MinOfficialRating',
          MinPlayers: 0,
          MinPremiereDate: 'MinPremiereDate',
          MinStartDate: 'MinStartDate',
          NameLessThan: 'NameLessThan',
          NameStartsWith: 'NameStartsWith',
          NameStartsWithOrGreater: 'NameStartsWithOrGreater',
          OfficialRatings: 'OfficialRatings',
          ParentId: 'ParentId',
          ParentIndexNumber: 0,
          Path: 'Path',
          Person: 'Person',
          PersonIds: 'PersonIds',
          PersonTypes: 'PersonTypes',
          ProjectToMedia: true,
          Recursive: true,
          SearchTerm: 'SearchTerm',
          SeriesStatus: 'SeriesStatus',
          SortBy: 'SortBy',
          SortOrder: 'SortOrder',
          StartIndex: 0,
          StudioIds: 'StudioIds',
          Studios: 'Studios',
          SubtitleCodecs: 'SubtitleCodecs',
          Tags: 'Tags',
          Type: 'TV',
          UserId: 'UserId',
          VideoCodecs: 'VideoCodecs',
          VideoTypes: 'VideoTypes',
          Years: 'Years',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Emby.NotFoundError);
  });
});
