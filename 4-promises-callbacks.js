setImmediate(() => {
    console.log('setImmediate')
})

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise
    .resolve(1)
    .then(() => {
        console.log('Promise')
    })

process.nextTick(() => {
    console.log('process.nextTick')
})

// Event loop priority