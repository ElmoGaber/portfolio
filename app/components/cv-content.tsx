"use client"

import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

export default function CVContent() {
  const generatePDF = () => {
    // Create a new window for the PDF content
    const printWindow = window.open("", "_blank")

    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Momen Tarek Gaber - CV</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: Arial, sans-serif;
              line-height: 1.4;
              color: #333;
              max-width: 210mm;
              margin: 0 auto;
              padding: 15mm;
              font-size: 11px;
            }
            
            .header {
              text-align: center;
              margin-bottom: 20px;
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
            }
            
            .name {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            
            .contact-info {
              font-size: 10px;
              margin-bottom: 5px;
            }
            
            .section {
              margin-bottom: 15px;
            }
            
            .section-title {
              font-size: 14px;
              font-weight: bold;
              margin-bottom: 8px;
              border-bottom: 1px solid #333;
              padding-bottom: 2px;
            }
            
            .subsection {
              margin-bottom: 10px;
            }
            
            .job-title {
              font-weight: bold;
              margin-bottom: 2px;
            }
            
            .company-info {
              font-style: italic;
              margin-bottom: 3px;
              font-size: 10px;
            }
            
            .description {
              margin-left: 10px;
              margin-bottom: 3px;
            }
            
            .skills-grid {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 10px;
              margin-top: 5px;
            }
            
            .skills-column ul {
              list-style-type: disc;
              margin-left: 15px;
            }
            
            .skills-column li {
              margin-bottom: 2px;
              font-size: 10px;
            }
            
            .two-column {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }
            
            .project {
              margin-bottom: 8px;
            }
            
            .project-title {
              font-weight: bold;
              font-size: 10px;
            }
            
            .project-desc {
              font-size: 9px;
              margin-left: 10px;
            }
            
            ul {
              margin-left: 15px;
            }
            
            li {
              margin-bottom: 2px;
            }
            
            @media print {
              body {
                margin: 0;
                padding: 10mm;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="name">Momen Tarek Gaber</div>
            <div class="contact-info">Egypt, Damietta, New Damietta</div>
            <div class="contact-info">+201019822648 | momen2004tarek@gmail.com</div>
            <div class="contact-info">Momen Tarek | LinkedIn | https://linktr.ee/Momen_Gaber</div>
          </div>

          <div class="section">
            <div class="section-title">Summary</div>
            <p>Artificial intelligence student with a data science focus seeks a role in an impactful organization. Possesses 4 years of experience in Java, Python, and C++, and 3 years in writing efficient code. Fluent in English, German and Spanish. Has 2 years of experience in demanding environments, and is detail-oriented, organized, and customer-focused. Forward-thinking intern pursuing a software degree, capable of handling multiple projects, and skilled in design software (Adobe Photoshop, Illustrator, Figma, Canva, and Affinity Designer), portfolio creation, practical work experience.</p>
          </div>

          <div class="section">
            <div class="section-title">Education</div>
            <div class="subsection">
              <div class="job-title">Delta University for Science and Technology</div>
              <div class="company-info">Bachelor of Computers & Artificial Intelligence Department of AI | 2022 – Current | Gamesa, Egypt</div>
            </div>
            <div class="subsection">
              <div class="job-title">Digital Egypt Pioneers Initiative - DEPI</div>
              <div class="company-info">Microsoft Machine Learning Course | 2024 – 2025 | Cairo, Egypt</div>
            </div>
            <div class="subsection">
              <div class="job-title">Information Technology Industry Development Agency- ITIDA</div>
              <div class="company-info">AI for Software Developers Course | 2023 – 2024 | Cairo, Egypt</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Courses</div>
            <div class="subsection">
              <div class="job-title">Coursera 2024</div>
              <ul>
                <li>Introduction to Generative AI & Machine Learning With Big Data</li>
                <li>Relational Database Design & Introduction to Databases</li>
                <li>AI engineering with IBM (NLP-Computer Vision-Keras– ML– DL)</li>
                <li>DL.AI tensorflow developer (ML&DL, NLP, Time Series)</li>
                <li>Linux commands and shell scripts</li>
              </ul>
            </div>
            <div class="subsection">
              <div class="job-title">Udacity 2023</div>
              <ul>
                <li>CERTIFIED DATA SCIENTIST PROFESSIONAL - CDSP practical skills in AI, Deep Learning, Machine Learning, and Data Science</li>
              </ul>
            </div>
            <div class="subsection">
              <div class="job-title">Udemy 2023</div>
              <ul>
                <li>Deep Learning A-Z: Hands On Artificial Neural Networks</li>
              </ul>
            </div>
            <div class="subsection">
              <div class="job-title">DataCamp 2022</div>
              <ul>
                <li>Front-End Development - Liner Classifiers in Python -Intermediate SQL- Machine Learning Tree Based Model</li>
              </ul>
            </div>
            <div class="subsection">
              <div class="job-title">M3aarf 2022</div>
              <ul>
                <li>R programming language - Computer Vision</li>
              </ul>
            </div>
            <div class="subsection">
              <div class="job-title">Mahara-tech 2021</div>
              <ul>
                <li>Python programming language - database fundamentals</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Relevant Coursework</div>
            <div class="skills-grid">
              <div class="skills-column">
                <ul>
                  <li>Data Structures</li>
                  <li>Software Methodology</li>
                  <li>Python programming</li>
                  <li>OOP_Concepts</li>
                  <li>Solid understanding of ML Feature</li>
                  <li>Neural Network (CNN)</li>
                  <li>Transfer Learning</li>
                </ul>
              </div>
              <div class="skills-column">
                <ul>
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
              </div>
              <div class="skills-column">
                <ul>
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
          </div>

          <div class="section">
            <div class="section-title">Experience & Internships</div>
            <div class="subsection">
              <div class="job-title">Python Engineer Freelancer</div>
              <div class="company-info">Upwork Freelance | 2024 – Current | Damaietta, Egypt</div>
              <div class="description">• Proficient in Python frameworks (Django, Flask) and libraries (Pandas, NumPy) with a strong background in web development. Expertise in database management, RESTful APIs, and cloud services, with excellent problem-solving skills.</div>
              <div class="description">• Developing custom machine learning models and AI solutions across NLP, computer vision, and data analysis, addressing varied client needs efficiently.</div>
            </div>
            
            <div class="subsection">
              <div class="job-title">Mobile App Intern</div>
              <div class="company-info">Custom Tech | 2024 – 2024 | Damaietta, Egypt</div>
              <div class="description">• Assisted in development of the front end of a mobile application for iOS/Android using Dart and the Flutter framework.</div>
              <div class="description">• Worked with Google Firebase to manage user inputted data across multiple platforms including web and mobile apps.</div>
            </div>

            <div class="subsection">
              <div class="job-title">Artificial Intelligence Intern</div>
              <div class="company-info">Codsoft Company | 2023 – 2024 | Cairo, Egypt</div>
              <div class="description">• Developed Chatbots, Face Recognition, and Image Captioning models and Worked on Machine Learning pipelines for automation. Increased prediction accuracy by 30%.</div>
            </div>

            <div class="subsection">
              <div class="job-title">Flutter & Mobile Intern</div>
              <div class="company-info">AMIT Academy | 2023 – 2023 | Cairo, Egypt</div>
              <div class="description">• Collaborated with team members using version control systems such as Git to organize modifications and assign tasks.</div>
            </div>

            <div class="subsection">
              <div class="job-title">Data Analytics Consulting Intern</div>
              <div class="company-info">Forage Company | 2023 – 2023 | Damaietta, Egypt</div>
              <div class="description">• Performed Exploratory Data Analysis (EDA) and predictive modeling and Built dashboards using Power BI & Tableau in: Exploratory Data Analysis, Data Modeling, Model Building and Interpretation, Machine Learning Production, Quality Assurance.</div>
            </div>

            <div class="subsection">
              <div class="job-title">AI Developer Intern</div>
              <div class="company-info">Instant Software Company | 2022 – 2022 | Cairo, Egypt</div>
              <div class="description">• Built AI-powered applications for real-world automation and Integrated ML models into web applications for analytics & automation.</div>
            </div>

            <div class="subsection">
              <div class="job-title">AI Developer Intern</div>
              <div class="company-info">Route Software Development Academy | 2022 – 2022 | Cairo, Egypt</div>
              <div class="description">• Developed a Convolutional Neural Network (CNN) model for real-time facial emotion detection, enabling applications in sentiment analysis and user experience enhancement. Built AI-powered applications for real-world automation.</div>
            </div>

            <div class="subsection">
              <div class="job-title">Front End Developer Intern</div>
              <div class="company-info">BlackStone eIT | 2021 – 2022 | Mansoura, Egypt</div>
              <div class="description">• Proficiency in HTML, CSS, and JavaScript. Familiarity with Frameworks and Libraries. Exposure to popular front-end technologies such as React, Angular. The ability to create responsive layouts, implement design principles.</div>
            </div>

            <div class="subsection">
              <div class="job-title">Junior Graphic Designer</div>
              <div class="company-info">Egy Designer Company | 2019 – 2021 | Damaietta, Egypt</div>
              <div class="description">• Strong foundation in design principles with proficiency in Adobe Creative Suite, Figma, and Canva. Experienced in typography, layout, and color theory, creating visual content for both digital and print. Eager to work in dynamic teams.</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Projects (>50 Projects)</div>
            <div class="two-column">
              <div>
                <div class="project">
                  <div class="project-title">Advanced Tooth X-Ray Disease Detection | Data Preprocessing, Deep Learning 2024</div>
                  <div class="project-desc">• AI-based system for detecting dental issues from X-ray images. Use deep learning models like YOLOv5, YOLOv8, and Faster R-CNN for high accuracy.</div>
                </div>

                <div class="project">
                  <div class="project-title">Mall Problem | Data Preprocessing, Unsupervised ML Clustering 2024</div>
                  <div class="project-desc">• Apply All Clusters ML algorithms. Evaluate all model's performance and accuracy.</div>
                </div>

                <div class="project">
                  <div class="project-title">Skin Cancer Prediction | Data Preprocessing, Unsupervised ML Clustering 2024</div>
                  <div class="project-desc">• Created a deep learning model for detecting skin cancer using CNNs, achieving a classification accuracy of 78% based on medical image datasets.</div>
                </div>

                <div class="project">
                  <div class="project-title">Thanos.py Project | Data Preprocessing, Supervised ML Classification 2024</div>
                  <div class="project-desc">• Open file using (OS) Library. Choice random data from that file using (Random) Library and Remove That data from the file. Use sleep function from Time Library.</div>
                </div>

                <div class="project">
                  <div class="project-title">Analyze the eCommerce Purchase | Data Preprocessing, Supervised ML Classification 2023</div>
                  <div class="project-desc">• Segment customers using clustering techniques based on purchasing behavior and demographics. Develop targeted marketing campaigns to boost engagement and sales.</div>
                </div>

                <div class="project">
                  <div class="project-title">Real-Time Object Detection | Data Preprocessing, Supervised ML Classification 2023</div>
                  <div class="project-desc">• Used OpenCV to create a real-time object detection model, enabling practical applications in surveillance and automation.</div>
                </div>

                <div class="project">
                  <div class="project-title">Employee and Countries | Data Collecting using Web Services 2023</div>
                  <div class="project-desc">• Using web services for collecting data and load data as JSON file.</div>
                </div>

                <div class="project">
                  <div class="project-title">Telecom Churn Predictions | Data Preprocessing, Supervised ML Classification 2023</div>
                  <div class="project-desc">• Telecom Churn Prediction by applying all Classification ML algorithms. Evaluate all model's Accuracy.</div>
                </div>

                <div class="project">
                  <div class="project-title">Chat with Your PDF | Data Preprocessing, Supervised ML Classification 2023</div>
                  <div class="project-desc">• Developed an AI chatbot that extracts and interacts with text from PDF documents using OpenAI's LLM, allowing efficient document analysis.</div>
                </div>
              </div>
              
              <div>
                <div class="project">
                  <div class="project-title">Houses Price Predictions | Data Preprocessing, Supervised ML Regression 2022</div>
                  <div class="project-desc">• Select The Most efficient model which has high performance and high Accuracy. Evaluate all model's performance and accuracy.</div>
                </div>

                <div class="project">
                  <div class="project-title">Preprocess Loan Data | Python, Data Cleansing, ETL 2022</div>
                  <div class="project-desc">• Apply Feature Selection Techniques. Apply the Data Cleansing process. Apply Feature Engineering Techniques.</div>
                </div>

                <div class="project">
                  <div class="project-title">Recommendation System | Python, Data Preprocessing, ETL 2022</div>
                  <div class="project-desc">• Built a book recommendation system using K-Nearest Neighbors (KNN), providing personalized book suggestions based on user preferences.</div>
                </div>

                <div class="project">
                  <div class="project-title">Weather and Books Logs | Data Scraping, Collecting 2021</div>
                  <div class="project-desc">• Scraping Weather data from a weather website. Scraping Books data from the Books website. Save That data in CSV files and Databases.</div>
                </div>

                <div class="project">
                  <div class="project-title">TMDB Movies Analysis | Python, EDA, Data Visualization 2021</div>
                  <div class="project-desc">• Apply EDA Process on data. Apply Data Visualization Process on data.</div>
                </div>

                <div class="project">
                  <div class="project-title">Titanic Analysis Project | Python, Selenium, Google Cloud Console 2021</div>
                  <div class="project-desc">• Visualize data using some Visualize elements like (charts, plots, maps) To identify the Pattern and Trends of data.</div>
                </div>

                <div class="project">
                  <div class="project-title">Gym Reservation Bot | Python, Selenium, Google Cloud Console 2021</div>
                  <div class="project-desc">• Developed an automatic bot using Python and Google Cloud Console. Implemented Selenium and Created a Linux virtual machine to run on Google Cloud.</div>
                </div>

                <div class="project">
                  <div class="project-title">Ticket Price Calculator App | Java, Android Studio 2020</div>
                  <div class="project-desc">• Created an Android application using Java and Android Studio to calculate ticket prices for trips to museums in NYC.</div>
                </div>

                <div class="project">
                  <div class="project-title">Transaction Management GUI | Java, Eclipse, JavaFX 2020</div>
                  <div class="project-desc">• Designed a sample banking transaction system using Java to simulate the common functions. Used JavaFX to create a GUI.</div>
                </div>

                <div class="project">
                  <div class="project-title">Speech Recognition & Text-to-Speech | Python, AI Systems, Conversion 2020</div>
                  <div class="project-desc">• Built AI systems for speech recognition and text-to-speech conversion, enhancing accessibility and automation.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Technical Skills</div>
            <div class="subsection">
              <strong>Languages:</strong> Python, Java, C, HTML/CSS, JavaScript, SQL, R, C#, C++<br>
              <strong>Developer Tools:</strong> VS Code, Eclipse, Google Cloud Platform, Android Studio<br>
              <strong>Technologies/Frameworks:</strong> Linux, Jenkins, GitHub, JUnit, WordPress<br>
              <strong>Other:</strong> Robotics, Arduino Programming, Shell Scripting<br>
              <strong>Artificial Intelligence:</strong> Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, OpenCV, Transformers, Keras, PyTorch<br>
              <strong>Data Analysis & Visualization:</strong> Python, SQL, Power BI, Tableau, Excel, Google Data Studio<br>
              <strong>Operating Systems:</strong> Windows, Linux<br>
              <strong>Web Scraping & Automation:</strong> BeautifulSoup, Selenium<br>
              <strong>Deployment:</strong> Flask, Streamlit, AWS EC2, FastAPI<br>
              <strong>Version Control & Collaboration:</strong> Git, GitHub
            </div>
          </div>

          <div class="section">
            <div class="section-title">Soft Skills</div>
            <p>Good ability to work within Teamwork, Good ability to communicate, ability to think outside the box, Good ability to work under pressure, Have a self motivation, Flexible, Quick learner</p>
          </div>

          <div class="section">
            <div class="section-title">Languages</div>
            <p>Arabic (Native), English (IELTS: 6/B2), German (Good), Spanish (Acceptable)</p>
          </div>

          <div class="section">
            <div class="section-title">Hobbies</div>
            <p>Bodybuilding, Play chess, Meditation, Reading, Traveling</p>
          </div>

          <div class="section">
            <div class="section-title">Leadership / Extracurricular</div>
            <div class="subsection">
              <strong>Spring 2025</strong><br>
              • Volunteer in ICPC - International Collegiate Programming Contest in Delta University
            </div>
            <div class="subsection">
              <strong>Spring 2024</strong><br>
              • Winner of fifth place in presenting my project in the competition.<br>
              • Led chapter of 4 members to work towards goals that improve and promote community service, academics.
            </div>
            <div class="subsection">
              <strong>Spring 2023</strong><br>
              • Outstanding Student at the level of my college in the scientific day of the college.
            </div>
          </div>
        </body>
        </html>
      `)

      printWindow.document.close()

      // Wait for content to load then print
      setTimeout(() => {
        printWindow.print()
      }, 500)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Curriculum Vitae</h1>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Download my complete CV or contact me directly for any opportunities or collaborations.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Momen Tarek Gaber</h2>
                  <p className="text-primary mt-1">AI Developer & Data Scientist</p>
                </div>

                <button
                  onClick={generatePDF}
                  className="bg-primary text-white px-6 py-3 rounded-full hover:bg-accent transition-colors flex items-center gap-2 neon-button"
                >
                  <FaDownload />
                  Download CV
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm text-foreground/70">Email</h3>
                    <a
                      href="mailto:momen2004tarek@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      momen2004tarek@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaPhone className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm text-foreground/70">Phone</h3>
                    <a href="tel:+201019822648" className="text-foreground hover:text-primary transition-colors">
                      +201019822648
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm text-foreground/70">Location</h3>
                    <p className="text-foreground">Egypt, Damietta, New Damietta</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-foreground">
                <h3 className="text-xl font-semibold text-primary border-b border-border pb-2 mb-4">Summary</h3>
                <p>
                  Artificial intelligence student with a data science focus seeks a role in an impactful organization.
                  Possesses 4 years of experience in Java, Python, and C++, and 3 years in writing efficient code.
                  Fluent in English, German and Spanish. Has 2 years of experience in demanding environments, and is
                  detail-oriented, organized, and customer-focused. Forward-thinking intern pursuing a software degree,
                  capable of handling multiple projects, and skilled in design software.
                </p>

                <h3 className="text-xl font-semibold text-primary border-b border-border pb-2 mb-4 mt-8">Contact Me</h3>
                <p>
                  I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or
                  phone, or connect with me on my social media profiles.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/ELMOtarek1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href="https://linktr.ee/Momen_Gaber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-accent transition-colors"
                  >
                    Visit My Linktree
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
