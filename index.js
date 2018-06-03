function countdown(callback){
  window.setTimeout(function(){
    callback();
  },2000);
}

function multiplierValue(num){
  var doubler = function() {
    return num*num;
  }();
}