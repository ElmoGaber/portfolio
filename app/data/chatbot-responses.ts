export interface ChatMessage {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export interface QAItem {
  keywords: string[]
  response: string
  alternativeKeywords?: string[]
}

export const chatbotQA: Record<string, QAItem[]> = {
  en: [
    {
      keywords: ["hello", "hi", "hey", "greetings", "hola"],
      response:
        "Hello! I'm an intelligent assistant here to answer questions about Momen Tarek's experience, skills, and projects. Feel free to ask me anything!",
    },
    {
      keywords: ["who is momen", "about momen", "tell me about momen", "who are you"],
      response:
        "Momen Tarek is an AI developer and innovator with a Bachelor's degree in Computers & Artificial Intelligence from Delta University for Science and Technology. He specializes in machine learning, data science, web development, and full-stack engineering. With experience ranging from generative AI to computer vision, Momen has worked on diverse projects including 3D face reconstruction, medical chatbots, and e-commerce solutions.",
    },
    {
      keywords: ["skills", "what can you do", "expertise", "technologies"],
      response:
        "Momen specializes in:\n• AI/ML: TensorFlow, PyTorch, Generative AI, Computer Vision, NLP\n• Web: TypeScript, Next.js, React, Tailwind CSS, Node.js\n• Data Science: Python, Pandas, NumPy, Scikit-learn\n• Full-Stack: TypeScript, Next.js, API design, database management\n• Languages: Python, JavaScript, TypeScript, Java, Flutter\n\nHe has expertise in RAG systems, LLMs, GANs, and cloud services.",
    },
    {
      keywords: ["projects", "what projects", "portfolio", "work"],
      response:
        "Momen has worked on impressive projects including:\n• 3D Face Reconstruction using Generative AI\n• Medical RAG ChatBot with LLaMA 3.3\n• CMATE Virtual Try-On System\n• Speech Recognition & Text-to-Speech\n• Real-Time Object Detection\n• Skin Cancer Prediction AI\n• Telecom Churn Predictions\n• And many more in AI, Data Science, and Web Development!\n\nVisit the Featured Projects section to see demos and details.",
    },
    {
      keywords: ["experience", "work experience", "job", "employment"],
      response:
        "Momen's experience includes:\n• Full Stack Engineer at E-Tronic Company (2025 - Current)\n• Python Engineer Freelancer on Upwork (2024 - Present)\n• Mobile App Intern and multiple internships at leading tech companies\n• Experience spans AI development, web development, and data analytics\n\nEach role has contributed to his diverse skill set in technology.",
    },
    {
      keywords: ["education", "degree", "university", "courses", "learning"],
      response:
        "Momen's education includes:\n• Bachelor of Computers & Artificial Intelligence - Delta University (2022 - Current)\n• ITIDA GIGs Generative AI Round 6 Course\n• Microsoft Machine Learning Course (Digital Egypt Pioneers Initiative)\n• AI for Software Developers Course (ITIDA)\n• Additional certifications and training in various AI and development fields",
    },
    {
      keywords: ["contact", "email", "reach out", "get in touch", "hire"],
      response:
        "You can reach Momen through:\n• Email: Available in the contact section\n• LinkedIn: Connect on LinkedIn\n• GitHub: github.com/ElmoGaber\n• Scroll to the 'Get in Touch' section to send a message directly\n\nMomen is open to collaboration, freelance projects, and job opportunities!",
    },
    {
      keywords: ["3d face", "reconstruction", "face ai"],
      response:
        "The 3D Face Reconstruction project transforms 2D facial sketches and images into realistic 3D face models using Generative AI and depth prediction. It combines GANs and MiDaS-DPT architectures for advanced facial modeling.",
    },
    {
      keywords: ["medical", "chatbot", "rag", "healthcare"],
      response:
        "The Medical RAG ChatBot is an intelligent AI agent using LlamaIndex and Groq's LLaMA 3.3 7B model. It can answer questions about medical records and provide insightful healthcare information using retrieval-augmented generation technology.",
    },
    {
      keywords: ["virtual try-on", "cmate", "fashion", "ecommerce"],
      response:
        "CMATE is a Virtual Try-On System built as a full-stack prototype with Python and image processing. It enables realistic try-on experiences for e-commerce applications with containerized deployment capabilities.",
    },
    {
      keywords: ["voice", "text to image", "generative"],
      response:
        "The Voice Text to Image project is a multimodal AI system that generates images from voice or text input using deep learning and GANs. This innovative project enables creative content generation from multiple input modalities.",
    },
    {
      keywords: ["object detection", "real-time"],
      response:
        "The Real-Time Object Detection project uses advanced computer vision to detect and classify objects in real-time. It's applicable to surveillance, automation, and security systems.",
    },
    {
      keywords: ["skin cancer", "disease detection", "health"],
      response:
        "The Skin Cancer Prediction project uses AI to analyze medical images and predict skin cancer conditions. It represents Momen's work at the intersection of healthcare and artificial intelligence.",
    },
    {
      keywords: ["recommendation", "system", "algorithm"],
      response:
        "The Recommendation System uses K-Nearest Neighbors (KNN) algorithm to provide personalized book recommendations based on user preferences and reading history.",
    },
    {
      keywords: ["data", "analysis", "preprocessing", "eda"],
      response:
        "Momen has extensive experience in data preprocessing, exploratory data analysis (EDA), and feature engineering. Projects include TMDB movies analysis, loan data preprocessing, and weather/book data scraping.",
    },
    {
      keywords: ["fullstack", "full stack", "backend", "frontend"],
      response:
        "As a Full Stack Engineer, Momen builds complete web applications using TypeScript, Next.js, React, Tailwind CSS for frontend, and Node.js with secure APIs for backend. He focuses on scalable, high-performance solutions.",
    },
    {
      keywords: ["github", "code", "repository", "source"],
      response:
        "You can find Momen's code and projects on GitHub at github.com/ElmoGaber. There you'll find repositories for various AI, data science, and web development projects.",
    },
    {
      keywords: ["languages", "programming language", "python", "javascript"],
      response:
        "Momen is proficient in: Python, JavaScript, TypeScript, Java, and Flutter. He uses these languages for different purposes - Python for AI/ML, JavaScript/TypeScript for web development, and Java/Flutter for mobile applications.",
    },
    {
      keywords: ["thanks", "thank you", "appreciate"],
      response:
        "You're welcome! I'm here to help. If you have any more questions about Momen's work or would like to know more, feel free to ask!",
    },
    {
      keywords: ["goodbye", "bye", "see you", "farewell"],
      response:
        "Goodbye! Feel free to come back if you have more questions about Momen Tarek. Have a great day!",
    },
  ],
  ar: [
    {
      keywords: ["مرحبا", "السلام عليكم", "هلا", "أهلا", "صباح"],
      response:
        "أهلا وسهلا! أنا مساعد ذكي هنا للإجابة على أسئلتك حول مؤمن طارق وخبراته ومهاراته ومشاريعه. لا تتردد في السؤال عن أي شيء!",
    },
    {
      keywords: ["من هو مؤمن", "عن مؤمن", "خبره", "نبذه"],
      response:
        "مؤمن طارق هو مطور ذكاء اصطناعي ومبتكر تكنولوجي حاصل على درجة البكالوريوس في أجهزة الحاسب والذكاء الاصطناعي من جامعة دلتا للعلوم والتكنولوجيا. متخصص في التعلم الآلي وعلوم البيانات وتطوير الويب والهندسة الكاملة. لديه خبرة متنوعة من الذكاء الاصطناعي التوليدي إلى الرؤية الحاسوبية.",
    },
    {
      keywords: ["المهارات", "تخصصات", "ماذا تفعل", "كفاءات"],
      response:
        "مؤمن متخصص في:\n• الذكاء الاصطناعي: TensorFlow، PyTorch، الذكاء الاصطناعي التوليدي، الرؤية الحاسوبية، معالجة اللغة الطبيعية\n• الويب: TypeScript، Next.js، React، Tailwind CSS، Node.js\n• علوم البيانات: Python، Pandas، NumPy، Scikit-learn\n• الهندسة الكاملة: TypeScript، Next.js، تصميم API، إدارة قواعد البيانات",
    },
    {
      keywords: ["المشاريع", "أعمال", "محفظة", "ماذا عملت"],
      response:
        "مؤمن عمل على مشاريع مميزة منها:\n• إعادة بناء الوجه ثلاثي الأبعاد باستخدام الذكاء الاصطناعي التوليدي\n• روبوت طبي ذكي بتقنية RAG\n• نظام تجربة الملابس الافتراضية\n• التعرف على الكلام وتحويل النص إلى صوت\n• كشف الأجسام في الوقت الفعلي\n• التنبؤ بسرطان الجلد\n• والعديد من المشاريع الأخرى!",
    },
    {
      keywords: ["الخبرة", "العمل", "الوظيفة", "السابقة"],
      response:
        "خبرة مؤمن تشمل:\n• مهندس Full Stack في شركة E-Tronic (2025 - الحالي)\n• مهندس Python مستقل على Upwork (2024 - الحالي)\n• عدة فترات تدريب في شركات تكنولوجية رائدة\n• خبرة تغطي تطوير الذكاء الاصطناعي والويب وتحليل البيانات",
    },
    {
      keywords: ["التعليم", "الدراسة", "الشهادة", "الجامعة", "كورسات"],
      response:
        "تعليم مؤمن يشمل:\n• بكالوريوس أجهزة الحاسب والذكاء الاصطناعي - جامعة دلتا (2022 - الحالي)\n• دورة ITIDA GIGs الذكاء الاصطناعي التوليدي\n• دورة Microsoft Machine Learning\n• دورة AI for Software Developers\n• شهادات وتدريبات إضافية في مجالات الذكاء الاصطناعي",
    },
    {
      keywords: ["التواصل", "البريد", "التراسل", "الاتصال", "وظيفة"],
      response:
        "يمكنك التواصل مع مؤمن من خلال:\n• البريد الإلكتروني: متاح في قسم التواصل\n• LinkedIn: تواصل معه على لينكدإن\n• GitHub: github.com/ElmoGaber\n• انتقل إلى قسم 'احصل على الاتصال' لإرسال رسالة مباشرة\n\nمؤمن مفتوح للتعاون والمشاريع المستقلة!",
    },
    {
      keywords: ["وجه", "3d", "إعادة بناء", "تكنولوجيا"],
      response:
        "مشروع إعادة بناء الوجه ثلاثي الأبعاد يحول رسومات الوجه والصور ثنائية الأبعاد إلى نماذج وجه واقعية ثلاثية الأبعاد باستخدام الذكاء الاصطناعي التوليدي.",
    },
    {
      keywords: ["طبي", "روبوت", "صحة", "medic"],
      response:
        "روبوت الطبي الذكي هو وكيل ذكي يستخدم تقنية RAG و LLaMA 3.3 من Groq. يمكنه الإجابة على أسئلة الرعاية الصحية وتقديم معلومات طبية ذكية.",
    },
    {
      keywords: ["شكرا", "شكراً", "تقدير", "ممتن"],
      response:
        "أهلا وسهلا! أنا هنا للمساعدة. إذا كان لديك أسئلة أخرى عن مؤمن، فلا تتردد في السؤال!",
    },
    {
      keywords: ["وداعا", "باي", "إلى اللقاء", "سلام"],
      response:
        "وداعا! لا تتردد في العودة إذا كان لديك أسئلة أخرى عن مؤمن طارق. يوم رائع لك!",
    },
  ],
}

export function findBestMatch(query: string, language: "en" | "ar"): string {
  const normalizedQuery = query.toLowerCase().trim()
  const qaList = chatbotQA[language] || chatbotQA.en

  for (const item of qaList) {
    const allKeywords = [...item.keywords, ...(item.alternativeKeywords || [])]
    for (const keyword of allKeywords) {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        return item.response
      }
    }
  }

  const fallbackResponses = {
    en: "I'm not sure about that specific question. Could you ask me about Momen's skills, experience, projects, or education? I'm here to help!",
    ar: "لست متأكدا من هذا السؤال بالضبط. هل يمكنك السؤال عن مهارات مؤمن أو خبرته أو مشاريعه أو تعليمه؟ أنا هنا للمساعدة!",
  }

  return fallbackResponses[language] || fallbackResponses.en
}
