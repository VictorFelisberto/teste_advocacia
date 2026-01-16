/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `nome` (text)
      - `email` (text)
      - `telefone` (text)
      - `assunto` (text)
      - `mensagem` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `contact_submissions` table
    - Allow anyone to insert (public submissions)
    - Only allow select/update/delete for admin (restrict access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text NOT NULL,
  assunto text NOT NULL,
  mensagem text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to view own submission"
  ON contact_submissions
  FOR SELECT
  TO anon
  USING (false);
