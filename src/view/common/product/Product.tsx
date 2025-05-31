import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

type ProductData = {
    id: number;
    name: string;
    price: number;
    color: string;
    ram: string;
    storage: string;
    image: string;
}

type ProductProps = {
    data: ProductData;
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*',{eager:true,import: 'default'});

export function Product ({data}: ProductProps) {
    return (
        <div
            className="w-72 h-[420px] p-4 bg-white shadow-md rounded-xl text-black flex flex-col justify-between items-center hover:scale-105 transition-all duration-500 ease-in-out">
            <div>
                <img src={images[`../../../assets/products/${data.image}`]} alt="device-image" className="w-[128px] h-[128px]"/>
            </div>
            <div>
                <h2 className="text-2xl font-bold ">{data.name}</h2>
            </div>
            <div className="text-center">
                <p className="text-1xl ">
                    {data.price}
                </p>
                <p>
                    color: {data.color}<br/>
                    ram: {data.ram}<br/>
                    storage: {data.storage}<br/>
                </p>
            </div>
            <div className="flex justify-center items-center">
                <button
                    className="w-fit h-fit bg-orange-500 hover:bg-orange-600 transition text-white p-2 rounded-lg text-base font-semibold transition-colors"
                >
                    Add To Cart <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
        </div>
    );
}