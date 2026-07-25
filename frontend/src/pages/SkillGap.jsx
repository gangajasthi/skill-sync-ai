import { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from '../components/DashboardLayout.jsx'
import SkillCard from '../components/SkillCard.jsx'
import '../styles/SkillGap.css'


function SkillGap() {


  const [skillData,setSkillData] = useState(null);
  const [loading,setLoading] = useState(true);



  useEffect(()=>{


    const fetchSkillGap = async()=>{


      try{


        // const response = await axios.get(
        //   "http://127.0.0.1:8000/skill-gap"
        // );
        const token = localStorage.getItem("token");


const response = await axios.get(
  "http://127.0.0.1:8000/skill-gap",
  {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
);

        console.log(
          "SKILL GAP RESPONSE:",
          response.data
        );


        setSkillData(response.data);



      }
      catch(error){

        console.log(error);

      }
      finally{

        setLoading(false);

      }


    }



    fetchSkillGap();


  },[])



  if(loading){

    return <h2>Analyzing Skills...</h2>

  }



  if(!skillData){

    return <h2>No Skill Data Found</h2>

  }



  // Convert backend data to UI format

  // const currentSkills = skillData.matched_skills

  const currentSkills = skillData.matched_skills
.filter(
  skill =>
  skill.status === "have" ||
  skill.status === "matched"
)
.map(skill => ({

  name: skill.name,
  level: skill.proficiency || 80,
  status:"match"

}))
  // .filter(skill=>skill.status==="have")
  // .map(skill=>({

  //     name:skill.name,
  //     level:skill.proficiency,
  //     status:"match"

  // }))



  // const missingSkills = skillData.matched_skills
  // .filter(skill=>skill.status==="missing")
  const missingSkills = skillData.missing_skills.map(skill => {

  const course = skillData.courses.find(
    c => c.title.includes(skill.name)
  )

  return {
    name: skill.name,
    level: skill.proficiency || 20,
    status: "gap",
    courseLabel: course
      ? course.title
      : "Recommended Course"
  }

})



  return (


    <DashboardLayout 
      title="Skill Gap Analysis" 
      subtitle={`Compared against ${skillData.target_role} role requirements.`}
    >



      <div className="skill-gap">



        <section className="sg-section">


          <div className="sg-section__header">

            <h2>
              Current Skills
            </h2>


            <span className="sg-section__count">

              {currentSkills.length} skills matched

            </span>


          </div>



          <div className="sg-grid">


          {
            currentSkills.map(skill=>(

              <SkillCard
                key={skill.name}
                {...skill}
              />

            ))
          }


          </div>


        </section>





        <section className="sg-section">


          <div className="sg-section__header">


            <h2>
              Missing Skills
            </h2>


            <span className="sg-section__count sg-section__count--gap">

              {missingSkills.length} gaps found

            </span>


          </div>




          <div className="sg-grid">


          {
            missingSkills.map(skill=>(

              <SkillCard
                key={skill.name}
                {...skill}
              />

            ))
          }



          </div>



        </section>







        <section className="sg-recommend">


          <h2>
            Recommended Courses
          </h2>



          <div className="sg-recommend__grid">



          {
            skillData.courses.map(course=>(


              <div 
              className="sg-recommend__card"
              key={course.title}
              >


                <div className="sg-recommend__icon">
                  🎓
                </div>



                <div>


                  <p className="sg-recommend__title">

                    {course.title}

                  </p>


                  <p className="sg-recommend__sub">

                    {course.description}

                  </p>


                </div>



                <button 
                className="btn btn--outline sg-recommend__btn"
                >

                  View

                </button>



              </div>


            ))
          }



          </div>



        </section>



      </div>



    </DashboardLayout>


  )

}



export default SkillGap