for (let count = 0; count <= 5; count++) {
    console.log(`El contador a: ${count}`);
}

for (let count = 0; count < 5; count++) {
    console.log(`El contador b: ${count}`);
}

for (let count = 0; count <= 100; count += 10) {
    console.log(`El contador c: ${count}`);
}

for (let count = 5; count > 0; count--) {
    console.log(`El contador d: ${count}`);
}

for (let count = 10; count > 0;) {
    console.log(`El contador e: ${count}`);
    count -= 2;
}