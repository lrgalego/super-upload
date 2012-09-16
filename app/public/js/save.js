var FormSave = function(){
  var that = this;

  this.form = document.getElementById('upload');
  document.getElementById('save').onclick = function(){
    that.submitForm();
  }
};

FormSave.prototype.submitForm = function() {  
  var formData = new FormData(this.form);
  this.post(formData);
};

FormSave.prototype.post = function(formData) {
  var that = this;
  SuperUpload.ajax({
    url: '/save',
    formData: formData,
    afterSend: function(data){
      that.onLoad(data);
    }
  });
}

FormSave.prototype.onLoad = function(data){
  console.log(data);
}

new FormSave();
