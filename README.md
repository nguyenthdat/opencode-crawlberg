# opencode-crawlberg

Standalone OpenCode server plugin exposing the local `crawlberg` CLI as web crawling and scraping tools.

This repository is an MIT-licensed standalone split of the plugin maintained in [`xberg-io/plugins`](https://github.com/xberg-io/plugins).

## Install

Use the published npm package in `opencode.json` or `opencode.jsonc`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["@xberg-io/opencode-crawlberg"]
}
```

Or install this repository directly:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["github:nguyenthdat/opencode-crawlberg"]
}
```

Install the CLI on `PATH`:

```bash
brew install xberg-io/tap/crawlberg
# Alternatives:
npx @xberg-io/crawlberg-cli --help
uvx --from crawlberg-cli crawlberg --help
```

Restart OpenCode after changing the config. Chrome or Chromium is needed only for browser fallback.

## Tools

- `crawlberg_scrape`
- `crawlberg_crawl`
- `crawlberg_map`

## Development

```bash
bun install
bun test
```

## License

MIT. Copyright for the original plugin remains with Kreuzberg, Inc.; see `LICENSE`.
