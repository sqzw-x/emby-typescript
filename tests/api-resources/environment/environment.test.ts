// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environment', () => {
  // Prism tests are disabled
  test.skip('defaultDirectoryBrowser', async () => {
    const responsePromise = client.environment.defaultDirectoryBrowser();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('drives', async () => {
    const responsePromise = client.environment.drives();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('networkDevices', async () => {
    const responsePromise = client.environment.networkDevices();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('networkShares: only required params', async () => {
    const responsePromise = client.environment.networkShares({ Path: 'Path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('networkShares: required and optional params', async () => {
    const response = await client.environment.networkShares({ Path: 'Path' });
  });

  // Prism tests are disabled
  test.skip('parentPath: only required params', async () => {
    const responsePromise = client.environment.parentPath({ Path: 'Path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('parentPath: required and optional params', async () => {
    const response = await client.environment.parentPath({ Path: 'Path' });
  });

  // Prism tests are disabled
  test.skip('validatePath: only required params', async () => {
    const responsePromise = client.environment.validatePath({ Path: 'Path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('validatePath: required and optional params', async () => {
    const response = await client.environment.validatePath({
      Path: 'Path',
      IsFile: true,
      Password: 'Password',
      Username: 'Username',
      ValidateWriteable: true,
    });
  });
});
