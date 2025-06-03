// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby, { toFile } from 'emby';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource encoding', () => {
  // skipped: tests are disabled for the time being
  test.skip('getCodecConfigurationDefaults', async () => {
    const responsePromise = client.encoding.getCodecConfigurationDefaults();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCodecInformationVideo', async () => {
    const responsePromise = client.encoding.getCodecInformationVideo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getCodecParameters: only required params', async () => {
    const responsePromise = client.encoding.getCodecParameters({
      CodecId: 'CodecId',
      ParameterContext: 'Playback',
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
  test.skip('getCodecParameters: required and optional params', async () => {
    const response = await client.encoding.getCodecParameters({
      CodecId: 'CodecId',
      ParameterContext: 'Playback',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getFfmpegOptions', async () => {
    const responsePromise = client.encoding.getFfmpegOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getFullToneMapOptions', async () => {
    const responsePromise = client.encoding.getFullToneMapOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getPublicToneMapOptions', async () => {
    const responsePromise = client.encoding.getPublicToneMapOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getSubtitleOptions', async () => {
    const responsePromise = client.encoding.getSubtitleOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getToneMapOptions', async () => {
    const responsePromise = client.encoding.getToneMapOptions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateCodecParameters: only required params', async () => {
    const responsePromise = client.encoding.updateCodecParameters({
      CodecId: 'CodecId',
      ParameterContext: 'Playback',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('updateCodecParameters: required and optional params', async () => {
    const response = await client.encoding.updateCodecParameters({
      CodecId: 'CodecId',
      ParameterContext: 'Playback',
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFfmpegOptions: only required params', async () => {
    const responsePromise = client.encoding.updateFfmpegOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('updateFfmpegOptions: required and optional params', async () => {
    const response = await client.encoding.updateFfmpegOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFullToneMapOptions: only required params', async () => {
    const responsePromise = client.encoding.updateFullToneMapOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('updateFullToneMapOptions: required and optional params', async () => {
    const response = await client.encoding.updateFullToneMapOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updatePublicToneMapOptions: only required params', async () => {
    const responsePromise = client.encoding.updatePublicToneMapOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('updatePublicToneMapOptions: required and optional params', async () => {
    const response = await client.encoding.updatePublicToneMapOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateSubtitleOptions: only required params', async () => {
    const responsePromise = client.encoding.updateSubtitleOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('updateSubtitleOptions: required and optional params', async () => {
    const response = await client.encoding.updateSubtitleOptions({
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
