/*
  # Add original link to products table

  1. Changes
    - Add `original_link` column to `products` table
      - Optional URL field for product source/redirect
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'products' AND column_name = 'original_link'
  ) THEN
    ALTER TABLE products ADD COLUMN original_link text;
  END IF;
END $$;