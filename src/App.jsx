import './App.css';
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import land from './assets/land.jpg';
import moon from './assets/moon.jpg';
import code from './assets/code.jpg';
import bg from './assets/bg.jpg';
import question from './assets/question.jpg';
import reactimg from './assets/react.jpg';
import reactlogo from './assets/react.png';
import githublogo from './assets/github.png';
import vitelogo from './assets/vite.png';
import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
ReactDOM.render(<App />, document.getElementById('root'));
function App() {
  return (
    <div>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <Parallax pages={5}>
          <ParallaxLayer
            offset={-1}
            speed={0.5}
            factor={1}
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: 'cover',
              width: '105%',
              height: '105%',
            }}
          />
          
          <ParallaxLayer offset={0} speed={0.5} factor={1}>
          <MouseParallaxChild factorX={0.3} factorY={0.5}>
            <div className="container" style={
              {width: '50%',}
            }>
            <div className="centered">
              <section id='top'>
              <h1>Welkom op mijn website!</h1>
              </section>
            </div>
            <div className="container_no_border" id='scroll'>
            
            <div className="container" style={
              {width: '50%',
              height: '60%',
              border: '0px solid white',
              borderRadius: '10px',
              marginTop: '10px',
            }
            }>
              <h3 className="centered">Scroll voor meer informatie
              <i className="gg-arrow-down"></i>
              </h3>
            </div>
              
              </div>
            </div>
            
            </MouseParallaxChild>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.3}
            factor={2}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
            }}
          />
          <ParallaxLayer offset={1.2} speed={0.6} factor={3}>
          <MouseParallaxChild factorX={0.5} factorY={0.5}>
              <div className="container" style={
              {width: '50%',
              height: '10%',
            }
              }>
            <div className="centered">
              <h1>Over mij:</h1>
            </div>
            </div>
            <div className="grid">
              <div className="container" style={
                {height: '100%',}
              }><h1>Naam:</h1><h2>Mijn naam is Matthijs Veldkamp, ik ben geboren in Nijmegen en woon in de practige stad Gorinchem.</h2></div>
              <div className="container" style={
                {height: '100%',}
              }><h1>Leeftijd:</h1><h2>Ik ben 17 jaar (geboren in 2005)</h2></div>
              <div className="container" style={
                {height: '100%',}
              }><h1>Hobbies:</h1><h2>Ik vind het leuk om te programmeren, dit is dan zeker ook een grote hobby van mij! Het programmeren begon al van jongs af aan toen ik achter de Commodore 64 van mijn opa kroop.</h2></div>
            </div>
            </MouseParallaxChild>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            factor={3}
            style={{
              backgroundImage: `url(${code})`,
              backgroundSize: 'cover',
              zIndex: '0',
            }}
          />
          <ParallaxLayer offset={2} speed={0.5} factor={3}>
          <MouseParallaxChild factorX={0.5} factorY={0.5}>
              <div className="container" style={
              {width: '50%',
              height: '10%',
              zIndex: '999',
            }
              }>
            <div className="centered">
              <h1>Programmeertalen:</h1>
            </div>
            </div>
            <div className="grid">
              <div className="container" style={
                {height: '100%',}
              }><h1>Python:</h1><h2>Ik ben begonnen met Python, dit vind ik een leuke programmeertaal omdat je er gemakkelijk mee kan beginnen maar wel veel mee kan doen.</h2></div>
              <div className="container" style={
                {height: '100%',}
              }><h1>Javascript:</h1><h2>Ik ben zelf ook een groot fan van het maken van websites en die dan ook daadwerkelijk iets laten doen. Hiervoor gebruik ik Javascript maar ik ben ook Typescript aan het leren.</h2></div>
              <div className="container" style={
                {height: '100%',}
              }><h1>PHP:</h1><h3>Naast Python en JavaScript, ben ik ook bezig met het verkennen van PHP.</h3><h3>Het stelt me in staat om server-side logica toe te voegen aan mijn websites en interactie te hebben met databases, waardoor ik gegevens dynamisch kan ophalen en weergeven.</h3></div>
            </div>
            </MouseParallaxChild>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${reactimg})`,
              backgroundSize: 'cover',
            }}
          />
          <ParallaxLayer offset={3} speed={0.5} factor={3}>
          <MouseParallaxChild factorX={0.5} factorY={0.5}>
              <div className="container" style={
              {width: '50%',
              height: '10%',
              zIndex: '999',
            }
              }>
            <div className="centered">
              <h1>Hoe ik deze website heb gemaakt:</h1>
            </div>
            </div>
            <div className="grid">
              <div className="container_no_border" style={
                {height: '100%',}
              }>
                <img id='logo' src={reactlogo} alt="React" />
              </div>
              <div className="container_no_border" style={
                {height: '100%',}
              }>
                <img id='logo' src={vitelogo} alt="Vite" />
              </div>
              <div className="container_no_border" style={
                {height: '100%',}
              }>
                <img id='logo' src={githublogo} alt="Github pages" />
              </div>
              <div className="container" style={
                {height: '100%',}
              }><h1>React:</h1><h2>React, een JavaScript-bibliotheek, vergemakkelijkt het bouwen van dynamische gebruikersinterfaces met herbruikbare componenten en een efficiënt Virtual DOM-systeem voor optimale rendering en prestaties.</h2></div>
              <div className="container" style={
                {height: '100%',}
              }><h1>Vite:</h1><h2>Vite, een snelle buildtool, optimaliseert React- en Vue.js-ontwikkeling met snelle builds en directe hot-reloading, waardoor een efficiënte ontwikkelworkflow ontstaat.</h2></div>
              <div className="container" style={
                {height: '100%',}
              }><h1>Github pages:</h1><h2>GitHub Pages host statische websites rechtstreeks vanuit repositories, ideaal voor het gemakkelijk delen van projecten, portfolio's en meer, met opties voor aangepaste domeinen.</h2></div>
            </div>
            </MouseParallaxChild>
          </ParallaxLayer>   
          <ParallaxLayer
            offset={4}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${question})`,
              backgroundSize: 'cover',
            }}
          />
          <ParallaxLayer offset={4} speed={0.5} factor={3}>
          <MouseParallaxChild factorX={0.5} factorY={0.5}>
              <div className="container" style={
              {width: '50%',
              height: '10%',
              zIndex: '999',
            }
              }> 
            <div className="centered">
              <h1>Contact:</h1>
            </div> 
            </div>
              <div className="container">
                <h1>Mail:</h1><h2>U kunt mij <a href="mailto:mveldkamp05@gmail.com">hier </a>mailen!</h2><a href="#top">klik hier om terug naar boven te gaan.</a></div>
            </MouseParallaxChild>
          </ParallaxLayer>
        </Parallax>
      </MouseParallaxContainer>
      </div>
  );
}
export default App;