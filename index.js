function countdown(callback){
  window.setTimeout(function(){
    callback();
  },2000);
}

function multiplierValue(num){
  var doubler = function() {
    return 2*num;
  }();
  var tripler = function(){
    return 3*num;
  }();
}