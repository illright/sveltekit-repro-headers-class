import type { Load } from '@sveltejs/kit';

export const sendWithObject: Load = async ({ fetch }) => {
  const response = await fetch('http://localhost:3001/post', {
    method: 'POST',
    headers: { 'Authorization': 'foo' },
  });
  const echoedRequest = await response.json();
  return {
    props: {
      headers: JSON.stringify(echoedRequest.headers, null, 2),
    }
  }
};
