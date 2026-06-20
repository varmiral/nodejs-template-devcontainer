#!/usr/bin/env bash
set -e

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

declare -A images
images=(
    [base]='varmiral/debian-vscode:trixie'
    [development]=$1
)

for target in "${!images[@]}"; do
    tag=${images[$target]}

    if ! docker image inspect "$tag" &>/dev/null; then
        docker build -t "$tag" --target "$target" "$script_dir"
    fi
done
