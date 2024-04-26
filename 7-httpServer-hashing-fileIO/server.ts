
// Create HTTP Server
Bun.serve({
  port: 3000,
  fetch: (request, server) => {
    const url = new URL(request.url);
    if(url.searchParams.get('name')) {
      return new Response(`Hello ${url.searchParams.get('name')}`);
    }
    return new Response('Hello Bun');
  }
})