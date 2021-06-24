//1 We generate a random color using Math.random() function
//2. We use the .toString() with radix 16 so it will return a hex
//3. We use the .substring() method to return only six characters using the indexes
//4. Then we just aply the random color to the body as backgroundColor
//5. We also insert the random hex number to the counter
const hex = document.querySelector('#hex')
const btn = document.querySelector('.btn')

const generateRandomColor = () => {
    const randomHex = Math.random().toString(16).substring(2, 8)
    document.body.style.backgroundColor = `#${randomHex}`
    hex.innerHTML = `#${randomHex}`
}

btn.addEventListener('click', generateRandomColor)
generateRandomColor()