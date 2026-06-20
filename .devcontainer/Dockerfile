ARG USERNAME=vscode

FROM debian:trixie AS base

RUN apt-get update && apt-get install -y --no-install-recommends \
    sudo \
    curl \
    wget \
    ca-certificates \
    git \
    git-lfs \
    openssh-client \
    gnupg \
    nano \
    build-essential \
    cmake \
    ninja-build \
    procps \
    htop \
    lsof \
    jq \
    && rm -rf /var/lib/apt/lists/*

ARG USERNAME
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m -s /bin/bash $USERNAME \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME


FROM varmiral/debian-vscode:trixie AS development

ARG NODE_MAJOR=26

RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_MAJOR}.x | bash -s \
    && apt install -y nodejs

ARG USERNAME
USER $USERNAME

RUN mkdir -p /home/$USERNAME/.npm
