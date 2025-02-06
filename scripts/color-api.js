render();

async function render() {
    try {
        const resp = await axios.get(`https://www.thecolorapi.com/scheme?hex=ffabcd&count=3`);
        console.log(resp);
        for(let i = 0; i < 3; i++) {
            console.log(resp.data.colors[i].hex.value);
        }
    }
    catch (error) {
        console.log(error);
    }
}