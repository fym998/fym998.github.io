{pkgs ? import <nixpkgs> {}}:
pkgs.mkShellNoCC {
  packages = builtins.attrValues {
    inherit (pkgs) nodejs_22 pnpm_10;
  };
}
