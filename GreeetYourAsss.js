function Greet(){
  var arr = ["Gautam", "Anshu", "Bobby", "John", "joe"];
    for (var prop in arr){
    elem = arr[prop];
        if (elem[0] === "J" || elem[0] === "j"){
      console.log("GoodBye " + elem);
    }else{
      console.log("Hello " + elem);
    }
  }
}

Greet()
