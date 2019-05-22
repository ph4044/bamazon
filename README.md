# bamazoncustomer

### Overview
bamazoncustomer is an Amazon-like storefront that utilizes MySQL. The app takes in orders from customers and depletes stock from the store's inventory.

### Setup
1. Clone the repo.
2. In Terminal window, enter "npm install".
3. Set up the bamazon database by running the SQL in bamazonDB.sql.
4. In Terminal window, enter "npm bamazoncustomer.js" to run the application.

### User Guide / Commands
The app is simple and self-explanatory.  Just follow the prompts.  CTRL-C to exit.

### Screen Shots

Screen shots showing execution of bamazoncustomer.js:

1.  initial setup of SQL database:

    ![Image of database in SQL Workbench](images/initial-database.PNG)

2.  initial products list:

    ![Image of initial products list](images/initial-products-list.PNG)

3.  successful purchase:

    ![Image of successful purchase](images/purchase-success.PNG)

4.  purchase attempt with insufficient stock:

    ![Image of purchase attempt with insufficient stock](images/purchase-insufficient-qty.PNG)
    
5.  purchase attempt with invalid product ID#:

    ![Image of purchase attempt with invalid product ID#](images/purchase-invalid-ID.PNG)

6.  purchase attempt with negative qty:

    ![Image of purchase attempt with negative qty](images/purchase-negative-qty.PNG)

7.  purchase attempt with text entered:

    ![Image of purchase attempt with text entered](images/purchase-NaNs.PNG)

## Author
Philip Hu
