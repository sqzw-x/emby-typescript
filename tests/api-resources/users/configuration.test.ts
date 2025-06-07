// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Emby, { toFile } from 'emby-sdk-stainless';

const client = new Emby({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configuration', () => {
  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.users.configuration.update('Id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updatePartial: only required params', async () => {
    const responsePromise = client.users.configuration.updatePartial('Id', {
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
  test.skip('updatePartial: required and optional params', async () => {
    const response = await client.users.configuration.updatePartial('Id', {
      body: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
