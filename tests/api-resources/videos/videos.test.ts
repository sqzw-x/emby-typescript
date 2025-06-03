// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource videos', () => {
  // skipped: tests are disabled for the time being
  test.skip('mergeVersions', async () => {
    const responsePromise = client.videos.mergeVersions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('mergeVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.videos.mergeVersions({ Ids: 'Ids' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Emby.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAdditionalParts', async () => {
    const responsePromise = client.videos.retrieveAdditionalParts('Id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAdditionalParts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.videos.retrieveAdditionalParts(
        'Id',
        {
          EnableImages: true,
          EnableImageTypes: 'EnableImageTypes',
          EnableUserData: true,
          Fields: 'Fields',
          ImageTypeLimit: 0,
          UserId: 'UserId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Emby.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHlsSegment: only required params', async () => {
    const responsePromise = client.videos.retrieveHlsSegment('SegmentContainer', {
      Id: 'Id',
      PlaylistId: 'PlaylistId',
      SegmentId: 'SegmentId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHlsSegment: required and optional params', async () => {
    const response = await client.videos.retrieveHlsSegment('SegmentContainer', {
      Id: 'Id',
      PlaylistId: 'PlaylistId',
      SegmentId: 'SegmentId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHlsSegment1: only required params', async () => {
    const responsePromise = client.videos.retrieveHlsSegment1('SegmentContainer', {
      Id: 'Id',
      PlaylistId: 'PlaylistId',
      SegmentId: 'SegmentId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHlsSegment1: required and optional params', async () => {
    const response = await client.videos.retrieveHlsSegment1('SegmentContainer', {
      Id: 'Id',
      PlaylistId: 'PlaylistId',
      SegmentId: 'SegmentId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveIndexBif: only required params', async () => {
    const responsePromise = client.videos.retrieveIndexBif('Id', { Width: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveIndexBif: required and optional params', async () => {
    const response = await client.videos.retrieveIndexBif('Id', { Width: 0 });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLiveStream: only required params', async () => {
    const responsePromise = client.videos.retrieveLiveStream('Id', { Container: 'Container' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLiveStream: required and optional params', async () => {
    const response = await client.videos.retrieveLiveStream('Id', {
      Container: 'Container',
      AudioBitRate: 0,
      AudioChannels: 0,
      AudioCodec: 'AudioCodec',
      AudioSampleRate: 0,
      AudioStreamIndex: 0,
      CopyTimestamps: true,
      DeviceId: 'DeviceId',
      DeviceProfileId: 'DeviceProfileId',
      EnableAutoStreamCopy: true,
      Height: 0,
      MaxAudioChannels: 0,
      MaxHeight: 0,
      MaxVideoBitDepth: 0,
      MaxWidth: 0,
      StartTimeTicks: 0,
      Static: true,
      SubtitleMethod: 'Encode',
      SubtitleStreamIndex: 0,
      VideoBitRate: 0,
      VideoCodec: 'VideoCodec',
      VideoStreamIndex: 0,
      Width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLiveSubtitlesPlaylist: only required params', async () => {
    const responsePromise = client.videos.retrieveLiveSubtitlesPlaylist('Id', {
      ManifestSubtitles: 'ManifestSubtitles',
      SubtitleSegmentLength: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLiveSubtitlesPlaylist: required and optional params', async () => {
    const response = await client.videos.retrieveLiveSubtitlesPlaylist('Id', {
      ManifestSubtitles: 'ManifestSubtitles',
      SubtitleSegmentLength: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMainStream: only required params', async () => {
    const responsePromise = client.videos.retrieveMainStream('Id', { Container: 'Container' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMainStream: required and optional params', async () => {
    const response = await client.videos.retrieveMainStream('Id', {
      Container: 'Container',
      AudioBitRate: 0,
      AudioChannels: 0,
      AudioCodec: 'AudioCodec',
      AudioSampleRate: 0,
      AudioStreamIndex: 0,
      CopyTimestamps: true,
      DeviceId: 'DeviceId',
      DeviceProfileId: 'DeviceProfileId',
      EnableAutoStreamCopy: true,
      Height: 0,
      MaxAudioChannels: 0,
      MaxHeight: 0,
      MaxVideoBitDepth: 0,
      MaxWidth: 0,
      StartTimeTicks: 0,
      Static: true,
      SubtitleMethod: 'Encode',
      SubtitleStreamIndex: 0,
      VideoBitRate: 0,
      VideoCodec: 'VideoCodec',
      VideoStreamIndex: 0,
      Width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMasterStream: only required params', async () => {
    const responsePromise = client.videos.retrieveMasterStream('Id', { Container: 'Container' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMasterStream: required and optional params', async () => {
    const response = await client.videos.retrieveMasterStream('Id', {
      Container: 'Container',
      AudioBitRate: 0,
      AudioChannels: 0,
      AudioCodec: 'AudioCodec',
      AudioSampleRate: 0,
      AudioStreamIndex: 0,
      CopyTimestamps: true,
      DeviceId: 'DeviceId',
      DeviceProfileId: 'DeviceProfileId',
      EnableAutoStreamCopy: true,
      Height: 0,
      MaxAudioChannels: 0,
      MaxHeight: 0,
      MaxVideoBitDepth: 0,
      MaxWidth: 0,
      StartTimeTicks: 0,
      Static: true,
      SubtitleMethod: 'Encode',
      SubtitleStreamIndex: 0,
      VideoBitRate: 0,
      VideoCodec: 'VideoCodec',
      VideoStreamIndex: 0,
      Width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveStream: only required params', async () => {
    const responsePromise = client.videos.retrieveStream('StreamFileName', {
      Id: 'Id',
      Container: 'Container',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveStream: required and optional params', async () => {
    const response = await client.videos.retrieveStream('StreamFileName', {
      Id: 'Id',
      Container: 'Container',
      AudioBitRate: 0,
      AudioChannels: 0,
      AudioCodec: 'AudioCodec',
      AudioSampleRate: 0,
      AudioStreamIndex: 0,
      CopyTimestamps: true,
      DeviceId: 'DeviceId',
      DeviceProfileId: 'DeviceProfileId',
      EnableAutoStreamCopy: true,
      Height: 0,
      MaxAudioChannels: 0,
      MaxHeight: 0,
      MaxVideoBitDepth: 0,
      MaxWidth: 0,
      StartTimeTicks: 0,
      Static: true,
      SubtitleMethod: 'Encode',
      SubtitleStreamIndex: 0,
      VideoBitRate: 0,
      VideoCodec: 'VideoCodec',
      VideoStreamIndex: 0,
      Width: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSubtitlesPlaylist: only required params', async () => {
    const responsePromise = client.videos.retrieveSubtitlesPlaylist('Id', {
      ManifestSubtitles: 'ManifestSubtitles',
      SubtitleSegmentLength: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSubtitlesPlaylist: required and optional params', async () => {
    const response = await client.videos.retrieveSubtitlesPlaylist('Id', {
      ManifestSubtitles: 'ManifestSubtitles',
      SubtitleSegmentLength: 0,
    });
  });
});
