+++
title="Crate CSV"
date = 2024-05-04
updated = 2024-12-18
extra = { series = "rust" }
taxonomies = { tags = ["rust"] }
+++

# Example of writing CSV to a Buffer (String)

This is a modified version of the example from the [rust cookbook](https://rust-lang-nursery.github.io/rust-cookbook/encoding/csv.html#filter-csv-records-matching-a-predicate).

Writes to a vector of bytes then converts it into a string.

```rust
#!/usr/bin/env -S cargo +nightly -Zscript
---cargo
package.edition = "2021" # Desirable to stop warning but not needed
[dependencies]
csv = "1.3.0"
---

fn main() -> Result<(), Box<dyn std::error::Error>> {
let query = "CA";
let data = "\
City,State,Population,Latitude,Longitude
Kenai,AK,7610,60.5544444,-151.2583333
Oakman,AL,,33.7133333,-87.3886111
Sandfort,AL,,32.3380556,-85.2233333
West Hollywood,CA,37031,34.0900000,-118.3608333";

    let mut rdr = csv::ReaderBuilder::new().from_reader(data.as_bytes());
    let mut write_buffer = Vec::new();
    let mut wtr = csv::Writer::from_writer(&mut write_buffer);

    wtr.write_record(rdr.headers()?)?;

    for result in rdr.records() {
        let record = result?;
        if record.iter().any(|field| field == query) {
            wtr.write_record(&record)?;
        }
    }

    wtr.flush()?;
    drop(wtr);

    println!("{}", std::str::from_utf8(&write_buffer)?);
    Ok(())

}
```
