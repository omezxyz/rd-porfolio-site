import React, { useState, useEffect } from "react";

const ProjectDetail = ({ projectId, onClose }) => {
  const projectDetails = {


    "1": {
      title: "",
      description: "IFP Festival Brand Identity",
      rows: [
        {
          description: "Master Design For Festival Season 14 - Horizontal View This design embodies the spirit of IFP, celebrating the diversity and creativity of the vibrant community that gathers at the festival—a dynamic blend of culture x creativity.",
          images: [
            { src: "/images/project-2/1.webp" }],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: "Master Design For Festival Season 14 - Vertical View",
          images: [
              { src: "/images/project-2/2.webp"} ],
          layout: "grid-cols-1 gap-1",
        },
     
        {
          description: "Ideation Phase for the designs",
          images: [  { src:"/images/project-2/4.webp"} ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: "USAGE OF MASTER DESIGNS: 1. Speaker Announcement Creatives" ,
          images: [
            { src: "/images/project-2/5.webp"},
              { src: "/images/project-2/6.webp"},
                { src: "/images/project-2/7.webp"},
                  { src: "/images/project-2/8.webp"},
          ],
          layout: "grid-cols-2 gap-1",
        },
        {
          description: "2. Festival Line Ups and Stalls announcement Post creatives",
          images: [
            { src: "/images/project-2/9.webp"},
              { src: "/images/project-2/10.webp"},
            { src:  "/images/project-2/11.webp"},
              { src:"/images/project-2/12.webp"},
                { src: "/images/project-2/13.webp"},
          ],
          layout: "grid-cols-5 gap-1",
        },
 
        {
          description: "3. Festival Schedule Design",
          images: [
            { src:  "/images/project-2/14.webp"},
              { src: "/images/project-2/15.webp"},
              { src:"/images/project-2/16.webp"},
          ],
          layout: "grid-cols-3 gap-1",
        },

       

        {
          description: "3. Festival Schedule Design",
          images: [
            { src:  "/images/project-2/17.webp"},
              { src:"/images/project-2/18.webp"},
                { src: "/images/project-2/18.2.webp"},
          ],
          layout: "grid-cols-3 gap-1",
        },
      
        {
          description: "4. Hoardings For Festival",
          images: [
            { src: "/images/project-2/19.webp"},
              { src: "/images/project-2/20.webp"},
                { src:  "/images/project-2/21.webp"},
                  { src: "/images/project-2/22.webp"},
          ],
          layout: "grid-cols-4 gap-1",
        },

        {
          description: "5. Creative Design for Stage's Screen at Festival",
          images: [
            { src: "/images/project-2/23.webp"},
              { src: "/images/project-2/24.webp"},
                { src:  "/images/project-2/25.webp"},
                  { src: "/images/project-2/26.webp"},
          ],
          layout: "grid-cols-4 gap-1",
        },

        {
          description: "6. Creative Design for Magazine and Newspaper Ads",
          images: [
           
            { src: "/images/project-2/27.webp"},
              { src: "/images/project-2/28.webp"},
                { src: "/images/project-2/29.webp"},
          ],
          layout: "grid-cols-3 gap-1",
        },

        {
          images: [  { src:"/images/project-2/thanku.webp"}],
          layout: "grid-cols-1 gap-1",
        },

        
      ],
    },

    "2": {
      title: "IFP Festival S14 On-ground Design",

      description: "My contribution to this project was to create designs for the following walls and stages according to the dimensions given.",
      rows: [
        {
          description: " ",
          images: [
            { src: "/images/project-2-onground/1.webp" }
          ],
          layout: "grid-cols-1 gap-4", // Adjusted gap for better spacing
        },

        {
           
          description: "FAN ZONE WALL DESIGN (16x10 ft) - The Fan Zone wall is a vibrant 16x10 ft display featuring illustrations of inspiring personalities from creative fields, designed to connect fans with their favorite icons.",
          images: [  { src: "/images/project-2-onground/2.jpg" },
            { src: "/images/project-2-onground/3.webp" }
          ],
          layout: "grid-cols-2 gap-4", // Adjusted gap for better spacing
        },

        {
          description: "",
          images: [
            { src: "/images/project-2-onground/4.webp" },
            { src: "/images/project-2-onground/5.webp" },
            { src: "/images/project-2-onground/6.jpeg" },
            { src: "/images/project-2-onground/7.webp" },

          ],
          layout: "grid-cols-4 gap-4", // Adjusted gap for better spacing
        },
        {
          description: " MIXERS WALL DESIGN (16x8 ft)- The Mixers Wall at the IFP Festival celebrates diverse creative talents offering a space for creators to connect, collaborate, and inspire each other.     ",
          images: [
             
            { src: "/images/project-2-onground/8.jpg" },
            { src: "/images/project-2-onground/9.webp" },
            
            { src: "/images/project-2-onground/10.jpg" },
            { src: "/images/project-2-onground/11.webp" }
          ],
          layout: "grid-cols-4 gap-4", // Adjusted gap for better spacing
        },

       

        {
          description: "PERFORMANCE STAGE SIDE WALL DESIGN (4X10 ft) - This is the space for all budding creative performers, specifically Musicians, Dancers and storytellers.",
          images: [
             
            { src: "/images/project-2-onground/12.webp" },
            { src: "/images/project-2-onground/13.webp" },
            
            { src: "/images/project-2-onground/14.png" },
            { src: "/images/project-2-onground/15.webp" },
            { src: "/images/project-2-onground/16.webp" },
            
            { src: "/images/project-2-onground/17.webp" },
          ],
          layout: "grid-cols-3 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "ENTRANCE GATE ILLUSTRATIONS CUTOUT (4X8 ft)",
          images: [
           
            { src: "/images/project-2-onground/18.png" },
            { src: "/images/project-2-onground/19.png" },
            
            { src: "/images/project-2-onground/20.webp" },
            
            { src: "/images/project-2-onground/21.webp" },
            
            { src: "/images/project-2-onground/22.webp" },
          ],
          layout: "grid-cols-5 gap-4", // Adjusted gap for better spacing
        },
        
        {
          description: "DEBATE RING NAMETAG & STAGE WALL DESIGN (8X8X2 ft)",
          images: [
            
            
            { src: "/images/project-2-onground/23.jpeg" },
            
            { src: "/images/project-2-onground/24.webp" },
            { src: "/images/project-2-onground/25.webp" },
          ],
          layout: "grid-cols-3 gap-4", // Adjusted gap for better spacing
        },
        {
          description: " SPEAKER LOUNGE WALL DESIGN (40x8 ft)- The Speaker Lounge at the IFP Festival is a cozy space for speakers to relax, recharge, and connect with fellow speakers in comfort.",
          images: [
            
            
            { src: "/images/project-2-onground/26.jpg" },
            
            { src: "/images/project-2-onground/27.jpeg" },
            
            { src: "/images/project-2-onground/28.jpg" },
            { src: "/images/project-2-onground/29.jpg" },
          ],
          layout: "grid-cols-1 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "Pillar  Side Design (1.5x8 ft)",
          images: [
            
            
            { src: "/images/project-2-onground/30.jpg" },
            
           
          ],
          layout: "grid-cols-1 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "STAGE SCREEN AND SIDE ILLUSTRATION CUTOUT DESIGN ​​​​​​​: STAGE 1 (Main Stage)",
          images: [
            { src: "/images/project-2-onground/31.jpg" },
            
            { src: "/images/project-2-onground/32.jpeg" },
            
            { src: "/images/project-2-onground/33.jpeg" },
            { src: "/images/project-2-onground/34.jpeg" },
            { src: "/images/project-2-onground/35.jpeg" },
            
            { src: "/images/project-2-onground/36.jpeg" },
            
            { src: "/images/project-2-onground/37.jpeg" },
            { src: "/images/project-2-onground/38.jpeg" },
            
          ],
          layout: "grid-cols-2 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "STAGE 2",
          images: [
            { src: "/images/project-2-onground/39.png" },
            { src: "/images/project-2-onground/40.jpeg" },
            
            { src: "/images/project-2-onground/41.jpeg" },
            { src: "/images/project-2-onground/42.jpeg" },
           
          
          ],
          layout: "grid-cols-4 gap-4", // Adjusted gap for better spacing
        },

        {
          description: "STAGE 3",
          images: [
            { src: "/images/project-2-onground/43.png" },
            { src: "/images/project-2-onground/44.jpeg" },
            
            { src: "/images/project-2-onground/45.jpeg" },
            { src: "/images/project-2-onground/46.jpeg" },
            { src: "/images/project-2-onground/47.jpeg" },
            { src: "/images/project-2-onground/48.jpeg" },
           
          
          ],
          layout: "grid-cols-3 gap-4", // Adjusted gap for better spacing
        },

        {
          description: "EASELS DESIGN",
          images: [
            { src: "/images/project-2-onground/e1.jpg" },
            { src: "/images/project-2-onground/e2.jpg" },
            
            { src: "/images/project-2-onground/e3.jpg" },
            { src: "/images/project-2-onground/e4.jpg" },
           
          
          ],
          layout: "grid-cols-4 gap-4", // Adjusted gap for better spacing
        },

        {
          description: "PLACARD DESIGN (6X6 ft)",
          images: [
            { src: "/images/project-2-onground/49.webp" },
            { src: "/images/project-2-onground/50.webp" },
            
             
          
          ],
          layout: "grid-cols-2 gap-4", // Adjusted gap for better spacing
        },

        {
          description: "",
          images: [
            
           
            { src: "/images/project-2-onground/51.png" }
             
          ],
          layout: "grid-cols-1 gap-4", // Adjusted gap for better spacing
        },
      ],
    },
    
    "3": {
      title: "Illustrating the World of Designers and Visual Artists",
      description: "ILLUSTRATIONS  ",
      rows: [
        {
          description: "Inspired by creative professionals like designers and visual artists, showcasing their work and artistic themes.",
          images: [
            { src: "/images/project-1/1.webp" }
           
          ],
          layout: "grid-cols-1 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "",
          images: [
            { src: "/images/project-1/2.webp" },
            { src: "/images/project-1/3.webp" }
          ],
          layout: "grid-cols-2 gap-4", // Adjusted gap for better spacing
        },

        {
          description: "Designer Crafting creativity beyond the clouds.",
          images: [
            { src: "/images/project-1/4.webp" },
            { src: "/images/project-1/5.webp" },
            { src: "/images/project-1/6.webp" }
          ],
          layout: "grid-cols-3 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "This vibrant visual identity below embodies the spirit of the IFP 50-Hour Design Challenge, crafted as the striking landing page banner for Season 14. A celebration of design, art, and aesthetics, it reflects a seamless blend of creativity and visual storytelling.",
          images: [
            
            { src: "/images/project-1/7.webp" }
          ],
          layout: "grid-cols-1 gap-4", // Adjusted gap for better spacing
        },

        {
          description: "Landing page visuals for the IFP 50 hour Design Challenge",
          images: [
             
            { src: "/images/project-1/8.webp" },
            { src: "/images/project-1/9.webp" },
          ],
          layout: "grid-cols-2 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "Used in stage design at IFP FESTIVAL S14",
          images: [
            
            { src: "/images/project-1/10.jpg" },
          
            { src: "/images/project-1/11.webp" },
            { src: "/images/project-1/12.webp" }
          ],
          layout: "grid-cols-3 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "IFP FESTIVAL S14 On-ground wall design (Mixer wall and Speaker Lounge)",
          images: [
            { src: "/images/project-1/13.webp" },
            { src: "/images/project-1/14.webp" },
          
            { src: "/images/project-1/15.webp" },
            { src: "/images/project-1/16.webp" }
          ],
          layout: "grid-cols-4 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "Social Media Slides",
          images: [
            { src: "/images/project-1/17.webp" },
            { src: "/images/project-1/18.webp" },
            { src: "/images/project-1/19.webp" },
          ],
          layout: "grid-cols-3 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "",
          images: [
            
            { src: "/images/project-1/20.webp" },
            { src: "/images/project-1/21.webp" },
            { src: "/images/project-1/21.webp" },
          ],
          layout: "grid-cols-3 gap-4", // Adjusted gap for better spacing
        },
        {
          description: "",
          images: [
            
            { src: "/images/project-1/thanku.webp" },
             
          ],
          layout: "grid-cols-1 gap-4", // Adjusted gap for better spacing
        },
      ],
    },

    "4": {
      title: "Brand illustrations for IFP writing challenge page",
      description: "This Visual  Identity was designed to represent IFP 50 Hour Writing Challenge in season 14.",
      rows: [
        {
          description: "",
          images: [
            { src: "/images/project-3/1.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: "",
          images: [
            { src: "/images/project-3/2.jpeg" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: "",
          images: [
            { src: "/images/project-3/3.png" },
            { src: "/images/project-3/4.png" },
            { src: "/images/project-3/5.png" }
          ],
          layout: "grid-cols-3 gap-1",
        },
        {
          description: "",
          images: [
            { src: "/images/project-3/6.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: "",
          images: [
            { src: "/images/project-3/7.png" },
            { src: "/images/project-3/8.jpeg" },
            { src: "/images/project-3/9.png" },
            { src: "/images/project-3/10.jpeg" }
          ],
          layout: "grid-cols-4 gap-1",
        },
        {
          description: "",
          images: [
            
            { src: "/images/project-4/thanku.webp" }
            
          ],
          layout: "grid-cols-1 gap-1",
        },

      ],
    },

    "5": {
      title: "The Shutter’s Voice",
      description: "ILLUSTRATIONS - Through the lens, photographers weave light, shadow, and emotion into timeless stories that speak without words.",
      rows: [
        {
          description: "This visual identity was created to represent the IFP 50 Hour Photography Challenge in Season 14.",
          images: [
            { src: "/images/project-4/1.webp" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: " ",
          images: [
            { src: "/images/project-4/2.jpeg" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: "Sunboard Cutout for IFP Festival season 14",
          images: [
            { src: "/images/project-4/3.png" },
            { src: "/images/project-4/4.png" },
            { src: "/images/project-4/5.png" },
         
           
          ],
          layout: "grid-cols-3 gap-1",
        },
        {
          description: " ",
          images: [
             
            { src: "/images/project-4/6.jpeg" },
            { src: "/images/project-4/ll.jpg" },
            { src: "/images/project-4/7.jpeg" }
          ],
          layout: "grid-cols-3 gap-1",
        },
        {
          description: "",
          images: [
            
            { src: "/images/project-5/thanku.webp" }
            
          ],
          layout: "grid-cols-1 gap-1",
        },
      ],
    },

    
    "6": {
      title: "A Visual Tribute to Performing Arts",
      description: "This visual identity was created to represent the IFP 50 Hour Performing Arts Challenge in Season 14.",
      rows: [
        {
          description: "",
          images: [
            { src: "/images/project-5/1.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: " ",
          images: [
            { src: "/images/project-5/2.jpg" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: "",
          images: [
            { src: "/images/project-5/3.png" },
            { src: "/images/project-5/4.png" },
           
          ],
          layout: "grid-cols-2  gap-1",
        },
        {
          description: " ",
          images: [
            { src: "/images/project-5/5.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: " ",
          images: [
            { src: "/images/project-5/6.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: " ",
          images: [
            { src: "/images/project-5/7.jpeg" },
            { src: "/images/project-5/8.jpeg" },
            { src: "/images/project-5/9.jpeg" },
            { src: "/images/project-5/10.jpeg" }
            
          ],
          layout: "grid-cols-4 gap-1",
        },

        {
          description: " ",
          images: [
           
            { src: "/images/project-5/11.jpeg" },
            { src: "/images/project-5/12.jpeg" }
            
          ],
          layout: "grid-cols-2 gap-1",
        },

        {
          description: "",
          images: [
            
            { src: "/images/project-5/thanku.webp" }
            
          ],
          layout: "grid-cols-1 gap-1",
        },

      ],
    },

    "7": {
      title: "Symphony in Motion",
      description: "This vibrant visual was created for the IFP 50-Hour Music Challenge, celebrating musicians and their creativity across diverse genres, serving as a bold and dynamic landing page banner for Music challenge page, Season 14—a tribute to the spirit of musicians.",
      rows: [
        {
          description: " ",
          images: [
            { src: "/images/project-6/1.webp" }
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: " ",
          images: [
            { src: "/images/project-6/2.webp" }
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: " ",
          images: [
            { src: "/images/project-6/3.webp" },
            { src: "/images/project-6/4.webp" },
           
          ],
          layout: "grid-cols-2  gap-1",
        },

        {
          description: " ",
          images: [
            { src: "/images/project-6/5.webp" },
            { src: "/images/project-6/6.webp" }
          ],
          layout: "grid-cols-2 gap-1",
        },
       
        {
          description: " ",
          images: [
            { src: "/images/project-6/7.webp" },
            { src: "/images/project-6/8.webp" },
            { src: "/images/project-6/9.webp" },
            { src: "/images/project-6/10.webp" }
            
          ],
          layout: "grid-cols-4 gap-1",
        },

        {
          description: "These Illustrations were being used in performing stage at IFP Fest S14.",
          images: [
           
            { src: "/images/project-6/11.webp" },
            { src: "/images/project-6/12.JPG" },
            { src: "/images/project-6/13.jpg" }
            
            
          ],
          layout: "grid-cols-3 gap-1",
        },
        
        {
          description: " ",
          images: [
            { src: "/images/project-6/14.png" }
            
            
          ],
          layout: "grid-cols-1 gap-1",
        },

      ],
    },

    "8": {
      title: "Illustration banner for IFP Fimmaking page",
      description: "    This visual identity was created to represent the IFP 50 Hour Filmmaking Challenge in Season 14.",
      rows: [
        {
          description: " ",
          images: [
            { src: "/images/project-7/1.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: " ",
          images: [
            { src: "/images/project-7/2.jpeg" }
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: " ",
          images: [
            { src: "/images/project-7/3.png" },
            { src: "/images/project-7/4.jpeg" },
           
          ],
          layout: "grid-cols-2  gap-1",
        },

        {
          description: " ",
          images: [
            { src: "/images/project-7/5.png" },
            { src: "/images/project-7/6.png" },
            { src: "/images/project-7/7.png" }
          ],
          layout: "grid-cols-3 gap-1",
        },
       
        {
          description: " ",
          images: [
            { src: "/images/project-7/8.png" },
            { src: "/images/project-7/9.jpeg" },
           
            
            
          ],
          layout: "grid-cols-2 gap-1",
        },
        {
          description: " ",
          images: [
            { src: "/images/project-7/10.jpg" },
          ],
          layout: "grid-cols-1 gap-1",
        },
        {
          description: " ",
          images: [
            { src: "/images/project-7/11.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },

      ],
    },

    "9": {
      title: "Psychedelic Assemblance",
      description: " Immerse yourself in the beauty of Metaphoric art dripping with extra-sensory creatures in life-like circumstances.",
      rows: [
        {
          description: "Hallelujah_000 is a collection of unique psychedelic artworks, each expressing gratitude to God. The pieces reflect life's ups and downs, celebrating God's grace in helping us overcome challenges. Each artwork is distinct in style, texture, and colour.",
          images: [
            { src: "/images/project-8/1.jpg" },
          
           
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: " Untouchable Paradise - A child’s life is full of joy, peace, and freedom, untouched by societal pressures or adult worries. Their innocence reflects pure balance and happiness. But as they grow, adults impose their flawed ways, disrupting that natural bliss.",
          images: [
            { src: "/images/project-8/2.jpeg" },
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "Life TV - No hurry in life, slow and steady, we all get everything in that path and reach our destination anyway. Sit tight and Enjoy your life tv.....let it flow as it is. ",
          images: [
            { src: "/images/project-8/3.jpg" },
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "Memory Maze - Memories take us on a journey of joy and sorrow, some fading, others surfacing. Thankfully, we can't remember past lives, as it would bring chaos, revenge, and endless conflict. Forgetting helps us live in peace. ",
          images: [
            { src: "/images/project-8/4.jpg" },
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "You Are The Universe - You are not just in the universe; you are a vital part of it, where it becomes aware of itself. The atoms in your brain once belonged to stars and will one day return to them, connecting you to the cosmos. ",
          images: [
            { src: "/images/project-8/5.jpg" },
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "In The Hand Of Devil - The devil is a powerful force that traps us in its grip, making escape difficult. It can take any form—illusions, materialism, or anything shaped by your perception and life. ",
          images: [
            { src: "/images/project-8/6.jpeg" },
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "A shoulder to cry on - Every being, whether human, ghost, or alien, seeks companionship. Life is full of struggles, and offering a shoulder to cry on, even briefly, helps ease the burden of grief. ",
          images: [
            { src: "/images/project-8/7.jpg" }
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "An Effort for Metamorphosis - Realizing your own toxicity has driven others away, you now strive for change. True transformation starts within—by reshaping your beliefs, habits, and mindset. Only then can your words stop spreading negativity. ",
          images: [
            { src: "/images/project-8/8.jpg" },
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "Crippling Love - Love can start beautifully but sometimes turns into a burden, with one person’s struggles weighing down the other. Out of love, you hide your pain while they lean on you, unaware of the toll it takes. When do you decide to break free? ",
          images: [
            { src: "/images/project-8/9.jpeg" },
          ],
          layout: "grid-cols-1 gap-1",
        },

        {
          description: "Deepwater Meditation - let's take ourselves to the bottom of the troubled waters, not to drown but to cleanse ourselves. ",
          images: [
            { src: "/images/project-8/10.jpeg" },
          ],
          layout: "grid-cols-1 gap-1",
        },
 
         
        {
          description: " ",
          images: [
            { src: "/images/project-7/11.png" }
          ],
          layout: "grid-cols-1 gap-1",
        },
      ],
    },

  };

  const project = projectDetails[projectId];
  const [selectedImage, setSelectedImage] = useState(null);

  // Manage page scroll behavior when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow on modal close
    };
  }, [project]);

  // Image Viewer Navigation
  const handleNextImage = () => {
    if (selectedImage) {
      const { rowIndex, imageIndex } = selectedImage;
      const nextIndex = imageIndex + 1;

      if (nextIndex < project.rows[rowIndex].images.length) {
        setSelectedImage({ ...selectedImage, imageIndex: nextIndex });
      } else if (rowIndex + 1 < project.rows.length) {
        setSelectedImage({ rowIndex: rowIndex + 1, imageIndex: 0 });
      }
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      const { rowIndex, imageIndex } = selectedImage;
      const prevIndex = imageIndex - 1;

      if (prevIndex >= 0) {
        setSelectedImage({ ...selectedImage, imageIndex: prevIndex });
      } else if (rowIndex > 0) {
        const prevRow = project.rows[rowIndex - 1];
        setSelectedImage({ rowIndex: rowIndex - 1, imageIndex: prevRow.images.length - 1 });
      }
    }
  };

  if (!project) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-600">Project Not Found</h2>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
      {/* Main Modal */}
      <div className="relative w-[90%] sm:w-4/5 max-h-[90vh] bg-white rounded-lg shadow-lg flex flex-col">
        {/* Fixed Header */}
        <div className="sticky top-0 bg-white z-50 p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-red-600 transition-colors"
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold text-center mb-2">{project.title}</h2>
          <p className="text-lg text-gray-600 text-center">{project.description}</p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6">
          {project.rows.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid ${row.layout} mb-6`}>
              {row.description && (
                <div className="col-span-full text-center text-lg text-gray-500">{row.description}</div>
              )}
              {row.images.map((image, imageIndex) => (
                <div key={imageIndex} className="relative flex justify-center items-center">
                  <img
                    src={image.src}
                    alt={`Project ${projectId} image ${imageIndex + 1}`}
                 className="w-full h-auto object-cover border rounded-lg shadow-md transition-transform duration-300 hover:scale-102 hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedImage({ rowIndex, imageIndex })}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-500 transition-colors"
          >
            &times;
          </button>
    
          <div className="relative w-full max-w-3xl max-h-[80vh] overflow-auto">
                <img
            src={project.rows[selectedImage.rowIndex].images[selectedImage.imageIndex].src}
             alt={`Full view`}
               className="w-full h-auto max-h-[80vh] object-contain"
                />

            <button
              onClick={handlePrevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white text-lg font-bold rounded-full hover:bg-gray-700 z-50"
            >
              &larr;
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white text-lg font-bold rounded-full hover:bg-gray-700 z-50"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
