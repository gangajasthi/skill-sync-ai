// import { useEffect, useState } from 'react'
// import axios from 'axios'

// import DashboardLayout from '../components/DashboardLayout.jsx'
// import InterviewCard from '../components/InterviewCard.jsx'
// import '../styles/MockInterview.css'


// const ICONS = {
//   "Frontend Development": "💻",
//   "Data Structures & Algorithms": "🧠",
//   "Behavioral": "🗣️",
//   "System Design": "🏗️",
//   "Backend Development": "⚙️",
//   "API Design": "🔌",
//   "Database": "🗄️",
//   "SQL": "📊",
//   "Python": "🐍",
//   "Statistics": "📈"
// }



// const PAST_SCORES = [
//   { 
//     date: 'Jul 18, 2026', 
//     category: 'Frontend Development', 
//     score: 82 
//   },

//   { 
//     date: 'Jul 10, 2026', 
//     category: 'Behavioral', 
//     score: 91 
//   },

//   { 
//     date: 'Jul 02, 2026', 
//     category: 'Data Structures & Algorithms', 
//     score: 68 
//   },

//   { 
//     date: 'Jun 24, 2026', 
//     category: 'Frontend Development', 
//     score: 74 
//   },
// ]



// function MockInterview() {


//   const [categories,setCategories] = useState([])

//   const [loading,setLoading] = useState(true)

//   const [selected,setSelected] = useState(null)



//   useEffect(()=>{


//     const fetchCategories = async()=>{


//       try{


//         const response = await axios.get(

//           "http://127.0.0.1:8000/interview/categories"

//         )


//         console.log(
//           "INTERVIEW CATEGORIES:",
//           response.data
//         )


//         const formattedData = response.data.map(item=>({

//           icon:
//           ICONS[item.name] || "🎯",

//           title:
//           item.name,

//           description:
//           getDescription(item.name),

//           questionCount:
//           item.questions,

//           difficulty:
//           item.difficulty

//         }))


//         setCategories(formattedData)



//       }
//       catch(error){


//         console.log(
//           "Interview category error:",
//           error
//         )


//       }
//       finally{


//         setLoading(false)


//       }


//     }



//     fetchCategories()



//   },[])




//   const getDescription = (name)=>{


//     const descriptions = {


//       "Frontend Development":
//       "React, JavaScript, and CSS fundamentals with live coding questions.",


//       "Data Structures & Algorithms":
//       "Arrays, trees, graphs, and complexity analysis questions.",


//       "Behavioral":
//       "STAR-format questions about teamwork, conflict, and leadership.",


//       "System Design":
//       "Architecture, scaling, and trade-off discussion questions.",


//       "Backend Development":
//       "APIs, databases, backend architecture and server concepts.",


//       "API Design":
//       "REST APIs, authentication and scalable API development.",


//       "Database":
//       "SQL queries, database design and optimization.",


//       "SQL":
//       "Query writing, joins and data manipulation.",


//       "Python":
//       "Python programming and problem-solving questions.",


//       "Statistics":
//       "Probability, statistics and data interpretation."

//     }



//     return descriptions[name] || 
//     "Practice interview questions with AI evaluation."

//   }





//   return (


//     <DashboardLayout 
//       title="Mock Interview" 
//       subtitle="Practice with AI and track your interview readiness."
//     >


//       <div className="mock-interview">



//         <section>


//           <h2 className="mi-section-title">

//             Interview Categories

//           </h2>




//           <div className="mi-grid">


//           {
//             loading ? (

//               <h3>
//                 Loading interview categories...
//               </h3>

//             )

//             :

//             (

//               categories.map((cat)=>(


//                 <InterviewCard

//                   key={cat.title}

//                   {...cat}

//                   onStart={()=>
//                     setSelected(cat.title)
//                   }

//                 />


//               ))

//             )

//           }


//           </div>


//         </section>





//         {
//           selected && (


//             <div className="mi-active">


//               <div>

//                 <p className="mi-active__label">

