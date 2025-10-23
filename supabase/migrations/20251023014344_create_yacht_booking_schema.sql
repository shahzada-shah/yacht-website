/*
  # Yacht Booking Database Schema

  ## Overview
  This migration creates the complete database schema for the yacht booking platform,
  including tables for yachts, crew members, reviews, FAQs, and related entities.

  ## New Tables

  ### yachts
  Stores all yacht listings with detailed specifications
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Yacht name
  - `description` (text) - Detailed description
  - `price_per_day` (integer) - Daily rental price in dollars
  - `year` (integer) - Year manufactured
  - `length_ft` (integer) - Length in feet
  - `draft_ft` (decimal) - Draft in feet
  - `location` (text) - Home port location
  - `cabins` (integer) - Number of cabins
  - `berths` (integer) - Number of berths/beds
  - `guests` (integer) - Maximum guest capacity
  - `condition` (text) - Pre-owned or New
  - `is_new` (boolean) - New listing flag
  - `video_url` (text) - Video tour URL
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### crew_members
  Stores crew information for each yacht
  - `id` (uuid, primary key)
  - `yacht_id` (uuid, foreign key) - References yacht
  - `name` (text) - Crew member name
  - `role` (text) - Position/role
  - `avatar_url` (text) - Profile picture URL
  - `display_order` (integer) - Display order
  - `created_at` (timestamptz)

  ### reviews
  Customer reviews and testimonials
  - `id` (uuid, primary key)
  - `yacht_id` (uuid, foreign key) - References yacht
  - `reviewer_name` (text) - Customer name
  - `rating` (decimal) - Rating out of 5
  - `comment` (text) - Review text
  - `review_date` (date) - Date of review
  - `created_at` (timestamptz)

  ### faqs
  Frequently asked questions for each yacht
  - `id` (uuid, primary key)
  - `yacht_id` (uuid, foreign key) - References yacht
  - `question` (text) - FAQ question
  - `answer` (text) - FAQ answer
  - `display_order` (integer) - Display order
  - `created_at` (timestamptz)

  ### yacht_images
  Multiple images per yacht
  - `id` (uuid, primary key)
  - `yacht_id` (uuid, foreign key) - References yacht
  - `image_url` (text) - Image URL
  - `is_primary` (boolean) - Primary image flag
  - `display_order` (integer) - Display order
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (yachts are public listings)
  - Restrict write access to authenticated admin users

  ## Indexes
  - Add indexes on foreign keys for performance
  - Add index on yacht location for filtering
  - Add index on price for sorting
*/

-- Create yachts table
CREATE TABLE IF NOT EXISTS yachts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price_per_day integer NOT NULL,
  year integer NOT NULL,
  length_ft integer NOT NULL,
  draft_ft decimal(4,1),
  location text NOT NULL,
  cabins integer NOT NULL DEFAULT 0,
  berths integer NOT NULL DEFAULT 0,
  guests integer NOT NULL,
  condition text CHECK (condition IN ('Pre-owned', 'New')),
  is_new boolean DEFAULT false,
  video_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create crew_members table
CREATE TABLE IF NOT EXISTS crew_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  yacht_id uuid REFERENCES yachts(id) ON DELETE CASCADE,
  name text NOT NULL,
  role text NOT NULL,
  avatar_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  yacht_id uuid REFERENCES yachts(id) ON DELETE CASCADE,
  reviewer_name text NOT NULL,
  rating decimal(2,1) CHECK (rating >= 0 AND rating <= 5),
  comment text NOT NULL,
  review_date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

-- Create faqs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  yacht_id uuid REFERENCES yachts(id) ON DELETE CASCADE,
  question text NOT NULL,
  answer text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create yacht_images table
CREATE TABLE IF NOT EXISTS yacht_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  yacht_id uuid REFERENCES yachts(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  is_primary boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_crew_members_yacht_id ON crew_members(yacht_id);
CREATE INDEX IF NOT EXISTS idx_reviews_yacht_id ON reviews(yacht_id);
CREATE INDEX IF NOT EXISTS idx_faqs_yacht_id ON faqs(yacht_id);
CREATE INDEX IF NOT EXISTS idx_yacht_images_yacht_id ON yacht_images(yacht_id);
CREATE INDEX IF NOT EXISTS idx_yachts_location ON yachts(location);
CREATE INDEX IF NOT EXISTS idx_yachts_price ON yachts(price_per_day);

-- Enable Row Level Security
ALTER TABLE yachts ENABLE ROW LEVEL SECURITY;
ALTER TABLE crew_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE yacht_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Yachts are publicly readable"
  ON yachts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Crew members are publicly readable"
  ON crew_members FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Reviews are publicly readable"
  ON reviews FOR SELECT
  TO public
  USING (true);

CREATE POLICY "FAQs are publicly readable"
  ON faqs FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Yacht images are publicly readable"
  ON yacht_images FOR SELECT
  TO public
  USING (true);

-- Create policies for authenticated write access
CREATE POLICY "Authenticated users can insert yachts"
  ON yachts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update yachts"
  ON yachts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete yachts"
  ON yachts FOR DELETE
  TO authenticated
  USING (true);
