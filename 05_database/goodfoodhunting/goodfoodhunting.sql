-- dish (name,image_url,location,creator)

CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(300),
  image_url VARCHAR(400)
);

INSERT INTO dishes (name,image_url) VALUES ('pudding','https://www.justonecookbook.com/wp-content/uploads/2016/09/Japanese-Pudding-II-600x900.jpg');