// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource playingItems', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.users.playingItems.update('Id', {
      UserId: 'UserId',
      MediaSourceId: 'MediaSourceId',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.users.playingItems.update('Id', {
      UserId: 'UserId',
      MediaSourceId: 'MediaSourceId',
      AudioStreamIndex: 0,
      CanSeek: true,
      LiveStreamId: 'LiveStreamId',
      PlayMethod: 'Transcode',
      PlaySessionId: 'PlaySessionId',
      SubtitleStreamIndex: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.users.playingItems.delete('Id', {
      UserId: 'UserId',
      MediaSourceId: 'MediaSourceId',
      NextMediaType: 'NextMediaType',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.users.playingItems.delete('Id', {
      UserId: 'UserId',
      MediaSourceId: 'MediaSourceId',
      NextMediaType: 'NextMediaType',
      LiveStreamId: 'LiveStreamId',
      PlaySessionId: 'PlaySessionId',
      PositionTicks: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('progress: only required params', async () => {
    const responsePromise = client.users.playingItems.progress('Id', {
      UserId: 'UserId',
      MediaSourceId: 'MediaSourceId',
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
  test.skip('progress: required and optional params', async () => {
    const response = await client.users.playingItems.progress('Id', {
      UserId: 'UserId',
      MediaSourceId: 'MediaSourceId',
      AudioStreamIndex: 0,
      IsMuted: true,
      IsPaused: true,
      LiveStreamId: 'LiveStreamId',
      PlaybackRate: 0,
      PlayMethod: 'Transcode',
      PlaySessionId: 'PlaySessionId',
      PositionTicks: 0,
      RepeatMode: 'RepeatNone',
      SubtitleOffset: 0,
      SubtitleStreamIndex: 0,
      VolumeLevel: 0,
      EventName: 'TimeUpdate',
      PlaylistIndex: 0,
      PlaylistLength: 0,
      Shuffle: true,
    });
  });
});
