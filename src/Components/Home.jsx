import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// <TfiDownload /> fleche de téléchargement
export default function Home(){
    return(<div className="bg-black text-white">
        <header className="relative max-md:h-[75vh] gradient border-b-8 border-zinc-700 ">
        <img className="h-full absolute top-0" src="./static/media/NL-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className=" w-full flex flex-row justify-between items-center absolute top-0">
                <img className="ms-4" src="./static/media/icons8-netflix-96.png" alt="" />
                <a className=" bg-red-500 text-white p-1 me-4 rounded" href="#">Se Connecter</a>
        </div>
        <div className="absolute h-full w-full top-[20%]  flex flex-col items-center">
            <h1 className="text-3xl text-center font-bold  text-white m-5">Films illimités, émissions de télévision, etc.</h1>
            <p className="text-white text-center m-3">Regarder n'importe où. Annulez à tout moment.</p>
            <p className="text-white text-center m-3">Prêt à regarder ? Saisissez votre e-mail pour créer ou redémarrer votre adhésion.</p>
            <div className="flex flex-col items-center justify-center sm:flex-row">
                <input type="text" className=" h-10 w-3/4  m-5 px-4 rounded-md bg-transparent text-white  opacity-75 border border-gray-400 " placeholder="Adresse e-mail" />
                <button className="bg-red-600 p-2 text-white w-max rounded px-3">Commencer <MdOutlineKeyboardArrowRight style={{width:30,height:30}} /></button>
            </div>
        </div>
        </header>
        <section className="py-4  border-b-8 border-zinc-700">
            <div className="my-4">
                <h1 className="text-3xl text-center">Enjoy on your TV</h1>
                <p className="text-center mx-8">Watch on Smart TVs,Playstation, Xbox, Chromecast, Apple TV, Bly-ray players, and more.</p>
            </div>
            <div className=" flex flex-row justify-center">
            {/* on remplacera par une video */}
                <img className="w-3/4 mx-auto" src="./static/media/ML-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
            </div>
            
        </section>
        <section className="py-4  border-b-8 border-zinc-700">
            <div className="my-4">
                <h1 className="text-3xl text-center">Download your shows to watch offline</h1>
                <p className="text-center mx-8">Save your favorites easily and always have somethe=ing to watch.</p>
            </div>
            <div className="flex flex-col my-4 justify-center items-center relative">
                <img className="h-full" src="./static/media/mobile-0819.jpg" alt="" />
                <div className="h-16 w-3/4 border-slate-100 border bg-black rounded-xl absolute bottom-4">
                </div>
            </div>
        </section>
        <section className="py-4  border-b-8 border-zinc-700">
        <div className="my-4">
                <h1 className="text-3xl text-center">Whatch everywhere</h1>
                <p className="text-center mx-8">Stream unilimited movies and TV shows on your phone, tablet,laptop, and TV.</p>
            </div>
        </section>
        <section className="py-4  border-b-8 border-zinc-700">
        <div className="my-4">
                <h1 className="text-3xl text-center">Create profile for kids </h1>
                <p className="text-center mx-8">Send kids on adventures with their favorite characters in a space made just for them free with your membership.</p>
        </div>
        {/* On remplecera par sa vraie image */}
        <div className="flex flex-row justify-center items-center my-4">
        <img className="w-3/4" src="./static/media/ML-en-20240429-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
        </section>
        <section className="py-4  border-b-8 border-zinc-700 flex flex-col items-center">
            <h1>Frequently Asked Questions</h1>
            <div className="h-12 w-[90%] mt-3 flex flex-row justify-between bg-zinc-700 p-3">
                <h2>What is Netflix ?</h2>
                <button><AiOutlinePlus style={{width:30,height:30}} /></button>
            </div>
            <div className="h-12 w-[90%] mt-3 flex flex-row justify-between bg-zinc-700 p-3">
                <h2>How much do netflix cost ?</h2>
                <button><AiOutlinePlus style={{width:30,height:30}} /></button>
            </div>
            <div className="h-12 w-[90%] mt-3 flex flex-row justify-between bg-zinc-700 p-3">
            <h2>Where can I whach?</h2>
            <button><AiOutlinePlus style={{width:30,height:30}} /></button>
            </div>
            <div className="h-12 w-[90%] mt-3 flex flex-row justify-between bg-zinc-700 p-3">
            <h2>How do I cancel ?</h2>
            <button><AiOutlinePlus style={{width:30,height:30}} /></button>
            </div>
            <div className="h-12 w-[90%] mt-3 flex flex-row justify-between bg-zinc-700 p-3">
            <h2>what can I whach on Netflix ?</h2>
            <button><AiOutlinePlus style={{width:30,height:30}} /></button>
            </div>
            <div className="h-12 w-[90%] mt-3 flex flex-row justify-between bg-zinc-700 p-3">
            <h2>Is Netflix good for kids?</h2>
            <button><AiOutlinePlus style={{width:30,height:30}} /></button>
            </div>
            <div>
                <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                <div className="flex flex-col items-center sm:flex-row">
                <input type="text" className=" h-10 w-3/4  m-5 px-4 rounded-md bg-transparent text-white  opacity-75 border border-gray-400 " placeholder="Adresse e-mail" />
                <button className="bg-red-600 p-2 w-max text-white rounded px-3">Commencer <MdOutlineKeyboardArrowRight style={{width:30,height:30}} /></button>
                </div>
            </div>
        </section>
        <footer>
        <div><a href="https://help.netflix.com/contactus">Des questions ? contacter nous</a></div>
        <div><a href="https://help.netflix.com/support/412">FAQ</a></div>
        <div><a href="https://www.netflix.com/youraccount">Compte</a></div>
        <div><a href="http://ir.netflix.com/">Rélation avec investisseurs</a></div>
        <div><a href="https://www.netflix.com/watch">Moyen de surveiller</a></div>
        <div><a href="https://help.netflix.com/legal/privacy">Confidentialité</a></div>
        <div><a href="https://help.netflix.com/legal/corpinfo">Informations sur les entréprises</a></div>
        <div><a href="https://fast.com/">Epreuve de vitesse </a></div>
        <div><a href="https://www.netflix.com/ml/browse/genre/839338">Uniquement sur Netflix</a></div>
        <div><a href="https://help.netflix.com/">Centre aide</a></div>
        <div><a href="https://media.netflix.com/">Centre des médias</a></div>
        <div><a href="https://jobs.netflix.com/jobs">Emplois</a></div>
        <div><a href="https://help.netflix.com/legal/termsofuse">Confidentialité et condition</a></div>
        <div><a href="https://www.netflix.com/ml/#">Préferences aux cookies</a></div>
        <div><a href="https://help.netflix.com/contactus">Nous contacter</a></div>
        <div><a href="https://help.netflix.com/legal/notices">Mention legal</a></div>
        </footer>
    </div>)
}
