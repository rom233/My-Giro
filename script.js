let tags = [ 'Lite', 'Pro', 'Ultra', 'Max', 'X', 'Go', 'Xs', 'Start', 'Light', 'Air', 'Mega', 'Ultra Max' ]

let imgs = [ '1.jpg', '2.jpg', '3.jpg', '4.png', '5.jpg', 'logo.jpg' ]

let container = document.getElementsByClassName("items")[0]

for (let i = 0; i < Math.floor(Math.random() * 45); i++)
{
    container.innerHTML += 
        `<div class="item">
        <div class="header">
            <img src="img/${imgs[Math.floor(Math.random() * imgs.length)]}" alt="">
            <p class="title">Gyro ${tags[Math.floor(Math.random() * tags.length)]}</p>
            <p class="price">${Math.floor(Math.random() * 80000)}₽</p>
        </div>

        <button>Купить</button>
        </div>`
}
