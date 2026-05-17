set -e
sudo apt-get update
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
code --install-extension vadimcn.vscode-lldb
code --install-extension rust-lang.rust-analyzer
code --install-extension usernamehw.errorlens
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension mhutchie.git-graph
code --install-extension eamodio.gitlens
code --install-extension alefragnani.numbered-bookmarks
code --install-extension Gruntfuggly.todo-tree