/**
 * Alumni 데이터 
 */
const alumniData = [
  {
    name: "Seongeun Kim",
    name_korean: "김선근",
    degree: "Ph.D.",
    graduation_year: "2015",
    thesis_title: "An optimal phased plan for constructing zero-energy house for existing building",
    current_position: "대우건설"
  },
  {
    name: "Suwan Jeong",
    name_korean: "정수완",
    degree: "Ph.D.",
    graduation_year: "2022",
    thesis_title: "Smart building maintenance system based on open BIM and augmented reality technology",
    current_position: "한국건설기술연구원"
  },
  {
    name: "Daeyoon Moon",
    name_korean: "문대윤",
    degree: "Ph.D.",
    graduation_year: "2020",
    thesis_title: "An optimization method to generate 3D earthworks world model using hybrid(UAV & TLS) point cloud data",
    current_position: "LG 에너지솔루션"
  },
  {
    name: "Junghwan Shin",
    name_korean: "신중환",
    degree: "Ph.D.",
    graduation_year: "2019",
    thesis_title: "Sensing data based construction lift vertical zoning management model for lift efficiency improvement of high-rise building construction",
    current_position: "LG CNS"
  },
  {
    name: "Kim Alexander",
    name_korean: "",
    degree: "MS.",
    graduation_year: "2021",
    thesis_title: "Automatic computer vision-based quality inspection system for reused scaffolding",
    current_position: "Russia"
  },
  {
    name: "Yong Yik Pong",
    name_korean: "",
    degree: "MS.",
    graduation_year: "2022",
    thesis_title: "Object detection and distance measurement algorithm for precast concrete collision avoidance in crane lifting process",
    current_position: "Malaysia"
  },
  {
    name: "Zhu Zi Qing",
    name_korean: "",
    degree: "MS.",
    graduation_year: "2022",
    thesis_title: "",
    current_position: "China"
  },
  {
    name: "Minkyeong Jung",
    name_korean: "정민경",
    degree: "MS.",
    graduation_year: "2021",
    thesis_title: "Automated diagnostic method of surface crack based on deep learning for precast concrete members on off-site construction sites",
    current_position: "한미글로벌"
  },
  {
    name: "Sunghoon Choi",
    name_korean: "최성훈",
    degree: "Ph.D.",
    graduation_year: "2022",
    thesis_title: "A cost estimating model for the high-tech industrial facilities construction based on the three-dimensional cost DB",
    current_position: "LG 디스플레이"
  },
  {
    name: "Syed Mobeen Hasan",
    name_korean: "",
    degree: "MS.",
    graduation_year: "2021",
    thesis_title: "Development of IoT-based framework for digital twin of construction equipment : digital-physical connectivity",
    current_position: ""
  },
  {
    name: "Susana Sandoval",
    name_korean: "",
    degree: "MS.",
    graduation_year: "2020",
    thesis_title: "Personalized human augmentation integration in the structural stage of smart city construction",
    current_position: ""
  },
  {
    name: "Jihwan Park",
    name_korean: "박지환",
    degree: "MS.",
    graduation_year: "2020",
    thesis_title: "Research on automated maintenance management model using smart devices",
    current_position: "금호 건설"
  },
  {
    name: "Taegyu Go",
    name_korean: "고태규",
    degree: "MS.",
    graduation_year: "2019",
    thesis_title: "A study on lifting load recording and management method of the lift for construction based sensing information",
    current_position: "대방 건설"
  },
  {
    name: "Song Lee",
    name_korean: "이송이",
    degree: "MS.",
    graduation_year: "2018",
    thesis_title: "BIM Competency Assesment of Participants in the FAB Construction project",
    current_position: "KAIA"
  },
  {
    name: "Kyusung Choi",
    name_korean: "최규성",
    degree: "MS.",
    graduation_year: "2017",
    thesis_title: "A Study on the Comparison and Utilization of 3D Point Cloud Data for Building Objects Using Laser Scanning and Photogrammetry",
    current_position: "Lakeside construction"
  },
  {
    name: "HyungRyeol Ko",
    name_korean: "고형렬",
    degree: "MS.",
    graduation_year: "2017",
    thesis_title: "Improvement UAV-based Photogrammetry data quality for effcient acquisition of 3D information in construction site",
    current_position: "ITM Corporation"
  },  
  {
    name: "Songwoo Choi",
    name_korean: "최송우",
    degree: "MS.",
    graduation_year: "2016",
    thesis_title: "A Study on the Plan to Activate Car Sharing in LH Rental Apartments",
    current_position: "LH"
  },
  {
    name: "Sanghoon Jung",
    name_korean: "정상훈",
    degree: "MS.",
    graduation_year: "2016",
    thesis_title: "Analysis of the correlation between the responsible engineer and quality of civil engineering works for apartment houses",
    current_position: "LH"
  },
  {
    name: "Inyoung Bae",
    name_korean: "배인영",
    degree: "MS.",
    graduation_year: "2016",
    thesis_title: "System Construction Plan for Domestic EVMS Application-Focusing on the Domestic Apartment Housing Pilot Application District",
    current_position: "LH"
  },
  {
    name: "Minho Kwon",
    name_korean: "권민호",
    degree: "MS.",
    graduation_year: "2016",
    thesis_title: "A Study on the Flat Trend of Apartment Houses Considering Consumer Preference",
    current_position: "LH"
  },
  {
    name: "Jaewoo Kim",
    name_korean: "김재우",
    degree: "Graduate Diploma.",
    graduation_year: "2015",
    thesis_title: "A study on the development for a model of the post - evaluation list in the public construction : focus on an apartment",
    current_position: "삼성"
  },
  {
    name: "Jiyoung Kim",
    name_korean: "김지영",
    degree: "MS.",
    graduation_year: "2015",
    thesis_title: "A study on the problem analysis and improvement of the new excellent technology are applied in construction work: Focusing on the perspective of the ordering organization",
    current_position: "LH"
  },
  {
    name: "Sangjo Kim",
    name_korean: "김상조",
    degree: "MS.",
    graduation_year: "2015",
    thesis_title: "A study on a sound direction for successful public - private partnership ( PPP ) land development and housing construction projects",
    current_position: "LH"
  },
  {
    name: "Youngsun Choi",
    name_korean: "최영선",
    degree: "MS.",
    graduation_year: "2014",
    thesis_title: "An estimation of construction cost of integrated urban infrastructure system related with u- city",
    current_position: "LH"
  },
  {
    name: "Sungmok Hwang",
    name_korean: "황선목",
    degree: "MS.",
    graduation_year: "2014",
    thesis_title: "An application of mobile computing and augmented reality to public housing construction confirmation work",
    current_position: "LH"
  },
  {
    name: "Sangseol Lee",
    name_korean: "이상설",
    degree: "MS.",
    graduation_year: "2014",
    thesis_title: "A study on optimum acquiring 3D laser scanner information for reverse engineering at interior remodeling project",
    current_position: "한국환경공단"
  },
  {
    name: "Mina Lee",
    name_korean: "이미나",
    degree: "MS.",
    graduation_year: "2013",
    thesis_title: "A study on scan data matching for reverse engineering of pipes in plant construction",
    current_position: "민준테크"
  },
  {
    name: "Sunwoo Lee",
    name_korean: "이선우",
    degree: "MS.",
    graduation_year: "2013",
    thesis_title: "Development of propulsive strategy for U- bike service business at new cities : Centering on Asan Baebang District",
    current_position: "LH"
  },
  {
    name: "Junghoon Park",
    name_korean: "박정훈",
    degree: "MS.",
    graduation_year: "2012",
    thesis_title: "Study on the case analysis of the construction industry through the introduction of the enterprise resource planning construction ( ERP )  implementation  research  directions project",
    current_position: "삼성 SDS"
  },
  {
    name: "Sunghoon Park",
    name_korean: "박성훈",
    degree: "MS.",
    graduation_year: "2012",
    thesis_title: "Development of Potential IT Technology for Construction Process and Tasks-Using Cross-Impact Analysis",
    current_position: "포스코 E&C"
  },
  {
    name: "Jonghyun Lee",
    name_korean: "이종현",
    degree: "MS.",
    graduation_year: "2012",
    thesis_title: "A Study on the Improvement Method for Preventing Lift Stop Position Error using Double Sensor based Lift Stop Sensing Device",
    current_position: "LG Housing"
  },
  {
    name: "Jungah Lim",
    name_korean: "임정아",
    degree: "MS.",
    graduation_year: "2011",
    thesis_title: "Analysis of success factors in construction IT convergence : applying AHP (Identifying success factors and preparing evaluation indices)",
    current_position: "LG Housing"
  },
  {
    name: "Hogi Kim",
    name_korean: "김호기",
    degree: "MS.",
    graduation_year: "2011",
    thesis_title: "Risk analysis of the planning phase in u- City projects",
    current_position: "KG 스틸"
  },
  {
    name: "Changhwan Kim",
    name_korean: "김창완",
    degree: "Graduate Diploma.",
    graduation_year: "2011",
    thesis_title: "Development of automated pipe spool installation management process based on mobile augmented reality for plant construction",
    current_position: "삼우 건설"
  },
  {
    name: "Seungwoo Jeong",
    name_korean: "정승우",
    degree: "Graduate Diploma.",
    graduation_year: "2011",
    thesis_title: "A study for efficient measurement of earthwork construction management support for the USN technology strategic decision making model",
    current_position: "삼우 건설"
  },
  {
    name: "Kyuhyup Lee",
    name_korean: "이규협",
    degree: "Ph.D.",
    graduation_year: "2023",
    thesis_title: "Optimization of Virtual Desktop Infrastructure(VDI) Resources based on BIM environment",
    current_position: ""
  },
  {
    name: "Junseong Seol",
    name_korean: "설준성",
    degree: "MS.",
    graduation_year: "2025",
    thesis_title: "ImprovementofManagement Standardsforthe Construction Worker’s SkillsClassification System",
    current_position: ""
  },
  {
    name: "Jinwoo Song",
    name_korean: "송진우",
    degree: "Ph.D.",
    graduation_year: "2025",
    thesis_title: "XR-Based Earthwork Site Management System for Digital Twin of Construction Terrain Model",
    current_position: "SNUCEM Postdoc"
  },
  {
    name: "Seojoon Lee",
    name_korean: "이서준",
    degree: "Ph.D.",
    graduation_year: "2025",
    thesis_title: "",
    current_position: ""
  },
  {
    name: "Jaewon Park",
    name_korean: "박재원",
    degree: "Ph.D.",
    graduation_year: "2025",
    thesis_title: "",
    current_position: ""
  },
  {
    name: "Sangmin Yang",
    name_korean: "양상민",
    degree: "MS.",
    graduation_year: "2025",
    thesis_title: "Establishment of a Digital Twin Environment in PC Factories Based on Dynamic Data Simulation for Enhancing OSC Construction Efficiency",
    current_position: ""
  },
  {
    name: "Sungil Son",
    name_korean: "손성일",
    degree: "MS.",
    graduation_year: "2025",
    thesis_title: "A Study on GPT-based Automatic Tagging and Keyword Optimization for Construction Site Images",
    current_position: ""
  }
];