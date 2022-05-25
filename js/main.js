var dsnv = new DanhSachNhanVien();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function layThongTinNV() {
    //Dom toi cac the input lay value
    var _tknv = getEle("tknv").value;
    var _tenNV = getEle("txtTenNV").value;
    var _email = getEle("txtEmail").value;
    var _pass = getEle("txtPass").value;
    var _ngayLam = getEle("txtNgayLam").value;
    var _luongCoBan = getEle("luongCoBan").value;
    var _chucVu = getEle("txtChucVu").value;
    var _gioLam = getEle("gioLam").value;

    //Tao doi tuong nhanVien tu lop doi tuong NhanVien
    var nhanVien = new NhanVien(
        _tknv,
        _tenNV,
        _email,
        _pass,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam,
    );
    // console.log(nhanVien);

    nhanVien.tinhLuong();
    nhanVien.xepLoaiNV();

    return nhanVien;
}

/**
 * Them nhan vien
 */

// var contents = getEle("btnThemNV");
// contents.onclick = function () {
//   var nhanVien = layThongTinNV();
//   //them NV
//   dsnv.themNV(nhanVien);
//   taoBang(dsnv.arr);
//   setLocalStorage();
// };

getEle("btnThemNV").onclick = function () {
    var nhanVien = layThongTinNV();
    //them NV
    // console.log(dsnv);
    dsnv.themNV(nhanVien);
    // console.log(dsnv.arr);
    taoBang(dsnv.arr);
    setLocalStorage();
};

function taoBang(data) {
    var content = "";
    data.forEach(function (item) {
        // console.log(item);
        content += `
        <tr>
            <td>${item.tknv}</td>
            <td>${item.tenNV}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>${item.luong}</td>
            <td>${item.xepLoai}</td>
            <td>
                <button class="btn btn-info" onclick="suaNV('${item.tknv}')"> Sửa </button> 
                <button class="btn btn-danger" onclick="xoaNV('${item.tknv}')"> Xóa </button> 
            </td>
        </tr>
    `;
    });

    getEle("tbodyNhanVien").innerHTML = content;
}

// Xóa NV
function xoaNV(id) {
    dsnv.xoaNV(id);
    taoBang(dsnv.arr);
    setLocalStorage();
}

// Sửa NV
function suaNV(id) {
    var nv = dsnv.suaNV(id);
    if (nv) {
        //Dom toi cac the input lay value
        getEle("tknv").value = nv.tknv;
        getEle("txtTenNV").value = nv.tenNV;
        getEle("txtEmail").value = nv.email;
        // getEle("txtPass").value = nv.matKhau;
        getEle("txtNgayLam").value = nv.ngayLam;
        // getEle("luongCoBan").value = nv.luongCoBan;
        getEle("txtChucVu").value = nv.chucVu;
        getEle("gioLam").value = nv.gioLam;

        //Hien thi lai button "Cap Nhat"
        getEle("btnCapNhat").style.display = "inline-block";
        //disable input#txtMaSV
        getEle("tknv").disabled = true;
    }
}

// Cập nhật NV
getEle("btnCapNhat").onclick = function () {
    var nhanVien = layThongTinNV(false);
    dsnv.capNhat(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
};

// Tìm kiếm NV
getEle("keyword").addEventListener("keyup", function () {
    var keyword = getEle("keyword").value;
    var mangTimKiem = dssv.timKiemNV(keyword);
    taoBang(mangTimKiem);
  });


function setLocalStorage() {
    //Convert from JSON to String
    var dataString = JSON.stringify(dsnv.arr);
    //luu xuong localStorage
    localStorage.setItem("DSNV", dataString);
    // console.log(568);
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
        //Convert from String to JSON
        var dataJson = JSON.parse(dataString);
        dsnv.arr = dataJson;
        taoBang(dsnv.arr);
    }
}
