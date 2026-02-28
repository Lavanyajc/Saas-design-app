import json
import random

companies = [
    "Infosys", "TCS", "Wipro", "Accenture", "Capgemini", "Cognizant",
    "IBM", "Oracle", "SAP", "Dell",
    "Amazon", "Flipkart", "Swiggy", "Razorpay", "PhonePe", "Paytm",
    "Zoho", "Freshworks", "Juspay", "CRED",
    "ShareChat", "Groww", "Unacademy", "Zepto", "Blinkit", "Zomato", "Dunzo",
    "Lenskart", "Meesho", "BrowserStack", "Postman"
]

roles_data = [
    {"title": "SDE Intern", "exp": ["Fresher"], "salary": ["₹15k–₹30k/month Internship", "₹20k–₹40k/month Internship", "₹30k–₹50k/month Internship"]},
    {"title": "Graduate Engineer Trainee", "exp": ["Fresher", "0-1"], "salary": ["3–5 LPA", "4–6 LPA", "5–8 LPA"]},
    {"title": "Junior Backend Developer", "exp": ["0-1", "1-3"], "salary": ["6–10 LPA", "8–12 LPA", "5–9 LPA"]},
    {"title": "Frontend Intern", "exp": ["Fresher"], "salary": ["₹10k–₹25k/month Internship", "₹20k–₹40k/month Internship"]},
    {"title": "QA Intern", "exp": ["Fresher"], "salary": ["₹15k–₹25k/month Internship", "₹10k–₹20k/month Internship"]},
    {"title": "Data Analyst Intern", "exp": ["Fresher"], "salary": ["₹15k–₹35k/month Internship", "₹20k–₹30k/month Internship"]},
    {"title": "Java Developer", "exp": ["0-1", "1-3", "3-5"], "salary": ["5–8 LPA", "8–14 LPA", "10–18 LPA"]},
    {"title": "Python Developer", "exp": ["Fresher", "0-1", "1-3"], "salary": ["4–6 LPA", "6–10 LPA", "8–15 LPA"]},
    {"title": "React Developer", "exp": ["0-1", "1-3", "3-5"], "salary": ["6–9 LPA", "8–14 LPA", "12–20 LPA"]},
    {"title": "Full Stack Engineer", "exp": ["1-3", "3-5"], "salary": ["10–18 LPA", "15–25 LPA", "20–35 LPA"]},
    {"title": "System Administrator", "exp": ["0-1", "1-3"], "salary": ["4–7 LPA", "6–10 LPA"]},
    {"title": "DevOps Intern", "exp": ["Fresher"], "salary": ["₹20k–₹40k/month Internship"]},
    {"title": "UI/UX Designer", "exp": ["1-3", "3-5"], "salary": ["6–12 LPA", "10–18 LPA"]}
]

locations = ["Bengaluru", "Hyderabad", "Pune", "Chennai", "Gurugram", "Noida", "Mumbai"]
modes = ["Remote", "Hybrid", "Onsite"]
sources = ["LinkedIn", "Naukri", "Indeed"]

skills_set = {
    "SDE Intern": ["C++", "Java", "DSA", "Problem Solving", "Git"],
    "Graduate Engineer Trainee": ["Java", "SQL", "Spring Boot", "OOP"],
    "Junior Backend Developer": ["Node.js", "Express", "MongoDB", "SQL", "Python"],
    "Frontend Intern": ["HTML", "CSS", "JavaScript", "React"],
    "QA Intern": ["Selenium", "Manual Testing", "Java", "JIRA"],
    "Data Analyst Intern": ["SQL", "Excel", "Python", "Tableau"],
    "Java Developer": ["Java", "Spring Boot", "Microservices", "REST API", "SQL"],
    "Python Developer": ["Python", "Django", "Flask", "PostgreSQL", "AWS"],
    "React Developer": ["React.js", "Redux", "TypeScript", "Tailwind CSS"],
    "Full Stack Engineer": ["MERN Stack", "React", "Node.js", "Docker", "AWS"],
    "System Administrator": ["Linux", "Networking", "Bash", "Troubleshooting"],
    "DevOps Intern": ["Linux", "Docker", "CI/CD", "Git", "AWS"],
    "UI/UX Designer": ["Figma", "Adobe XD", "Prototyping", "User Research"]
}

desc_templates = [
    "We are looking for a highly motivated {title} to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now.",
    "Join {company} as a {title} and help us build the future of our flagship product. You'll collaborate closely with cross-functional teams to design and implement robust solutions. Proficiency in relevant technologies and a willingness to learn are essential. We offer a fast-paced and rewarding environment.",
    "Exciting opportunity for a {title} at {company}! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail.",
    "Are you a talented {title} looking for your next challenge? {company} is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here.",
    "We at {company} are searching for an innovative {title}. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
]

random.seed(42) # For reproducibility
jobs = []

for i in range(1, 61):
    role = random.choice(roles_data)
    title = role["title"]
    company = random.choice(companies)
    location = random.choice(locations)
    mode = random.choice(modes)
    experience = random.choice(role["exp"])
    
    # Adjust salary based on experience loosely
    salary_opts = role["salary"]
    if experience == "Fresher" and title != "SDE Intern":
        salary = salary_opts[0]
    elif experience == "3-5":
        salary = salary_opts[-1]
    else:
        salary = random.choice(salary_opts)
        
    skills_pool = skills_set.get(title, ["JavaScript", "HTML", "CSS"])
    num_skills = random.randint(3, 5)
    skills = random.sample(skills_pool, min(num_skills, len(skills_pool)))
    
    source = random.choice(sources)
    posted = random.randint(0, 10)
    
    base_desc = random.choice(desc_templates)
    description = base_desc.format(title=title, company=company)
    
    # generate a realistic looking id and url
    job_id = f"job-{i:03d}-{random.randint(1000, 9999)}"
    apply_url = f"https://www.{source.lower()}.com/jobs/view/{job_id}"
    
    job_obj = {
        "id": job_id,
        "title": title,
        "company": company,
        "location": location,
        "mode": mode,
        "experience": experience,
        "skills": skills,
        "source": source,
        "postedDaysAgo": posted,
        "salaryRange": salary,
        "applyUrl": apply_url,
        "description": description
    }
    jobs.append(job_obj)

js_content = "const JOBS_DATA = " + json.dumps(jobs, indent=2) + ";\n"
js_content += "window.JOBS_DATA = JOBS_DATA;\n"

with open("jobs-data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Generated jobs-data.js with {len(jobs)} jobs.")
