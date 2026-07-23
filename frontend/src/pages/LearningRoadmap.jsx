import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout.jsx";
import RoadmapCard from "../components/RoadmapCard.jsx";
import { generateRoadmap } from "../services/roadmapService.js";
import "../styles/LearningRoadmap.css";


function LearningRoadmap() {

  const [roadmap, setRoadmap] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleGenerate = async () => {

    try {

      setLoading(true);


      const data = {
        role: "Frontend Developer",

        skills: [
          "React",
          "JavaScript",
          "Python"
        ],

        experience: "Student"
      };


      const response = await generateRoadmap(data);


      setRoadmap(response.weekly_plan || []);

      setMissingSkills(response.missing_skills || []);


    } catch (error) {

      console.log("Roadmap generation failed:", error);

    } finally {

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

            {loading 
              ? "Generating..."
              : "Generate My Roadmap"
            }

          </button>


        </div>



        {
          roadmap.length > 0 && (

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

          )
        }



        {
          missingSkills.length > 0 && (

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

          )
        }



        {
          !loading && roadmap.length===0 && (

            <div className="empty-roadmap">

              <h3>
                Generate your AI learning roadmap
              </h3>

              <p>
                Upload your resume and get a personalized skill improvement plan.
              </p>


            </div>

          )
        }



      </div>


    </DashboardLayout>

  );

}


export default LearningRoadmap;