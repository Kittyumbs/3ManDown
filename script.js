// Dữ liệu giỏ hàng
var cartItems = [
  { name: "Sản phẩm 1", price: 10 },
  { name: "Sản phẩm 2", price: 20 },
  { name: "Sản phẩm 3", price: 30 }
];

// Hiển thị giỏ hàng
function displayCart() {
  var cartContainer = document.getElementById("cart-items");
  
  // Xóa nội dung hiện tại trong giỏ hàng
  cartContainer.innerHTML = "";
  
  // Hiển thị từng mục trong giỏ hàng
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    
    // Tạo phần tử HTML cho mục giỏ hàng
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    
    var itemName = document.createElement("span");
    itemName.textContent = item.name;
    
    var itemPrice = document.createElement("span");
    itemPrice.textContent = "$" + item.price;
    
    // Thêm tên và giá vào phần tử giỏ hàng
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    
    // Thêm phần tử giỏ hàng vào container
    cartContainer.appendChild(cartItem);
  }
}

// Gọi hàm hiển thị giỏ hàng khi trang web được tải
window.onload = function() {
  displayCart();
};