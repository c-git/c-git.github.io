+++
title="Actix"
date = 2023-12-12
+++

Website: <https://actix.rs/>

# List of useful doc items

- Errors
  - [Error Helpers](https://actix.rs/docs/errors#error-helpers)
  - [Functions](https://docs.rs/actix-web/latest/actix_web/error/index.html#functions)

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
