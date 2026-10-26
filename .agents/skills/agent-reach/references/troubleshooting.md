# Agent Reach troubleshooting reference

Source checked: https://raw.githubusercontent.com/Panniantong/Agent-Reach/main/docs/troubleshooting.md

Start with:

```bash
agent-reach doctor --text
agent-reach check <channel> --text
```

Common error meanings:
- `NEED_SETUP`: a tool, key, or browser connection is missing.
- `NEED_LOGIN`: user authentication is missing/expired; the user logs in themselves.
- `UPSTREAM_BROKEN`: upstream tool/platform failed; avoid retry loops.
- `TIMEOUT`: retry later or use documented timeout/proxy configuration.
- `RATE_LIMITED`: respect the stated retry-after interval.
- `NOT_FOUND`: verify the link, ID, or username.
- `PLATFORM_BLOCKED`: stop and have the user check the official page.

Do not delete credentials or browser data to fix connection errors.
