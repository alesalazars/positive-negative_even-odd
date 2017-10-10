/* Set a list with random numbers */
var num = [3, 98, -5, -14, 999, -6, 88, 1, -9]

for (i = 0 ; i < num.length ; i++){
  /* If the number is divided by 2 and there are 0 remainders it means it's even */
  if (num[i] % 2 == 0){
    /* If it's larger that 0 it's positive */
    if(num[i] > 0)
      console.log("the number " + num[i] + " is even and positive")
    /* Else it's negative */
    else{
      console.log("the number " + num[i] + " is even and negative")
    }
  }
  /* If however there are remainders, that means the number is odd */
  else{
    /* If it's larger that 0 it's positive */
    if(num[i] > 0)
      console.log("the number " + num[i] + " is odd and positive")
    /* Else it's negative */
    else{
      console.log("the number " + num[i] + " is odd and negative")
    }
  }

}
