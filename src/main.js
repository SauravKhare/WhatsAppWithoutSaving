const numberInput = document.querySelector("#nowanumber");
const waLink = document.querySelector("#walink");
const getWALinkButton = document.querySelector("#walinkbutton");
const countrySelector = document.querySelector("#ccodes");




let nonWANumber = '';
let countryCode = countrySelector.value.replace("+","");
let defaultCC = countrySelector.value;
let CC = [];
console.log(typeof nonWANumber)
console.log(countryCode)

const fetchCCodes = async () => {
    const res =  await fetch('src/cc.json');
    const data = await res.json()
    CC = data;
    console.log(CC);
    CC.map((cc, i) => {
        let opt = document.createElement("option");
        opt.text = cc.name;
        opt.value = cc.dial_code;
        countrySelector.add(opt);
    });
}


const createWANumber = () => {
    console.log(nonWANumber);
    console.log(`This is a WA Link: https://api.whatsapp.com/send?phone=${countryCode}${nonWANumber}`);
    let link = `https://api.whatsapp.com/send?phone=${countryCode}${nonWANumber}`;
    waLink.classList.remove("hide");
    waLink.href = link;
    waLink.textContent = `Message ${nonWANumber}`;
    // window.location = link;
}

numberInput.addEventListener('input', (event) => {
    nonWANumber = event.target.value;
    console.log(nonWANumber)
    // nonWANumber.length === 10 ? getWALinkButton.disabled = false : null;
});

getWALinkButton.addEventListener('click', createWANumber);
countrySelector.addEventListener('change', (event) => {
    let ccTemp = event.target.value;
    let ccTest = ccTemp.replace("+","");
    console.log(ccTemp)
    console.log(ccTest)
    countryCode = ccTest;
});

fetchCCodes();