const notices = [
    {ind: 1, postBy:"Admin", subject: "PhD Viva Voce of Ms. Poonam S. Jaiswal",
        Department: "B.tech CS AND AI",
        Notice: "This is to inform all concerned that the PhD Viva Voce examination of Ms. Poonam S. Jaiswal, a research scholar from the Department of Computer Science, will be held on 25th September 2024 at 10:00 AM in the Seminar Hall, Newton School of Technology. Ms. Jaiswal will present her dissertation titled Artificial Intelligence for Healthcare: Enhancing Diagnostic Systems The examination will be conducted under the supervision of Dr. Suresh Kumar, and the external examiner will be Prof. Anil Sharma from the Indian Institute of Technology, Delhi. Faculty members, research scholars, and students are invited to attend this session. Please arrive at the venue by 9:45 AM to ensure the session begins on time. For any further details, please contact Dr. Suresh Kumar at suresh.kumar@nst.edu."
        , postOn: "2024-09-10" , time:"00:00 PM "},
    {ind: 2, postBy:"Placement Office", subject: "Webstaff Co. Ltd: Submission of bio-data for pre-final year students",
        Department: "BBA",
        Notice: "This is to inform all concerned that the PhD Viva Voce examination of Ms. Poonam S. Jaiswal, a research scholar from the Department of Biotechnology, will be held on 28th September 2024 at 11:00 AM in the Conference Room, Newton School of Technology. Ms. Jaiswal will present her dissertation titled : Biotechnological Advances in Sustainable Agriculture: Enhancing Crop Yield and Soil Health. The examination will be conducted under the supervision of Dr. Neha Sharma, and the external examiner will be Prof. Rajesh Verma from the Indian Agricultural Research Institute, Delhi. Faculty members, research scholars, and students are invited to attend this session. Please arrive at the venue by 10:45 AM to ensure the session begins on time. For any further details, please contact Dr. Neha Sharma at neha.sharma@nst.edu."
        , postOn: "2024-09-09" , time:"00:00 PM"},
    {ind: 3, postBy:"Admin", subject: "Appointment of Faculty Coordinator for Cognizance 2019",
        Department: "B.tech CS AND AI",
        Notice: "This is to inform all faculty members and students that Dr. Rakesh Mehra, Associate Professor in the Department of Mechanical Engineering, has been appointed as the Faculty Coordinator for Cognizance 2024, the annual technical fest of Newton School of Technology. Dr. Mehra will oversee all the activities and events related to the fest, ensuring smooth coordination between various student committees and the administration. Faculty members and students are encouraged to cooperate with Dr. Mehra for the successful organization of the fest. For any queries or assistance related to Cognizance 2024, please reach out to Dr. Rakesh Mehra at rakesh.mehra@nst.edu. Further updates regarding the event schedule and participation guidelines will be shared soon."
        , postOn: "2024-09-08" , time:"00:00 PM"},
    {ind: 4, postBy:"Dean Office", subject: "Sports Preliminary Coaching Camp",
        Department: "BBA",
        Notice: "This is to inform all students that a Sports Preliminary Coaching Camp will be held from 1st October 2024 to 10th October 2024 at the Newton School of Technology sports complex. The camp will focus on athletics, football, basketball, and badminton, and is open to all students who wish to improve their skills or try out for the college teams. Professional coaches will conduct the sessions to help students prepare for the upcoming inter-college sports events. Interested students are required to register by 25th September 2024. For registration and further details, please contact the Sports Coordinator, Mr. Arjun Patel at arjun.patel@nst.edu. All participants are requested to bring their own sports gear and be at the venue by 8:00 AM on the first day of the camp."
        , postOn: "2024-09-07" , time:"00:00 PM"},
    {ind: 5, postBy:"Placement Office", subject: "Advaita 18 Update - Event Registration Invitation - Xccelerate, Pinnacle and Sphinxv",
        Department: "B.tech CS AND AI",
        Notice: "This is to inform all pre-final year students from the Computer Science, Electronics, and Information Technology departments that KLA Tencor is offering opportunities for the position of Software Engineer as part of their campus recruitment drive. Interested students are required to submit their bio-data (resume) by 30th September 2024. The recruitment process will begin with an online assessment followed by technical interviews. To be eligible, students must have a minimum CGPA of 7.0 and no current backlogs. Bio-data must be submitted to the Training and Placement Cell at placement@nst.edu with the subject line: KLA Tencor Bio-data Submission. For more details on the job profile and recruitment process, students are encouraged to visit the T&P portal or contact the Placement Officer, Ms. Priya Sharma at priya.sharma@nst.edu."
        , postOn: "2024-09-06" , time:"00:00 PM"},
    {ind: 6, postBy:"Admin", subject: "KLA Tencor (Software Engineer): Submission of bio-data for pre-final year students",
        Department: "BBA",
        Notice: "We are excited to announce that registrations are now open for three of the most awaited events in Advaita 18: Xccelerate, Pinnacle, and Sphinxv. Students from all departments are invited to participate and showcase their skills in these thrilling competitions. Xccelerate is a high-octane coding marathon, Pinnacle will test your entrepreneurial and business strategy acumen, and Sphinxv is designed to challenge your problem-solving and quizzing prowess. The events will take place between 10th October 2024 and 12th October 2024 at the Newton School of Technology. Interested students can register through the official Advaita 18 portal by 5th October 2024. For any queries regarding event details, rules, or registration, please contact the Event Coordinators at advaita.events@nst.edu. Don’t miss out on this opportunity to be part of Advaita 18’s highlight events!"
        , postOn: "2024-09-05" , time:"00:00 PM"},
    {ind: 8, postBy:"OAA", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Department: "BBA",
        Notice: "This is to inform all concerned that, as per the resolutions passed in the 74th Meeting of the Senate held on 20th September 2024, the admission process for Sponsored Candidates to the PG Diploma and M.Tech programs for the academic year 2024-25 has been approved. Candidates sponsored by government organizations, industries, or academic institutions are eligible to apply. The admission procedure includes submitting the sponsorship certificate along with the application by 15th October 2024. The list of eligible programs and further details on the admission criteria, eligibility, and deadlines can be accessed through the official website of the Newton School of Technology. All departments are requested to ensure timely dissemination of this notification to relevant candidates. For any clarifications, please contact the Admissions Office at admissions@nst.edu."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 9, postBy: "Dean office", subject: "Workshop on Data Science and Machine Learning",
        Department: "BBA",
        Notice: "This is to inform all students that a workshop on Data Science and Machine Learning will be held on 15th October 2024 from 10:00 AM to 4:00 PM in the Auditorium. The workshop will cover topics such as data analysis, predictive modeling, and machine learning algorithms. Interested participants are requested to register by 10th October 2024. For registration, please contact Dr. Anjali Rao at anjali.rao@nst.edu."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 10, postBy:"OAA", subject: "Annual Sports Meet 2024",
        Department: "B.tech CS AND DS",
        Notice: "The Annual Sports Meet 2024 is scheduled for 22nd October 2024 at the Newton School of Technology sports complex. All students are encouraged to participate in various events, including athletics, football, and basketball. Registration for events opens on 1st October 2024 and will close on 15th October 2024. For more information, please contact Mr. Ravi Singh at ravi.singh@nst.edu."
        , postOn: "2024-09-04" , time:"00:00 PM"},

    {ind: 11, postBy:"Placement office", subject: "Guest Lecture on Cybersecurity",
        Department: "B.tech CS AND AI",
        Notice: "We are pleased to announce a guest lecture on Cybersecurity by Mr. Vikram Mehta, an industry expert, on 18th October 2024 at 3:00 PM in Lecture Hall 2. This session aims to provide insights into current trends and challenges in cybersecurity. All students and faculty members are invited to attend. For further details, please contact Ms. Neha Gupta at neha.gupta@nst.edu."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 12, postBy:"Dean office", subject: "Research Funding Opportunities",
        Department: "B.tech CS AND DS",
        Notice: "Faculty members are invited to apply for the Research Funding Opportunities available for innovative projects in the fields of technology and engineering. The application deadline is 30th October 2024. For application forms and guidelines, please contact the Research and Development Office at research@nst.edu."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 13, postBy:"Placement office", subject: "Community Service Program - Cleanliness Drive",
        Department: "B.tech CS AND DS",
        Notice: "A Cleanliness Drive will be conducted on 25th October 2024 as part of the Community Service Program. Students are encouraged to participate and contribute to keeping our campus clean. The drive will start at 9:00 AM from the main gate. For more details, please contact Mr. Aman Joshi at aman.joshi@nst.edu."
        , postOn: "2024-09-25" , time:"00:00 PM"},
    {ind: 14, postBy:"Dean office", subject: "Tech Fest Registration",
        Department: "B.tech CS AND DS",
        Notice: "Registration is now open for the upcoming Tech Fest scheduled for 1st November 2024. This event will feature workshops, coding competitions, and guest speakers from the tech industry. Interested students should register by 15th October 2024 on the official Tech Fest website. For inquiries, please reach out to Ms. Priya Sharma at priya.sharma@nst.edu."
        , postOn: "2024-08-24" , time:"00:00 PM"},
    {ind: 15, postBy:"Placement office", subject: "Library Orientation for New Students",
        Department: "BBA",
        Notice: "A Library Orientation session for new students will be held on 5th October 2024 at 11:00 AM in the Library Conference Room. The session will cover library resources, services, and how to access various academic materials. Attendance is highly encouraged. For further details, contact Ms. Rita Mehta at rita.mehta@nst.edu."
        , postOn: "2024-08-24" , time:"00:00 PM"},
    {ind: 16, postBy:"Dean office", subject: " Blood Donation Camp",
        Department: "B.tech CS AND AI",
        Notice: "A Blood Donation Camp will take place on 12th October 2024 from 9:00 AM to 4:00 PM in the college auditorium. All students and faculty members are encouraged to participate and contribute to this noble cause. For more information, please contact Dr. Sunil Verma at sunil.verma@nst.edu."
        , postOn: "2024-08-24" , time:"00:00 PM"},
        
    {ind: 17, postBy:"Placement office", subject: "Mid-Semester Examination Schedule",
        Department: "B.tech CS AND AI",
        Notice: "The Mid-Semester Examinations for all courses will be conducted from 15th November 2024 to 20th November 2024. Students are advised to check the examination timetable posted on the college website and prepare accordingly. For any queries, please contact the Examinations Office at exams@nst.edu."
        , postOn: "2024-08-23" , time:"00:00 PM"},
    {ind: 18, postBy:"Placement office", subject: "Internship Opportunities with XYZ Company",
        Department: "B.tech CS AND DS",
        Notice: "XYZ Company is offering internship opportunities for students in their pre-final year. Interested students can apply by submitting their resumes to the Training and Placement Cell by 25th October 2024. Selected candidates will be notified for an interview. For further information, please contact Ms. Kavita Rani at kavita.rani@nst.edu."
        , postOn: "2024-08-22" , time:"00:00 PM"},
    {ind: 19, postBy:"Dean office", subject: "Seminar on Renewable Energy Technologies",
        Department: "B.tech CS AND AI",
        Notice: "A seminar on Renewable Energy Technologies will be held on 28th October 2024 from 2:00 PM to 5:00 PM in the Main Auditorium. Industry experts will discuss innovations and trends in renewable energy. All students and faculty are invited to attend. For registration, please contact Dr. Rahul Sharma at rahul.sharma@nst.edu."
        , postOn: "2024-08-21" , time:"00:00 PM"},
    {ind: 20, postBy:"Admin", subject: "Placement Preparation Workshop",
        Department: "B.tech CS AND AI",
        Notice: "A Placement Preparation Workshop for final year students will be conducted on 30th October 2024 at 10:00 AM in Lecture Hall 1. The workshop will cover resume writing, interview techniques, and group discussions. Interested students should register by 25th October 2024. For more information, contact Mr. Sameer Gupta at sameer.gupta@nst.edu."
        , postOn: "2021-08-21" , time:"00:00 PM"},
    {ind: 21, postBy:"Placement office", subject: "Annual Cultural Fest - Auditions",
        Department: "B.tech CS AND DS",
        Notice: "Auditions for the Annual Cultural Fest will take place from 1st to 5th November 2024. Students interested in participating in dance, music, and drama are encouraged to register for auditions. For details, please contact Ms. Aditi Rao at aditi.rao@nst.edu."
        , postOn: "2024-08-20" , time:"00:00 PM"},
    {ind: 22, postBy:"Dean office", subject: "National Conference on Artificial Intelligence",
        Department: "B.tech CS AND DS",
        Notice: "The National Conference on Artificial Intelligence will be held on 15th November 2024 at the Newton School of Technology. Students and faculty are invited to submit research papers by 1st November 2024. For submission guidelines, please visit the conference website or contact Dr. Anjali Kumar at anjali.kumar@nst.edu."
        , postOn: "2024-08-19" , time:"00:00 PM"},
    {ind: 23, postBy:"VC Office", subject: "Online Course on Web Development",
        Department: "B.tech CS AND AI",
        Notice: "An Online Course on Web Development will start on 10th November 2024. The course will cover HTML, CSS, JavaScript, and backend technologies. Registration is open until 5th November 2024. For registration and details, contact Mr. Vikash Singh at vikash.singh@nst.edu."
        , postOn: "2024-08-18" , time:"00:00 PM"},
    {ind: 24, postBy:"VC Office", subject: "Faculty Development Program",
        Department: "BBA",
        Notice: "A Faculty Development Program on Teaching Innovations will be held from 20th to 22nd November 2024. Faculty members are encouraged to register by 15th November 2024. For details, contact Dr. Priyanka Joshi at priyanka.joshi@nst.edu."
        , postOn: "2024-08-17" , time:"00:00 PM"},
    {ind: 25, postBy:"VC Office", subject: "Mental Health Awareness Week",
        Department: "B.tech CS AND AI",
        Notice: "The college will observe Mental Health Awareness Week from 5th to 9th November 2024. Various activities, including workshops and counseling sessions, will be organized to promote mental well-being. For more information, contact Ms. Meera Singh at meera.singh@nst.edu."
        , postOn: "2024-08-15" , time:"00:00 PM"},
    {ind: 26, postBy:"Dean office", subject: "Entrepreneurship Development Program",
        Department: "B.tech CS AND AI",
        Notice: "An Entrepreneurship Development Program will be conducted on 12th November 2024 for aspiring entrepreneurs. The program will cover business planning, funding, and market strategies. Interested students should register by 7th November 2024. For queries, contact Mr. Rohan Kapoor at rohan.kapoor@nst.edu."
        , postOn: "2024-08-14" , time:"00:00 PM"},
        
    {ind: 27, postBy:"VC Office", subject: "Coding Competition - CodeFest 2024",
        Department: "B.Design",
        Notice: "CodeFest 2024, a national-level coding competition, will be held on 3rd December 2024. Students are invited to form teams and register by 25th November 2024. Prizes will be awarded to the top performers. For registration, contact Ms. Tara Mehta at tara.mehta@nst.edu."
        , postOn: "2024-08-14" , time:"00:00 PM"},
    {ind: 28, postBy:"OAA", subject: "Art Exhibition - Expressions",
        Department: "B.Design",
        Notice: "An art exhibition titled Expressions will be held from 10th to 15th November 2024 in the College Gallery. Students are invited to submit their artworks for display by 5th November 2024. For more information, contact Mr. Amit Verma at amit.verma@nst.edu."
        , postOn: "2024-08-10" , time:"00:00 PM"},
    {ind: 29, postBy:"VC Office", subject: "Field Trip to Tech Industry",
        Department: "B.Design",
        Notice: "A field trip to a leading tech company will take place on 8th November 2024 for final year students. Interested students must register by 1st November 2024. This is a great opportunity to gain industry exposure. For details, contact Dr. Sneha Patel at sneha.patel@nst.edu.."
        , postOn: "2024-08-08" , time:"00:00 PM"},
    {ind: 30, postBy:"Dean office", subject: "Language Exchange Program",
        Department: "B.Design",
        Notice: "A Language Exchange Program will commence on 15th November 2024. Students interested in improving their language skills are encouraged to register. This program pairs students to practice conversational skills in various languages. For registration, contact Ms. Riya Kumar at riya.kumar@nst.edu."
        , postOn: "2024-08-07" , time:"00:00 PM"},
    {ind: 31, postBy:"Dean office", subject: "Research Symposium on Emerging Technologies",
        Department: "B.Design",
        Notice: "An Industry-Academia Interaction Session will be held on 27th November 2024. Representatives from various industries will share insights and experiences with students. All are welcome to attend. For more information, contact Ms. Kavita Singh at kavita.singh@nst.edu."
        , postOn: "2024-08-06" , time:"00:00 PM"},
    {ind: 32, postBy:"Dean office", subject: "Health and Fitness Camp",
        Department: "B.Design",
        Notice: "The Photography Club is inviting new members to join for the academic year 2024-25. Interested students should register by 15th November 2024. The club organizes workshops and photo walks throughout the year. For details, contact Mr. Ravi Mehta at ravi.mehta@nst.edu."
        , postOn: "2024-08-05" , time:"00:00 PM"},
    {ind: 33, postBy:"OAA", subject: "Industry-Academia Interaction Session",
        Department: "B.Design",
        Notice: "A Financial Literacy Workshop will be conducted on 10th December 2024. This workshop aims to educate students about budgeting, saving, and investing. Interested students should register by 5th December 2024. For more information, contact Mr. Sunil Agarwal at sunil.agarwal@nst.edu.."
        , postOn: "2024-08-03" , time:"00:00 PM"},
];

export default notices;