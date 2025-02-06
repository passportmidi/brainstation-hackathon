const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const colorHex = e.target.colorPicker.value.slice(1);

    console.log(`https://www.thecolorapi.com/scheme?hex=${colorHex}&count=3`);

    const resp = await axios.get(
      `https://www.thecolorapi.com/scheme?hex=${colorHex}&count=3`
    );
    console.log(resp);
    for (let i = 0; i < 3; i++) {
      console.log(resp.data.colors[i].hex.value);
    }
  } catch (e) {
    console.log(e);
  }
});
