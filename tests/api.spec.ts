import { test, expect } from '@playwright/test';

test.describe('Backend API Integration Tests', () => {
  
  test('should successfully communicate with a live backend database endpoint', async ({ request }) => {
    
    // TARGETED ENDPOINT: This specific path (/posts/1) ensures we get JSON data, not a webpage HTML
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
    // 1. Confirm successful response
    expect(response.status()).toBe(200);
    
    // 2. Unpack the JSON data
    const responseBody = await response.json();
    
    // 3. Verify the data matches your exact assertions
    expect(responseBody).toHaveProperty('id', 1);
    expect(responseBody).toHaveProperty('userId');
    expect(responseBody.title).toBeDefined();
  });

});


