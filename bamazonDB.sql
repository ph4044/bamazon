-- Drops the bamazon database if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect bamazon --
USE bamazon;

-- Creates the table "products" within bamazon database --
CREATE TABLE products (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "department_name" which cannot contain null --
  department_name VARCHAR(30) NOT NULL,
  -- Makes a numeric column called "price" --
  price DECIMAL(10,2) NULL,
  -- Makes a numeric column called "stock_quantity" --
  stock_quantity INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Portable Grill", "Sports & Outdoors", 199.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("AirPod", "Electronics", 159.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Fryer", "Appliances", 59.88, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bluetooth Speaker", "Electronics", 29.88, 46);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pressure Cooker", "Applicances", 69.00, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dyson Stick Vacuum", "Appliances", 249.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("WoodWick Candle", "Decor", 24.87, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Body & Earth Shampoo Bar", "Beauty", 3.97, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Chromebook", "Electronics", 179.03, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mixer", "Appliances", 199.00, 4);