//                   Interview in progress

//                 </p>


//                 <p className="mi-active__title">

//                   {selected}

//                 </p>


//               </div>



//               <button

//                 className="btn btn--primary"

//                 onClick={()=>
//                   setSelected(null)
//                 }

//               >

//                 End Session

//               </button>


//             </div>


//           )
//         }







//         <section className="mi-columns">



//           <div className="mi-panel">


//             <h2 className="mi-section-title">

//               Past Scores

//             </h2>



//             <div className="mi-scores">


//             {
//               PAST_SCORES.map((entry)=>(


//                 <div 

//                   className="mi-score-row"

//                   key={
//                     entry.date + entry.category
//                   }

//                 >


//                   <div>


//                     <p className="mi-score-row__category">

//                       {entry.category}

//                     </p>


//                     <p className="mi-score-row__date">

//                       {entry.date}

//                     </p>


//                   </div>



//                   <span 

//                     className={
//                       `mi-score-badge ${
//                       entry.score >=80
//                       ?
//                       'mi-score-badge--good'
//                       :
//                       entry.score >=60
//                       ?
//                       'mi-score-badge--mid'
//                       :
//                       'mi-score-badge--low'
//                       }`
//                     }

//                   >

//                     {entry.score}

//                   </span>


//                 </div>


//               ))
//             }


//             </div>


//           </div>






//           <div className="mi-panel">


//             <h2 className="mi-section-title">

//               Performance Graph

//             </h2>



//             <div className="mi-graph">


//             {
//               PAST_SCORES
//               .slice()
//               .reverse()
//               .map((entry)=>(


//                 <div 

//                   className="mi-graph__col"

//                   key={entry.date}

//                 >


//                   <div

//                     className="mi-graph__bar"

//                     style={{
//                       height:`${entry.score}%`
//                     }}

//                   ></div>



//                   <span>

//                     {entry.date.slice(0,6)}

//                   </span>


//                 </div>


//               ))
//             }


//             </div>


//           </div>



//         </section>




//       </div>


//     </DashboardLayout>


//   )

// }



// export default MockInterview


// import { useEffect, useState } from "react";

// import DashboardLayout from "../components/DashboardLayout.jsx";
// import InterviewCard from "../components/InterviewCard.jsx";

// import {
//   getInterviewCategories,
//   startInterview
// } from "../services/interviewService.js";

// import "../styles/MockInterview.css";



// const ICONS = {

//   "Frontend Development": "💻",
//   "Data Structures & Algorithms": "🧠",
//   "Behavioral": "🗣️",
//   "System Design": "🏗️",

//   "Backend Development": "⚙️",
//   "API Design": "🔌",
//   "Database": "🗄️",

//   "SQL": "📊",
//   "Python": "🐍",
//   "Statistics": "📈"

// };





// function MockInterview(){


// const [categories,setCategories] = useState([]);

// const [loading,setLoading] = useState(true);

// const [selected,setSelected] = useState(null);

// const [questions,setQuestions] = useState([]);

// const [interviewLoading,setInterviewLoading] = useState(false);





// const getDescription=(name)=>{


// const descriptions={


// "Frontend Development":
// "React, JavaScript, and CSS fundamentals with live coding questions.",


// "Data Structures & Algorithms":
// "Arrays, trees, graphs, and complexity analysis questions.",


// "Behavioral":
// "STAR-format questions about teamwork, conflict, and leadership.",


// "System Design":
// "Architecture, scaling, and trade-off discussion questions.",


// "Backend Development":
// "APIs, databases, backend architecture and server concepts.",


// "API Design":
// "REST APIs, authentication and scalable API development.",


// "Database":
// "SQL queries, database design and optimization.",


// "SQL":
// "Query writing, joins and data manipulation.",


// "Python":
// "Python programming and problem-solving questions.",


// "Statistics":
// "Probability, statistics and data interpretation."

// };


// return descriptions[name] ||
// "Practice interview questions with AI evaluation.";

// };







// // Load categories

