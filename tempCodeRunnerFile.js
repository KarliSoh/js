const shops = [{
        rice: 500
    },
    {
        oil: 200
    },
    {
        bread: 100
    }
];

const budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 6000);

console.log(map);