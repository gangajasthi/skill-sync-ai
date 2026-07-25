// // import { useState, useEffect } from 'react'
// // import axios from 'axios'
// // import DashboardLayout from '../components/DashboardLayout.jsx'
// // import '../styles/Profile.css'


// // function Profile() {
// //   const [tab, setTab] = useState('overview')

// //   useEffect(()=>{


// //   const fetchProfile = async()=>{

// //     try{

// //       const token = localStorage.getItem("token")


// //       const response = await axios.get(
// //         "http://127.0.0.1:8000/profile",
// //         {
// //           headers:{
// //             Authorization:`Bearer ${token}`
// //           }
// //         }
// //       )


// //       console.log(
// //         "PROFILE DATA:",
// //         response.data
// //       )


// //       setUser(response.data)


// //     }
// //     catch(error){

// //       console.log(error)

// //     }
// //     finally{

// //       setLoading(false)

// //     }

// //   }


// //   fetchProfile()


// // },[])

// //   const [user,setUser] = useState(null)
// //   const [loading,setLoading] = useState(true)

// //   return (

// //     if(loading){

// //   return <h2>Loading Profile...</h2>

// // }


// // if(!user){

// //   return <h2>No Profile Found</h2>

// // }

// //     <DashboardLayout title="Profile" subtitle="Manage your career profile and account settings.">
// //       <div className="profile-page">
// //         <div className="profile-hero">
// //          <div className="profile-hero__avatar">
// //               {user.name?.substring(0,2).toUpperCase()}
// //           </div>
// //           <div className="profile-hero__info">
// //             <h2>
// //   {user.name}
// // </h2>

// // <p>
// //   {user.target_role || "Career goal not selected"}
// // </p>
// //             <div className="profile-hero__tags">
// //               <span>500+ community</span>
// //               <span>{user.ats_score || 0} ATS Score</span>
// //               <span>4 Certificates</span>
// //             </div>
// //           </div>
// //           <button className="btn btn--outline">Edit Profile</button>
// //         </div>

// //         <div className="profile-tabs">
// //           {['overview', 'skills', 'certificates', 'resume', 'settings'].map((t) => (
// //             <button
// //               key={t}
// //               className={tab === t ? 'profile-tab profile-tab--active' : 'profile-tab'}
// //               onClick={() => setTab(t)}
// //             >
// //               {t.charAt(0).toUpperCase() + t.slice(1)}
// //             </button>
// //           ))}
// //         </div>

// //         {tab === 'overview' && (
// //           <div className="profile-card">
// //             <h3>About</h3>
// //             <p className="profile-about">
// //               Final-year Computer Science student passionate about building accessible, performant
// //               web interfaces. Currently focused on closing skill gaps in TypeScript and system design
// //               ahead of full-time interviews.
// //             </p>
// //             <div className="profile-grid">
// //               <div><span>Email</span><p>{user.email}</p></div>
// //               <div><span>Phone</span><p>+91 98765 43210</p></div>
// //               <div><span>Location</span><p>Chennai, Tamil Nadu, IN</p></div>
// //               <div><span>Target Role</span><p>{user.target_role || "Not selected"}</p></div>
// //             </div>
// //           </div>
// //         )}

// //         {tab === 'skills' && (
// //           <div className="profile-card">
// //             <h3>Skills</h3>
// //             <div className="profile-skill-pills">
// //               {SKILLS.map((skill) => (
// //                 <span key={skill} className="profile-skill-pill">{skill}</span>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {tab === 'certificates' && (
// //           <div className="profile-card">
// //             <h3>Certificates</h3>
// //             <div className="profile-cert-list">
// //               {CERTIFICATES.map((cert) => (
// //                 <div className="profile-cert" key={cert.title}>
// //                   <div className="profile-cert__icon">🏅</div>
// //                   <div>
// //                     <p className="profile-cert__title">{cert.title}</p>
// //                     <p className="profile-cert__meta">{cert.issuer} · {cert.date}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {tab === 'resume' && (
// //           <div className="profile-card">
// //             <h3>Resume</h3>
// //             <div className="profile-resume">
// //               <div className="profile-resume__icon">📄</div>
// //               <div>
// //                 <p className="profile-resume__title">Priya_Menon_Resume.pdf</p>
// //                 <p className="profile-resume__meta">Last updated Jul 21, 2026 · 214 KB</p>
// //               </div>
// //               <button className="btn btn--outline">Replace</button>
// //             </div>
// //           </div>
// //         )}

// //         {tab === 'settings' && (
// //           <div className="profile-card">
// //             <h3>Settings</h3>
// //             <div className="profile-settings">
// //               <label className="profile-setting-row">
// //                 <span>Email notifications for job matches</span>
// //                 <input type="checkbox" defaultChecked />
// //               </label>
// //               <label className="profile-setting-row">
// //                 <span>Weekly progress summary email</span>
// //                 <input type="checkbox" defaultChecked />
// //               </label>
// //               <label className="profile-setting-row">
// //                 <span>Make profile visible to recruiters</span>
// //                 <input type="checkbox" />
// //               </label>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </DashboardLayout>
// //   )
// // }

