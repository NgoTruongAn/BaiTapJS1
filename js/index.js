// BAI 1
// B1: xác định đầu vào - input 
var luong1Ngay = 100000;
var soNgaylam = 5;
// B2: các bước xử lý
tongLuong = luong1Ngay*soNgaylam;
// B3: in kết quả đầu ra
console.log("Tổng lương là :" , tongLuong);

//BAI2
// B1: xác định đầu vào - input 
//nhập vào 5 số thực
var a = 1, b = 2, c = 3, d = 4, e = 5;
// B2: các bước xử lý
giaTriTB = (a+b+c+d+e)/5;
// B3: in kết quả đầu ra
console.log("Giá trị trung bình các số:", giaTriTB);

//BAI3
// B1: xác định đầu vào - input 
const USD = 23500;
var a = 3; //số tiền muốn đổi
// B2: các bước xử lý
quyDoi = USD*3;
// B3: in kết quả đầu ra
console.log("Giá trị tiền VN: ",quyDoi + " VNĐ ");

//BAI4
// B1: xác định đầu vào - input 
var dai = 5, rong = 7;
// B2: các bước xử lý
var dienTich = dai*rong;
var chuVi = (dai+rong)*2;
// B3: in kết quả đầu ra
console.log("Diện tích là: ", dienTich);
console.log("Chu vi là : ", chuVi);

//BAI5
// B1: xác định đầu vào - input 
var n = 23; // nhập vào số có 2 chữ số
// B2: các bước xử lý
so_hang_dv = Math.floor(n%10);
so_hang_chuc = Math.floor(n/10);
tong = so_hang_dv + so_hang_chuc;
// B3: in kết quả đầu ra
console.log("Tổng 2 kí số là : ", tong);