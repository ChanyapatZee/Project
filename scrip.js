// Function to show the pop-up with product details
function showPopup(productName, price) {
    const productInfo = `${productName}<br>ราคา: ${price}`;
    document.getElementById("productInfo").innerHTML = productInfo;

    // Show Bootstrap modal
    const productModal = new bootstrap.Modal(document.getElementById("productModal"));
    productModal.show();
}

// Function to confirm the purchase
function confirmPurchase() {
    alert("คุณยืนยันการซื้อสินค้าเรียบร้อยแล้ว!");
    const productModal = bootstrap.Modal.getInstance(document.getElementById("productModal"));
    productModal.hide();
}