module.exports = function(src, done, options) {
  if( !src ) throw new Error('missing src');
  if( arguments.length == 2 && typeof done !== 'function' ) options = done, done = null;
  if( typeof options == 'boolean' ) options = {sync:options};
  
  var text,
    error,
    sync = (options && options.sync) === true ? true : false,
    method = (options && options.method) || 'GET';
    scope = (options && options.scope) || this;
  
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open(method, src, !sync);
  
  if( options ) {
    for(var k in options.headers) xhr.setRequestHeader(k, options.headers);
    if( options.mimetype ) xhr.overrideMimeType(options.mimetype);
  }
  
  xhr.onreadystatechange = function(e) {
    if( this.readyState == 4 ) {
      if( this.status == 0 || (this.status >= 200 && this.status < 300) ) {
        text = this.responseText;
        done && done.call(scope, null, text, xhr);
      } else {
        error = new Error('[' + this.status + '] ' + this.responseText);
        done && done.call(scope, error, null, xhr);
      }
    }
  };
  
  if( options && options.payload ) xhr.send(JSON.stringify(options.payload));
  else xhr.send();
  
  if( error ) throw error;
  return text;
};