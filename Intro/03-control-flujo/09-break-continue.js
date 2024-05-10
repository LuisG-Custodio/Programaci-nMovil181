let i = 0;
while (i < 7) {
    i++;
    if (i === 2) {
        continue
    };
    if (i === 5) {
        break;
    }
    console.log(i);
}