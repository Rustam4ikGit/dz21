let memory_btns = document.querySelectorAll(`[data-price]`)
let price_org = document.querySelectorAll('#price_org')
const org_price = 1999

memory_btns.forEach(btn => {
    btn.onclick = () => {
        memory_btns.forEach(el => el.classList.remove('active'))
        btn.classList.add(`active`)
        
        const add_price = +btn.getAttribute('data-price')
        
        let total = (org_price + add_price).toLocaleString('us-US')

        price_org_view.innerHTML = `$ $ {total}`
    }
})

let img = document.querySelector('img')
let colorBtn = document.querySelectorAll('button')

let pictures = {
    purple: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840578",
    blac: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840519",
    gold: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840488",
    Silver: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840488",
}

colorBtn.forEach((btn, ind) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')

        console.log(key);

        img.src = pictures[key]
    }
})