console.time()

setTimeout(() => {
    console.log('ready')
    console.timeEnd()
}, 0)

let i = 1
while(i > 0) {
    if (i % 1e9 === 0) {
        console.log(`Executed ${i} times`)
        break
    }
    i++
}

// comment break to see block event loop