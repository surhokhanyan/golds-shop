import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import {
    BROOCH,
    COCTAIL,
    ENGAGEMENT,
    FEMALE,
    MALE,
    NECKLACE,
    PENDANTS,
    RINGBOT,
    RINGKNICKLES,
    RINGS
} from "./Urls";
import RingsPic from "../Images/RINGS.png";
import NecklacePic from "../Images/NECKLACE.png";
import BrooshPic from "../Images/BROOCH.png";
import PendantsPic from "../Images/PENDANTS.png";
import Pic1 from "../Images/ring (1).png";
import Pic2 from "../Images/ring (2).png";
import Pic3 from "../Images/ring (3).png";
import Pic4 from "../Images/ring (4).png";
import Pic5 from "../Images/ring (5).png";
import Pic6 from "../Images/ring (6).png";
import Pic7 from "../Images/ring (7).png";
import Pic8 from "../Images/ring (8).png";
import ProductsData from "../Components/ProductsData/ProductsData";

export const routhes = [
    {
        id: Math.random(), path: MALE, name: <MaleIcon/>,categories: [
            {
                id: Math.random(), path: RINGS, name: "кольцo", image: RingsPic, subCategories: [
                    {id: Math.random(), path: COCTAIL, name: "коктейльные", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic1, name: "something", price: "1500"}
                        ]},
                    {id: Math.random(), path: ENGAGEMENT, name: "обручальные", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic2, name: "something", price: "7150"}
                        ]},
                ]
            },
            {
                id: Math.random(), path: NECKLACE, name: "колье", image: NecklacePic, subCategories: [
                    {id: Math.random(), path: RINGKNICKLES, name: "кольца кастеты", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic3, name: "something", price: "450"}
                        ]},
                    {id: Math.random(), path: RINGBOT, name: "кольцo", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic4, name: "something", price: "1850"}
                        ]},
                ]
            },
        ]
    },
    {
        id: Math.random(), path: FEMALE, name: <FemaleIcon/> ,categories: [
            {
                id: Math.random(), path: BROOCH, name: "брошь", image: BrooshPic, subCategories: [
                    {id: Math.random(), path: ENGAGEMENT, name: "обручальные", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic5, name: "something", price: "2950"}
                        ]},
                    {id: Math.random(), path: COCTAIL, name: "коктейльные", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic6, name: "something", price: "3650"}
                        ]},
                ]
            },
            {
                id: Math.random(), path: PENDANTS, name: "кулоны", image: PendantsPic, subCategories: [
                    {id: Math.random(), path: RINGBOT, name: "кольцo", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic7, name: "something", price: "4550"}
                        ]},
                    {id: Math.random(), path: RINGKNICKLES, name: "кольца кастеты", element: () => <ProductsData/>, products: [
                            {id: Math.random(), image: Pic8, name: "something", price: "8150"}
                        ]},
                ]
            },
        ]
    }
];