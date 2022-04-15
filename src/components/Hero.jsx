import React from "react";
import{
    ArrowUpIcon,
    CloudUploadIcon,
    DatabaseIcon,

    ServerIcon,
} from '@heroicons/react/solid'
import img1 from '../assets/cyber-bg-1.png'

const Hero = () =>{
    return (
        <div className="w-full h-screen  bg-zinc-200 flex flex-col justify-between">
            <div className="grid lg:grid-cols-2 max-w-[1240px] m-[120px]">
                <div className="flex flex-col justify-centre md:items-start w-full px-2 ">
                    <p className="text-2xl lg:5xl font-semibold">Unique Sequencing  & Production</p>
                    <h1 className="text-3xl lg:text-8xl  md:text-3xl font-bold my-6">Cloud Management</h1>
                    <p className="text-2xl lg:5xl font-semibold">This is our Tech Brand.</p>
                    <button className="px-28 py-3 my-3 sm:w-[60%]">Get Started</button>
                </div>
                <div >
                    <img className="w-full" src={img1} alt="/"></img>
                </div>
                <div className="absolute flex flex-col py-8 md:min-w-[760px] 
                bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2
                 bg-zinc-200 borderborder-slate-300 rounded-xl text-centre shadow-xl">
                    <p className=" text-3xl lg:mx-auto ">Data Services</p>
                    <div className="flex justify-between flex-wrap px-4">
                        <p className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-indigo-600"></CloudUploadIcon>Icon. App Security</p>
                        <p className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-indigo-600"></DatabaseIcon>Icon. Dashboard</p>
                        <p className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-indigo-600"></ServerIcon>Icon. Cloud Data</p>
                        <p className="flex px-4 py-2 text-slate-500"><ArrowUpIcon className="h-6 text-indigo-600"></ArrowUpIcon>Icon.API </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;