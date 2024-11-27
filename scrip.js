// ฟังก์ชันการเปลี่ยนสี navbar เมื่อเลื่อนหน้าจอ
window.onscroll = function() {changeNavbarColor()};

function changeNavbarColor() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Show the pop-up with product details
function showPopup(productName, productPrice) {
    document.getElementById('productInfo').innerText = `${productName} - ราคา: ${productPrice}`;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

// Close the pop-up
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

// Confirm purchase (you can customize the action here)
function confirmPurchase() {
    alert('คุณได้ยืนยันการซื้อสินค้าแล้ว!');
    closePopup();
}