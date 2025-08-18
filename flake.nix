{
  description = "My personal NUR repository";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    flake-parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };

  outputs =
    inputs@{ self, flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } (
      {
        lib,
        withSystem,
        moduleWithSystem,
        ...
      }:
      {
        systems = [ "x86_64-linux" ];
        perSystem =
          {
            self',
            pkgs,
            system,
            ...
          }:
          {
            _module.args.pkgs = import inputs.nixpkgs {
              inherit system;
              config = {
              };
            };
            devShells.default = pkgs.mkShellNoCC {
              packages = builtins.attrValues {
                inherit (pkgs) nodejs_22 pnpm_10;
              };
            };
          };
      }
    );
}
