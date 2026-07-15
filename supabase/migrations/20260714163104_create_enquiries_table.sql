/*
# Create enquiries table (single-tenant, no auth)

1. New Tables
- `enquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the enquirer's full name
  - `email` (text, not null) — contact email
  - `phone` (text, nullable) — optional phone number
  - `event_type` (text, nullable) — type of event (wedding, corporate, concert, etc.)
  - `event_date` (text, nullable) — tentative event date
  - `event_location` (text, nullable) — city / destination
  - `guest_count` (text, nullable) — estimated number of guests
  - `message` (text, nullable) — additional details from the enquirer
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `enquiries`.
- Allow anon + authenticated INSERT (public can submit enquiries).
- No SELECT/UPDATE/DELETE for anon (enquiries are private to the business owner).
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text,
  event_date text,
  event_location text,
  guest_count text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
TO anon, authenticated WITH CHECK (true);
