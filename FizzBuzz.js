mostra = ""
i = 0
for (i = 1; i < 101; i++) {
    if (i % 15 == 0)
        mostra = "FizzBuzz"
    else
        if (i % 5 == 0)
            mostra = "Buzz"
        else
            if (i % 3 == 0)
                mostra = "Fizz"
            else
                mostra = i
    console.log(mostra)

}