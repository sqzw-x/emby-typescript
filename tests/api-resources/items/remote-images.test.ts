// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource remoteImages', () => {
  // Prism tests are disabled
  test.skip('download: only required params', async () => {
    const responsePromise = client.items.remoteImages.download('Id', { Type: 'Primary' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('download: required and optional params', async () => {
    const response = await client.items.remoteImages.download('Id', {
      Type: 'Primary',
      ImageUrl: 'ImageUrl',
      ProviderName: 'ProviderName',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveAll', async () => {
    const responsePromise = client.items.remoteImages.retrieveAll('Id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveAll: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.items.remoteImages.retrieveAll(
        'Id',
        { IncludeAllLanguages: true, Limit: 0, ProviderName: 'ProviderName', StartIndex: 0, Type: 'Primary' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Emby.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveProviders', async () => {
    const responsePromise = client.items.remoteImages.retrieveProviders('Id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
