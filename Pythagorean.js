/**
 * Author - Sudeep Agarwal
 */
let i = 0
let a = [0, 0, 0]       //Pair [x,y,z]

const n = Number.MAX_SAFE_INTEGER

while (i < 20) {

    // If Number i is even 
    //Formula to satisfy x^2+y^2 = z^2
    // x = i, y = (i/2)^2-1 , z = (i/2)^2+1 

    if (i % 2 == 0) {
        a[0] = i                                        //x
        a[1] = parseInt((i / 2) ** 2 - 1)               //y
        a[2] = parseInt((i / 2) ** 2 + 1)               //z
    }

    // If Number i is odd
    //Formula to satisfy x^2+y^2 = z^2
    // x = i, y = (i^2-1)/2 , z = (i^2+1)/2

    else {
        a[0] = i                                        //x
        a[1] = parseInt((i ** 2 - 1) / 2)               //y
        a[2] = parseInt((i ** 2 + 1) / 2)               //z
    }

    // To satisfy x^2+y^2 = z^2, x < z and y < z, And to prevent duplication x < y

    if (a[0] < a[1] && a[0] < a[2])
        console.log(a)

    i++;
}

/**
 *   I hope that this is one of the optimize solution.
 *   To design this first I have find pairs in the range from 1 to 20
 *   Then, recognizing pattern in pairs, and found above mention pattern.
 */