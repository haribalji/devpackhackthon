# Introduction:

Students with dyslexia face challenges in reading, note-taking, and organizing study materials, reducing learning efficiency. Our AI-driven solution enhances accessibility, comprehension, and organization through intelligent automation.

# **Live Link:** https://mynotefrontendserver.vercel.app/

# **Live final product demo:** https://drive.google.com/file/d/18h0yIBpIU003NBAimwQfZ2Io8DuSSd_A/view?usp=sharing


**PPT Link:** https://docs.google.com/presentation/d/1v12mTbMsu4M3m9RJAwKvaEHEcTtNsHfA/edit?usp=drive_link&ouid=112859881598754786273&rtpof=true&sd=true


# **Solutions:**

•	**OCR for Dyslexia Support:** Converts handwritten or printed notes into editable digital text for easier reading and correction.

•	**AI Summarization & TTS:** Generates concise summaries and converts notes into Tamil or English audio for better understanding.

•	**RAG-Based Q&A**: Provides accurate, context-aware answers from stored notes for interactive learning.

•	**Smart Note Organization:** Automatically categorizes notes and adds checklists to track study progress efficiently.






# **Level-1 implementation:** 



# **Demo Link 1:** https://drive.google.com/file/d/1LFvg53bLFu_JIMKHBpWEVifUhuSztUQP/view?usp=sharing






# **Smart Note Organization:**

**o Users fill in the required signup details to register and gain authorized access to the platform.
Returning users can log in using their credentials to securely access their account.**

 <img width="1920" height="923" alt="image" src="https://github.com/user-attachments/assets/63cdaf24-dc6e-441a-b0e4-4b366f60145a" />


<img width="873" height="522" alt="image" src="https://github.com/user-attachments/assets/d2621658-382a-4987-ad70-5cfb298a7c3f" />





**o A Notes Management feature allows students to add, edit, and delete study notes efficiently**

 <img width="1011" height="751" alt="Screenshot 2025-11-08 150307" src="https://github.com/user-attachments/assets/0c23e6d5-0c98-4d60-9477-c0da725b55f1" />



**o Students can enter their personal and academic details (Name, Class, Age) to create their profile.**
<img width="1116" height="772" alt="Screenshot 2025-11-08 134737" src="https://github.com/user-attachments/assets/a55dbf1d-6e22-44c9-8700-2e38a35796e1" />

 
**o Subjects are displayed dynamically based on the selected class.**
<img width="796" height="497" alt="image" src="https://github.com/user-attachments/assets/a79060e2-1127-4860-8ef4-e5316fa39741" />

 


Each subject section provides important topic listings to support exam preparation.
Students can use the checklist tracker to monitor their learning progress, store study documents by subject, download resources, record video lectures, and save voice notes for future reference.
 
<img width="771" height="771" alt="image" src="https://github.com/user-attachments/assets/b109264b-2bae-4fdb-9448-a63d97300abf" />


![IMG_20251108_184249](https://github.com/user-attachments/assets/23cb7cc4-2e19-490a-8209-6aef05bbdc7c)



# **level-2 implementation:**

# **Demo Link 2:** https://drive.google.com/file/d/1wvKPKW2f9btikTfEfpWbsiDUkjgQUuff/view?usp=sharing



# **Admin Panel:**
o If you log in with an admin account, a separate Admin button will appear in the navigation bar. Inside it, you can manage the users of the product.
![IMG_20251108_172222 1](https://github.com/user-attachments/assets/2010b8b0-4a9b-41e4-986a-f79a1f3ad8ad)


# **AI Summarization & TTS:**

We used **gemini-2.0-flash** to generate simplified and concise summaries tailored for individuals with dyslexia. By carefully crafting prompts, the model rephrases complex text into easier, dyslexia-friendly. This summarized content is then converted into speech using a TTS engine, available in both **Tamil and English** Text to Speech, helping users comprehend and retain information more effectively.

![IMG_20251108_171043 1](https://github.com/user-attachments/assets/51653d10-1e7b-4ffa-b4c5-9ff44f3675d2)



# **OCR for Dyslexia Support:**

The system integrates OCR technology to convert handwritten or printed notes into editable, dyslexia-friendly digital text. Students can upload or capture images of their notes, which are processed using two deep learning models:

CRAFT (Character Region Awareness for Text Detection): Detects text areas and links characters into words using region and affinity scores.

CRNN (Convolutional Recurrent Neural Network): Reads and converts detected text into clean, readable digital form using CNN, RNN, and CTC layers.

Then, the extracted text is sent to **Gemini**, which generates detailed explanations of the content in both **Tamil and English**, ensuring that the material is simplified, well-structured, and formatted to support individuals with dyslexia.

![IMG_20251108_171148 1](https://github.com/user-attachments/assets/6648d5d6-0a1a-4067-a7d7-7e52d7463365)



# **RAG-Based Q&A:**
**flow-control**

1.User uploads a PDF → saved as uploaded.pdf.

2.Text extracted → split into chunks.

3.Each chunk → converted to embeddings (SentenceTransformer).

4.Embeddings + text → stored in ChromaDB.

5.User asks a question → question embedded → top relevant chunks retrieved.

6.Retrieved context + question → sent to Llama-3.1 model (via HuggingFace).

7.Model generates and returns clear, formatted answer.



![IMG_20251108_162527 1](https://github.com/user-attachments/assets/3a75343d-de99-4514-a2a1-b1afa7c9f47a)


# **AI Models-Requriment:**

1.Embedding Model:arvindcreatrix/bge-baes-my-qna-model (SentenceTransformer)

2. LLM:meta-llama/Llama-3.1-8B-Instruct:novita via HuggingFace router

3. Generator:Gemini 2.0 Flash

4. Vector DB:ChromaDB



# Tech Stack

React.js

Node.js

Express.js

FastAPI

Uvicorn

Python

ChromaDB

Sentence Transformers

Gemini 2.0 Flash / Llama 3.1

PyPDF

JWT (JSON Web Token)

dotenv

CSS

ESLint

Babel

npm

#  Hosting Platforms

Frontend: Vercel

Backend (Node.js): Render







# ⚙️ Local Setup

Follow the steps below to run the project locally:

# 1. Clone the repository
git clone https://github.com/haribalji/devpackhackthon.git

# 2. Navigate to the frontend folder
cd frontend

# 3. Install all necessary frontend packages
npm install

# 4. Run the frontend
npm start

# 5. Open another terminal and navigate to the backend folder
cd backend

# 6. Install all necessary backend packages
npm install

# 7. Start the backend server
node index.js
# (or use nodemon for auto-reload)
nodemon index.js

# 8.install dependencies using:
pip install -r requirements.txt

# 9. Open another terminal and start the RAG (AI) FastAPI server
uvicorn rag_api:app --reload

# 10. Open another terminal, navigate to backend again
cd backend

# 11. Run the Python application
python app.py

After Setup

Frontend: http://localhost:3000

Node.js Backend: http://localhost:5000

FastAPI (AI Backend): http://127.0.0.1:8000









