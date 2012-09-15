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
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', this.onLoad, false);

  xhr.open('POST', 'save', true);
  xhr.send(formData);
}

FormSave.prototype.onLoad = function(data){
  console.log(data);
}
