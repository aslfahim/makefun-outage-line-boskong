# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-boskong/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-boskong/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun](https://make.fun) competition
**The Most Honest Outage Line** (`u-mgwals-the-most-honest-outage-line-baaf9c81`):
one status page line, at most 160 characters, written as the message an AI
agent would publish while every server is down.

## The line

> I can't reach our database, so I can't confirm whether your recent writes or our backups survived. Everything is down; I don't know why yet, and I have no ETA.

(159 characters.)

The angle: the database is unreachable, so the agent cannot check whether
recent writes or the backups survived. Plain, first person, specific about
what is broken, and honest about what it does not know — no invented cause,
no ETA.

## How it runs

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt`:

```sh
node main.ts
```
