function calculateGPA(arr) {
    sum = 0
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] === "A") {
      sum = sum + 100;
    } else if (arr[i] === "B") {
        sum = sum + 80;
    } else if (arr[i] === "C") {
        sum = sum + 70;
    }
  }
  console.log(sum);
  var class_avg = sum/arr.length;
  // console.log(sum/arr.length);   

  if(class_avg == "100"){
    avg_grade = 'A';
    else if(class_avg == "80"){
      avg_grade = 'B';
  }else if(class_avg == "70"){
    avg_grade = 'C';

}

var arr = ["A", "B", "C", "D"];
calculateGPA(arr);
