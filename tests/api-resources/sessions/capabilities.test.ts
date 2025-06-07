// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource capabilities', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.sessions.capabilities.update({ Id: 'Id' });
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
    const response = await client.sessions.capabilities.update({
      Id: 'Id',
      PlayableMediaTypes: 'PlayableMediaTypes',
      SupportedCommands: 'SupportedCommands',
      SupportsMediaControl: true,
      SupportsSync: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFull: only required params', async () => {
    const responsePromise = client.sessions.capabilities.updateFull({ Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFull: required and optional params', async () => {
    const response = await client.sessions.capabilities.updateFull({
      Id: 'Id',
      AppId: 'AppId',
      DeviceProfile: {
        CodecProfiles: [
          {
            ApplyConditions: [
              { Condition: 'Equals', IsRequired: true, Property: 'AudioChannels', Value: 'Value' },
            ],
            Codec: 'Codec',
            Conditions: [
              { Condition: 'Equals', IsRequired: true, Property: 'AudioChannels', Value: 'Value' },
            ],
            Container: 'Container',
            Type: 'Video',
          },
        ],
        ContainerProfiles: [
          {
            Conditions: [
              { Condition: 'Equals', IsRequired: true, Property: 'AudioChannels', Value: 'Value' },
            ],
            Container: 'Container',
            Type: 'Audio',
          },
        ],
        DirectPlayProfiles: [
          { AudioCodec: 'AudioCodec', Container: 'Container', Type: 'Audio', VideoCodec: 'VideoCodec' },
        ],
        Id: 'Id',
        MaxStaticMusicBitrate: 0,
        MaxStreamingBitrate: 0,
        MusicStreamingTranscodingBitrate: 0,
        Name: 'Name',
        ResponseProfiles: [
          {
            AudioCodec: 'AudioCodec',
            Conditions: [
              { Condition: 'Equals', IsRequired: true, Property: 'AudioChannels', Value: 'Value' },
            ],
            Container: 'Container',
            MimeType: 'MimeType',
            OrgPn: 'OrgPn',
            Type: 'Audio',
            VideoCodec: 'VideoCodec',
          },
        ],
        SubtitleProfiles: [
          {
            Container: 'Container',
            DidlMode: 'DidlMode',
            Format: 'Format',
            Language: 'Language',
            Method: 'Encode',
            Protocol: 'Protocol',
          },
        ],
        SupportedMediaTypes: 'SupportedMediaTypes',
        TranscodingProfiles: [
          {
            AllowInterlacedVideoStreamCopy: true,
            AudioCodec: 'AudioCodec',
            BreakOnNonKeyFrames: true,
            Container: 'Container',
            Context: 'Streaming',
            CopyTimestamps: true,
            EnableMpegtsM2TsMode: true,
            EstimateContentLength: true,
            FillEmptySubtitleSegments: true,
            ManifestSubtitles: 'ManifestSubtitles',
            MaxAudioChannels: 'MaxAudioChannels',
            MaxHeight: 0,
            MaxManifestSubtitles: 0,
            MaxWidth: 0,
            MinSegments: 0,
            Protocol: 'Protocol',
            SegmentLength: 0,
            TranscodeSeekInfo: 'Auto',
            Type: 'Audio',
            VideoCodec: 'VideoCodec',
          },
        ],
      },
      IconUrl: 'IconUrl',
      PlayableMediaTypes: ['string'],
      PushToken: 'PushToken',
      PushTokenType: 'PushTokenType',
      SupportedCommands: ['string'],
      SupportsMediaControl: true,
      SupportsSync: true,
    });
  });
});
