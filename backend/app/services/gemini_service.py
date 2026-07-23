# import os
# import json
# from dotenv import load_dotenv
# import google.generativeai as genai

# load_dotenv()

# genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# # model = genai.GenerativeModel("gemini-2.5-flash")
# model = genai.GenerativeModel("gemini-2.5-flash")


# def analyze_resume(resume_text: str):
#     prompt = f"""
# You are an AI Resume Analyzer.

# Analyze the following resume and return ONLY valid JSON.

# Return this exact structure:

# {{
#     "name": "",
#     "email": "",
#     "phone": "",
#     "skills": [],
#     "education": [],
#     "projects": [],
#     "experience": ""
# }}

# Resume:

# {resume_text}
# """

#     response = model.generate_content(prompt)

#     text = response.text.strip()

#     # Remove Markdown code blocks if Gemini returns them
#     text = text.replace("```json", "").replace("```", "").strip()

#     return json.loads(text)

# import os
# import json
# from dotenv import load_dotenv
# from google import genai

# load_dotenv()

# client = genai.Client(
#     api_key=os.getenv("GEMINI_API_KEY")
# )


# def analyze_resume(resume_text: str):

#     prompt = f"""
# You are an AI Resume Analyzer.

# Analyze this resume and return ONLY JSON.

# Format:

# {{
# "name":"",
# "email":"",
# "phone":"",
# "skills":[],
# "education":[],
# "projects":[],
# "experience":""
# }}

# Resume:

# {resume_text}
# """


#     response = client.models.generate_content(
#         model="gemini-2.0-flash",
#         contents=prompt
#     )


#     text = response.text.strip()

#     text = text.replace("```json","")
#     text = text.replace("```","")
#     text = text.strip()


#     return json.loads(text)

import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_resume(resume_text: str):

    prompt = f"""
You are an AI Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

Return this exact structure:

{{
    "name": "",
    "email": "",
    "phone": "",
    "skills": [],
    "education": [],
    "projects": [],
    "experience": ""
}}

Resume:

{resume_text}
"""


    response = client.models.generate_content(
        # model="gemini-2.5-flash",
        model="gemini-flash-latest",
        contents=prompt
    )


    text = response.text.strip()


    # Remove markdown formatting if Gemini adds it
    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()


    return json.loads(text)