set -e
curl --proto '=https' --tlsv1.2 -sSf https://dev.chester.wykies.com/github/codespaces/scripts/setup_rust_only.sh | sh
source "$HOME/.cargo/env"
rustup target add wasm32-unknown-unknown
cargo install --locked trunk