var Uploader = function(){
  var that = this;

  this.file = document.getElementById("file");
  file.onchange = function(){
    document.getElementById("save").removeAttribute("disabled");
    that.uploadFile();
  }
};

Uploader.prototype.uploadFile = function(){
  var formData = new FormData();

  var fileInfo = this.file.files[0];
  formData.append('file', fileInfo);

  var uuid = document.getElementById("uuid");
  formData.append('uuid', uuid.value);  

  this.upload(formData); 
};

Uploader.prototype.upload = function(formData){
  var that = this;
  SuperUpload.ajax({
    url: '/upload',
    formData: formData,
    beforeSend: function(xhr){
      xhr.upload.addEventListener('progress', that.uploadProgress, false);
      return xhr;
    }, 
    afterSend: function(data){
      that.uploadFinished(data);
    }
  });
}

Uploader.prototype.uploadProgress = function(event){
  document.getElementById('uploadStatus').innerHTML = (event.loaded / event.total * 100) + "%";
}

Uploader.prototype.uploadFinished = function(data){
  document.getElementById('uploadStatus').innerHTML = "100%";
  document.getElementById('uploadFile').href = data.path;
  document.getElementById('uploadFile').innerHTML = data.path;
}

new Uploader();
