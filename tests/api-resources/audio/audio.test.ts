// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audio', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveHlsSegment: only required params', async () => {
    const responsePromise = client.audio.retrieveHlsSegment('SegmentContainer', {
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
    const response = await client.audio.retrieveHlsSegment('SegmentContainer', {
      Id: 'Id',
      PlaylistId: 'PlaylistId',
      SegmentId: 'SegmentId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHls1Segment: only required params', async () => {
    const responsePromise = client.audio.retrieveHls1Segment('SegmentContainer', {
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
  test.skip('retrieveHls1Segment: required and optional params', async () => {
    const response = await client.audio.retrieveHls1Segment('SegmentContainer', {
      Id: 'Id',
      PlaylistId: 'PlaylistId',
      SegmentId: 'SegmentId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLiveStream: only required params', async () => {
    const responsePromise = client.audio.retrieveLiveStream('Id', { Container: 'Container' });
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
    const response = await client.audio.retrieveLiveStream('Id', {
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
  test.skip('retrieveMainStream: only required params', async () => {
    const responsePromise = client.audio.retrieveMainStream('Id', { Container: 'Container' });
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
    const response = await client.audio.retrieveMainStream('Id', {
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
    const responsePromise = client.audio.retrieveMasterStream('Id', { Container: 'Container' });
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
    const response = await client.audio.retrieveMasterStream('Id', {
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
  test.skip('retrieveStreamFile: only required params', async () => {
    const responsePromise = client.audio.retrieveStreamFile('StreamFileName', {
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
  test.skip('retrieveStreamFile: required and optional params', async () => {
    const response = await client.audio.retrieveStreamFile('StreamFileName', {
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
});
