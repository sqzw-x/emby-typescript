// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subtitles', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.items.subtitles.delete(0, { Id: 'Id', MediaSourceId: 'MediaSourceId' });
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
    const response = await client.items.subtitles.delete(0, { Id: 'Id', MediaSourceId: 'MediaSourceId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteExternal: only required params', async () => {
    const responsePromise = client.items.subtitles.deleteExternal(0, {
      Id: 'Id',
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
  test.skip('deleteExternal: required and optional params', async () => {
    const response = await client.items.subtitles.deleteExternal(0, {
      Id: 'Id',
      MediaSourceId: 'MediaSourceId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('stream: only required params', async () => {
    const responsePromise = client.items.subtitles.stream('Format', {
      Id: 'Id',
      MediaSourceId: 'MediaSourceId',
      Index: 0,
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
  test.skip('stream: required and optional params', async () => {
    const response = await client.items.subtitles.stream('Format', {
      Id: 'Id',
      MediaSourceId: 'MediaSourceId',
      Index: 0,
      CopyTimestamps: true,
      EndPositionTicks: 0,
      StartPositionTicks: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('streamWithPosition: only required params', async () => {
    const responsePromise = client.items.subtitles.streamWithPosition('Format', {
      Id: 'Id',
      MediaSourceId: 'MediaSourceId',
      Index: 0,
      StartPositionTicks: 0,
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
  test.skip('streamWithPosition: required and optional params', async () => {
    const response = await client.items.subtitles.streamWithPosition('Format', {
      Id: 'Id',
      MediaSourceId: 'MediaSourceId',
      Index: 0,
      StartPositionTicks: 0,
      CopyTimestamps: true,
      EndPositionTicks: 0,
    });
  });
});
