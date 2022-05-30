// numBuckets = new Array(35);
// console.log(numBuckets.length);
// numBuckets[1] = 23;
// console.log(numBuckets);
// console.log(numBuckets.length);

function hash(key){
    let suma = 0;
    for(let i=0;i<key.length;i++){
        suma = suma + key.charCodeAt(i)
    }
    console.log(suma%35);
}

hash("key1");
// i=0;
// console.log("foo".charCodeAt(i));