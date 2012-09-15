Uploader = function(){
  var that = this;

  this.file = document.getElementById("file");
  file.onchange = function(){
    that.uploadFile();
  }
};

Uploader.prototype.uploadFile = function(){
  var fileInfo = this.file.files[0];
  var formData = new FormData();
  formData.append('file', fileInfo);
  this.upload(formData); 
};

Uploader.prototype.upload = function(formData){
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "/upload", true);
  xhr.send(formData);
}

new Uploader();
