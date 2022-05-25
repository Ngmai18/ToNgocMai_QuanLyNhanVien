function DanhSachNhanVien() {
  this.arr = [];

  this.themNV = function (nv) {
    this.arr.push(nv);
  };

  this.timViTriNV = function (tknv) {
    var index = -1;
    this.arr.forEach(function (item, i) {
      if (item.tknv === tknv) {
        index = i;
      }
    });

    return index;

  };

  this.xoaNV = function (tknv) {
    var index = this.timViTriNV(tknv);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this.suaNV = function (tknv) {
    var index = this.timViTriNV(tknv);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };

  this.capNhat = function (nv) {
    var index = this.timViTriNV(nv.tknv);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };

  this.timKiemNV = function (keyword) {
    var mangTimKiem = [];

    this.arr.forEach(function (item) {
      if (item.tenNV.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        mangTimKiem.push(item);
      }
    });

    return mangTimKiem;
  };
}
