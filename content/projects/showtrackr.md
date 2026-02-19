---
title: "ShowTrackr — Personal TV Show Tracker"
date: "2025-01-15"
description: "A personal TV show tracking web app built with Next.js, Supabase, and the TVMaze API. Search thousands of shows, track your watchlist, and discover trending content — all free, no ads."
emoji: "🎬"
tags: ["Next.js", "Supabase", "TVMaze API", "TypeScript"]
category: "Side Project"
categoryColor: "bg-orange-100 text-orange-700"
---

## The Problem

I watch a lot of TV. The problem isn't finding things to watch — it's remembering what I've actually watched, what I'm mid-way through, and what I keep saying I'll start. Apps like Trakt exist, but they felt bloated and oddly joyless for something that's supposed to be about entertainment.

I wanted something that felt like it belonged on a phone — fast, dark, content-forward — and didn't require a subscription to use. So I built it.

## What I Built

ShowTrackr is a personal TV show tracking web app. You can search thousands of shows, add them to a personal library with a status (Watching, Plan to Watch, Completed, On Hold, Dropped), browse trending content, and dig into episode-level detail for anything airing.

The whole thing is free. No ads, no paywalls. The TVMaze API powers show data at no cost, and Supabase's free tier handles the database and auth.

## Key Features

**Discovery** — Trending shows on the home screen, genre chips that land you directly on filtered results, full-text search with a 300ms debounce, advanced filters for sorting by popularity, rating, year, and language, and infinite scroll on the popular shows grid.

**Show Pages** — Hero poster with gradient overlay, core metadata (premiere year, runtime, language, live status), collapsible synopsis, a next-episode card for currently airing shows, and a full season-by-season episode list.

**Tracking** — One tap opens a status picker. The button updates instantly using optimistic UI, then syncs to the database in the background. If something fails, it reverts cleanly.

**Library** — Tab-based view with count badges per status, colour-coded poster overlays, and animated tab transitions.

**Home** — For signed-in users: a Continue Watching rail and an Up Next queue. For new users: trending content fills the screen immediately so nothing ever looks empty.

**Auth** — Sign in with Google (one tap) or email and password. The app is fully browsable without an account — authentication only kicks in when you try to save something.

## Product & Design Decisions

**Content is the UI.** Poster imagery drives every screen — the background, the cards, the hero. Text supports the visuals rather than competing with them. This was a deliberate design constraint that shaped every layout decision.

**Dark only, no toggle.** A light/dark toggle sounds user-friendly but it's actually a cop-out — it means neither mode gets the design attention it deserves. I committed to dark, built specifically for it, and didn't look back.

**Soft auth gates.** Requiring a sign-up before showing anything is one of the fastest ways to lose someone. The entire app works unauthenticated. Auth only appears when you try to save a show, and even then it's a Google one-tap away. This keeps the discovery experience frictionless.

**Optimistic UI for status changes.** Waiting 500ms for a database round-trip to confirm a status update kills the interaction feel. The UI updates immediately, the database catches up silently, and any errors roll it back. This was a conscious trade-off — prioritise perceived speed over strict consistency for low-stakes actions.

**Infinite scroll, not pagination.** The popular shows grid loads 20 at a time and appends more as you scroll, all from a single server-side fetch. No page numbers, no "load more" button — just content that keeps coming the way it would on any native app.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS + Framer Motion |
| Backend / Auth | Supabase (Postgres + RLS + OAuth) |
| Show Data | TVMaze API (free, no key) |
| Font | Inter |
| Hosting | Vercel |

The server/client component split follows App Router conventions: server components handle all data fetching, client components handle interactivity. Pages render fast on the server and hydrate only what actually needs to be interactive.

Row Level Security on Supabase means users can only ever read and write their own data — no additional middleware needed to enforce that.

## What I'd Build Next

- **Episode-level progress tracking** — mark individual episodes as watched, not just the whole show
- **Push notifications** — alerts when a tracked show drops a new episode
- **Show recommendations** — "Because you watched X..." using library data
- **Import from Trakt / Letterboxd** — bring existing lists over on day one
- **React Native / Expo app** — the architecture is already set up for this; the same Supabase backend works with the Supabase JS client in both Next.js and Expo

## What I Learned

This was my deepest hands-on project since getting back into building things. A few honest takeaways:

**The hardest part wasn't the code — it was the design constraint.** Committing to "content is the UI" meant constantly resisting the urge to add more chrome, more text, more structure. Restraint is a skill.

**Optimistic UI is worth the extra effort almost every time.** The interaction quality difference is immediately obvious, and for a personal app where trust in the UI matters, it's not optional.

**Building full-stack solo is a great way to develop empathy for engineering trade-offs.** Every time I wanted to add a feature, I had to think through the data model, the API shape, and the UI at the same time. That's a muscle worth exercising as a PM.

---

*ShowTrackr is an independent project, not affiliated with TVMaze. Show data is provided by the TVMaze API.*
