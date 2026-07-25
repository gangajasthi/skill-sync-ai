// import axios from "axios";


// const API_URL = "http://127.0.0.1:8000/interview";



// export const getInterviewCategories = async()=>{

//     const response = await axios.get(
//         `${API_URL}/categories`
//     );

//     return response.data;

// };



// export const startInterview = async(category)=>{


//     const response = await axios.post(

//         `${API_URL}/start`,

//         {
//             category: category
//         }

//     );


//     return response.data;

// };

import axios from "axios";


const API_URL = "http://127.0.0.1:8000/interview";



// Get interview categories

export const getInterviewCategories = async()=>{

    const response = await axios.get(
        `${API_URL}/categories`
    );

    return response.data;

};





// Start interview

export const startInterview = async(category)=>{


    const token = localStorage.getItem("token");


    const response = await axios.post(

        `${API_URL}/start`,

        {
            category: category
        },

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );


    return response.data;

};





// Finish interview and save score

export const finishInterview = async(category, score)=>{


    const token = localStorage.getItem("token");


    const response = await axios.post(

        `${API_URL}/finish`,

        {
            category: category,
            score: score
        },

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );


    return response.data;

};





// Get previous interview scores

export const getInterviewHistory = async()=>{


    const token = localStorage.getItem("token");


    const response = await axios.get(

        `${API_URL}/history`,

        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

    );


    return response.data;

};