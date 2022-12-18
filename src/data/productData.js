import Airpod1 from "../images/airpod1.jpeg";
import Airpod2 from "../images/airpod2.jpeg";
import Airpod3 from "../images/airpod3.jpeg";
import Airpod4 from "../images/airpod4.jpeg";
import Headphone1 from "../images/headphone1.jpeg";
import Headphone2 from "../images/headphone2.jpeg";
import Headphone3 from "../images/headphone3.jpeg";
import Headphone4 from "../images/headphone4.jpeg";
import Headphone5 from "../images/headphone5.jpeg";
import Laptop1 from "../images/laptop1.jpeg";
import Laptop2 from "../images/laptop2.jpeg";
import Laptop3 from "../images/laptop3.jpeg";
import Solarpowerbank1 from "../images/solarpowerbank1.jpeg";
import Solarpowerbank2 from "../images/solarpowerbank2.jpeg";
const products = [
    {
        id: 1,
        icon: Airpod1,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '6000',
        review: '50',
        trending: true,
        star: '3.5',
        desc: 'a pocket friendly airpod offering good sound and high quality',
        brand: 'generic'

    },
    {
        id: 2,
        icon: Airpod2,
        name: 'super comfy airpod',
        cartegory: 'electronics',
        price: '10000',
        review: '35',
        trending: false,
        star: '4.5',
        desc: 'super comfortable airpod for you sound need',
        brand: 'mocha'

    },
    {
        id: 3,
        icon: Airpod3,
        name: 'Best Sound airpod',
        cartegory: 'electronics',
        price: '13000',
        review: '60',
        trending: false,
        star: '4.5',
        desc: 'super comfortable airpod for you sound need',
        brand: 'mocha'

    },
    {
        id: 4,
        icon: Airpod4,
        name: 'airpod go',
        cartegory: 'electronics',
        price: '11000',
        review: '40',
        trending: true,
        star: '4.5',
        desc: 'perfect airpod with noise cancellation effect and good fit',
        brand: 'generic'

    },
    {
        id: 5,
        icon: Headphone1,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 6,
        icon: Headphone2,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: true,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 7,
        icon: Headphone3,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 8,
        icon: Headphone4,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 9,
        icon: Headphone5,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '5',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 10,
        icon: Laptop1,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: true,
        star: '5',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 11,
        icon: Laptop2,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 12,
        icon: Laptop3,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 13,
        icon: Solarpowerbank1,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },
    {
        id: 14,
        icon: Solarpowerbank2,
        name: 'Pocket friendly Airpod',
        cartegory: 'electronics',
        price: '15000',
        review: '40',
        trending: false,
        star: '4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum fuga, odio pariatur amet commodi autem nostrum explicabo numquam, inventore adipisci, assumenda quod libero aspernatur. Quia perferendis accusantium esse sit!',
        brand: 'generic'

    },

]

export default products;