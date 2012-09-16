var Uploader = function(){
  var that = this;

  this.file = document.getElementById("file");
  file.onchange = function(){
    that.uploadFile();
  }
};

Uploader.prototype.uploadFile = function(){
  var formData = new FormData();

  var fileInfo = this.file.files[0];
  formData.append('file', fileInfo);

  var uuid = document.getElementById("uuid");
  formData.append('uuid', uuid);  

  this.upload(formData); 
};

Uploader.prototype.upload = function(formData){
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', this.onLoad, false);

  xhr.open("POST", "/upload", true);
  xhr.send(formData);
}

Uploader.prototype.onLoad = function(data){
  console.log(data);
}

new Uploader();
