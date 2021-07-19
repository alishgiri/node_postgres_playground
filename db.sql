-- for help: \?

-- DATABASE --
-- list : \l
-- create : CREATE DATABASE database_name;
-- switch : \c database_name

-- TABLES --
-- list all : \d
-- list specific : \d table_name


CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);

-- Add a new column to table 'products'
ALTER TABLE products ADD COLUMN featured boolean;

-- Drop existing column from 'products' table
ALTER TABLE products DROP COLUMN featured;

-- Drop a table
DROP TABLE products;

-- Delete database
DROP DATABASE practise;


-- Yelp PROJECT
-- *************

-- Create extension for making uuid_generate_v4() available
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create table 'restaurants'
CREATE TABLE restaurants (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL CHECK ( price_range >= 0 AND price_range <= 5)
);

-- Insert data to table 'restaurants'
INSERT INTO restaurants(id, name, location, price_range) VALUES (123, 'mcdonalds', 'new york', 3);


-- Add CHECK constraints to existing column
ALTER TABLE restaurants ADD CONSTRAINT price_range_check CHECK (
    price_range >= 0 AND price_range <= 5 
);