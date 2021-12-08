import type { Load } from '@sveltejs/kit';

export const sendWithHeadersClass: Load = async ({ fetch }) => {
  const headers = new Headers();
  headers.append('Authorization', 'foo');
  const response = await fetch('http://localhost:3001/post', {
    method: 'POST',
    headers,
  });
  const echoedRequest = await response.json();
  return {
    props: {
      headers: JSON.stringify(echoedRequest.headers, null, 2),
    }
  }
};
