console.log('desire.js and data.json loaded');
const debugwrapper = document.querySelector('.debug-wrapper');
debugwrapper.style.display = 'none';

fetch('./assets/list/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const container = document.querySelector('.main-container');

        data.forEach(entry=> {
            let itemCard = document.createElement('div');
            itemCard.classList.add('item-card');

            // status
            let statusElement = document.createElement('div');
            statusElement.classList.add('status');

            if(entry.status === 1){
                statusElement.classList.add('high');
            }　else if(entry.status === 2){
                statusElement.classList.add('medium');
            } else if(entry.status === 3){
                statusElement.classList.add('low');
            } else {
                statusElement.classList.add('none');
            }

            //item
            let itemElement = document.createElement('p');
            itemElement.classList.add('item');
            itemElement.textContent = entry.item;

            //value
            let valueElement = document.createElement('p');
            valueElement.classList.add('value');
            valueElement.textContent = entry.value;

            //div
            itemCard.appendChild(statusElement);
            itemCard.appendChild(itemElement);
            /* itemCard.appendChild(valueElement); */

            container.appendChild(itemCard);

        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        debugwrapper.style.display = 'block';
    });