// // export default Profile

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import DashboardLayout from '../components/DashboardLayout.jsx'
// import '../styles/Profile.css'


// function Profile() {


//   const [tab, setTab] = useState('overview')

//   const [user, setUser] = useState(null)

//   const [loading, setLoading] = useState(true)



//   useEffect(() => {


//     const fetchProfile = async () => {


//       try {


//         const token = localStorage.getItem("token")


//         const response = await axios.get(
//           "http://127.0.0.1:8000/profile",
//           {
//             headers:{
//               Authorization:`Bearer ${token}`
//             }
//           }
//         )


//         console.log(
//           "PROFILE DATA:",
//           response.data
//         )


//         setUser(response.data)


//       }
//       catch(error){


//         console.log(
//           "PROFILE ERROR:",
//           error
//         )


//       }
//       finally{


//         setLoading(false)


//       }


//     }



//     fetchProfile()


//   },[])





//   if(loading){

//     return (
//       <h2>
//         Loading Profile...
//       </h2>
//     )

//   }



//   if(!user){

//     return (
//       <h2>
//         No Profile Found
//       </h2>
//     )

//   }




//   return (


//     <DashboardLayout 
//       title="Profile" 
//       subtitle="Manage your career profile and account settings."
//     >


//       <div className="profile-page">



//         {/* PROFILE HEADER */}


//         <div className="profile-hero">


//           <div className="profile-hero__avatar">

//             {
//               user.name
//               ?
//               user.name
//               .substring(0,2)
//               .toUpperCase()
//               :
//               "U"
//             }

//           </div>




//           <div className="profile-hero__info">


//             <h2>

//               {user.name}

//             </h2>



//             <p>

//               {
//                 user.target_role 
//                 ||
//                 "Career goal not selected"
//               }

//             </p>




//             <div className="profile-hero__tags">


//               <span>
//                 SkillSync Member
//               </span>


//               <span>
//                 {user.target_role || "No Role"}
//               </span>


//               <span>
//                 ATS Analysis Available
//               </span>


//             </div>



//           </div>




//           <button 
//             className="btn btn--outline"
//           >

//             Edit Profile

//           </button>



//         </div>






//         {/* TABS */}



//         <div className="profile-tabs">


//           {
//             [
//               'overview',
//               'skills',
//               'certificates',
//               'resume',
//               'settings'
//             ]
//             .map((t)=>(


//               <button

//                 key={t}

//                 className={
//                   tab === t
//                   ?
//                   'profile-tab profile-tab--active'
//                   :
//                   'profile-tab'
//                 }

//                 onClick={()=>setTab(t)}

//               >

//                 {
//                   t.charAt(0)
//                   .toUpperCase()
//                   +
//                   t.slice(1)
//                 }


//               </button>


//             ))
//           }



//         </div>








//         {/* OVERVIEW */}



//         {
//           tab === 'overview' &&


//           <div className="profile-card">


//             <h3>
//               About
//             </h3>



//             <p className="profile-about">


//               Your SkillSync AI profile is generated from your
//               account information and career goals.


//             </p>




//             <div className="profile-grid">



//               <div>

//                 <span>
//                   Email
//                 </span>


//                 <p>
//                   {user.email}
//                 </p>

//               </div>




//               <div>

//                 <span>
//                   User ID
//                 </span>


//                 <p>
//                   {user.id}
//                 </p>


//               </div>





//               <div>

//                 <span>
//                   Target Role
//                 </span>


//                 <p>
//                   {
//                     user.target_role
//                     ||
//                     "Not selected"
//                   }
//                 </p>


//               </div>




//               <div>

//                 <span>
//                   Profile Status
//                 </span>


//                 <p>
//                   Active
//                 </p>


//               </div>



//             </div>



//           </div>


//         }










//         {/* SKILLS */}




//         {
//           tab === 'skills' &&


//           <div className="profile-card">


//             <h3>
//               Skills
//             </h3>


//             <p>

//               Skills will be automatically updated
//               after resume analysis.

//             </p>



//           </div>


//         }










//         {/* CERTIFICATES */}



//         {
//           tab === 'certificates' &&


//           <div className="profile-card">


//             <h3>
//               Certificates
//             </h3>


//             <p>

//               Certificate management will be added soon.

//             </p>


//           </div>


//         }









//         {/* RESUME */}





//         {
//           tab === 'resume' &&


//           <div className="profile-card">


//             <h3>
//               Resume
//             </h3>


//             <p>

//               Upload your resume from Resume Analysis page.

//             </p>



//           </div>


//         }









//         {/* SETTINGS */}




//         {
//           tab === 'settings' &&


//           <div className="profile-card">


//             <h3>
//               Settings
//             </h3>



//             <div className="profile-settings">


//               <label className="profile-setting-row">


//                 <span>
//                   Email notifications
//                 </span>


//                 <input 
//                   type="checkbox"
//                   defaultChecked
//                 />


//               </label>




//               <label className="profile-setting-row">


