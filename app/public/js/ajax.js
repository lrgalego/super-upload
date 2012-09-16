(function(SuperUpload){

  var ajax = function(args /*url, formData, beforeSend, afterSend, */){
    xhr = new XMLHttpRequest();

    if(args.beforeSend){
      xhr = args.beforeSend(xhr);
    }
    xhr.addEventListener('load', function(event){
      onLoadHandler(event, args.afterSend);
    }, false);

    xhr.open("POST", args.url, true);
    xhr.send(args.formData);
  }

  function onLoadHandler(event, callback){
    var status = null;
    try {
      status = event.target.status;
    } catch(e){
      return;
    }

    if(status == '200' && event.target.responseText){
       callback(JSON.parse(event.target.responseText));
    }
  }

  SuperUpload.ajax = ajax;

})(SuperUpload);
