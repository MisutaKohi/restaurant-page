function renderWineList() {
    const body = document.getElementById('content');
    body.innerHTML = `
        <p id='wines-list'>
            Our wines include:
            <ul>
                <li>Pinot Noir</li>
                <li>Pinot Gris</li>
                <li>Chardonnay</li>
                <li>Granache</li>
                <li>Riesling</li>
            </ul>
        </p>
    `;
}

export default renderWineList;