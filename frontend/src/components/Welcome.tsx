import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from './Loader.tsx';


const Input = ({placeholder,name,type} : {placeholder:string,name:string,type:string}) => (
    <input 
    placeholder = {placeholder}
    name = {name}
    type = {type}
    //onChange={(e)=>{handleChange(e,name)}}
    className="my-2 w-full p-1 text-white rounded-sm outline-none bg-transparent white-glassmorphism"
    />
)

const Welcome = () => {
    const commonStyles = "min-h-[70px] sm:px-0 px-2 flex justify-center items-center border-[1px] border-black text-black"

    const HandleSubmit = () => {
        
    }

    const connectWallet = () => {

    }
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-12">
                    <h1 className="text-3xl sd:text-5xl">
                        Send Crypto <br/> around the World!
                    </h1>
                    <p className="text-left mt-5 md:9/12 w-11/12 text-base">
                        Buy and Sell crypto <br/> anytime anywhere on the world!
                    </p>
                    <button 
                        type="button"
                        onClick={connectWallet} 
                        className="text-white font-semibold bg-[#2952e3] my-5 flex flex-row justify-center items-center rounded-full p-3 hover:bg-[black]"
                    >
                        Connect Wallet
                    </button>
                    <div className="flex grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Readability
                        </div>
                        <div className={`${commonStyles}`}>
                            Immutability
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Security
                        </div> 
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Blockchain
                        </div>
                        <div className={`${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Web 3.0
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card">
                        <div className="flex flex-col justify-between w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="flex w-10 h-10 rounded-full border-white border-2 justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff"/>
                                </div>
                                <BsInfoCircle color="#fff"/>
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    Address
                                </p>
                                <p className="mt-1 font-semibold text-white">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 w-full flex flex-col justify-start bg-black rounded-xl">
                        <Input placeholder="Address to" type="text" name="addressTo" handleChange={()=>{}}/>
                        <Input placeholder="Amount(ETH)" type="text" name="addressTo" handleChange={()=>{}}/>
                        <Input placeholder="Keyword(GIF)" type="text" name="addressTo" handleChange={()=>{}}/>
                        <Input placeholder="Enter Message" type="text" name="addressTo" handleChange={()=>{}}/>
                        <div className="h-[1px] w-full bg-gray-400 my-2"></div>
                        {false ? (
                            <Loader />
                        ) : (
                            <button type="button" onClick={HandleSubmit} className="text-white w-full cursor-pointer">SEND</button>
                        )}
                    </div>
                    
                </div>

            </div>
        </div>

    );
}

export default Welcome;