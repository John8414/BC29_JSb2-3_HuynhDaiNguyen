// Bài tập 1:
/**
 * - Đầu vào :
 *   + lương 1 ngày làm : 100.000vnđ;
 *
 * - Xử lý :
 *   + Nhập số ngày làm ; giả sủ 22 ngày công
 *   + Lương nhân viên = lương 1 ngày * số ngày làm
 *
 * - Đầu ra :
 *   + Tiền lương nhân viên
 */

document.getElementById("tinhLuong").onclick = function () {
  //lấy thông tin
  var soNgayLam = document.getElementById("ngayCong").value * 1;
  var luongNgay = 100000;
  var currencyFormat = new Intl.NumberFormat("vn-VN");
  //xử lý
  var luong = luongNgay * soNgayLam;
  var tongLuong = "Tổng lương của bạn là: " + currencyFormat.format(luong);

  // show kết quả
  document.getElementById("footerLuong").innerHTML = tongLuong;
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 2:
/**
 * - Đầu vào :
 *   + Nhập 5 số thực : (a, b, c, d, e) ;
 *
 * - Xử lý :
 *   + Tính trung bình của 5 số = (a + b + c + d + e) / 5 ;
 *
 * - Đầu ra :
 *   + giaTri_TB
 */

document.getElementById("tinhTBC").onclick = function () {
  //lấy thông tin
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  var so4 = document.getElementById("so4").value * 1;
  var so5 = document.getElementById("so5").value * 1;

  //xử lý
  var tinhTBC = (so1 + so2 + so3 + so4 + so5) / 5;

  //đầu ra
  document.getElementById("footerTBC").innerHTML = tinhTBC;
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 3:
/**
 * - Đầu vào :
 *   + Giá USD sang VNĐ : 23.500vnđ ;
 *   + Nhập số tiền USD ; giả sử $10
 *
 * - Xử lý :
 *   + Quy đổi số tiền USD sang VNĐ = Giá USD * 23.500 ;
 *
 * - Đầu ra :
 *   + Giá quy đổi từ USD sang VNĐ ;
 */


var giaUsd = 10;
var giaVnd = 23500;
var giaQuyDoi = giaUsd * giaVnd;

var currentFormat = new Intl.NumberFormat("vn-VN");
var raTien = "Giá quy đổi từ USD sang VNĐ : " + currentFormat.format(giaQuyDoi);
console.log(raTien);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 4:
/**
 * - Đầu vào :
 *   + Nhập vô số chiều dài ; giả sử 15
 *   + Nhập vô số chiều rộng ; giả sử 20
 *
 * - Xử lý :
 *   + Diện tích = chiều Dài * chiều Rộng ;
 *   + Chu vi = (chiều Dài + chiều Rộng) * 2 ;
 *
 * - Đầu ra :
 *   + Tính & xuất ra diện tích, chu vi của hình chữ nhật ;
 *
 */

var chieuDai = 15;
var chieuRong = 10;
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

console.log("Diện tích hình chữ nhật là : " + dienTich);
console.log("Chu vi hình chữ nhật là : " + chuVi);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Bài tập 5:
/**
 * - Đầu vào :
 *   + Nhập một số có 2 chữ số bất kỳ ;
 *
 * - Xử lý :
 *   + tách hàng đơn vị và hàng chục cả số ;
 *   + lấy 2 số tách được cộng lại ;
 *
 * - Đầu ra :
 *   + Tính tổng ;
 */

var n = 23;

var hangChuc = n / 10;
hangChuc = parseInt(hangChuc);

var hangDonVi = n % 10;
hangDonVi = parseInt(hangDonVi);

var tong = hangChuc + hangDonVi;

console.log("Tổng 2 ký số là : " + tong);
