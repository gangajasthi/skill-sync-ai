import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import DashboardLayout from '../components/DashboardLayout.jsx'
import '../styles/Dashboard.css'


const QUICK_ACTIONS = [
  { icon: '📄', label: 'Analyze Resume', to: '/resume-analysis' },
  { icon: '🧩', label: 'Check Skill Gap', to: '/skill-gap' },
  { icon: '🎤', label: 'Start Mock Interview', to: '/mock-interview' },
  { icon: '💼', label: 'Browse Jobs', to: '/jobs' },
]


const ACTIVITY = [
  { icon: '📄', text: 'Resume analyzed — ATS score improved to 87', time: '2 hours ago' },
  { icon: '🎤', text: 'Completed Mock Interview: Frontend Developer', time: 'Yesterday' },
  { icon: '🗺️', text: 'Roadmap milestone "React Advanced" marked complete', time: '2 days ago' },
  { icon: '💼', text: 'Applied to Frontend Engineer at Nimbus Labs', time: '3 days ago' },
]


function Dashboard() {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)


  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token = localStorage.getItem("token")

        const response = await axios.get(
          "http://127.0.0.1:8000/profile",
          {
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        )


        setUser(response.data)


      } catch(error){

        console.log(error)

        navigate("/login")

      }

    }


    fetchProfile()

  }, [navigate])



  if(!user){
    return <h2>Loading...</h2>
  }



   return (

  //   <DashboardLayout 
  //     title={`Welcome back, ${user.name}`}
  //     subtitle="Here's how your career journey is progressing."
  //   >
  <DashboardLayout 
        title={`Welcome back, ${user.name}`}
        subtitle="Here's how your career journey is progressing."
        user={user}
>


      <div className="dash-grid">


        <div className="dash-card dash-card--score">
          <p className="dash-card__label">ATS Score</p>
          <p className="dash-card__value">
            87<span>/100</span>
          </p>
          <p className="dash-card__trend dash-card__trend--up">
            ▲ 6 pts this week
          </p>
        </div>



        <div className="dash-card dash-card--gap">
          <p className="dash-card__label">Skills Matched</p>
          <p className="dash-card__value">
            12<span>/16</span>
          </p>
          <p className="dash-card__trend">
            4 gaps remaining
          </p>
        </div>



        <div className="dash-card dash-card--interview">
          <p className="dash-card__label">Interview Readiness</p>
          <p className="dash-card__value">
            78<span>%</span>
          </p>
          <p className="dash-card__trend dash-card__trend--up">
            ▲ 12% since last practice
          </p>
        </div>



        <div className="dash-card dash-card--jobs">
          <p className="dash-card__label">Job Matches</p>
          <p className="dash-card__value">
            9<span> new</span>
          </p>
          <p className="dash-card__trend">
            Avg. match 84%
          </p>
        </div>


      </div>





      <div className="dash-columns">


        <section className="dash-panel">


          <div className="dash-panel__header">
            <h2>Quick Actions</h2>
          </div>


          <div className="quick-actions">

          {
            QUICK_ACTIONS.map((action)=>(

              <button 
                key={action.label}
                className="quick-action"
                onClick={()=>navigate(action.to)}
              >

                <span className="quick-action__icon">
                  {action.icon}
                </span>

                <span>
                  {action.label}
                </span>

              </button>

            ))
          }

          </div>

        </section>





        <section className="dash-panel dash-panel--side">


          <div className="dash-panel__header">
            <h2>Profile Summary</h2>
          </div>



          <div className="profile-summary">


            <span className="profile-summary__avatar">

              {
                user.name
                .split(" ")
                .map(word=>word[0])
                .join("")
              }

            </span>



            <p className="profile-summary__name">
              {user.name}
            </p>


            <p className="profile-summary__role">
              {user.email}
            </p>



            <div className="profile-summary__bar">

              <div 
              className="profile-summary__bar-fill"
              style={{width:'72%'}}
              >

              </div>

            </div>


            <p className="profile-summary__complete">
              Profile 72% complete
            </p>



            <button 
            className="btn btn--outline profile-summary__btn"
            onClick={()=>navigate('/profile')}
            >

              Complete Profile

            </button>



          </div>



        </section>



      </div>



    </DashboardLayout>

  )

}


export default Dashboard
