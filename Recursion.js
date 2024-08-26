console.log(0)
console.log(1)
count = 2
 function FiboNacci(prev1, prev2){
    while (count <= 18){
        newFibo = prev1 + prev2
        console.log(newFibo)
        prev2 = prev1
        prev1 = newFibo
        count += 1
        FiboNacci(prev1, prev2)
 }
}

FiboNacci(1,0)