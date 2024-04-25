# 5-workspace

Workspace is used to have a subproject/subpakage/submodule and it can be accessed from the root project

bunfig.tml
This file is used to write bun related config only.
For example below is bunfig.toml to setting loglevel and unit test
```bash
loglevel = "debug"

[test]
root = ./tests
coverage = true
```