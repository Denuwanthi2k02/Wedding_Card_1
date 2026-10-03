-- Run this in the Supabase SQL editor (or `psql` against Vercel Postgres).
-- Creates the RSVP table used by POST /api/rsvp.

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  attending boolean not null,
  guest_count integer not null default 1,
  message text,
  created_at timestamptz not null default now()
);

alter table public.rsvps enable row level security;

-- Guests submit RSVPs anonymously from the invitation site.
-- No SELECT policy for anon: responses stay private to the couple.
create policy "anyone can insert rsvps"
  on public.rsvps
  for insert
  to anon, authenticated
  with check (true);
