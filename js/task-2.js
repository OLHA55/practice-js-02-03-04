function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}




countProps({});//0
countProps({ name: "Mango", age: 2 });//2;
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });//3