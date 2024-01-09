set -e
curl --proto '=https' --tlsv1.2 -sSf https://c-git.github.io/github/codespaces/setup_rust_only.sh | sh
rustup target add wasm32-unknown-unknown
cargo install --locked trunk