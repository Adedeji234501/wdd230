const directory = document.querySelector('.directory');
const card = document.querySelector('.spotlights');

const url = 'data/members.json';

async function fetchData(url) 
{
    try 
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const data = await response.json();
            displayInfo(data.companies);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
function displayInfo(companies) 
{
    if (!!directory)
    {
        companies.forEach((company) => 
        {
            const container = document.createElement('div');

            const img = document.createElement('img');
            img.src = company.img;

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

            const url = document.createElement('a')
            url.setAttribute('class', 'url');
            url.href = company.url;
            url.textContent = 'Website';

            const membership = document.createElement('p');
            membership.setAttribute('class', 'membership');
            membership.textContent = company.membershipLevel;

            container.appendChild(img);
            container.appendChild(name);
            container.appendChild(description);
            container.appendChild(address);
            container.appendChild(phone);
            container.appendChild(url);
            container.appendChild(membership);

            directory.appendChild(container);
        })
    }
    else if (card) {
        let count = 0;
        let indices = [...Array(companies.length).keys()];
        indices = indices.sort(() => Math.random() - 0.5);
    
        for (let i of indices) {
            if (count >= 3) break;
    
            if (companies[i].membershipLevel.toLowerCase() === "gold" || companies[i].membershipLevel.toLowerCase() === "silver") {
                const div = document.createElement("div");
                div.classList.add("card");
                const img = document.createElement("img");
                img.src = companies[i].img;
                const h3 = document.createElement("h3");
                h3.textContent = companies[i].name;
                const h4 = document.createElement("h4");
                h4.textContent = companies[i].description;
                const p = document.createElement("p");
                p.textContent = companies[i].phone;
                const p2 = document.createElement("p");
                const a = document.createElement("a");
                a.href = companies[i].url;
                a.textContent = "Website";
                p2.appendChild(a);
                div.append(img, h3, h4, p, p2);
                card.appendChild(div);
                count++;
            }
        }
    }
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