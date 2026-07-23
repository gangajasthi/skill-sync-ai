import { useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout.jsx";
import "../styles/ResumeAnalysis.css";


function ResumeAnalysis(){

    const [file,setFile] = useState(null);
    const [loading,setLoading] = useState(false);
    const [result,setResult] = useState(null);
    const [error,setError] = useState("");


    const handleUpload = async()=>{

        if(!file){
            setError("Please select PDF file");
            return;
        }


        const formData = new FormData();

        formData.append(
            "file",
            file
        );


        try{

            setLoading(true);
            setError("");


            const response = await axios.post(
                "http://127.0.0.1:8000/upload-resume",
                formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"
                    }
                }
            );


            console.log("AI RESPONSE:", response.data);

            setResult(response.data);


        }
        catch(err){

            console.log(err);

            setError("Analysis failed");

        }
        finally{

            setLoading(false);

        }

    };



    return (

        <DashboardLayout
            title="Resume Analysis"
            subtitle="Upload your resume to get an instant AI-powered breakdown."
        >


        <div className="resume-analysis">


            <div className="resume-upload-card">


                <div className="upload-icon">
                    ↑
                </div>


                <h2>
                    Upload Resume
                </h2>


                <p>
                    PDF format only. AI will analyze your skills,
                    projects and experience.
                </p>



                <input
                    type="file"
                    accept=".pdf"
                    onChange={(e)=>setFile(e.target.files[0])}
                />



                {
                    file &&
                    <p>
                        {file.name}
                    </p>
                }



                <button
                    className="btn btn--primary"
                    onClick={handleUpload}
                >

                {
                    loading
                    ?
                    "Analyzing..."
                    :
                    "Analyze Resume"
                }


                </button>



                {
                    error &&
                    <p className="auth__error">
                        {error}
                    </p>
                }


            </div>




            {
                result &&


                <div className="resume-result-card">


                    <h2>
                        Resume Insights
                    </h2>



                    <div className="profile-info">

                        <h3>
                            Profile Information
                        </h3>


                        <p>
                            <b>Name:</b> {result.analysis?.name}
                        </p>


                        <p>
                            <b>Email:</b> {result.analysis?.email}
                        </p>


                        <p>
                            <b>Phone:</b> {result.analysis?.phone}
                        </p>


                        <p>
                            <b>Experience:</b> {result.analysis?.experience || "Not provided"}
                        </p>


                    </div>





                    <h3>
                        Skills
                    </h3>



                    <div className="skill-list">

                    {
                        result.analysis?.skills?.map(
                            (skill,index)=>(

                                <span key={index}>
                                    {skill}
                                </span>

                            )
                        )
                    }

                    </div>





                    <h3>
                        Projects
                    </h3>





                    {
                    result.analysis?.projects?.map(
                    (project,index)=>(

                        <div
                        key={index}
                        className="project-box"
                        >


                            <h3>
                                {project.title}
                            </h3>



                            {
                            (project.tech_stack || project.technologies) &&

                            <p className="project-tech">

                                <strong>
                                    Technologies:
                                </strong>{" "}

                                {
                                    project.tech_stack ||
                                    project.technologies?.join(", ")
                                }

                            </p>

                            }




                            <ul className="project-details">


                            {
                            (project.details || project.description || []).map(
                            (detail,i)=>(

                                <li key={i}>

                                {
                                    typeof detail === "string"
                                    ?
                                    detail
                                    :
                                    detail.description
                                }

                                </li>

                            ))

                            }


                            </ul>



                        </div>

                    ))

                    }



                </div>


            }



        </div>


        </DashboardLayout>

    )

}


export default ResumeAnalysis;