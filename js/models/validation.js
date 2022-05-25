function Validation() {
    this.kiemTraRong = function (value, errorId, mess) {
      if (value === "") {
        //error
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
      }
  
      getEle(errorId).innerHTML = "";
      getEle(errorId).style.display = "none";
      return true;
    };
  
    this.kiemTraKhoaHoc = function (selectId, errorId, mess) {
      if (getEle(selectId).selectedIndex !== 0) {
        //true
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
      }
      //false
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    };
  
    this.kiemTraDoDaiKiTu = function (value, errorId, min, max, mess) {
      if (value.trim().length >= min && value.trim().length <= max) {
        //true
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
      }
  
      //false
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    };
  
    this.kiemChuoiKiTu = function (value, errorId, mess) {
      var letter =
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
  
      if (value.match(letter)) {
        //true
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
      }
  
      //false
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    };
  
    this.kiemTraMaSVTonTai = function (value, errorId, mess, arr) {
      var isStatus = true;
  
      arr.forEach(function (item) {
        if (item.maSV === value) {
          //MaSV ton tai
          isStatus = false;
        }
      });
  
      if (isStatus) {
        //true
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
      }
  
      //false
      getEle(errorId).innerHTML = mess;
      getEle(errorId).style.display = "block";
      return false;
    };
  }
  