// useEffect(()=>{


// const fetchCategories=async()=>{


// try{


// const data = await getInterviewCategories();


// console.log(
// "INTERVIEW CATEGORIES:",
// data
// );



// const formatted=data.map(item=>({

// icon:
// ICONS[item.name] || "🎯",


// title:
// item.name,


// description:
// getDescription(item.name),


// questionCount:
// item.questions,


// difficulty:
// item.difficulty


// }));



// setCategories(formatted);



// }
// catch(error){

// console.log(
// "Category error:",
// error
// );

// }

// finally{

// setLoading(false);

// }


// };


// fetchCategories();


// },[]);








// // Start Interview

// const handleStart=async(category)=>{


// try{


// setInterviewLoading(true);



// const response = await startInterview(
// category
// );



// console.log(
// "INTERVIEW RESPONSE:",
// response
// );



// setSelected(category);


// setQuestions(
// response.questions || []
// );



// }
// catch(error){

// console.log(
// "Start interview error:",
// error
// );

// }
// finally{

// setInterviewLoading(false);

// }


// };







// return (


// <DashboardLayout

// title="Mock Interview"

// subtitle="Practice with AI and track your interview readiness."

// >


// <div className="mock-interview">





// <section>


// <h2 className="mi-section-title">

// Interview Categories

// </h2>



// <div className="mi-grid">


// {

// loading ?


// <h3>
// Loading categories...
// </h3>


// :


// categories.map((cat)=>(


// <InterviewCard


// key={cat.title}


// {...cat}


// onStart={()=>
// handleStart(cat.title)
// }


// />


// ))


// }



// </div>


// </section>







// {
// selected &&


// <div className="mi-active">


// <div>


// <p className="mi-active__label">

// Interview Started

// </p>


// <p className="mi-active__title">

// {selected}

// </p>



// </div>





// {
// interviewLoading ?


// <p>
// Generating questions...
// </p>


// :


// <div>


// <h3>
// Questions
// </h3>


// {

// questions.map((q,index)=>(


// <p key={index}>

// {index+1}. {q}

// </p>


// ))


// }


// </div>


// }






// <button

// className="btn btn--primary"

// onClick={()=>{

// setSelected(null);

// setQuestions([]);

// }}

// >

// End Session

// </button>



// </div>


// }









// <section className="mi-columns">


// <div className="mi-panel">


// <h2 className="mi-section-title">

// Past Scores

// </h2>


// <p>
// No previous interviews yet.
// </p>


// </div>





// <div className="mi-panel">


// <h2 className="mi-section-title">

// Performance Graph

// </h2>


// <p>
// Complete interviews to view performance.
// </p>


// </div>


// </section>






// </div>


// </DashboardLayout>


// );


// }



// export default MockInterview;

import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout.jsx";
import InterviewCard from "../components/InterviewCard.jsx";

import {
  getInterviewCategories,
  startInterview,
  finishInterview,
  getInterviewHistory
} from "../services/interviewService.js";

import "../styles/MockInterview.css";



const ICONS = {

  "Frontend Development": "💻",
  "Data Structures & Algorithms": "🧠",
  "Behavioral": "🗣️",
  "System Design": "🏗️",

  "Backend Development": "⚙️",
  "API Design": "🔌",
  "Database": "🗄️",

  "SQL": "📊",
  "Python": "🐍",
  "Statistics": "📈"

};





