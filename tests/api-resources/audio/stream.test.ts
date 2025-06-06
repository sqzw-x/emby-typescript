// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stream', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.audio.stream.retrieve('Id', { Container: 'Container' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.audio.stream.retrieve('Id', {
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
  test.skip('retrieveWithContainer: only required params', async () => {
    const responsePromise = client.audio.stream.retrieveWithContainer('Container', { Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWithContainer: required and optional params', async () => {
    const response = await client.audio.stream.retrieveWithContainer('Container', {
      Id: 'Id',
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
