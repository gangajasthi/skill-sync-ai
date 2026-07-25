// import { useState } from "react";
// import axios from "axios";
// import DashboardLayout from "../components/DashboardLayout.jsx";
// import "../styles/ResumeAnalysis.css";


// function ResumeAnalysis(){

//     const [file,setFile] = useState(null);
//     const [loading,setLoading] = useState(false);
//     const [result,setResult] = useState(null);
//     const [error,setError] = useState("");


//     const handleUpload = async()=>{

//         if(!file){
//             setError("Please select PDF file");
//             return;
//         }


//         const formData = new FormData();

//         formData.append(
//             "file",
//             file
//         );


//         try{

//             setLoading(true);
//             setError("");


//             const response = await axios.post(
//                 "http://127.0.0.1:8000/upload-resume",
//                 formData,
//                 {
//                     headers:{
//                         "Content-Type":"multipart/form-data"
//                     }
//                 }
//             );


//             console.log("AI RESPONSE:", response.data);

//             setResult(response.data);


//         }
//         catch(err){

//             console.log(err);

//             setError("Analysis failed");

//         }
//         finally{

//             setLoading(false);

//         }

//     };



//     return (

//         <DashboardLayout
//             title="Resume Analysis"
//             subtitle="Upload your resume to get an instant AI-powered breakdown."
//         >


//         <div className="resume-analysis">


//             <div className="resume-upload-card">


//                 <div className="upload-icon">
//                     ↑
//                 </div>


//                 <h2>
//                     Upload Resume
//                 </h2>


//                 <p>
//                     PDF format only. AI will analyze your skills,
//                     projects and experience.
//                 </p>



//                 <input
//                     type="file"
//                     accept=".pdf"
//                     onChange={(e)=>setFile(e.target.files[0])}
//                 />



//                 {
//                     file &&
//                     <p>
//                         {file.name}
//                     </p>
//                 }



//                 <button
//                     className="btn btn--primary"
//                     onClick={handleUpload}
//                 >

//                 {
//                     loading
//                     ?
//                     "Analyzing..."
//                     :
//                     "Analyze Resume"
//                 }


//                 </button>



//                 {
//                     error &&
//                     <p className="auth__error">
//                         {error}
//                     </p>
//                 }


//             </div>




//             {
//                 result &&


//                 <div className="resume-result-card">


//                     <h2>
//                         Resume Insights
//                     </h2>



//                     <div className="profile-info">

//                         <h3>
//                             Profile Information
//                         </h3>


//                         <p>
//                             <b>Name:</b> {result.analysis?.name}
//                         </p>


//                         <p>
//                             <b>Email:</b> {result.analysis?.email}
//                         </p>


//                         <p>
//                             <b>Phone:</b> {result.analysis?.phone}
//                         </p>


//                         <p>
//                             <b>Experience:</b> {result.analysis?.experience || "Not provided"}
//                         </p>


//                     </div>





//                     <h3>
//                         Skills
//                     </h3>



//                     <div className="skill-list">

//                     {
//                         result.analysis?.skills?.map(
//                             (skill,index)=>(

//                                 <span key={index}>
//                                     {skill}
//                                 </span>

//                             )
//                         )
//                     }

//                     </div>





//                     <h3>
//                         Projects
//                     </h3>





//                     {
//                     result.analysis?.projects?.map(
//                     (project,index)=>(

//                         <div
//                         key={index}
//                         className="project-box"
//                         >


//                             <h3>
//                                 {project.title}
//                             </h3>



//                             {
//                             (project.tech_stack || project.technologies) &&

//                             <p className="project-tech">

//                                 <strong>
//                                     Technologies:
//                                 </strong>{" "}

//                                 {
//                                     project.tech_stack ||
//                                     project.technologies?.join(", ")
//                                 }

//                             </p>

//                             }

//                             <ul className="project-details">


//                             {
//                             (project.details || project.description || []).map(
//                             (detail,i)=>(

//                                 <li key={i}>

//                                 {
//                                     typeof detail === "string"
//                                     ?
//                                     detail
//                                     :
//                                     detail.description
//                                 }

//                                 </li>

//                             ))

//                             }


//                             </ul>



//                         </div>

//                     ))

//                     }

//                 <div className="analysis-grid">


// <div className="analysis-card strength">

// <h3>
// ✅ Strengths
// </h3>


// <ul>

// {
// result.analysis?.strengths?.map(
// (item,index)=>(

// <li key={index}>
// {item}
// </li>

// )
// )

// }

// </ul>

// </div>





// <div className="analysis-card weakness">

// <h3>
// ⚠️ Weaknesses
// </h3>


// <ul>

// {
// result.analysis?.weaknesses?.map(
// (item,index)=>(

// <li key={index}>
// {item}
// </li>

// )
// )

// }

// </ul>

// </div>





// <div className="analysis-card suggestion">

// <h3>
// 💡 Suggestions
// </h3>


// <ul>

// {
// result.analysis?.suggestions?.map(
// (item,index)=>(

// <li key={index}>
// {item}
// </li>

// )
// )

// }

// </ul>

// </div>


// </div>

//                 </div>


//             }



//         </div>


//         </DashboardLayout>

//     )

// // }

// {/* ATS SCORE */}

// <div className="ats-card">

//     <h2>
//         ATS Score
//     </h2>

//     <div className="ats-score">
//         {result.analysis?.ats_score || 0}
//     </div>

//     <p>
//         Resume compatibility score
//     </p>

// </div>


// }

// export default ResumeAnalysis;



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


            const token = localStorage.getItem("token");


const response = await axios.post(
    "http://127.0.0.1:8000/upload-resume",
    formData,
    {
        headers:{
            "Content-Type":"multipart/form-data",
            Authorization:`Bearer ${token}`
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


            {/* UPLOAD CARD */}

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




                {/* PROFILE INFORMATION */}

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
                        <b>Experience:</b> 
                        {result.analysis?.experience || "Not provided"}
                    </p>


                </div>





                {/* SKILLS */}


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

                    ))
                }


                </div>






                {/* PROJECTS */}


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





                {/* ATS SCORE */}


                <div className="ats-card">


                    <h2>
                        ATS Score
                    </h2>



                    <div className="ats-score">

                        {result.analysis?.ats_score || 0}

                    </div>



                    <p>
                        Resume compatibility score
                    </p>


                </div>







                {/* ANALYSIS CARDS */}



                <div className="analysis-grid">



                    <div className="analysis-card strength">


                        <h3>
                            ✅ Strengths
                        </h3>



                        <ul>


                        {
                        result.analysis?.strengths?.map(
                        (item,index)=>(

                            <li key={index}>
                                {item}
                            </li>

                        ))

                        }


                        </ul>


                    </div>







                    <div className="analysis-card weakness">


                        <h3>
                            ⚠️ Weaknesses
                        </h3>



                        <ul>


                        {
                        result.analysis?.weaknesses?.map(
                        (item,index)=>(

                            <li key={index}>
                                {item}
                            </li>

                        ))

                        }


                        </ul>


                    </div>







                    <div className="analysis-card suggestion">


                        <h3>
                            💡 Suggestions
                        </h3>



                        <ul>


                        {
                        result.analysis?.suggestions?.map(
                        (item,index)=>(

                            <li key={index}>
                                {item}
                            </li>

                        ))

                        }


                        </ul>


                    </div>



                </div>




            </div>


            }



        </div>


        </DashboardLayout>

    )

}


export default ResumeAnalysis;