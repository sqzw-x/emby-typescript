// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource universal', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.audio.universal.retrieve('Id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.audio.universal.retrieve(
        'Id',
        { DeviceId: 'DeviceId', StartTimeTicks: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Emby.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveWithContainer: only required params', async () => {
    const responsePromise = client.audio.universal.retrieveWithContainer('Container', { Id: 'Id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveWithContainer: required and optional params', async () => {
    const response = await client.audio.universal.retrieveWithContainer('Container', {
      Id: 'Id',
      DeviceId: 'DeviceId',
      StartTimeTicks: 0,
    });
  });
});
