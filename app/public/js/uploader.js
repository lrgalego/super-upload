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
  formData.append('uuid', uuid.value);  

  this.upload(formData); 
};

Uploader.prototype.upload = function(formData){
  var that = this;
  SuperUpload.ajax({
    url: '/upload',
    formData: formData,
    beforeSend: function(xhr){
      return xhr;
    }, 
    afterSend: function(data){
      that.uploadFinished(data);
    }
  });
}

Uploader.prototype.uploadFinished = function(data){
  console.log(data);
}

new Uploader();
