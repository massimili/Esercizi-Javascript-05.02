lunghezza = 10
rigaPari = ""
rigaDispari = ""
i = 0
for (i = 1; i <= lunghezza; i++) {
    if (i % 2 == 1) {
        rigaDispari = rigaDispari + "#"
        rigaPari = rigaPari + " "
    }
    else {
        rigaDispari = rigaDispari + " "
        rigaPari = rigaPari + "#"
    }
}
for (i = 1; i <= lunghezza; i++) {
    if (i % 2 == 1)
        console.log(rigaDispari)
    else
        console.log(rigaPari)
}