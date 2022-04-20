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

document.getElementById("tinhLuong").onclick = function() {
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

document.getElementById("tinhTBC").onclick = function() {
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
 *   + Nhập số tiền USD ; 
 *
 * - Xử lý :
 *   + Quy đổi số tiền USD sang VNĐ = Giá USD * 23.500 ;
 *
 * - Đầu ra :
 *   + Giá quy đổi từ USD sang VNĐ ;
 */

document.getElementById("doiTien").onclick = function() {
    //đàu vào
    //lệch giá giữa USD và VND luôn thay đổi theo thời gian nên cho tự nhập
    var giaHienHanh = document.getElementById("giaTri").value * 1;
    var tienUSD = document.getElementById("nhapUSD").value * 1;
    var currencyFormat = new Intl.NumberFormat("vn-VN");

    //xử lý
    var doiTien = giaHienHanh * tienUSD;

    var tongTien = currencyFormat.format(doiTien);

    //kết quá
    document.getElementById("footerDoiTien").innerHTML = "Tổng tiền đổi được là: " + tongTien;
}

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

document.getElementById("tinhS-P").onclick = function() {
    //đầu vào
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    // xử lý
    var S = chieuDai * chieuRong
    var P = (chieuDai + chieuRong) * 2

    // đầu ra
    var result = "";
    result += "<p> S là: " + S + "</p>";
    result += "<p> P là: " + P + "</p>";

    document.getElementById("footerS-P").innerHTML = result;
}


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

document.getElementById("tongHaiSo").onclick = function() {
    //đầu vao
    var soNguyen = document.getElementById("soNguyen").value * 1;
    //xử lý
    var hangChuc = soNguyen / 10;
    hangChuc = parseInt(hangChuc);

    var hangDonVi = soNguyen % 10;
    hangDonVi = parseInt(hangDonVi);

    var tongHaiSo = hangChuc + hangDonVi;

    // kết quá
    document.getElementById("footerTongHaiSo").innerHTML = "Tổng hai ký số là: " + tongHaiSo;
}