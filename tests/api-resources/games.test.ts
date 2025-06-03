// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource games', () => {
  // skipped: tests are disabled for the time being
  test.skip('findSimilar', async () => {
    const responsePromise = client.games.findSimilar('Id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('findSimilar: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.games.findSimilar(
        'Id',
        {
          EnableImages: true,
          EnableImageTypes: 'EnableImageTypes',
          EnableUserData: true,
          Fields: 'Fields',
          ImageTypeLimit: 0,
          IncludeItemTypes: 'IncludeItemTypes',
          Limit: 0,
          UserId: 'UserId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Emby.NotFoundError);
  });
});