//                 <span>
//                   Weekly progress summary
//                 </span>


//                 <input 
//                   type="checkbox"
//                   defaultChecked
//                 />


//               </label>




//             </div>


//           </div>


//         }





//       </div>



//     </DashboardLayout>


//   )


// }


// export default Profile

import { useState, useEffect } from "react";
import axios from "axios";

import DashboardLayout from "../components/DashboardLayout.jsx";
import "../styles/Profile.css";


function Profile(){


const [tab,setTab] = useState("overview");

const [user,setUser] = useState(null);

const [resume,setResume] = useState(null);

const [loading,setLoading] = useState(true);





// GET PROFILE

useEffect(()=>{


const fetchProfile = async()=>{


try{


const token = localStorage.getItem("token");


const response = await axios.get(

"http://127.0.0.1:8000/profile",

{
headers:{
Authorization:`Bearer ${token}`
}
}

);



console.log(
"PROFILE:",
response.data
);



setUser(response.data);



}
catch(error){

console.log(
"PROFILE ERROR:",
error
);

}


};



fetchProfile();


},[]);









// GET RESUME ANALYSIS DATA

useEffect(()=>{


const fetchResume = async()=>{


try{


const token = localStorage.getItem("token");


const response = await axios.get(

"http://127.0.0.1:8000/resume-analysis",

{
headers:{
Authorization:`Bearer ${token}`
}
}

);



console.log(
"RESUME:",
response.data
);



setResume(response.data);



}
catch(error){


console.log(
"RESUME ERROR:",
error
);


}



};



fetchResume();



},[]);







if(!user){

return(

<h2>
Loading Profile...
</h2>

)

}







return(


<DashboardLayout

title="Profile"

subtitle="Manage your career profile and account settings."

>


<div className="profile-page">





{/* HEADER */}



<div className="profile-hero">


<div className="profile-hero__avatar">

{
user.name
?
user.name.substring(0,2).toUpperCase()
:
"U"
}

</div>



<div className="profile-hero__info">


<h2>
{user.name}
</h2>



<p>

{
user.target_role
||
"Career goal not selected"
}

</p>



<div className="profile-hero__tags">


<span>
SkillSync Member
</span>


<span>
{
user.target_role
||
"No Role"
}
</span>


<span>
{
resume
?
"ATS Analysis Available"
:
"No Resume"
}
</span>



</div>



</div>




<button className="btn btn--outline">

Edit Profile

</button>



</div>









{/* TABS */}



<div className="profile-tabs">


{
[
"overview",
"skills",
"certificates",
"resume",
"settings"
]
.map(item=>(


<button

key={item}

className={

tab===item

?

"profile-tab profile-tab--active"

:

"profile-tab"

}


onClick={()=>setTab(item)}

>


{
item.charAt(0).toUpperCase()
+
item.slice(1)
}


</button>



))

}



</div>









{/* OVERVIEW */}



{
tab==="overview" &&

<div className="profile-card">


<h3>
About
</h3>


<p className="profile-about">

Your SkillSync AI profile is generated from your
account information and career goals.

</p>



<div className="profile-grid">



<div>

<span>
Email
</span>


<p>
{user.email}
</p>


</div>




<div>

<span>
User ID
</span>


<p>
{user.id}
</p>


</div>





<div>

<span>
Target Role
</span>


<p>

{
user.target_role
||
"Not selected"
}

</p>

</div>





<div>

<span>
Profile Status
</span>


<p>
Active
</p>


</div>



</div>



</div>

}









{/* SKILLS */}



{
tab==="skills" &&


<div className="profile-card">


<h3>
Skills
</h3>



{


resume && resume.skills ?


<div className="profile-skill-pills">


{

resume.skills.map((skill,index)=>(


<span

key={index}

className="profile-skill-pill"

>

{skill}

</span>


))


}



</div>



:


<p>
Upload resume to generate skills.
</p>



}



</div>


}









{/* CERTIFICATES */}



{
tab==="certificates" &&


<div className="profile-card">


<h3>
Certificates
</h3>



<p>
No certificates added yet.
</p>


<button className="btn btn--primary">

Upload Certificate

</button>


</div>


}









{/* RESUME */}



{
tab==="resume" &&


<div className="profile-card">


<h3>
Resume Analysis
</h3>




{

resume ?


<>


<div>


<p>
ATS Score
</p>


<h2>
{resume.ats_score}
</h2>


</div>



<h3>
Projects
</h3>



{

resume.projects?.map((project,index)=>(


<p key={index}>

{project}

</p>


))


}



</>



:


<p>
No resume uploaded.
</p>



}




</div>


}









{/* SETTINGS */}



{
tab==="settings" &&


<div className="profile-card">


<h3>
Settings
</h3>




<label className="profile-setting-row">


<span>
Email notifications
</span>


<input

type="checkbox"

defaultChecked

/>


</label>





<label className="profile-setting-row">


<span>
Weekly progress summary
</span>


<input

type="checkbox"

defaultChecked

/>


</label>



</div>


}




</div>


</DashboardLayout>


)


}



export default Profile;