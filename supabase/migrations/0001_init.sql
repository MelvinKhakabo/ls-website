-- Form submissions for learningsprouts.school
-- Visitors (anon) can INSERT only. Nobody can read via the public API; view rows in the Supabase dashboard.

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  phone text check (char_length(phone) <= 40),
  message text not null check (char_length(message) between 1 and 5000)
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique check (char_length(email) between 3 and 320)
);

create table public.job_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  phone text check (char_length(phone) <= 40),
  role text not null check (char_length(role) between 1 and 200),
  cv_link text check (char_length(cv_link) <= 1000),
  message text check (char_length(message) <= 5000)
);

alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.job_applications enable row level security;

create policy "Public can submit contact messages" on public.contact_messages
  for insert to anon with check (true);
create policy "Public can subscribe" on public.newsletter_subscribers
  for insert to anon with check (true);
create policy "Public can apply" on public.job_applications
  for insert to anon with check (true);

grant insert on public.contact_messages, public.newsletter_subscribers, public.job_applications to anon;
