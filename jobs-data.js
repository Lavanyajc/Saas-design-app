const JOBS_DATA = [
  {
    "id": "job-001-7912",
    "title": "System Administrator",
    "company": "Accenture",
    "location": "Bengaluru",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "Networking",
      "Bash",
      "Linux"
    ],
    "source": "Indeed",
    "postedDaysAgo": 8,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-001-7912",
    "description": "We are looking for a highly motivated System Administrator to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-002-1106",
    "title": "SDE Intern",
    "company": "Infosys",
    "location": "Bengaluru",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "C++",
      "Java",
      "DSA",
      "Problem Solving",
      "Git"
    ],
    "source": "Naukri",
    "postedDaysAgo": 9,
    "salaryRange": "\u20b930k\u2013\u20b950k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-002-1106",
    "description": "Exciting opportunity for a SDE Intern at Infosys! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-003-2584",
    "title": "UI/UX Designer",
    "company": "Zomato",
    "location": "Hyderabad",
    "mode": "Onsite",
    "experience": "3-5",
    "skills": [
      "Prototyping",
      "Figma",
      "User Research",
      "Adobe XD"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 1,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-003-2584",
    "description": "Are you a talented UI/UX Designer looking for your next challenge? Zomato is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-004-5803",
    "title": "Data Analyst Intern",
    "company": "Lenskart",
    "location": "Pune",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "Tableau",
      "Python",
      "SQL"
    ],
    "source": "Naukri",
    "postedDaysAgo": 1,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-004-5803",
    "description": "We at Lenskart are searching for an innovative Data Analyst Intern. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-005-5554",
    "title": "System Administrator",
    "company": "CRED",
    "location": "Mumbai",
    "mode": "Hybrid",
    "experience": "0-1",
    "skills": [
      "Networking",
      "Troubleshooting",
      "Linux"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 1,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-005-5554",
    "description": "Are you a talented System Administrator looking for your next challenge? CRED is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-006-3803",
    "title": "Python Developer",
    "company": "ShareChat",
    "location": "Mumbai",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "Flask",
      "Django",
      "AWS",
      "PostgreSQL"
    ],
    "source": "Indeed",
    "postedDaysAgo": 10,
    "salaryRange": "4\u20136 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-006-3803",
    "description": "We are looking for a highly motivated Python Developer to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-007-7572",
    "title": "React Developer",
    "company": "Zepto",
    "location": "Hyderabad",
    "mode": "Remote",
    "experience": "1-3",
    "skills": [
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "React.js"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 0,
    "salaryRange": "8\u201314 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-007-7572",
    "description": "Exciting opportunity for a React Developer at Zepto! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-008-5040",
    "title": "QA Intern",
    "company": "Wipro",
    "location": "Hyderabad",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "JIRA",
      "Manual Testing",
      "Java"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 4,
    "salaryRange": "\u20b915k\u2013\u20b925k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-008-5040",
    "description": "Join Wipro as a QA Intern and help us build the future of our flagship product. You'll collaborate closely with cross-functional teams to design and implement robust solutions. Proficiency in relevant technologies and a willingness to learn are essential. We offer a fast-paced and rewarding environment."
  },
  {
    "id": "job-009-3504",
    "title": "DevOps Intern",
    "company": "Freshworks",
    "location": "Gurugram",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "Git",
      "CI/CD",
      "Linux",
      "AWS",
      "Docker"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 0,
    "salaryRange": "\u20b920k\u2013\u20b940k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-009-3504",
    "description": "We are looking for a highly motivated DevOps Intern to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-010-9797",
    "title": "System Administrator",
    "company": "Cognizant",
    "location": "Mumbai",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "Troubleshooting",
      "Bash",
      "Networking",
      "Linux"
    ],
    "source": "Indeed",
    "postedDaysAgo": 0,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-010-9797",
    "description": "We are looking for a highly motivated System Administrator to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-011-9201",
    "title": "UI/UX Designer",
    "company": "SAP",
    "location": "Mumbai",
    "mode": "Onsite",
    "experience": "3-5",
    "skills": [
      "Prototyping",
      "Adobe XD",
      "Figma"
    ],
    "source": "Naukri",
    "postedDaysAgo": 0,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-011-9201",
    "description": "Exciting opportunity for a UI/UX Designer at SAP! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-012-6310",
    "title": "UI/UX Designer",
    "company": "Cognizant",
    "location": "Gurugram",
    "mode": "Remote",
    "experience": "3-5",
    "skills": [
      "Adobe XD",
      "Figma",
      "User Research",
      "Prototyping"
    ],
    "source": "Indeed",
    "postedDaysAgo": 8,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-012-6310",
    "description": "We are looking for a highly motivated UI/UX Designer to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-013-9727",
    "title": "Python Developer",
    "company": "Infosys",
    "location": "Bengaluru",
    "mode": "Hybrid",
    "experience": "0-1",
    "skills": [
      "Django",
      "Python",
      "PostgreSQL"
    ],
    "source": "Indeed",
    "postedDaysAgo": 7,
    "salaryRange": "4\u20136 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-013-9727",
    "description": "We are looking for a highly motivated Python Developer to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-014-7537",
    "title": "UI/UX Designer",
    "company": "Capgemini",
    "location": "Hyderabad",
    "mode": "Onsite",
    "experience": "3-5",
    "skills": [
      "Adobe XD",
      "User Research",
      "Prototyping",
      "Figma"
    ],
    "source": "Indeed",
    "postedDaysAgo": 3,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-014-7537",
    "description": "Exciting opportunity for a UI/UX Designer at Capgemini! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-015-4770",
    "title": "System Administrator",
    "company": "ShareChat",
    "location": "Pune",
    "mode": "Hybrid",
    "experience": "1-3",
    "skills": [
      "Networking",
      "Linux",
      "Troubleshooting"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 9,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-015-4770",
    "description": "We at ShareChat are searching for an innovative System Administrator. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-016-8953",
    "title": "Full Stack Engineer",
    "company": "Oracle",
    "location": "Bengaluru",
    "mode": "Remote",
    "experience": "1-3",
    "skills": [
      "MERN Stack",
      "Node.js",
      "AWS"
    ],
    "source": "Indeed",
    "postedDaysAgo": 3,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-016-8953",
    "description": "Exciting opportunity for a Full Stack Engineer at Oracle! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-017-6804",
    "title": "Frontend Intern",
    "company": "Freshworks",
    "location": "Hyderabad",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "React",
      "CSS",
      "HTML"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 1,
    "salaryRange": "\u20b910k\u2013\u20b925k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-017-6804",
    "description": "Are you a talented Frontend Intern looking for your next challenge? Freshworks is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-018-9786",
    "title": "Java Developer",
    "company": "Razorpay",
    "location": "Chennai",
    "mode": "Onsite",
    "experience": "0-1",
    "skills": [
      "Java",
      "SQL",
      "Spring Boot",
      "Microservices",
      "REST API"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 3,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-018-9786",
    "description": "Join Razorpay as a Java Developer and help us build the future of our flagship product. You'll collaborate closely with cross-functional teams to design and implement robust solutions. Proficiency in relevant technologies and a willingness to learn are essential. We offer a fast-paced and rewarding environment."
  },
  {
    "id": "job-019-1241",
    "title": "Python Developer",
    "company": "Capgemini",
    "location": "Chennai",
    "mode": "Remote",
    "experience": "0-1",
    "skills": [
      "Python",
      "PostgreSQL",
      "Flask"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 0,
    "salaryRange": "6\u201310 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-019-1241",
    "description": "We at Capgemini are searching for an innovative Python Developer. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-020-1035",
    "title": "Graduate Engineer Trainee",
    "company": "BrowserStack",
    "location": "Mumbai",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "OOP",
      "SQL",
      "Java",
      "Spring Boot"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 2,
    "salaryRange": "3\u20135 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-020-1035",
    "description": "Are you a talented Graduate Engineer Trainee looking for your next challenge? BrowserStack is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-021-9883",
    "title": "Java Developer",
    "company": "SAP",
    "location": "Mumbai",
    "mode": "Hybrid",
    "experience": "1-3",
    "skills": [
      "SQL",
      "REST API",
      "Java",
      "Microservices",
      "Spring Boot"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 0,
    "salaryRange": "8\u201314 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-021-9883",
    "description": "We at SAP are searching for an innovative Java Developer. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-022-2113",
    "title": "SDE Intern",
    "company": "Zepto",
    "location": "Pune",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "Git",
      "Java",
      "C++",
      "DSA"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 1,
    "salaryRange": "\u20b930k\u2013\u20b950k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-022-2113",
    "description": "We at Zepto are searching for an innovative SDE Intern. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-023-9565",
    "title": "System Administrator",
    "company": "Lenskart",
    "location": "Hyderabad",
    "mode": "Hybrid",
    "experience": "0-1",
    "skills": [
      "Linux",
      "Bash",
      "Troubleshooting",
      "Networking"
    ],
    "source": "Indeed",
    "postedDaysAgo": 9,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-023-9565",
    "description": "We at Lenskart are searching for an innovative System Administrator. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-024-8491",
    "title": "Data Analyst Intern",
    "company": "BrowserStack",
    "location": "Pune",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "Python",
      "Excel",
      "SQL"
    ],
    "source": "Indeed",
    "postedDaysAgo": 10,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.indeed.com/jobs/view/job-024-8491",
    "description": "Exciting opportunity for a Data Analyst Intern at BrowserStack! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-025-5002",
    "title": "Data Analyst Intern",
    "company": "BrowserStack",
    "location": "Mumbai",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "SQL",
      "Tableau",
      "Python",
      "Excel"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 5,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-025-5002",
    "description": "We are looking for a highly motivated Data Analyst Intern to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-026-2753",
    "title": "Data Analyst Intern",
    "company": "Dell",
    "location": "Hyderabad",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "SQL",
      "Python",
      "Excel",
      "Tableau"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 4,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-026-2753",
    "description": "We are looking for a highly motivated Data Analyst Intern to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-027-7939",
    "title": "DevOps Intern",
    "company": "Freshworks",
    "location": "Hyderabad",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "Docker",
      "CI/CD",
      "Linux",
      "AWS",
      "Git"
    ],
    "source": "Naukri",
    "postedDaysAgo": 0,
    "salaryRange": "\u20b920k\u2013\u20b940k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-027-7939",
    "description": "We are looking for a highly motivated DevOps Intern to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-028-2232",
    "title": "QA Intern",
    "company": "TCS",
    "location": "Bengaluru",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "Java",
      "Selenium",
      "Manual Testing",
      "JIRA"
    ],
    "source": "Indeed",
    "postedDaysAgo": 0,
    "salaryRange": "\u20b915k\u2013\u20b925k/month Internship",
    "applyUrl": "https://www.indeed.com/jobs/view/job-028-2232",
    "description": "We are looking for a highly motivated QA Intern to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-029-1653",
    "title": "DevOps Intern",
    "company": "Meesho",
    "location": "Hyderabad",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "AWS",
      "Docker",
      "Git",
      "Linux"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 4,
    "salaryRange": "\u20b920k\u2013\u20b940k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-029-1653",
    "description": "Exciting opportunity for a DevOps Intern at Meesho! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-030-1406",
    "title": "Data Analyst Intern",
    "company": "IBM",
    "location": "Noida",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "Tableau",
      "Python",
      "SQL",
      "Excel"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 2,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-030-1406",
    "description": "Are you a talented Data Analyst Intern looking for your next challenge? IBM is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-031-8541",
    "title": "Junior Backend Developer",
    "company": "Zepto",
    "location": "Pune",
    "mode": "Hybrid",
    "experience": "0-1",
    "skills": [
      "Node.js",
      "SQL",
      "Python"
    ],
    "source": "Naukri",
    "postedDaysAgo": 3,
    "salaryRange": "8\u201312 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-031-8541",
    "description": "Join Zepto as a Junior Backend Developer and help us build the future of our flagship product. You'll collaborate closely with cross-functional teams to design and implement robust solutions. Proficiency in relevant technologies and a willingness to learn are essential. We offer a fast-paced and rewarding environment."
  },
  {
    "id": "job-032-6753",
    "title": "Data Analyst Intern",
    "company": "Dell",
    "location": "Mumbai",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "Excel",
      "Tableau",
      "Python"
    ],
    "source": "Naukri",
    "postedDaysAgo": 1,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-032-6753",
    "description": "Exciting opportunity for a Data Analyst Intern at Dell! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-033-8119",
    "title": "System Administrator",
    "company": "Zoho",
    "location": "Chennai",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "Bash",
      "Linux",
      "Networking"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 1,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-033-8119",
    "description": "We at Zoho are searching for an innovative System Administrator. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-034-9518",
    "title": "Data Analyst Intern",
    "company": "Zepto",
    "location": "Mumbai",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "SQL",
      "Excel",
      "Tableau",
      "Python"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 6,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-034-9518",
    "description": "We are looking for a highly motivated Data Analyst Intern to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-035-9308",
    "title": "UI/UX Designer",
    "company": "Freshworks",
    "location": "Noida",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "Figma",
      "Prototyping",
      "Adobe XD",
      "User Research"
    ],
    "source": "Indeed",
    "postedDaysAgo": 1,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-035-9308",
    "description": "Exciting opportunity for a UI/UX Designer at Freshworks! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-036-3851",
    "title": "QA Intern",
    "company": "Groww",
    "location": "Chennai",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "Java",
      "JIRA",
      "Selenium",
      "Manual Testing"
    ],
    "source": "Naukri",
    "postedDaysAgo": 10,
    "salaryRange": "\u20b915k\u2013\u20b925k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-036-3851",
    "description": "Are you a talented QA Intern looking for your next challenge? Groww is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-037-4501",
    "title": "Full Stack Engineer",
    "company": "Juspay",
    "location": "Pune",
    "mode": "Hybrid",
    "experience": "1-3",
    "skills": [
      "React",
      "Docker",
      "Node.js",
      "AWS"
    ],
    "source": "Naukri",
    "postedDaysAgo": 7,
    "salaryRange": "15\u201325 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-037-4501",
    "description": "Are you a talented Full Stack Engineer looking for your next challenge? Juspay is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-038-4680",
    "title": "React Developer",
    "company": "Paytm",
    "location": "Mumbai",
    "mode": "Onsite",
    "experience": "0-1",
    "skills": [
      "TypeScript",
      "Tailwind CSS",
      "Redux"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 3,
    "salaryRange": "12\u201320 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-038-4680",
    "description": "Exciting opportunity for a React Developer at Paytm! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-039-7547",
    "title": "UI/UX Designer",
    "company": "IBM",
    "location": "Hyderabad",
    "mode": "Remote",
    "experience": "1-3",
    "skills": [
      "Figma",
      "Adobe XD",
      "Prototyping",
      "User Research"
    ],
    "source": "Indeed",
    "postedDaysAgo": 6,
    "salaryRange": "6\u201312 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-039-7547",
    "description": "Are you a talented UI/UX Designer looking for your next challenge? IBM is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-040-1822",
    "title": "Frontend Intern",
    "company": "Capgemini",
    "location": "Noida",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "React",
      "HTML",
      "JavaScript"
    ],
    "source": "Indeed",
    "postedDaysAgo": 8,
    "salaryRange": "\u20b910k\u2013\u20b925k/month Internship",
    "applyUrl": "https://www.indeed.com/jobs/view/job-040-1822",
    "description": "Are you a talented Frontend Intern looking for your next challenge? Capgemini is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-041-5246",
    "title": "React Developer",
    "company": "Oracle",
    "location": "Mumbai",
    "mode": "Remote",
    "experience": "1-3",
    "skills": [
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "React.js"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 7,
    "salaryRange": "6\u20139 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-041-5246",
    "description": "Are you a talented React Developer looking for your next challenge? Oracle is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-042-4841",
    "title": "UI/UX Designer",
    "company": "Oracle",
    "location": "Mumbai",
    "mode": "Onsite",
    "experience": "3-5",
    "skills": [
      "User Research",
      "Prototyping",
      "Figma",
      "Adobe XD"
    ],
    "source": "Naukri",
    "postedDaysAgo": 1,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-042-4841",
    "description": "Exciting opportunity for a UI/UX Designer at Oracle! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-043-2052",
    "title": "QA Intern",
    "company": "Amazon",
    "location": "Pune",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "Manual Testing",
      "Selenium",
      "JIRA"
    ],
    "source": "Indeed",
    "postedDaysAgo": 2,
    "salaryRange": "\u20b915k\u2013\u20b925k/month Internship",
    "applyUrl": "https://www.indeed.com/jobs/view/job-043-2052",
    "description": "Join Amazon as a QA Intern and help us build the future of our flagship product. You'll collaborate closely with cross-functional teams to design and implement robust solutions. Proficiency in relevant technologies and a willingness to learn are essential. We offer a fast-paced and rewarding environment."
  },
  {
    "id": "job-044-7232",
    "title": "Java Developer",
    "company": "Razorpay",
    "location": "Pune",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "Spring Boot",
      "REST API",
      "SQL"
    ],
    "source": "Indeed",
    "postedDaysAgo": 0,
    "salaryRange": "8\u201314 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-044-7232",
    "description": "We at Razorpay are searching for an innovative Java Developer. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-045-7371",
    "title": "Python Developer",
    "company": "Infosys",
    "location": "Pune",
    "mode": "Hybrid",
    "experience": "0-1",
    "skills": [
      "AWS",
      "Django",
      "PostgreSQL",
      "Python",
      "Flask"
    ],
    "source": "Naukri",
    "postedDaysAgo": 7,
    "salaryRange": "6\u201310 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-045-7371",
    "description": "We are looking for a highly motivated Python Developer to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-046-2375",
    "title": "Data Analyst Intern",
    "company": "Groww",
    "location": "Noida",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "Excel",
      "Python",
      "SQL",
      "Tableau"
    ],
    "source": "Indeed",
    "postedDaysAgo": 9,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.indeed.com/jobs/view/job-046-2375",
    "description": "We are looking for a highly motivated Data Analyst Intern to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-047-5558",
    "title": "System Administrator",
    "company": "Razorpay",
    "location": "Hyderabad",
    "mode": "Hybrid",
    "experience": "0-1",
    "skills": [
      "Troubleshooting",
      "Networking",
      "Linux",
      "Bash"
    ],
    "source": "Naukri",
    "postedDaysAgo": 5,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-047-5558",
    "description": "Are you a talented System Administrator looking for your next challenge? Razorpay is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-048-1659",
    "title": "UI/UX Designer",
    "company": "Postman",
    "location": "Mumbai",
    "mode": "Hybrid",
    "experience": "3-5",
    "skills": [
      "User Research",
      "Figma",
      "Prototyping"
    ],
    "source": "Naukri",
    "postedDaysAgo": 3,
    "salaryRange": "10\u201318 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-048-1659",
    "description": "We are looking for a highly motivated UI/UX Designer to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-049-5198",
    "title": "UI/UX Designer",
    "company": "Infosys",
    "location": "Hyderabad",
    "mode": "Remote",
    "experience": "1-3",
    "skills": [
      "Adobe XD",
      "User Research",
      "Figma"
    ],
    "source": "Indeed",
    "postedDaysAgo": 3,
    "salaryRange": "6\u201312 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-049-5198",
    "description": "Are you a talented UI/UX Designer looking for your next challenge? Infosys is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-050-7498",
    "title": "UI/UX Designer",
    "company": "Flipkart",
    "location": "Hyderabad",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "Figma",
      "Prototyping",
      "User Research",
      "Adobe XD"
    ],
    "source": "Indeed",
    "postedDaysAgo": 10,
    "salaryRange": "6\u201312 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-050-7498",
    "description": "Are you a talented UI/UX Designer looking for your next challenge? Flipkart is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-051-8018",
    "title": "DevOps Intern",
    "company": "IBM",
    "location": "Bengaluru",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "CI/CD",
      "Linux",
      "AWS"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 5,
    "salaryRange": "\u20b920k\u2013\u20b940k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-051-8018",
    "description": "We at IBM are searching for an innovative DevOps Intern. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-052-8135",
    "title": "System Administrator",
    "company": "Flipkart",
    "location": "Bengaluru",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "Troubleshooting",
      "Linux",
      "Networking",
      "Bash"
    ],
    "source": "Indeed",
    "postedDaysAgo": 7,
    "salaryRange": "4\u20137 LPA",
    "applyUrl": "https://www.indeed.com/jobs/view/job-052-8135",
    "description": "Join Flipkart as a System Administrator and help us build the future of our flagship product. You'll collaborate closely with cross-functional teams to design and implement robust solutions. Proficiency in relevant technologies and a willingness to learn are essential. We offer a fast-paced and rewarding environment."
  },
  {
    "id": "job-053-8385",
    "title": "Junior Backend Developer",
    "company": "Zepto",
    "location": "Gurugram",
    "mode": "Onsite",
    "experience": "1-3",
    "skills": [
      "SQL",
      "Python",
      "Express",
      "MongoDB",
      "Node.js"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 1,
    "salaryRange": "5\u20139 LPA",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-053-8385",
    "description": "Exciting opportunity for a Junior Backend Developer at Zepto! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-054-5232",
    "title": "Frontend Intern",
    "company": "Blinkit",
    "location": "Chennai",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ],
    "source": "Naukri",
    "postedDaysAgo": 3,
    "salaryRange": "\u20b910k\u2013\u20b925k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-054-5232",
    "description": "Exciting opportunity for a Frontend Intern at Blinkit! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-055-4937",
    "title": "Data Analyst Intern",
    "company": "SAP",
    "location": "Gurugram",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "SQL",
      "Python",
      "Tableau",
      "Excel"
    ],
    "source": "LinkedIn",
    "postedDaysAgo": 6,
    "salaryRange": "\u20b915k\u2013\u20b935k/month Internship",
    "applyUrl": "https://www.linkedin.com/jobs/view/job-055-4937",
    "description": "Are you a talented Data Analyst Intern looking for your next challenge? SAP is hiring! You'll work on cutting-edge features and help shape our technical architecture. A collaborative mindset and the ability to thrive in a dynamic setting will make you successful here."
  },
  {
    "id": "job-056-7046",
    "title": "DevOps Intern",
    "company": "Paytm",
    "location": "Noida",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "Linux",
      "AWS",
      "Docker",
      "Git"
    ],
    "source": "Naukri",
    "postedDaysAgo": 3,
    "salaryRange": "\u20b920k\u2013\u20b940k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-056-7046",
    "description": "Exciting opportunity for a DevOps Intern at Paytm! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  },
  {
    "id": "job-057-2976",
    "title": "Python Developer",
    "company": "Freshworks",
    "location": "Gurugram",
    "mode": "Hybrid",
    "experience": "0-1",
    "skills": [
      "Flask",
      "AWS",
      "PostgreSQL",
      "Django",
      "Python"
    ],
    "source": "Naukri",
    "postedDaysAgo": 4,
    "salaryRange": "8\u201315 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-057-2976",
    "description": "Join Freshworks as a Python Developer and help us build the future of our flagship product. You'll collaborate closely with cross-functional teams to design and implement robust solutions. Proficiency in relevant technologies and a willingness to learn are essential. We offer a fast-paced and rewarding environment."
  },
  {
    "id": "job-058-5636",
    "title": "DevOps Intern",
    "company": "IBM",
    "location": "Pune",
    "mode": "Remote",
    "experience": "Fresher",
    "skills": [
      "Docker",
      "Git",
      "AWS"
    ],
    "source": "Indeed",
    "postedDaysAgo": 9,
    "salaryRange": "\u20b920k\u2013\u20b940k/month Internship",
    "applyUrl": "https://www.indeed.com/jobs/view/job-058-5636",
    "description": "We at IBM are searching for an innovative DevOps Intern. In this role, you will contribute to critical projects from day one. We foster a culture of mentorship and continuous learning. Bring your ideas and help us deliver exceptional experiences to our users."
  },
  {
    "id": "job-059-5786",
    "title": "Graduate Engineer Trainee",
    "company": "Dunzo",
    "location": "Hyderabad",
    "mode": "Hybrid",
    "experience": "Fresher",
    "skills": [
      "SQL",
      "OOP",
      "Java",
      "Spring Boot"
    ],
    "source": "Naukri",
    "postedDaysAgo": 0,
    "salaryRange": "3\u20135 LPA",
    "applyUrl": "https://www.naukri.com/jobs/view/job-059-5786",
    "description": "We are looking for a highly motivated Graduate Engineer Trainee to join our engineering team. You will be responsible for building high-quality, scalable applications. A strong foundation in computer science fundamentals is a must. If you are passionate about technology and want to make an impact, apply now."
  },
  {
    "id": "job-060-4020",
    "title": "DevOps Intern",
    "company": "Postman",
    "location": "Hyderabad",
    "mode": "Onsite",
    "experience": "Fresher",
    "skills": [
      "Linux",
      "CI/CD",
      "Docker"
    ],
    "source": "Naukri",
    "postedDaysAgo": 7,
    "salaryRange": "\u20b920k\u2013\u20b940k/month Internship",
    "applyUrl": "https://www.naukri.com/jobs/view/job-060-4020",
    "description": "Exciting opportunity for a DevOps Intern at Postman! You will play a key role in developing and maintaining our core platforms. We value clean code, agile methodologies, and continuous improvement. Candidates should have excellent problem-solving skills and a strong eye for detail."
  }
];
window.JOBS_DATA = JOBS_DATA;
