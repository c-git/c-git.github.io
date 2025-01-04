+++
title = "vscode"
date = 2025-01-04
+++

In all headings RA means RustAnalyzer

# Setting features for RA

In `.vscode/settings.json` add:

```json
// .vscode/settings.json
{    
    "rust-analyzer.cargo.features": ["FEATURE1_HERE", "FEATURE2_HERE"],
}
```

# Setting target for RA

See the [example for wasm](@/rust/wasm.md#switch-the-vscode-extension-to-target-wasm)

# Disable default features for RA

```json
// .vscode/settings.json
{    
    "rust-analyzer.cargo.noDefaultFeatures": true
}
```
