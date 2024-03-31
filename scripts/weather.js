const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.40&lon=4.09&units=imperial&appid=b346512c4fc62f254f88e918d6b4cc21"


async function apiFetch() 
{
    try
    {
        const response = await fetch(url);

        if (response.ok)
        {
            const data = await response.json();
            displayResults(data);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

function displayResults(data)
{
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let desc = data.weather[0].description;

    desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    weatherIcon.src = iconSrc;
    weatherIcon.alt = desc;
    captionDesc.textContent = desc;
}

apiFetch();
