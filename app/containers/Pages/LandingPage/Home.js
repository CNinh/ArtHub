import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Art from './Art';
import Artist from './Artist';
import { Footer } from './Footer';

const Home = () => {
    return (
        <>
            <section>
                <Navbar />
            </section>

            <section>
                <HeroSection />
            </section>

            <section>
                <Art />
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}

export default Home