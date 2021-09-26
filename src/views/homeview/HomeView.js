import React from 'react'
import { ProductCard } from '../../components/cards/productcard/ProductCard'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { ProductGrid } from '../../components/productgrid/ProductGrid'
import t1 from "../../shared/img/t1.jpg"
import { useState, useEffect } from 'react'
import axios from 'axios'

export const HomeView = () => {
    const [count, setCount] = useState(1);
    const [serverrespons, setServerRespons] = useState()
    const [serverData, setServerData] = useState ();
    const API_URL = "https://pokeapi.co/api/v2/pokemon/" + count;
    const API_URL_ALL = "https://pokeapi.co/api/v2/pokemon?limit=100"

    const fetchData = async () => {
        try{
            const respons = await axios.get(API_URL);
            setServerRespons(respons);
            setCount(count + 1);
        }
        catch (error) {
            alert("Error: " + error);
        };
    }

    const fetchDataAll = async () => {
        try{
            const {data} = await axios.get(API_URL_ALL);
            setServerData(data);
        }
        catch (error) {
            alert("Error: " + error);
        }
    };

    const displayData = () => {
        return serverData?.results.map((pokemon, i) => (
            <div key={pokemon.name}>
                <h3>
                    {i}. {pokemon.name}
                </h3>
            </div>
        ))
    };

    useEffect (() => {
        fetchDataAll()
    }, [])

    return (
        <main>
            <Header/>
            <section>
                <h2>Min API anrop:</h2> <br/>
                <h3>{serverrespons?. data?.name}</h3>
                <img src = {serverrespons?.data?.sprites?.front_default} /><br/>
                <button onClick={() => fetchData()}>API call</button>
                <button onClick={() => fetchDataAll()}>API Array call</button>
                {displayData()}
                <h2>Större text i mitten av sidan h2</h2>
                <div style={{display: "flex"}}>
                    <ProductCard name="Test produkt 1" img={t1} imgalt="bild på test produkt"/>
                    <ProductCard name="Test produkt 2" img={t1} imgalt="bild på test produkt"/>
                    <ProductCard name="Test produkt 3" img={t1} imgalt="bild på test produkt"/>
                </div>
            </section>
            <section>Section 2</section>
            <section>
                <p>mindre beskrivande text p</p>
                <h2>fetstilad rubrik h2</h2>
                <ProductGrid/>
            </section>
            <Footer/>
        </main>
    )
}
