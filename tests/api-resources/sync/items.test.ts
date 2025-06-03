// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // skipped: tests are disabled for the time being
  test.skip('cancelItems', async () => {
    const responsePromise = client.sync.items.cancelItems('TargetId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('cancelItems: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sync.items.cancelItems('TargetId', { ItemIds: 'ItemIds' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Emby.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listReadyItems: only required params', async () => {
    const responsePromise = client.sync.items.listReadyItems({ TargetId: 'TargetId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listReadyItems: required and optional params', async () => {
    const response = await client.sync.items.listReadyItems({ TargetId: 'TargetId' });
  });
});
