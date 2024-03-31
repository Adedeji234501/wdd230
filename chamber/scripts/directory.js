const directory = document.querySelector('.directory');

const url = 'data/members.json';

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayInfo(data.companies);
}

function displayInfo(companies) {
    companies.forEach((company) => {
        const container = document.createElement('div');

        const image = document.createElement('img');
        image.src = company.image;

        const name = document.createElement('h2');
        name.textContent = company.name;
        
        const description = document.createElement('p');
        description.setAttribute("class", "description");
        description.textContent = company.description;

        const address = document.createElement('p');
        address.setAttribute('class', 'address');
        address.textContent = company.address;

        const phone = document.createElement('p');
        phone.setAttribute('class', 'phone');
        phone.textContent = company.phone;

        const membership = document.createElement('p');
        membership.setAttribute('class', 'membership');
        membership.textContent = company.membershipLevel;

        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(description);
        container.appendChild(address);
        container.appendChild(phone);
        container.appendChild(membership);

        directory.appendChild(container);

    });
}

fetchData(url);

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

gridBtn.addEventListener('click', () => {
    directory.classList.replace('list', 'grid');
});

listBtn.addEventListener('click', () => {
    directory.classList.replace('grid', 'list');
});