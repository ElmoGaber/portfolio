"use client"

import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

export default function CV() {
  return (
    <section id="cv" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Curriculum Vitae</h2>

        {/* Personal Info */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Momen Tarek Gaber</h3>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-primary mr-2" />
                <p className="text-gray-300">Egypt, Damietta, New Damietta</p>
              </div>
              <div className="flex items-center mb-2">
                <FaPhone className="text-primary mr-2" />
                <p className="text-gray-300">+201019822648</p>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-primary mr-2" />
                <p className="text-gray-300">momen2004tarek@gmail.com</p>
              </div>
              <div className="flex items-center mb-2">
                <FaGlobe className="text-primary mr-2" />
                <a href="https://linktr.ee/Momen_Gaber" className="text-gray-300 hover:text-primary">
                  linktr.ee/Momen_Gaber
                </a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold mb-4 text-primary">Summary</h3>
          <p className="text-gray-300">
            Artificial intelligence student with a data science focus seeks a role in an impactful organization.
            Possesses 4 years of experience in Java, Python, and C++, and 3 years in writing efficient code. Fluent in
            English, German and Spanish. Has 2 years of experience in demanding environments, and is detail-oriented,
            organized, and customer-focused. Forward-thinking intern pursuing a software degree, capable of handling
            multiple projects, and skilled in design software (Adobe Photoshop, Illustrator, Figma, Canva, and Affinity
            Designer), portfolio creation, practical work experience.
          </p>
        </div>

        {/* Education */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold mb-6 text-primary">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white">Delta University for Science and Technology</h4>
              <p className="text-primary">Bachelor of Computers & Artificial Intelligence Department of AI</p>
              <p className="text-gray-400">2022 – Current</p>
              <p className="text-gray-400">Gamesa, Egypt</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Digital Egypt Pioneers Initiative - DEPI</h4>
              <p className="text-primary">Microsoft Machine Learning Course</p>
              <p className="text-gray-400">2024 – 2025</p>
              <p className="text-gray-400">Cairo, Egypt</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">
                Information Technology Industry Development Agency- ITIDA
              </h4>
              <p className="text-primary">AI for Software Developers Course</p>
              <p className="text-gray-400">2023 – 2024</p>
              <p className="text-gray-400">Cairo, Egypt</p>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold mb-6 text-primary">Courses</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white">Coursera (2024)</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Introduction to Generative AI & Machine Learning With Big Data</li>
                <li>Relational Database Design & Introduction to Databases</li>
                <li>AI engineering with IBM (NLP-Computer Vision-Keras– ML– DL)</li>
                <li>DL.AI tensorflow developer (ML&DL, NLP, Time Series)</li>
                <li>Linux commands and shell scripts</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Udacity (2023)</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  CERTIFIED DATA SCIENTIST PROFESSIONAL - CDSP practical skills in AI, Deep Learning, Machine Learning,
                  and Data Science
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Udemy (2023)</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Deep Learning A-Z: Hands On Artificial Neural Networks</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">DataCamp (2022)</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Front-End Development - Liner Classifiers in Python -Intermediate SQL- Machine Learning Tree Based
                  Model
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">M3aarf (2022)</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>R programming language - Computer Vision</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Mahara-tech (2021)</h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Python programming language - database fundamentals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold mb-6 text-primary">Relevant Coursework</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ul className="list-disc list-inside text-gray-300">
              <li>Data Structures</li>
              <li>Software Methodology</li>
              <li>Python programming</li>
              <li>OOP_Concepts</li>
              <li>Solid understanding of ML Feature</li>
              <li>Neural Network (CNN)</li>
              <li>Transfer Learning</li>
            </ul>
            <ul className="list-disc list-inside text-gray-300">
              <li>Algorithms Analysis</li>
              <li>Database Management</li>
              <li>SQL_query_language</li>
              <li>Gathering and Collecting</li>
              <li>Docker, Kubernetes</li>
              <li>AWS/GCP services</li>
              <li>K-Means</li>
              <li>LSTMs</li>
              <li>OpenAI's LLM</li>
            </ul>
            <ul className="list-disc list-inside text-gray-300">
              <li>Artificial Intelligence</li>
              <li>Internet Technology</li>
              <li>Web scraping using Beautiful Soup</li>
              <li>Naïve Bayes</li>
              <li>Random Forest</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Systems Programming</li>
              <li>Computer Architecture</li>
              <li>Data Manipulation and Wrangling using Pandas</li>
              <li>ETL- Techniques</li>
              <li>Data Visualization using Matplotlib and Seaborn</li>
              <li>Ridge Regression</li>
              <li>Lasso Regression</li>
            </ul>
          </div>
        </div>

        {/* Experience & Internships */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold mb-6 text-primary">Experience & Internships</h3>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Python Engineer Freelancer</h4>
                <div className="text-gray-400">
                  <span className="text-primary">Upwork Freelance</span> | 2024 – Current
                </div>
              </div>
              <p className="text-gray-400 mb-2">Damaietta, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>
                  Proficient in Python frameworks (Django, Flask) and libraries (Pandas, NumPy) with a strong background
                  in web development.
                </li>
                <li>
                  Expertise in database management, RESTful APIs, and cloud services, with excellent problem-solving
                  skills.
                </li>
                <li>
                  Developing custom machine learning models and AI solutions across NLP, computer vision, and data
                  analysis, addressing varied client needs efficiently.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Mobile App Intern</h4>
                <div className="text-gray-400">
                  <span className="text-primary">Custom Tech</span> | 2024 – 2024
                </div>
              </div>
              <p className="text-gray-400 mb-2">Damaietta, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>
                  Assisted in development of the front end of a mobile application for iOS/Android using Dart and the
                  Flutter framework.
                </li>
                <li>
                  Worked with Google Firebase to manage user inputted data across multiple platforms including web and
                  mobile apps.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Artificial Intelligence Intern</h4>
                <div className="text-gray-400">
                  <span className="text-primary">Codsoft Company</span> | 2023 – 2024
                </div>
              </div>
              <p className="text-gray-400 mb-2">Cairo, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Developed Chatbots, Face Recognition, and Image Captioning models.</li>
                <li>Worked on Machine Learning pipelines for automation.</li>
                <li>Increased prediction accuracy by 30%.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Flutter & Mobile Intern</h4>
                <div className="text-gray-400">
                  <span className="text-primary">AMIT Academy</span> | 2023 – 2023
                </div>
              </div>
              <p className="text-gray-400 mb-2">Cairo, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>
                  Collaborated with team members using version control systems such as Git to organize modifications and
                  assign tasks.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Data Analytics Consulting Intern</h4>
                <div className="text-gray-400">
                  <span className="text-primary">Forage Company</span> | 2023 – 2023
                </div>
              </div>
              <p className="text-gray-400 mb-2">Damaietta, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Performed Exploratory Data Analysis (EDA) and predictive modeling.</li>
                <li>
                  Built dashboards using Power BI & Tableau in: Exploratory Data Analysis, Data Modeling, Model Building
                  and Interpretation, Machine Learning Production, Quality Assurance.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">AI Developer Intern</h4>
                <div className="text-gray-400">
                  <span className="text-primary">Instant Software Company</span> | 2022 – 2022
                </div>
              </div>
              <p className="text-gray-400 mb-2">Cairo, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Built AI-powered applications for real-world automation.</li>
                <li>Integrated ML models into web applications for analytics & automation.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">AI Developer Intern</h4>
                <div className="text-gray-400">
                  <span className="text-primary">Route Software Development Academy</span> | 2022 – 2022
                </div>
              </div>
              <p className="text-gray-400 mb-2">Cairo, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>
                  Developed a Convolutional Neural Network (CNN) model for real-time facial emotion detection, enabling
                  applications in sentiment analysis and user experience enhancement.
                </li>
                <li>Built AI-powered applications for real-world automation.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Front End Developer Intern</h4>
                <div className="text-gray-400">
                  <span className="text-primary">BlackStone eIT</span> | 2021 – 2022
                </div>
              </div>
              <p className="text-gray-400 mb-2">Mansoura, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Proficiency in HTML, CSS, and JavaScript.</li>
                <li>
                  Familiarity with Frameworks and Libraries. Exposure to popular front-end technologies such as React,
                  Angular.
                </li>
                <li>The ability to create responsive layouts, implement design principles.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h4 className="text-lg font-medium text-white">Junior Graphic Designer</h4>
                <div className="text-gray-400">
                  <span className="text-primary">Egy Designer Company</span> | 2019 – 2021
                </div>
              </div>
              <p className="text-gray-400 mb-2">Damaietta, Egypt</p>
              <ul className="list-disc list-inside text-gray-300">
                <li>
                  Strong foundation in design principles with proficiency in Adobe Creative Suite, Figma, and Canva.
                </li>
                <li>
                  Experienced in typography, layout, and color theory, creating visual content for both digital and
                  print.
                </li>
                <li>Eager to work in dynamic teams.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold mb-6 text-primary">Projects ({">"}50 Projects)</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white">
                Advanced Tooth X-Ray Disease Detection | Data Prepossessing, Deep Learning (2024)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>AI-based system for detecting and dental issues from X-ray images.</li>
                <li>Use deep learning models like YOLOv5, YOLOv8, and Faster R-CNN for high accuracy.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Mall Problem | Data Prepossessing, Unsupervised ML Clustering (2024)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Apply All Clusters ML algorithms.</li>
                <li>Evaluate all model's performance and accuracy.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Skin Cancer Prediction | Data Prepossessing, Unsupervised ML Clustering (2024)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Created a deep learning model for detecting skin cancer using CNNs, achieving a classification
                  accuracy of 78% based on medical image datasets.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Thanos.py Project | Data Prepossessing, Supervised ML Classification (2024)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Open file using (OS) Library.</li>
                <li>Choice random data from that file using (Random) Library and Remove That data from the file.</li>
                <li>
                  Use sleep function from Time Library Which suspends execution of the current thread for a given number
                  of seconds.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Analyze the eCommerce Purchase | Data Prepossessing, Supervised ML Classification (2023)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Segment customers using clustering techniques based on purchasing behavior and demographics.</li>
                <li>Develop targeted marketing campaigns to boost engagement and sales.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Real-Time Object Detection | Data Prepossessing, Supervised ML Classification (2023)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Used OpenCV to create a real-time object detection model, enabling practical applications in
                  surveillance and automation.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Employee and Countries | Data Collecting Using Web Services (2023)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Using web services for collecting data and load data as JSON file.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Telecom Churn Predictions | Data Prepossessing, Supervised ML Classification (2023)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Telecom Churn Prediction by applying all Classification ML algorithms.</li>
                <li>Evaluate all model's Accuracy.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Chat with Your PDF | Data Prepossessing, Supervised ML Classification (2023)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Developed an AI chatbot that extracts and interacts with text from PDF documents using OpenAI's LLM,
                  allowing efficient document analysis.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Houses Price Predictions | Data Prepossessing, Supervised ML Regression (2022)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Select The Most efficient model which has high performance and high Accuracy.</li>
                <li>Evaluate all model's performance and accuracy.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Preprocess Loan Data | Python, Data Cleansing, ETL (2022)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Apply Feature Selection Techniques.</li>
                <li>Apply the Data Cleansing process.</li>
                <li>Apply Feature Engineering Techniques.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Recommendation System | Python, Data Prepossessing, ETL (2022)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Built a book recommendation system using K-Nearest Neighbors (KNN), providing personalized book
                  suggestions based on user preferences.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Weather and Books Logs | Data Scraping, Collecting (2021)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Scraping Weather data from a weather website.</li>
                <li>Scraping Books data from the Books website.</li>
                <li>Save That data in CSV files and Databases.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                TMDB Movies Analysis | Python, EDA, Data Visualization (2021)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Apply EDA Process on data.</li>
                <li>Apply Data Visualization Process on data.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Titanic Analysis Project | Python, Selenium, Google Cloud Console (2021)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Visualize data using some Visualize elements like (charts, plots, maps) To identify the Pattern and
                  Trends of data.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Gym Reservation Bot | Python, Selenium, Google Cloud Console (2021)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed an automatic bot using Python and Google Cloud Console.</li>
                <li>
                  Implemented Selenium and Created a Linux virtual machine to run on Google Cloud so that the program is
                  able to run everyday.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Ticket Price Calculator App | Java, Android Studio (2020)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Created an Android application using Java and Android Studio to calculate ticket prices for trips to
                  museums in NYC.
                </li>
                <li>
                  Utilized the layout editor to create a UI for the application in order to allow different scene.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Transaction Management GUI | Java, Eclipse, JavaFX (2020)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Designed a sample banking transaction system using Java to simulate the common functions.</li>
                <li>Used JavaFX to create a GUI that supports actions such as creating an account, deposit.</li>
                <li>Implemented object-oriented programming practices.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white">
                Speech Recognition & Text-to-Speech | Python, AI systems, conversion (2020)
              </h4>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>
                  Built AI systems for speech recognition and text-to-speech conversion, enhancing accessibility and
                  automation.
                </li>
                <li>Designed a sample banking transaction system using Java to simulate the common functions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-secondary rounded-lg p-8 mb-10">
          <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-2">Languages</h4>
              <p className="text-gray-300">Python, Java, C, HTML/CSS, JavaScript, SQL, R, C#, C++</p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Developer Tools</h4>
              <p className="text-gray-300">VS Code, Eclipse, Google Cloud Platform, Android Studio</p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Technologies/Frameworks</h4>
              <p className="text-gray-300">Linux, Jenkins, GitHub, JUnit, WordPress</p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Other</h4>
              <p className="text-gray-300">Robotics, Arduino Programming, Shell Scripting</p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-2">Artificial Intelligence</h4>
              <p className="text-gray-300">
                Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, OpenCV, Transformers, Keras, PyTorch
              </p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Data Analysis & Visualization</h4>
              <p className="text-gray-300">Python, SQL, Power BI, Tableau, Excel, Google Data Studio</p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Operating Systems</h4>
              <p className="text-gray-300">Windows, Linux</p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Web Scraping & Automation</h4>
              <p className="text-gray-300">BeautifulSoup, Selenium</p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Deployment</h4>
              <p className="text-gray-300">Flask, Streamlit, AWS EC2, FastAPI</p>

              <h4 className="text-lg font-medium text-white mt-4 mb-2">Version Control & Collaboration</h4>
              <p className="text-gray-300">Git, GitHub</p>
            </div>
          </div>
        </div>

        {/* Soft Skills, Languages, Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Good ability to work within Teamwork</li>
              <li>Good ability to communicate</li>
              <li>Ability to think outside the box</li>
              <li>Good ability to work under pressure</li>
              <li>Have a self motivation</li>
              <li>Flexible</li>
              <li>Quick learner</li>
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Arabic (Native)</li>
              <li>English (IELTS: 6/B2)</li>
              <li>German (Good)</li>
              <li>Spanish (Acceptable)</li>
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">Hobbies</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Bodybuilding</li>
              <li>Play chess</li>
              <li>Meditation</li>
              <li>Reading</li>
              <li>Traveling</li>
            </ul>
          </div>
        </div>

        {/* Leadership / Extracurricular */}
        <div className="bg-secondary rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-primary">Leadership / Extracurricular</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-white">Spring 2025</h4>
              <p className="text-gray-300">
                Volunteer in ICPC - International Collegiate Programming Contest in Delta University
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Spring 2024</h4>
              <p className="text-gray-300">Winner of fifth place in presenting my project in the competition.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Spring 2024</h4>
              <p className="text-gray-300">
                Led chapter of 4 members to work towards goals that improve and promote community service, academics.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Spring 2023</h4>
              <p className="text-gray-300">
                Outstanding Student at the level of my college in the scientific day of the college.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
