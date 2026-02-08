// 학생 데이터를 정의하는 파일
// 이 파일을 수정하여 학생 정보를 관리할 수 있습니다

const studentsData = [
  {
    name: "Jungtaek Hong",
    name_korean: "홍정택",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course", // Ph.D. Course, Master's Course, Integrated M.S.-Ph.D. Course
    email: "hjt8091@g.skku.edu",
    research_interest: "AR/VR/MR, Automated Construction Inspection",
    photo: "홍정택.jpg",
    start_date: "2023"
  },
  {
    name: "Njoroge James Mugo",
    name_korean: "제임스",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course", 
    email: "mugojames254@skku.edu",
    research_interest: "BIM, LLM, Computer Vision, vLLM, Construction Management",
    photo: "제임스.jpg",
    start_date: "2024"
  },
  /*{
    name: "Sangmin Yang",
    name_korean: "양상민",
    degree: "Master Course",
    course_type: "Master's Course", // Ph.D. Course, Master's Course, Integrated M.S.-Ph.D. Course
    email: "toycar0313@g.skku.edu",
    research_interest: "Automated Construction Inspection, Digital twin simulation",
    photo: "양상민.jpg",
    start_date: "2023"
  },*/
  {
    name: "Younghee Chang",
    name_korean: "장영희",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "yhyhchang@g.skku.edu",
    research_interest: "OSC,Bim Data Analysis",
    photo: "장영희.png",
    start_date: "2022"
  }, 
  {
    name: "Ali Akbar",
    name_korean: "알리",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "greyice11@g.skku.edu",
    research_interest: "Construction robotics, Deep learning, BIM",
    photo: "알리.jpg",
    start_date: "2022"
  },
  /*{
    name: "Sungil Son",
    name_korean: "손성일",
    degree: "Master Course",
    course_type: "Master's Course",
    email: "ssil010116@g.skku.edu",
    research_interest: "Image analysis, Deep Learning models",
    photo: "손성일.jpg",
    start_date: "2023"
  },*/
  {
    name: "Goeun Choi",
    name_korean: "최고은",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "gogo516151@gmail.com",
    research_interest: "건설분류체계(WBS, CBS), 자연어처리(LLM, RAG, NER)",
    photo: "최고은.jpg",
    start_date: "2021"
  },
  {
    name: "Jaeyoon Kim",
    name_korean: "김재윤",
    degree: "Master Course",
    course_type: "Master's Course",
    email: "kimjy0509@skku.edu",
    research_interest: "삼성전자 Staff engineer",
    photo: "김재윤.jpg",
    start_date: "2025"
  },
  {
    name: "Dain Ko",
    name_korean: "고다인",
    degree: "Master's Course",
    course_type: "Master's Course",
    email: "dain4323@naver.com",
    research_interest: "BIM, OSC",
    photo: "고다인.jpg",
    start_date: "2025"
  },
  {
    name: "Jeongmin Cho",
    name_korean: "조정민",
    degree: "Master's Course",
    course_type: "Master's Course",
    email: "whwhwjdals@gmail.com",
    research_interest: "AR/VR/MR, Drone, Construction Inspection",
    photo: "조정민.jpg",
    start_date: "2025"
  },

    /*
    New list
     */
  {
    name: "Jaegoo Han",
    name_korean: "한재구",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "",
    research_interest: "한국건설기술연구원",
    photo: "",
    start_date: ""
  },
  {
    name: "Jaeyoung Oh",
    name_korean: "오재영",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "linuxdosa@nate.com",
    research_interest: "SK텔레컴",
    photo: "",
    start_date: ""
  },
  {
    name: "Kwangbae Kim",
    name_korean: "김광배",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "gwangbae.kim@daewooenc.com",
    research_interest: "대우건설",
    photo: "",
    start_date: ""
  },
  {
    name: "Junseok Seo",
    name_korean: "서준석",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "ijunsk@gmail.com",
    research_interest: "리엑스",
    photo: "",
    start_date: ""
  },
  {
    name: "Jincheol Kim",
    name_korean: "김진철",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "magritte@tapartners.co.kr",
    research_interest: "티에이 파트너스",
    photo: "",
    start_date: ""
  },
  {
    name: "Seongsu Bae",
    name_korean: "배성수",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "sungsoo@daelimcorp.co.kr",
    research_interest: "DL E&C",
    photo: "",
    start_date: ""
  },
  {
    name: "Taehwan Kim",
    name_korean: "김태환",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "",
    research_interest: "클리오",
    photo: "",
    start_date: ""
  },
  {
    name: "Sanghyun Park",
    name_korean: "박상현",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "sanghyeon2.park@sk.com",
    research_interest: "SK 하이닉스",
    photo: "",
    start_date: ""
  },
  {
    name: "Jinhyun Bae",
    name_korean: "배진현",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "jinhyun.bae@sk.com",
    research_interest: "SK 하이닉스",
    photo: "",
    start_date: ""
  },
  {
    name: "Anhwa Lee",
    name_korean: "이안화",
    degree: "Ph.D. Candidate",
    course_type: "Ph.D. Course",
    email: "",
    research_interest: "SK C&C",
    photo: "",
    start_date: ""
  }
];