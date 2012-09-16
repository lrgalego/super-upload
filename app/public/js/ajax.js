(function(SuperUpload){

  var ajax = function(args /*url, formData, beforeSend, afterSend, */){
    xhr = new XMLHttpRequest();

    if(args.beforeSend){
      xhr = args.beforeSend(xhr);
    }
    xhr.addEventListener('load', function(data){args.afterSend(data)}, false);

    xhr.open("POST", args.url, true);
    xhr.send(args.formData);
  }

  SuperUpload.ajax = ajax;

})(SuperUpload);
