import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout.jsx'
import ResumeUploader from '../components/ResumeUploader.jsx'
import '../styles/ResumeAnalysis.css'


function ResumeAnalysis() {

  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)


  const analyzeResume = async (file) => {

    try {

      setLoading(true)

      const formData = new FormData()

      formData.append(
        "file",
        file
      )


      const response = await fetch(
        "http://127.0.0.1:8000/upload-resume",
        {
          method: "POST",
          body: formData
        }
      )


      const data = await response.json()


      setAnalysis(data.analysis)


    } catch(error){

      console.log(error)

    }
    finally{

      setLoading(false)

    }

  }



  return (

    <DashboardLayout 
      title="Resume Analysis"
      subtitle="Upload your resume to get an instant AI-powered breakdown."
    >

      <div className="resume-analysis">


        <section className="ra-panel">

          <h2 className="ra-panel__title">
            Upload Resume
          </h2>


          <ResumeUploader 
            onAnalyze={analyzeResume}
          />


        </section>



        {
          loading && (

            <h3>
              Analyzing Resume...
            </h3>

          )
        }



        {
          analysis && (

          <section className="ra-result">


            <div className="ra-result__score">


              <div className="ra-gauge">

                <div className="ra-gauge__label">

                  <span className="ra-gauge__number">
                    {analysis.ats_score || 0}
                  </span>


                  <span className="ra-gauge__unit">
                    ATS Score
                  </span>

                </div>

              </div>



              <div className="ra-result__summary">

                <h2>
                  Resume Analysis Complete
                </h2>


                <p>
                  AI generated insights from your resume.
                </p>

              </div>


            </div>




            <div className="ra-columns">


              <div className="ra-card ra-card--strength">

                <h3>
                  Strengths
                </h3>


                <ul>

                  {
                    analysis.strengths?.map(
                      item => <li key={item}>{item}</li>
                    )
                  }

                </ul>


              </div>




              <div className="ra-card ra-card--weakness">


                <h3>
                  Weaknesses
                </h3>


                <ul>

                  {
                    analysis.weaknesses?.map(
                      item => <li key={item}>{item}</li>
                    )
                  }

                </ul>


              </div>





              <div className="ra-card ra-card--suggestion">


                <h3>
                  Suggestions
                </h3>


                <ul>

                  {
                    analysis.suggestions?.map(
                      item => <li key={item}>{item}</li>
                    )
                  }

                </ul>


              </div>



            </div>


          </section>

          )

        }


      </div>


    </DashboardLayout>

  )

}


export default ResumeAnalysis