function MockInterview(){


const [categories,setCategories] = useState([]);

const [history,setHistory] = useState([]);

const [loading,setLoading] = useState(true);

const [selected,setSelected] = useState(null);

const [questions,setQuestions] = useState([]);

const [interviewLoading,setInterviewLoading] = useState(false);







const getDescription=(name)=>{


const descriptions={


"Frontend Development":
"React, JavaScript, and CSS fundamentals with live coding questions.",


"Data Structures & Algorithms":
"Arrays, trees, graphs, and complexity analysis questions.",


"Behavioral":
"STAR-format questions about teamwork, conflict, and leadership.",


"System Design":
"Architecture, scaling, and trade-off discussion questions.",


"Backend Development":
"APIs, databases, backend architecture and server concepts.",


"API Design":
"REST APIs, authentication and scalable API development.",


"Database":
"SQL queries, database design and optimization.",


"SQL":
"Query writing, joins and data manipulation.",


"Python":
"Python programming and problem-solving questions.",


"Statistics":
"Probability, statistics and data interpretation."

};


return descriptions[name] ||
"Practice interview questions with AI evaluation.";

};









// Load categories + history

useEffect(()=>{


const loadData = async()=>{


try{


const categoryData = await getInterviewCategories();



const formatted = categoryData.map(item=>({


icon:
ICONS[item.name] || "🎯",


title:
item.name,


description:
getDescription(item.name),


questionCount:
item.questions,


difficulty:
item.difficulty


}));


setCategories(formatted);





const historyData = await getInterviewHistory();


console.log(
"INTERVIEW HISTORY:",
historyData
);


setHistory(historyData);



}
catch(error){


console.log(
"Mock interview loading error:",
error
);


}

finally{


setLoading(false);


}


};



loadData();



},[]);









// Start Interview

const handleStart = async(category)=>{


try{


setInterviewLoading(true);



const response = await startInterview(category);



console.log(
"INTERVIEW RESPONSE:",
response
);



setSelected(category);


setQuestions(
response.questions || []
);



}

catch(error){


console.log(
"Start interview error:",
error
);


}

finally{


setInterviewLoading(false);


}



};









// End Interview

const handleFinish = async()=>{


try{


const score = Math.floor(
Math.random()*21 + 80
);


// Save score

await finishInterview(

selected,

score

);



// Refresh history

const updatedHistory =
await getInterviewHistory();


setHistory(updatedHistory);



setSelected(null);

setQuestions([]);



}

catch(error){


console.log(
"Finish interview error:",
error
);


}



};









return (

<DashboardLayout

title="Mock Interview"

subtitle="Practice with AI and track your interview readiness."

>


<div className="mock-interview">





<section>


<h2 className="mi-section-title">

Interview Categories

</h2>




<div className="mi-grid">


{

loading ?


<h3>
Loading categories...
</h3>


:


categories.map((cat)=>(


<InterviewCard


key={cat.title}


{...cat}


onStart={()=>
handleStart(cat.title)
}


/>


))


}



</div>


</section>










{
selected &&


<div className="mi-active">


<div>


<p className="mi-active__label">

Interview Started

</p>


<p className="mi-active__title">

{selected}

</p>


</div>






<div>


<h3>
Questions
</h3>



{

interviewLoading ?


<p>
Generating questions...
</p>


:


questions.map((q,index)=>(


<p key={index}>

{index+1}. {q}

</p>


))


}



</div>





<button

className="btn btn--primary"

onClick={handleFinish}

>

End Session

</button>




</div>


}









<section className="mi-columns">





<div className="mi-panel">


<h2 className="mi-section-title">

Past Scores

</h2>



{


history.length === 0 ?


<p>
No previous interviews yet.
</p>


:


history.map((entry)=>(


<div

className="mi-score-row"

key={entry.id}

>


<div>


<p className="mi-score-row__category">

{entry.category}

</p>


<p className="mi-score-row__date">

{entry.created_at}

</p>


</div>



<span className="mi-score-badge">


{entry.score}


</span>



</div>


))


}



</div>









<div className="mi-panel">


<h2 className="mi-section-title">

Performance Graph

</h2>




<div className="mi-graph">


{


history.length === 0 ?


<p>
Complete interviews to view performance.
</p>


:


history.map((entry)=>(


<div

className="mi-graph__col"

key={entry.id}

>


<div

className="mi-graph__bar"

style={{

height:`${entry.score}%`

}}

>


</div>



<span>

{entry.score}

</span>



</div>



))


}



</div>



</div>





</section>





</div>


</DashboardLayout>


);


}



export default MockInterview;