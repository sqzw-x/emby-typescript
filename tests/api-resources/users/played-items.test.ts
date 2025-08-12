// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource playedItems', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.users.playedItems.update('Id', { UserId: 'UserId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.users.playedItems.update('Id', {
      UserId: 'UserId',
      DatePlayed: 'DatePlayed',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.users.playedItems.delete('Id', { UserId: 'UserId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.users.playedItems.delete('Id', { UserId: 'UserId' });
  });
});
