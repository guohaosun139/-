# Agent Reach installation reference

Source checked: https://raw.githubusercontent.com/Panniantong/Agent-Reach/main/docs/install.md

Official install/update commands from the repository documentation:

```bash
uv tool install https://github.com/Panniantong/Agent-Reach/releases/latest/download/agent-reach.zip
agent-reach setup
agent-reach doctor --text
```

Update:

```bash
agent-reach update
```

Important:
- Do not install the unrelated PyPI package named `agent-reach`.
- Check `agent-reach version` first. Legacy versions 1.5 or earlier may need the documented migration path.
- Read the current upstream guide before running commands because install instructions can change.
