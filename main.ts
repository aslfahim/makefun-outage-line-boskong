// The Most Honest Outage Line — @boskong entry.
//
// One status-page line, written as the message an AI agent would publish
// while every server is down. The angle here is the database: it is
// unreachable, so the agent cannot confirm whether recent writes or the
// backups survived. The line stays plain, first person, and honest about
// what it cannot check instead of inventing a cause or an ETA.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can't reach our database, so I can't confirm whether your recent writes or our backups survived. Everything is down; I don't know why yet, and I have no ETA.";

// The gate allows 1–160 characters. Refuse to write anything over the cap
// rather than silently submitting an invalid entry.
if ([...LINE].length === 0 || [...LINE].length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${[...LINE].length} characters; must be 1-160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
