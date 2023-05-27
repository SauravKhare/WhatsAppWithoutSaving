const numberInput = document.querySelector("#number")
const ccSelect = document.querySelector("#ccodes")
const button = document.querySelector("#walinkbutton")

let countryCodes;
let ccCode = ccSelect.value;
let number;

const fetchCCodes = async () => {
    const req =  await fetch('/CountryCodes.json');
    const res = await req.json()
    countryCodes = res;
    countryCodes.map((cc, i) => {
        let opt = document.createElement("option");
        opt.text = cc.name;
        opt.value = cc.dial_code;
        ccSelect.add(opt);
    });
}

const waLinkMaker = () => {
    number = numberInput.value;
    let link = `https://api.whatsapp.com/send?phone=${ccCode}${number}`;
    button.href = link;
}

ccSelect.addEventListener('change', (event) => {
    let ccTemp = event.target.value;
    let ccTest = ccTemp.replace("+","");
    ccCode = ccTest;
});

fetchCCodes();

numberInput.addEventListener("keyup", waLinkMaker);