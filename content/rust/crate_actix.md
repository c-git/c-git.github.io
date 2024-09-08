+++
title="Crate Actix Web"
date = 2023-12-15
updated = 2024-09-08
aliases=["/rust/actix"]
+++

Website: <https://actix.rs/>

# List of useful doc items

- Errors
  - [Error Helpers](https://actix.rs/docs/errors#error-helpers)
  - [Functions](https://docs.rs/actix-web/latest/actix_web/error/index.html#functions)
  - [Logging Middleware](https://docs.rs/actix-web/latest/actix_web/middleware/struct.Logger.html)

# Log (record) unmatched routes

Add a [default service](https://docs.rs/actix-web/latest/actix_web/struct.App.html#method.default_service) and route (This example uses tracing to do the recording)

```rust
default_service(web::route().to(not_found)); // Added into config

#[tracing::instrument]
pub async fn not_found(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    error!("Failed to match route");
    Ok(HttpResponse::NotFound().body("404 - Not found\n"))
}
```

# Graceful shutdown

There are multiple references I found and the appropriate one depends on your use case.
I'm collecting them here because I don't want to have to search for them again.
I recommend also checking out [Tokio Cancellation Tokens][tokio_cancel] as well as applicable to your use case.

Resources:

- [Official example of shutdown](https://github.com/actix/examples/tree/master/shutdown-server) - It shows how to shutdown from an endpoint
- [Example Response to issue](https://github.com/actix/actix-web/issues/2739#issuecomment-1107638674) - Shows how to shutdown if there is another task running in parallel to actix_web. Both tasks get shutdown gracefully. To shutdown the second task I'd recommend using [Tokio Cancellation Tokens][tokio_cancel] instead.
- [Official Documentation website](https://actix.rs/docs/server#graceful-shutdown) - Explains the default behaviour

[tokio_cancel]: https://tokio.rs/tokio/topics/shutdown
