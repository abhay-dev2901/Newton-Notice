const notices = [
    {ind: 1, postBy:"Admin", subject: "PhD Viva Voce of Ms. Poonam S. Jaiswal",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-10" , time:"00:00 PM"},
    {ind: 2, postBy:"Placement Office", subject: "Webstaff Co. Ltd: Submission of bio-data for pre-final year students",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-09" , time:"00:00 PM"},
    {ind: 3, postBy:"Admin", subject: "Appointment of Faculty Coordinator for Cognizance 2019",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-08" , time:"00:00 PM"},
    {ind: 4, postBy:"Dean Office", subject: "Sports Preliminary Coaching Camp",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-07" , time:"00:00 PM"},
    {ind: 5, postBy:"Placement Office", subject: "Advaita 18 Update - Event Registration Invitation - Xccelerate, Pinnacle and Sphinxv",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-06" , time:"00:00 PM"},
    {ind: 6, postBy:"Admin", subject: "KLA Tencor (Software Engineer): Submission of bio-data for pre-final year students",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-05" , time:"00:00 PM"},
    {ind: 8, postBy:"OAA", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 9, postBy: "Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 10, postBy:"OAA", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 11, postBy:"Placement office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 12, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-04" , time:"00:00 PM"},
    {ind: 13, postBy:"Placement office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-09-25" , time:"00:00 PM"},
    {ind: 14, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-24" , time:"00:00 PM"},
    {ind: 15, postBy:"Placement office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-24" , time:"00:00 PM"},
    {ind: 16, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-24" , time:"00:00 PM"},
    {ind: 17, postBy:"Placement office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-23" , time:"00:00 PM"},
    {ind: 18, postBy:"Placement office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-22" , time:"00:00 PM"},
    {ind: 19, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-21" , time:"00:00 PM"},
    {ind: 20, postBy:"Admin", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2021-08-21" , time:"00:00 PM"},
    {ind: 21, postBy:"Placement office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-20" , time:"00:00 PM"},
    {ind: 22, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-19" , time:"00:00 PM"},
    {ind: 23, postBy:"VC Office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-18" , time:"00:00 PM"},
    {ind: 24, postBy:"VC Office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-17" , time:"00:00 PM"},
    {ind: 25, postBy:"VC Office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-15" , time:"00:00 PM"},
    {ind: 26, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-14" , time:"00:00 PM"},
    {ind: 27, postBy:"VC Office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-14" , time:"00:00 PM"},
    {ind: 28, postBy:"OAA", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-10" , time:"00:00 PM"},
    {ind: 29, postBy:"VC Office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-08" , time:"00:00 PM"},
    {ind: 30, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-07" , time:"00:00 PM"},
    {ind: 31, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-06" , time:"00:00 PM"},
    {ind: 32, postBy:"Dean office", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-05" , time:"00:00 PM"},
    {ind: 33, postBy:"OAA", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
        Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
        , postOn: "2024-08-03" , time:"00:00 PM"},
];

export default notices;