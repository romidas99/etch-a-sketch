function createGrid(num) {
    for (let i = 0; i < num; i++) {
        for (let i = 0; i < num; i++) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
            gridContainer.style.cssText = `grid-template-columns:repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`
            gridItem.addEventListener('mouseenter', () => {
                gridItem.classList.add('black')
            })
        } 
    }
}
 
 const gridContainer = document.querySelector('.grid')
 
 let gridsq = document.querySelectorAll('.grid-item');
 console.log(gridsq[0])

 gridsq[0].addEventListener('mouseenter', () => {
    gridsq[0].classList.add('black')
 })