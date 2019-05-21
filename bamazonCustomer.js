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
    console.log("\n" + "WELCOME TO BAMAZON!");
    queryAllProducts();
    // console.log("now on to the purchase");
    // makePurchase();
});

function queryAllProducts() {
    console.log("Here's a list of available items..." + "\n");
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID# " + res[i].id + ": " + res[i].product_name + ", " + res[i].department_name + " Dept.  Price = $" + res[i].price + ".  Stock Qty = " + res[i].stock_quantity + ".");
        }
        console.log("-----------------------------------");

        inquirer
            .prompt([
                {
                    name: "itemnumber",
                    type: "number",
                    message: "Enter ID# of item to purchase: "
                },
                {
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
                else if (answer.itemnumber < 0 || answer.itemnumber > res.length) {
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

                    if (chosenItem.stock_quantity >= answer.itemqty) {
                        console.log("we can do this!");
                        
                    }
                    else {
                        console.log("sorry, we don't have that many!");
                    }

                }



                console.log("you entered ID# " + answer.itemnumber);
                console.log("you want qty " + answer.itemqty);
            })
});
}

function makePurchase() {
    console.log("this is from the purchase function");
}

// 5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items 
// available for sale. Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages.

// * The first should ask them the ID of the product they would like to buy.

// * The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet
//  the customer's request.

// * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.


// * This means updating the SQL database to reflect the remaining quantity.
// * Once the update goes through, show the customer the total cost of their purchase.