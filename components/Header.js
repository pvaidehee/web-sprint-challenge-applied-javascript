// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const newHeader = document.createElement('div');
    const newDate = document.createElement('span');
    const newH1 = document.createElement('h1');
    const newTemp = document.createElement('span');

    newHeader.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');

    newDate.textContent = 'March 28 2020';
    newH1.textContent = 'Lambda Times';
    newTemp.textContent = '98°';

    newHeader.appendChild(newDate);
    newHeader.appendChild(newH1);
    newHeader.appendChild(newTemp);

    return newHeader;
}


const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());