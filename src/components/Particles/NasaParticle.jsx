import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import nasaParticleData from "./config/nasaParticleData";

/*
  NOTE: Particles.js
  * A lightweight JavaScript library for creating particles.
  * In pure js project you can use this library
  
  NOTE: TsParticles-Engine or TsParticles
  * A lightweight TypeScript library for creating particles. Dependency free (*), browser ready and compatible with React.js, Vue.js (2.x and 3.x), Angular, Svelte, jQuery, Preact, Inferno, Riot.js, Solid.js, and Web Components
  * In pure js or ts project you can use this library
   
  NOTE: React-Particles
  * in React and Next project, insteadof using top libraries,
  * you can use this library
*/

const NasaParticle = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    /*
      * you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    
      * this loads the tsparticles package bundle, it's the easiest method for getting everything ready
     
      * starting from v2 you can add only the features you need reducing the bundle size
     */
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="nasa-tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={nasaParticleData}
    />
  );
};
export default NasaParticle;
