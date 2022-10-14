import React, { useEffect } from 'react'
import './Home.css'
import * as THREE from 'three';
import { Typography } from '@mui/material';
import Timeline from '../TimeLine/Timeline';

import moonImage from "../../Image/moon.jpg";
import venusImage from "../../Image/venus.jpg";
import spaceImage from "../../Image/space.jpg";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
// import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Blogcart from '../Blogcard/Blogcard';
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";



const Home = ({ timelines, blogs, skills }) => {

  skills={
    image1 :{
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.u-bordeaux.com%2Fvar%2Fezdemo_site%2Fstorage%2Fimages%2Fmedia%2Funiversity-of-bordeaux2%2Fimages%2Feducation%2Finternational-study-offer%2Fmasters%2Flight-sciences-technologies%2F545114-2-eng-GB%2FLight-Sciences-Technologies_Grande.jpg&imgrefurl=https%3A%2F%2Fwww.u-bordeaux.com%2FEducation%2FStudy-offer%2FMasters-in-English%2FLight-Sciences-and-Technologies&tbnid=PIYhPtKIpGVqVM&vet=12ahUKEwip-pmHvMn6AhXVKbcAHTAQBHIQMygnegUIARC1Ag..i&docid=WuHAaZAQbJhnAM&w=1040&h=740&q=light&ved=2ahUKEwip-pmHvMn6AhXVKbcAHTAQBHIQMygnegUIARC1Ag"
    },
    image2 :{
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573621588731-8d6d46bb65bf%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZ2h0JTIwYnVsYnxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flight-bulb&tbnid=FP3N9uDya9xTJM&vet=12ahUKEwip-pmHvMn6AhXVKbcAHTAQBHIQMyg0egQIARBn..i&docid=_u_XQHoE7em_QM&w=1000&h=1500&q=light&ved=2ahUKEwip-pmHvMn6AhXVKbcAHTAQBHIQMyg0egQIARBn"
    },
    image3 :{
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fstage-light-golden-glitter-lights-effect-with-gold-rays-beams-falling-glittering-dust-floor-abstract-gold-background-display-your-product-shiny-spotlight-stage_209425-158.jpg%3Fw%3D2000&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fstage-light-golden-glitter-lights-effect-with-gold-rays-beams-falling-glittering-dust-floor-abstract-gold-background-display-your-product-shiny-spotlight-stage_7850908.htm&tbnid=WLz2Jt-UJztXNM&vet=12ahUKEwi88fmzvMn6AhU8k9gFHbmoC9oQMygBegUIARDxAQ..i&docid=3CA-xBDYvl1NYM&w=2000&h=1333&q=light%20gliter&hl=en&ved=2ahUKEwi88fmzvMn6AhU8k9gFHbmoC9oQMygBegUIARDxAQ"
    },
    image4 :{
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573621588731-8d6d46bb65bf%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxpZ2h0JTIwYnVsYnxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flight-bulb&tbnid=FP3N9uDya9xTJM&vet=12ahUKEwip-pmHvMn6AhXVKbcAHTAQBHIQMyg0egQIARBn..i&docid=_u_XQHoE7em_QM&w=1000&h=1500&q=light&ved=2ahUKEwip-pmHvMn6AhXVKbcAHTAQBHIQMyg0egQIARBn"
    },
    image5 :{
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fnofilmschool.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Farticle_wide%2Fpublic%2Fdollarphotoclub_67101131.jpg%3Fitok%3DVaibk-OW&imgrefurl=https%3A%2F%2Fnofilmschool.com%2F2015%2F08%2Fsecret-ingredient-diy-light-modifier-glitter-results-are-fantastic&tbnid=rZCIyA5orOWG1M&vet=12ahUKEwi88fmzvMn6AhU8k9gFHbmoC9oQMygEegUIARD5AQ..i&docid=v1hYmobAJbJFsM&w=740&h=409&q=light%20gliter&hl=en&ved=2ahUKEwi88fmzvMn6AhU8k9gFHbmoC9oQMygEegUIARD5AQ"
    },
    image6 :{
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn2.vectorstock.com%2Fi%2F1000x1000%2F78%2F16%2Fsilver-glowing-light-glitter-background-vector-31297816.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fsilver-glowing-light-glitter-background-vector-31297816&tbnid=YvLnKLMwCwI86M&vet=12ahUKEwi88fmzvMn6AhU8k9gFHbmoC9oQMygHegUIARD_AQ..i&docid=Iqn_QPzmLTkNNM&w=1000&h=1080&q=light%20gliter&hl=en&ved=2ahUKEwi88fmzvMn6AhU8k9gFHbmoC9oQMygHegUIARD_AQ"
    },
  }
    
  

  useEffect(() => {

    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000)
    camera.position.set(4, 4, 8);


    const canvas = document.querySelector(".homeCanvas")
    const rendererr = new THREE.WebGLRenderer({ canvas })


    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);


    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);


    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);


    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;



    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });



    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      venus.rotation.y += 0.01;
      rendererr.setSize(window.innerWidth, window.innerHeight);
      rendererr.render(scene, camera);
    };

    animate();


    // rendererr.setSize(window.innerHeight.Width, window.innerHeight)
    // rendererr.render(scene, camera);

    // return window.addEventListener("scroll", () => {
    //   camera.rotation.z = window.scrollY * 0.001;
    //   camera.rotation.y = window.scrollY * 0.003;

    //   const skillsBox = document.getElementById("homeskillsBox");

    //   if (window.scrollY > 1500) {
    //     skillsBox.style.animationName = "homeskillsBoxAnimationOn";
    //   } else {
    //     skillsBox.style.animationName = "homeskillsBoxAnimationOff";
    //   }
    // });


  })

  console.log(skills.image2.url)

  return (
    <div className='home'>

   
      <canvas className='homeCanvas'></canvas>

      <div className='homeContainer'>
        <Typography variant='3'>TIMELINE</Typography>
        <Timeline timeline={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeBlog">
        <Typography variant="h3"> BlOG VIDEOS</Typography>

        <div className="homeBlogWrapper">
          {/* {blogs.map((item) => ( */}
            {/* <Blogcard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            {/* /> */} 
          {/* ))} */}
        </div>
      </div>
    </div>
  )
}

export default Home