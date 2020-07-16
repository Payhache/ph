var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

if (initialTx < lightX) {
    for (let x = initialTx; x < lightX; x++)
        console.log('E');
}




if (initialTx < lightX) { // Thor se déplace vers la droite 
    console.log('E');
} else {
    console.log('W');
}
if (initialTy > lightY) {
    console.log('N');
} else {
    console.log('S');
}


/// Déplacements cadre supérieur gauche (gauche + vers le haut gauche)
if (initialTx > lightX && initialTy > lightY) {
    do {
        console.log('NW');
        initialTx--
        initialTy--
    } while (initialTx === lightX || initialTy === lightY);
    if (initialTy > lightY) {
        for (let y = initialTy; y > lightY; y--)
            console.log('N');
    } else {
        for (let x = initialTx; x > lightX; x--)
            console.log('W');
    }
}
/// Déplacement cadre inferieur gauche (gauche + vers le bas )
if (initialTx > lightX && initialTy < lightY) {
    do {
        console.log('SW');
        initialTx--
        initialTy++
    } while (initialTx === lightX || initialTy === lightY);
    if (initialTy > lightY) {
        for (let y = initialTy; y < lightY; y++)
            console.log('S');
    } else {
        for (let x = initialTx; x > lightX; x--)
            console.log('W');
    }
}

// Déplacement cadre inferieur droite 
if (initialTx < lightX && initialTy < lightY) {
    do {
        console.log('SE');
        initialTx++
        initialTy++
    } while (initialTx === lightX || initialTy === lightY);
    if (initialTx < lightX) {
        for (let x = initialTx; x < lightX; x++)
            console.log('E');
    } else {
        for (let y = initialTy; y < lightY; y++)
            console.log('S');
    }
}

//----------------------------------

if (initialTx < lightX) {
    for (let x = initialTx; x < lightX; x++)
        console.log('E');
} else {
    for (let x = initialTx; x > lightX; x--)
        console.log('W');
}
if (initialTy > lightY) {
    for (let y = initialTy; y > lightY; y--)
        console.log('N');
} else {
    for (let y = initialTy; y < lightY; y++)
        console.log('S');
}

for(initialTx)


// while ((initialTx != lightX || initialTy === lightY) && (initialTy != lightY || initialTx === lightX));