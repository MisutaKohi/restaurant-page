function renderAboutUs() {
  const body = document.getElementById("content");
  body.innerHTML = `
        <p id='winery-about-us'>
            We are a family-owned and operated winery.
            Our roots run deep in the Willamette Valley
            and we believe in good ol' fashioned farm to 
            table eating with wines that pair perfectly with
            our local cuisine.
        </p>
    `;
}

export default renderAboutUs;
