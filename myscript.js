const gridContainer = document.querySelector('.grid')

const rainbow = document.querySelector('#rainbow')

const erase = document.querySelector('#erase')

const black = document.querySelector('#black')

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < num; i++) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
            gridContainer.style.cssText = `grid-template-columns:repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`
            gridItem.addEventListener('mouseenter', () => {
                gridItem.style.backgroundColor = 'black';
            })
            black.addEventListener('click', () => {
                gridItem.addEventListener('mouseenter', () => {
                    gridItem.style.backgroundColor = 'black';
                })
            })
            rainbow.addEventListener('click', () => {
                gridItem.addEventListener('mouseenter', () => {
                    let r = Math.floor(Math.random() * 256);
                    let g = Math.floor(Math.random() * 256);
                    let b = Math.floor(Math.random() * 256);
                    gridItem.style.cssText = `background-color: rgb(${r}, ${g}, ${b});`
                })
            })
            erase.addEventListener('click', () => {
                gridItem.style.cssText = 'background-color: #f0f0f0;'
            })
        } 
    }
}

createGrid(10)

const btn = document.querySelector('#gridSize')

btn.addEventListener('click', () => {
    let size = prompt('Grid Size:')
    if (size === null) {
        alert('No grid size given')
        return;
    }
    size = parseInt(size)
    if (size < 1 || size > 100) {
        alert('Please choose a number between 1 and 100')
        return;
    }
    gridContainer.innerHTML = '';
    createGrid(size)
})



