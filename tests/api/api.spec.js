import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {

  test('GET User API', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
  });

  test('POST API', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Test',
        body: 'Automation',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);
  });

});