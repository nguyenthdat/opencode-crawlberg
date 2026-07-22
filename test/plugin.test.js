import { expect, test } from "bun:test";
import plugin, { CrawlbergPlugin } from "../src/plugin.js";

test("exports the crawlberg OpenCode tools", async () => {
  expect(plugin).toBe(CrawlbergPlugin);
  const hooks = await plugin();
  expect(Object.keys(hooks.tool)).toEqual(["crawlberg_scrape", "crawlberg_crawl", "crawlberg_map"]);
});
