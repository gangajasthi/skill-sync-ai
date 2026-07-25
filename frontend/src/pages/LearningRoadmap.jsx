// import { useState } from "react";
// import axios from "axios";

// import DashboardLayout from "../components/DashboardLayout.jsx";
// import RoadmapCard from "../components/RoadmapCard.jsx";
// import { generateRoadmap } from "../services/roadmapService.js";
// import "../styles/LearningRoadmap.css";


// function LearningRoadmap() {


//   const [roadmap,setRoadmap] = useState([]);

//   const [missingSkills,setMissingSkills] = useState([]);

//   const [loading,setLoading] = useState(false);



//   const handleGenerate = async()=>{


//     try{


//       setLoading(true);



//       const token = localStorage.getItem("token");



//       // Get user profile

//       const profileResponse = await axios.get(

//         "http://127.0.0.1:8000/profile",

//         {
//           headers:{
//             Authorization:`Bearer ${token}`
//           }
//         }

//       );



//       const user = profileResponse.data;




//       // Get skill gap data

//       const skillResponse = await axios.get(

//         "http://127.0.0.1:8000/skill-gap",

//         {
//           headers:{
//             Authorization:`Bearer ${token}`
//           }
//         }

//       );



//       const skillData = skillResponse.data;




//       const currentSkills = skillData.matched_skills.map(
//         skill=>skill.name
//       );





//       const data = {


//         role:
//         user.target_role || "Frontend Developer",



//         skills:
//         currentSkills,



//         experience:
//         "Student"


//       };




//       console.log(
//         "ROADMAP REQUEST:",
//         data
//       );




//       const response = await generateRoadmap(data);



//       console.log(
//         "ROADMAP RESPONSE:",
//         response
//       );



//       setRoadmap(
//         response.weekly_plan || []
//       );



//       setMissingSkills(
//         response.missing_skills || []
//       );



//     }

//     catch(error){


//       console.log(
//         "Roadmap generation failed:",
//         error
//       );


//     }

//     finally{


//       setLoading(false);


//     }


//   };





//   return (


//     <DashboardLayout

//       title="Learning Roadmap"

//       subtitle="Your personalized path to closing every skill gap."

//     >



//       <div className="roadmap-page">





//         <div className="roadmap-toolbar">



//           <button

//             className="btn btn--primary"

//             onClick={handleGenerate}

//           >

//             {
//               loading
//               ?
//               "Generating..."
//               :
//               "Generate My Roadmap"
//             }


//           </button>



//         </div>







//         {
//           roadmap.length > 0 &&


//           <div className="roadmap-timeline">


//             {
//               roadmap.map((item,index)=>(


//                 <RoadmapCard


//                   key={index}


//                   period={item.week}


//                   title={item.title}


//                   status="active"


//                   tasks={item.tasks}


//                 />


//               ))
//             }



//           </div>


//         }









//         {
//           missingSkills.length > 0 &&


//           <div className="missing-skills">


//             <h2>
//               Skills You Need To Learn
//             </h2>



//             <div className="skills-list">


//               {
//                 missingSkills.map((skill,index)=>(


//                   <span

//                     key={index}

//                     className="skill-tag"

//                   >

//                     {skill}


//                   </span>


//                 ))
//               }


//             </div>


//           </div>


//         }








//         {
//           !loading &&
//           roadmap.length===0 &&


//           <div className="empty-roadmap">


//             <h3>
//               Generate your AI learning roadmap
//             </h3>


//             <p>
//               Upload your resume and get a personalized skill improvement plan.
//             </p>


//           </div>


//         }





//       </div>



//     </DashboardLayout>


//   )


// }



// export default LearningRoadmap;

import { useState, useEffect } from "react";
import axios from "axios";

import DashboardLayout from "../components/DashboardLayout.jsx";
import RoadmapCard from "../components/RoadmapCard.jsx";
import { generateRoadmap } from "../services/roadmapService.js";
import "../styles/LearningRoadmap.css";


function LearningRoadmap() {


  const [roadmap, setRoadmap] = useState([]);

  const [missingSkills, setMissingSkills] = useState([]);

  const [loading, setLoading] = useState(false);


  const [user, setUser] = useState(null);

  const [currentSkills, setCurrentSkills] = useState([]);



  // Fetch user + skill data

  useEffect(()=>{


    const fetchData = async()=>{


      try{


        const token = localStorage.getItem("token");



        // Profile API

        const profileResponse = await axios.get(

          "http://127.0.0.1:8000/profile",

          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        );


        setUser(profileResponse.data);




        // Skill gap API

        const skillResponse = await axios.get(

          "http://127.0.0.1:8000/skill-gap",

          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        );



        const skills =
        skillResponse.data.matched_skills.map(
          skill => skill.name
        );



        setCurrentSkills(skills);



      }
      catch(error){

        console.log(
          "Loading roadmap data failed:",
          error
        );

      }


    }



    fetchData();


  },[]);






  const handleGenerate = async()=>{


    try{


      setLoading(true);



      if(!user){

        alert("User data not loaded");

        return;

      }




      const data = {


        role:
        user.target_role || "Frontend Developer",



        skills:
        currentSkills,



        experience:
        "Student"


      };



      console.log(
        "ROADMAP REQUEST:",
        data
      );




      const response = await generateRoadmap(data);



      console.log(
        "ROADMAP RESPONSE:",
        response
      );




      setRoadmap(

        response.weekly_plan || []

      );



      setMissingSkills(

        response.missing_skills || []

      );



    }


    catch(error){


      console.log(
        "Roadmap generation failed:",
        error
      );


    }


    finally{


      setLoading(false);


    }


  };





  return (

    <DashboardLayout

      title="Learning Roadmap"

      subtitle="Your personalized path to closing every skill gap."

    >


      <div className="roadmap-page">



        <div className="roadmap-toolbar">


          <button

            className="btn btn--primary"

            onClick={handleGenerate}

          >

            {

              loading

              ?

              "Generating..."

              :

              "Generate My Roadmap"

            }


          </button>


        </div>







        {
          roadmap.length > 0 &&


          <div className="roadmap-timeline">


            {
              roadmap.map((item,index)=>(


                <RoadmapCard

                  key={index}

                  period={item.week}

                  title={item.title}

                  status="active"

                  tasks={item.tasks}

                />


              ))
            }


          </div>

        }







        {
          missingSkills.length > 0 &&


          <div className="missing-skills">


            <h2>
              Skills You Need To Learn
            </h2>



            <div className="skills-list">


              {
                missingSkills.map((skill,index)=>(


                  <span

                    key={index}

                    className="skill-tag"

                  >

                    {skill}


                  </span>


                ))
              }


            </div>


          </div>

        }







        {
          !loading &&
          roadmap.length===0 &&


          <div className="empty-roadmap">


            <h3>
              Generate your AI learning roadmap
            </h3>


            <p>
              Your roadmap will be generated based on your resume skills and target role.
            </p>


          </div>

        }



      </div>


    </DashboardLayout>


  )

}



export default LearningRoadmap;