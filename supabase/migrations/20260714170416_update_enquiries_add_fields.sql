/*
# Update enquiries table with new fields

1. Modified Tables
- `enquiries`
  - Add `event_location` (text, nullable) — city / destination (already exists)
  - Add `guest_count` (text, nullable) — already exists
  - Add `company` (text, nullable) — enquirer's company/organization
  - Add `budget` (text, nullable) — estimated budget range
2. Security
- No policy changes (existing INSERT policy for anon + authenticated remains)
*/

ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS company text;
ALTER TABLE enquiries ADD COLUMN IF NOT EXISTS budget text;
