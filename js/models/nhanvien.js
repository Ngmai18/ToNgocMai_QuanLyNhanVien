function NhanVien
    (
        _tknv,
        _tenNV,
        _email,
        _matKhau,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam) {
    this.tknv = _tknv;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;

    this.luong = 0;
    this.xepLoai = 0;

    this.tinhLuong = function () {
        if (_chucVu == "Trưởng phòng") {
            this.luong = _luongCoBan * 2;
        } else if (_chucVu == "Sếp") {
            this.luong = _luongCoBan * 3;
        } else if (_chucVu == "Nhân viên") {
            this.luong = _luongCoBan * 1;
        }
    };

    this.xepLoaiNV = function () {
        if (_gioLam >= 192) {
            this.xepLoai = "Xuất sắc";
        } else if (_gioLam >= 176 && _gioLam < 192) {
            this.xepLoai = "Giỏi";
        } else if (_gioLam >= 160 && _gioLam < 176) {
            this.xepLoai = "Khá";
        } else if (_gioLam < 160) {
            this.xepLoai = "Trung bình";
        }
    };
}

