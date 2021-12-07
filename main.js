// Handle form submit for addproduct.html
$("#product-form").submit(async function(form) {
    form.preventDefault();

    const name = $("#productNameInput").val();
    const url = $("#productImageURLInput").val();
    const price = $("#productPriceInput").val();
    const description = $("#productDescriptionInput").val();

    const product = {
        "name": name,
        "imageURL": url,
        "price": price,
        "description": description
    };

    var result = await createNewProduct(product);

    if (result) {
        alert("Product has been added!");
        window.location.href = "AddProduct.html";
    } else {
        alert("Failed to add product, sorry");
    }
});

// Fill update-form with values from original product
$("#update-form").ready(async function() {
    const id = window.location.href.split("?id=").pop();
    var product = await getProduct(id);

    $("#productNameInput").val(product.name);
    $("#productImageURLInput").val(product.imageURL);
    $("#productPriceInput").val(product.price);
    $("#productDescriptionInput").val(product.description);
});

// Handle form submit for update-product.html
$("#update-form").submit(async function(form) {
    form.preventDefault();

    const id = window.location.href.split("?id=").pop();
    const name = $("#productNameInput").val();
    const url = $("#productImageURLInput").val();
    const price = $("#productPriceInput").val();
    const description = $("#productDescriptionInput").val();

    const product = {
        "name": name,
        "imageURL": url,
        "price": price,
        "description": description
    };

    var result = await updateProduct(id, product);

    if (result) {
        alert("Product has been update!");
        window.location.href = "Productlist.html";
    } else {
        alert("Failed to update product, sorry");
    }
});

// Handle the creation of update-product url
$("#card-container").on("click", "#edit-btn", function() {
    // Get the id of the product
    var productID = $(this).parent().parent().parent().attr("id");
    var url = "update-product.html" + "?id=" + productID;
    window.location.href = url;
});