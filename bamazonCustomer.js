var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    //port
    port: 8889,

    // Username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    console.log("\n" + "WELCOME BAMAZON SHOPPER!");
    console.log("CTRL-C to exit at any time."+"\n");
    queryAllProducts();
    // console.log("now on to the purchase");
    // makePurchase();
});

function queryAllProducts() {
    // display all of the items available for sale. Include the ids, names, and prices of products for sale.
    console.log("Here's a list of available items..." + "\n");
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID# " + res[i].id + ": " + res[i].product_name + ", " + res[i].department_name + " Dept.  Price = $" + res[i].price + ".  Stock Qty = " + res[i].stock_quantity + ".");
        }
        console.log("-----------------------------------");


        // Prompt users with two messages:

        inquirer
            .prompt([
                {
                    // First, the ID of the product they would like to buy.
                    name: "itemnumber",
                    type: "number",
                    message: "Enter ID# of item to purchase: "
                },
                {
                    // Second, how many units of the product they would like to buy.
                    name: "itemqty",
                    type: "number",
                    message: "Enter quantity to purchase: "
                }
            ])
            .then(function (answer) {
                if (isNaN(answer.itemnumber) || isNaN(answer.itemqty)) {
                    console.log("\n" + "*** Please enter numbers only. ***" + "\n");
                    queryAllProducts();
                }
                else if (answer.itemnumber <= 0 || answer.itemnumber > res.length) {
                    console.log("\n" + "*** Invalid ID# ***" + "\n");
                    queryAllProducts();
                }

                else if (answer.itemqty == 0 || answer.itemqty < 0) {
                    console.log("\n" + "*** Purchase quantity must be greater than 0. ***" + "\n");
                    queryAllProducts();
                }

                else {
                    // get the information of the chosen item
                    var chosenItem;
                    for (var j = 0; j < res.length; j++) {
                        if (res[j].id === answer.itemnumber) {
                            chosenItem = res[j];
                        }
                    }
                    // check if your store has enough of the product to meet the customer's request.
                    // If so, fulfill the customer's order.
                    if (chosenItem.stock_quantity >= answer.itemqty) {
                        console.log("Your purchase is approved!");
                        // Update the SQL database to reflect the remaining quantity.
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                              {
                                stock_quantity: chosenItem.stock_quantity - answer.itemqty
                              },
                              {
                                id: chosenItem.id
                              }
                            ],
                            function(error) {
                              if (error) throw err;
                              queryAllProducts();
                            }
                          );
                        // Show the customer the total cost of their purchase.
                        console.log("Your purchase total cost = $" + chosenItem.price * answer.itemqty+ "\n"+"Thank you!"+ "\n");

                    }
                    // If not, inform the customer and show the list of items again.
                    else {
                        console.log("\n" + "Sorry but we can't complete your order due to insufficient quantity on hand.  ID# " + answer.itemnumber + " Stock Qty = " + chosenItem.stock_quantity + "." + "\n");
                        queryAllProducts();
                    }

                }



                // console.log("you entered ID# " + answer.itemnumber);
                // console.log("you want qty " + answer.itemqty);
            })
    });
}

function makePurchase() {
    console.log("this is from the purchase function");
}

// * This means updating the SQL database to reflect the remaining quantity.
// * Once the update goes through, show the customer the total cost of their purchase.