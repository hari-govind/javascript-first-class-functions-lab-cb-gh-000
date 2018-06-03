function countdown(callback){
  window.setTimeout(function(){
    callback();
  },2000);
}

function multiplierValue(num){
  return var doubler = function() {
    return 2*num;
  }();
  return var tripler = function(){
    return 3*num;
  }();
}