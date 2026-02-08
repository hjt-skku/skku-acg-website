const conferenceData = [
  {
    title:"제조산업과 건설산업의 사례 비교를 통한 OSC 고도화 방안",
    main_author:"김진철",
    co_authors:"권순욱",
    conference:"KSARC(Korean Society of Automation and Robotics in Construction)",
    year:"2023"
  },
  {
    title:"시공관리자를 위한 BIM수행 역량모형 개발 및 활용안 도출",
    main_author:"황유명",
    co_authors:"권순욱",
    conference:"한국BIM학회",
    year:"2023"
  },
  {
    title:"건설사의 스마트건설 기술 적용 및 활성화 방향에 관한 연구",
    main_author:"최고은",
    co_authors:"권순욱 , 장영희 , 홍정택 , 손성일",
    conference:"KSARC(Korean Society of Automation and Robotics in Construction)",
    year:"2023"
  },
  {
    title:"Pre-construction 단계의 하도급 입찰 프로세스 최적화 연구- Hi-tech Plant 프로젝트 중심",
    main_author:"김병준",
    co_authors:"권순욱",
    conference:"한국BIM학회",
    year:"2023"
  },
  {
    title:"AWP 기반 WBS 구축 및 BIM 객체 자동 연계 방안- Hi-Tech Project의 MEP 중심",
    main_author:"윤승엽",
    co_authors:"권순욱",
    conference:"한국BIM학회",
    year:"2023"
  },
  {
    title:"AWP 기반 C-Driven(construction-driven) Project 수행을 위한 CM조직 필요역량 도출",
    main_author:"윤승엽",
    co_authors:"권순욱",
    conference:"한국BIM학회",
    year:"2023"
  },
  {
    title:"산악지형 토공사현장에서의 드론 측량을 위한 지형 인식 기반 드론 비행 제어 시스템",
    main_author:"홍정택",
    co_authors:"송진우 , 최고은 , 권순욱",
    conference:"대한건축학회",
    year:"2022"
  },
  {
    title:"가설기자재 스마트 품질관리 통합 플랫폼 도입을 위한 제도 개선 방안",
    main_author:"최고은",
    co_authors:"권순욱 , 이서준 , 송진우 , 홍정택 , 장영희",
    conference:"KSARC(Korean Society of Automation and Robotics in Construction)",
    year:"2022"
  },
  {
    title:"BIM 기반 Off-Site Construction(OSC) 현장 반입 PC 부재 관리 기술에 관한 연구",
    main_author:"장영희",
    co_authors:"이서준 , Akbar Ali , 권순욱",
    conference:"대한건축학회",
    year:"2022"
  },
  {
    title:"설명가능인공지능 기반 가설기자재 손상검출 및 정량화",
    main_author:"이철희",
    co_authors:"권순욱 , 김인수 , 구태희",
    conference:"한국도로학회",
    year:"2021"
  },
  {
    title:"건설현장 디지털 트윈 적용을 위한 IoT 기반 실시간 장비 Tracking 기술",
    main_author:"홍정택",
    co_authors:"이서준 , 송진우 , 장영희 , 권순욱",
    conference:"대한건축학회",
    year:"2021"
  },
  {
    title:"객체인식 및 Remote Sensing 기반 Off-site Construction(OSC) 공사의 스마트 안전관리 지원 기술",
    main_author:"양이한",
    co_authors:"송진우 , 홍정택 , 권순욱",
    conference:"대한건축학회",
    year:"2021"
  },
  {
    title:"Off-Site Construction(OSC) 기반 현장 반입 PC 부재에 대한 스마트 품질 검측 기술",
    main_author:"정민경",
    co_authors:"이서준 , 장영희 , 권순욱",
    conference:"대한건축학회",
    year:"2021"
  },
  {
    title:"증강현실을 활용한 스마트 시설물 유지관리를 위한 BIM 기반 속성 정보 교환 프로세스 개발",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2020"
  },
  {
    title:"임시구조물 안전 확보를 위한 가설기자재 스마트 품질관리 통합 시스템에 관한 연구",
    main_author:"이서준",
    co_authors:"송진우 , 정민경 , 권순욱",
    conference:"한국건설관리학회",
    year:"2020"
  },
  {
    title:"양중장비의 안전성 확보를 위한 임베디드 시스템 내 사물인식 및 센서 기반 기술의 융합",
    main_author:"이서준",
    co_authors:"YONG YIK PONG , 송진우 , 정민경 , 권순욱",
    conference:"한국CDE학회",
    year:"2020"
  },
  {
    title:"다중 센싱 및 BIM 모델 기반 임시 구조물 품질 평가 시스템의 사용자 인터페이스 개발",
    main_author:"Kim Alexander",
    co_authors:"ZHU ZIQING , 이규협 , 문대윤 , 권순욱",
    conference:"한국CDE학회",
    year:"2020"
  },
  {
    title:"OSC 기반 PC부재 On-Site 스마트 품질 검측을 위한 자동 품질 검측 Reporting 기술 개발",
    main_author:"정민경",
    co_authors:"이서준 , 송진우 , 권순욱",
    conference:"한국건설관리학회",
    year:"2020"
  },
  {
    title:"AR 기반 현장정보 시각화 및 현장관리자 업무 지원기술에 관한 연구",
    main_author:"송진우",
    co_authors:"이서준 , 정민경 , 권순욱",
    conference:"한국건설관리학회",
    year:"2020"
  },
  {
    title:"스마트 건설관리를 위한 사이버물리시스템과 디지털 트윈 적용에 관한 연구",
    main_author:"이서준",
    co_authors:"권순욱",
    conference:"한국건설관리학회",
    year:"2019"
  },
  {
    title:"3차원 열화상 정보 기반 스마트 리모델링 공사 지원 기술에 관한 연구",
    main_author:"송진우",
    co_authors:"권순욱",
    conference:"한국건설관리학회",
    year:"2019"
  },
  {
    title:" FAB 시설 스마트 관리를 위한 디지털 트윈 프로토타입",
    main_author:"박지환",
    co_authors:"권순욱",
    conference:"한국건설관리학회",
    year:"2019"
  },
  {
    title:"증강/혼합현실 기술 기반 건축물 유지보수 시스템을 위한 한국형 COBie 개발",
    main_author:"이서준",
    co_authors:"",
    conference:"한국CDE학회",
    year:"2018"
  },
  {
    title:"공공건축물 유지관리 업무에서의 AR/MR 기술적용 프로세스 제안",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2018"
  },
  {
    title:"BIM 정보와 AR/VR 기술을 활용한 스마트 유지보수 관리체계 적용 방안",
    main_author:"이서준",
    co_authors:"",
    conference:"한국BIM학회&한국공간정보학회",
    year:"2018"
  },
  {
    title:"2차원 이미지 중첩도와 이미지 프로세싱 기반 3차원 포인트 클라우드 생성과의 연관성 분석",
    main_author:"박지환",
    co_authors:"권순욱",
    conference:"한국건설관리학회",
    year:"2018"
  },
  {
    title:"초고층 리프트 운행 이력 정보를 활용한 마감공사 중 예상 양중 사건 추출 모델",
    main_author:"이송이",
    co_authors:"신중환 , 권순욱 , 이규협 , 정수완 , 문대윤",
    conference:"한국건설관리학회",
    year:"2016"
  },
  {
    title:"가상 데스크톱 인프라(VDI) 기술을 활용한 BIM Cloud 환경 구축에 관한 연구",
    main_author:"이규협",
    co_authors:"권순욱 , 신중환 , 문대윤 , 정수완 , 이송이",
    conference:"한국건설관리학회",
    year:"2016"
  },
  {
    title:"FAB 산업시설에서의 BIM 확대적용을 통한 개선요소 도출",
    main_author:"정수완",
    co_authors:"신중환 , 권순욱 , 문대윤 , 이규협 , 이송이",
    conference:"한국건설관리학회",
    year:"2016"
  },
  {
    title:"레이저 스캐닝 정보를 활용한 3차원 옥트리 알고리즘 기반의 설비 시설 배치용 자동 공간 분석을 위한 연구",
    main_author:"김동현",
    co_authors:"권순욱 , 신중환 , 이규협",
    conference:"한국건설관리학회",
    year:"2014"
  },
  {
    title:"국내 중소기업 설계사무소와 엔지니어링 영역간 BIM 기반 정보교환 체계 구축을 위한 기초 연구",
    main_author:"권순욱",
    co_authors:"",
    conference:"한국CDE학회",
    year:"2014"
  },
  {
    title:"공·민간 공동사업의 성공적 정착방안 연구",
    main_author:"김상조",
    co_authors:"권순욱",
    conference:"한국건설관리학회",
    year:"2014"
  },
  {
    title:"건설공사에서 적용되는 신기술 제도의 문제점 분석 및 개선방안에 관한 연구",
    main_author:"김지영",
    co_authors:"권순욱 , 신경훈",
    conference:"한국건설관리학회",
    year:"2014"
  },
  {
    title:"초고층 프로젝트 개산견적 코스트모델 개발 - 주거시설 내부마감 공종을 대상으로 -",
    main_author:"정수완",
    co_authors:"권순욱 , 김한수 , 김영석 , 윤강철 , 신중환",
    conference:"한국건설관리학회",
    year:"2013"
  },
  {
    title:"역설계를 이용한 건축자재 품질관리 프로세스 개발",
    main_author:"이상설",
    co_authors:"권순욱 , 신중환",
    conference:"한국건설관리학회",
    year:"2013"
  },
  {
    title:"비정형 건축물의 시공단계 BIM 적용 사례 및 현장에서의 BIM 기반 클라우드 서비스의 타당성",
    main_author:"윤수원",
    co_authors:"김병곤 , 권순욱 , 손영석 , 최종문 , 이종인",
    conference:"한국CDE학회",
    year:"2013"
  },
  {
    title:"공공주택 건축공사의 시공확인 업무에 모바일 컴퓨팅 및 증강현실 활용 방안",
    main_author:"황성목",
    co_authors:"권순욱",
    conference:"한국건설관리학회",
    year:"2013"
  },
  {
    title:"U-City와 연계한 통합 도시기반시설 건설비용 추정에 관한 연구",
    main_author:"최영선",
    co_authors:"권순욱 , 신중환",
    conference:"한국건설관리학회",
    year:"2013"
  },
  {
    title:"NUI(Natural User Interface)기반의 건설 리프트 모니터링 및 컨트롤 모듈에 관한 연구",
    main_author:"김동현",
    co_authors:"권순욱 , 신중환",
    conference:"한국건설관리학회",
    year:"2013"
  },
  {
    title:"NFC(Near Field Communication)와 증강현실을 활용한 모바일 기반 플랜트 배관시공관리 시스템 개발",
    main_author:"문대윤",
    co_authors:"권순욱 , 신중환",
    conference:"한국건설관리학회",
    year:"2013"
  },
  {
    title:"신도시 U-Bike 서비스 사업시행자 적용전략 도출",
    main_author:"이일우",
    co_authors:"권순욱 , 문대윤",
    conference:"한국건설관리학회",
    year:"2012"
  },
  {
    title:"내장형 건설 리프트 정보 저장 및 제공 시스템 개발에 관한 연구",
    main_author:"신중환",
    co_authors:"권순욱 , 문대윤 , 이상설 , 정수완",
    conference:"한국건설관리학회",
    year:"2012"
  },
  {
    title:"선진 공도구 도입, 적용 및 생산성 평가",
    main_author:"이미나",
    co_authors:"박성훈 , 권순욱 , 이계영 , 이상헌 , 정삼룡",
    conference:"한국건설관리학회",
    year:"2011"
  },
  {
    title:"스마트폰어플리케이션사례분석을통한 U-City에서의스마트폰활용방안연구",
    main_author:"최윤길",
    co_authors:"김호기 , 류윤진 , 김성아 , 진상윤 , 권순욱",
    conference:"",
    year:"2010"
  },
  {
    title:"소셜네트워크의 형성을 통한  u-Service 개선 과정의 주민참여 활성화 방안",
    main_author:"김호기",
    co_authors:"최윤길 , 류윤진 , 권순욱 , 진상윤",
    conference:"",
    year:"2010"
  },
  {
    title:"국내사례분석을통한u-환경서비스의개선방안",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2010"
  },
  {
    title:"공공건설사업 사후평가의 사업효율성 평가 개선방안에 관한 연구",
    main_author:"김호기",
    co_authors:"권순욱 , 이두헌 , 박희성 , 박성훈",
    conference:"대한토목학회",
    year:"2010"
  },
  {
    title:"3D 레이저 스캔 기술의 건설시공 도입을 위한 기술적 요소 고찰",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2010"
  },
  {
    title:"건설환경에서 RFID 인식성능 최적화를 위한 EM 시뮬레이션 기술 활용방안",
    main_author:"김준식",
    co_authors:"신태홍 , 진상윤 , 김예상 , 권순욱",
    conference:"대한건축학회",
    year:"2009"
  },
  {
    title:"RFID/USN 기반의 차세대 지능형 건설물류장비 인식성능 평가체계 구축 방안",
    main_author:"송설민",
    co_authors:"신태홍 , 진상윤 , 김예상 , 권순욱",
    conference:"대한건축학회",
    year:"2009"
  },
  {
    title:"RFID/USN 기반의 지능형 Portable 장비를 활용한 건설자재관리 프로세스 구축",
    main_author:"최상용",
    co_authors:"신태홍 , 진상윤 , 김예상 , 권순욱",
    conference:"대한건축학회",
    year:"2009"
  },
  {
    title:"Algorithm Development for Effective Material Management in High-Rise Building Constructions",
    main_author:"조창연",
    co_authors:"권순욱 , 유석준 , 이주형",
    conference:"한국전산구조공학회",
    year:"2009"
  },
  {
    title:"A development of automated pipe tracking system for oil and gas plant construction",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2009"
  },
  {
    title:"차세대 지능형 건설물류관리 프로세스 지원을 위한 지능형 장비 간 물류정보인식 매커니즘 개발",
    main_author:"권상혁",
    co_authors:"신태홍 , 진상윤 , 김예상 , 권순욱 , 윤수원",
    conference:"대한건축학회",
    year:"2008"
  },
  {
    title:"지능형 건설물류관리 체계 구축을 위한 SOA 적용 모델 개발",
    main_author:"신태홍",
    co_authors:"진상윤 , 윤수원 , 권순욱 , 김예상",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"공공공사 사후평가의 사용자 만족도 평가모델에 대한 기초연구",
    main_author:"김재우",
    co_authors:"조창연 , 신태홍 , 권순욱 , 김예상 , 진상윤",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"고층 콘크리트 구조물 모듈화 시공 시스템 기초연구",
    main_author:"고민혁",
    co_authors:"조창연 , 신태홍 , 권순욱 , 김예상 , 진상윤",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"건설산업의 물류관리 체계 개선을 위한 차세대 지능형 건설 물류관리 시스템 개발 현황",
    main_author:"권순욱",
    co_authors:"진상윤 , 김예상",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"건설 CALS 시스템 건설공사 활용을 위한 요소기술 및 장비의 현장 적용성 검증",
    main_author:"최상용",
    co_authors:"신태홍 , 김병곤 , 김태학 , 권순욱 , 진상윤",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"RFID/USN 기술 기반의 차세대 지능형 건설물류관리 프로세스 레퍼런스 모델",
    main_author:"이우재",
    co_authors:"신태홍 , 윤수원 , 진상윤 , 권순욱 , 김예상",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"Fun Management 기법의 국내 건설산업 도입에 관한 연구",
    main_author:"권혁도",
    co_authors:"김예상 , 권순욱 , 진상윤",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"Capturing Information Exchange Process among Structural Engineering Software Applications for BIM Deployment Using IDM",
    main_author:"김재우",
    co_authors:"임재인 , 유석준 , 권순욱 , 진상윤 , 최철호",
    conference:"한국전산구조공학회",
    year:"2008"
  },
  {
    title:"BIM 적용을 위한 구조설계 엔지니어링 소프트웨어 간 정보교환 프로세스 분석 및 표준문서화",
    main_author:"김재우",
    co_authors:"임재인 , 유석준 , 권순욱 , 진상윤 , 최철호",
    conference:"한국전산구조공학회",
    year:"2008"
  },
  {
    title:"A SOA-based Application Model for Building Intelligent Construction Supply Chain Management Framework",
    main_author:"신태홍",
    co_authors:"진상윤 , 윤수원 , 권순욱 , 김예상",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"A Foundation Study for User Satisfaction Degree's Estimated Model of Post-Evaluation in the public construction",
    main_author:"김재우",
    co_authors:"조창연 , 신태홍 , 권순욱 , 김예상 , 진상윤",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"A Development of Mechanism on Supply Chain Information Recognition among intelligent equipment for USN based construction supply chain management process",
    main_author:"권상혁",
    co_authors:"신태홍 , 진상윤 , 김예상 , 권순욱 , 윤수원",
    conference:"한국건설관리학회",
    year:"2008"
  },
  {
    title:"건설 시공현장의 3D기반 광대역 모델링을 위한 Sensor 기술 분석과 향후 현장적용 모델 연구",
    main_author:"권혁도",
    co_authors:"고민혁 , 윤수원 , 권순욱 , 진상윤 , 김예상",
    conference:"한국건설관리학회",
    year:"2007"
  },
  {
    title:"USN 기술을 활용한 지능형 건설물류관리 프로세스",
    main_author:"이우재",
    co_authors:"이남수 , 유수원 , 진상윤 , 권순욱 , 김예상",
    conference:"한국건설관리학회",
    year:"2007"
  },
  {
    title:"RFID기술을 활용한 건설현장의 노무관리시스템 프로토타입구축",
    main_author:"한재구",
    co_authors:"권순욱 , 조문영",
    conference:"한국건설관리학회",
    year:"2007"
  },
  {
    title:"RFID와 무선네트워크 기술을 이용한 자재위치파악 방안",
    main_author:"이남수",
    co_authors:"송제홍 , 권순욱 , 윤수원 , 진상윤 , 권순욱 , 김예상",
    conference:"한국건설관리학회",
    year:"2006"
  },
  {
    title:"Construction Quality Management based on Digital Twin using Autonomous Scanning UGV",
    main_author:"홍정택",
    co_authors:"송진우 , Akbar Ali , 손성일 , 양상민 , 권순욱",
    conference:"한국건설관리학회",
    year:"2024"
  },
  {
    title:"Business Model Development for Automatic Quality Inspection System of Temporary Structure Elements",
    main_author:"최고은",
    co_authors:"이서준 , 이규협 , 설준성 , 권순욱",
    conference:"한국건설관리학회",
    year:"2024"
  },
  {
    title:"Automated Decision Support System Based on Quantification of Defective Tubular Steel Temporary Materials for Quality Circles",
    main_author:"James Mugo Njoroge",
    co_authors:"이서준 , 이규협 , 설준성 , 장영희 , 권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2024"
  },
  {
    title:"Vision-based Precast Concrete Management Plan in Off-Site Construction Site: Using PC Member Quality Grades",
    main_author:"주자정",
    co_authors:"양이한 , 이서준 , 장영희 , 권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2021"
  },
  {
    title:"Remote Monitoring System and Controller for the Construction Machinery using AR Smart Glasses",
    main_author:"Akbar Ali ",
    co_authors:"송진우 , 홍정택 , 이규협 , 권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2021"
  },
  {
    title:"MR-based Equipment Remote Control and 3D Digital Working Guidance for Field-oriented Maintenance",
    main_author:"송진우",
    co_authors:"이규협 , 정민경 , 이서준 , 권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2020"
  },
  {
    title:"Automated On-Site Quality Inspection and Reporting Technology for Off-Site Construction (OSC)-based Precast Concrete Members",
    main_author:"이서준",
    co_authors:"권순욱 , 정민경 , Mobeen , Kim Alexander",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2020"
  },
  {
    title:"Smart wearable technologies to promote safety in aging construction labor",
    main_author:"Susana",
    co_authors:"권순욱",
    conference:"CCC(Creative Construction Conference)",
    year:"2019"
  },
  {
    title:"Information Exchange Process for AR based Smart Facility Maintenance System Using BIM Model",
    main_author:"정수완",
    co_authors:"권순욱 , 문대윤 , 이규협 , 신중환",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2019"
  },
  {
    title:"Utilization of Efficient BIM and Automation Technology for Semiconductor FAB Projects",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2018"
  },
  {
    title:"Smart Facility Management Systems Utilizing Open BIM and Augmented/Virtual Reality",
    main_author:"정수완",
    co_authors:"권순욱 , 문대윤 , 고태규",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2018"
  },
  {
    title:"A study on adjustment method of finishing work schedule based on image detection for high-rise building construction",
    main_author:"고태규",
    co_authors:"신중환 , 권순욱 , Susana , 박희성 , 박재우",
    conference:"CCC(Creative Construction Conference)",
    year:"2018"
  },
  {
    title:"A Study AR Based Smart Device for Work Management at Plant Construction Sites",
    main_author:"이규협",
    co_authors:"권순욱 , 고태규 , 김영석",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2018"
  },
  {
    title:"Smart merging method for hybrid point cloud data using UAV and LIDAR in earthwork construction",
    main_author:"권순욱",
    co_authors:"박재우 , 문대윤 , 정수완 , 박희성",
    conference:"CCC(Creative Construction Conference)",
    year:"2017"
  },
  {
    title:"Pre-processing Methodology of Image Compensation using Histogram Equalization for Generating Point-cloud of Construction Environment",
    main_author:"문대윤",
    co_authors:"권순욱 , 정수완 , 이송이 , 고태규",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2017"
  },
  {
    title:"Generation of 3D Terrain Map Using Cell Deviation Algorithm for Earthwork",
    main_author:"이두현",
    co_authors:"김석 , 박재우 , 권순욱",
    conference:"CCC(Creative Construction Conference)",
    year:"2017"
  },
  {
    title:"AR (Augmented Reality) based 3D Workspace Modeling for Quality Assessment Using As-Built On-Site Condition in Remodeling Construction Project",
    main_author:"이송이",
    co_authors:"권순욱 , 고태규",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2017"
  },
  {
    title:"A prediction method of vertical lifting loads based on long-term time series analysis for high-rise building construction",
    main_author:"이규협",
    co_authors:"권순욱 , 신중환 , 정수완 , 이송이",
    conference:"CCC(Creative Construction Conference)",
    year:"2017"
  },
  {
    title:"Resource Allocation Methodology of Virtual Desktop Infrastructure in Cloud Computing BIM: Focusing Korean Small and Medium Sized Architectural Design Firm",
    main_author:"이규협",
    co_authors:"권순욱 , 신중환 , 김동현 , 문대윤 , 이송이",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2016"
  },
  {
    title:"Data-Processing Model for Vertical Zoning based on Construction Lift Operation Records for High-rise Building",
    main_author:"신중환",
    co_authors:"권순욱 , 문대윤 , 정수완 , 최규성 , 이규협",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2016"
  },
  {
    title:"Analysis of accuracy factor for 3D reconstruction using 2D image obtained from unmanned aerial vehicle (UAV)",
    main_author:"고형렬",
    co_authors:"권순욱 , 정수완 , 문대윤 , 박재우 , 서정원",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2016"
  },
  {
    title:"3D Grid Size Optimization of Automatic Space Analysis for Plant Facility Using Point Cloud Data",
    main_author:"최규성",
    co_authors:"권순욱 , 김동현 , 문대윤 , 정수완 , 이송이 , 고형렬",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2016"
  },
  {
    title:"Augmented reality-based on-site pipe assembly process management using smart glasses",
    main_author:"문대윤",
    co_authors:"권순욱 , Thomas , 고형렬",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2015"
  },
  {
    title:"A study on generation of 3D model and mesh image of excavation work using UAV",
    main_author:"김동현",
    co_authors:"권순욱 , 정수완 , 박수열 , 박재우 , 서정원",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2015"
  },
  {
    title:"A Study on Design of Virtual Desktop Infrastructure (VDI) System Model for Cloud Computing BIM Service",
    main_author:"이규협",
    co_authors:"권순욱 , 신중환 , 최규성",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2015"
  },
  {
    title:"A Study on Construction Site of Virtual Desktop Infrastructure (VDI) System Model for Cloud Computing BIM Service",
    main_author:"이규협",
    co_authors:"권순욱 , 신중환 , 최규성",
    conference:"ICCEPM(International Conference on Construction Engineering and Project Management)",
    year:"2015"
  },
  {
    title:"A Study on Automatic Space Analysis for Plant Facilities Based on 3D Octree Argorithm by Using Laser Scanning Information",
    main_author:"김동현",
    co_authors:"권순욱 , 정수완 , 고형렬",
    conference:"한국건설관리학회",
    year:"2015"
  },
  {
    title:"A Field-Oriented Test-Simulation of Embedded Lift Information System for High Rise Building",
    main_author:"신중환",
    co_authors:"권순욱 , Thomas , 문대윤",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2015"
  },
  {
    title:"A study on vertical zoning algorithm of real-time construction lift control for high-rise building",
    main_author:"신중환",
    co_authors:"권순욱 , 김동현",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2014"
  },
  {
    title:"A conceptual framework of prefabricated building construction management system using reverse engi-neering, bim, and wsn",
    main_author:"이성기",
    co_authors:"권순욱",
    conference:"CIB(International Council for research and innovation in Building and Construction)",
    year:"2014"
  },
  {
    title:"Work Analysis for Applicability of Cloud Computing based BIM Technology using Content Delivery Network(CDN) and Importance Performance Analysis(IPA) in Construction Project",
    main_author:"김동현",
    co_authors:"김영석 , 김병곤 , 권순욱 , 신중환",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2013"
  },
  {
    title:"MEP facility 3D CAD Model acquisition and BIM object creation processes into which Reverse Engineering and the concept of IPD based collaboration",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2013"
  },
  {
    title:"FRAMEWORK OF PRELIMINARY ESTIMATION MODEL FOR INTERNAL FINISHES OF SUPER HIGH-RISE BUILDING PROJECT",
    main_author:"정수완",
    co_authors:"권순욱 , 김한수 , 김영석 , 윤강철 , 신중환",
    conference:"한국건설관리학회",
    year:"2013"
  },
  {
    title:"Introducing and applying a modified AHP (Analysis Hierarchy Process) to analyse productivity at the construction site",
    main_author:"이미나",
    co_authors:"이개영 , 권순욱 , 신중환",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2012"
  },
  {
    title:"DEVELOPMENT OF PIPE INSTALLATION MANAGEMENT SYSTEM USING NFC(NEAR FIELD COMMUNICATION) AND AUGMENTED REALITY TECHNOLOGY",
    main_author:"문대윤",
    co_authors:"권순욱 , 신중환",
    conference:"한국건설관리학회",
    year:"2012"
  },
  {
    title:"DEVELOPMENT OF A MATCHING METHOD FOR QUALITY AWARENESS FOR AS-BUILT DATABASE USING3D SHAPE INFORMATION",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2012"
  },
  {
    title:"An optimized operation algorithm for twin or multi-cage lift systems for high-rise construction sites",
    main_author:"신중환",
    co_authors:"권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2012"
  },
  {
    title:"A reverse modelling method for quality assessment of the as-built condition using 3D-shape information",
    main_author:"이미나",
    co_authors:"권순욱 , 신중환",
    conference:"Gerontechnology",
    year:"2012"
  },
  {
    title:"Development of optimized point clouds merging method for rapid processing to generate earthwork site model",
    main_author:"권순욱",
    co_authors:"이미나 , 이문주 , 채명진 , 이준복",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2011"
  },
  {
    title:"BUSINESS MODELS FOR CONVERGENCE OF CONSTRUCTION AND INFORMATION TECHNOLOGY -A SENARIO PLANNING-BASED APPROACH",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2011"
  },
  {
    title:"Analysis of success factors in construction in IT Convergence",
    main_author:"임정아",
    co_authors:"권순욱 , 박성훈 , 이미나",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2011"
  },
  {
    title:"A Derivation of the factor for risk management in the u-city construction industry",
    main_author:"김호기",
    co_authors:"권순욱 , 이정현 , 박희성",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2011"
  },
  {
    title:"A CONCEPTUALIZATION FOR THE AUTOMATION OF A LIFT CAR OPERATION IN HIGH RISE BUILDING CONSTRUCTION",
    main_author:"이종현",
    co_authors:"권순욱 , 이미나",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2011"
  },
  {
    title:"Using Information Delivery Manual (IDM) for efficient exchange of building design information",
    main_author:"김창환",
    co_authors:"권순욱 , 유석준 , 임정아",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2010"
  },
  {
    title:"Simulation method of construction hoist operating plan for high rise buildings considering lifting heights and loads",
    main_author:"조창연",
    co_authors:"김정열 , 조문영 , 이준복 , 김영석 , 권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2010"
  },
  {
    title:"A Case Study for Integrating Lean Six-Sigma and RFID Applications in Construction Processes through Simulation Approach",
    main_author:"채명진",
    co_authors:"윤성민 , 한승헌 , 권순욱",
    conference:"Construction Research Congress",
    year:"2010"
  },
  {
    title:"Service-oriented integrated information framework for next generation intelligent construction supply chain management",
    main_author:"신태홍",
    co_authors:"진상윤 , 윤수원 , 김예상 , 권순욱 , 최철호",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2009"
  },
  {
    title:"Merging Point Clouds from heterogeneous 3D scanners for fast update of an earthwork site model",
    main_author:"정승우",
    co_authors:"권순욱 , 김호기 , 유석준 , 조문영",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2009"
  },
  {
    title:"Collaborative decision support environment for excavation process planning: Using point-cloud based workspace model",
    main_author:"",
    co_authors:"",
    conference:"일본건축학회",
    year:"2009"
  },
  {
    title:"Building an digital model of an earthwork site for autonomous excavator operation",
    main_author:"유석준",
    co_authors:"이규원 , 권순욱 , 채명진 , 조문영",
    conference:"제어로봇시스템학회",
    year:"2009"
  },
  {
    title:"Basic study of smart robotic construction lift for increasing resource lifting efficiency in high-rise building construction",
    main_author:"조창연",
    co_authors:"권순욱 , 이준복 , 유석준 , 진상윤 , 김예상",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2009"
  },
  {
    title:"A DEVELOPMENT OF RFID/USN-BASED INTELLIGENT EQUIPMENT FOR CONSTRUCTION SUPPLY CHAIN MANAGEMENT",
    main_author:"신태홍",
    co_authors:"윤수원 , 진상윤 , 권순욱 , 김예상 , 최철호",
    conference:"한국건설관리학회",
    year:"2009"
  },
  {
    title:"A DEVELOPMENT OF INTELLIGENT CONSTRUCTION LIFT-CAR TOOLKIT DEVICE FOR CONSTRUCTION VERTICAL LOGISTICS MANAGEMENT",
    main_author:"조창연",
    co_authors:"권순욱 , 신태홍 , 진상윤 , 김예상 , 이주형",
    conference:"한국건설관리학회",
    year:"2009"
  },
  {
    title:"Integrated tunnel monitoring system using wireless automated data collection technology",
    main_author:"김정열",
    co_authors:"유현석 , 권순욱 , 조문영",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2008"
  },
  {
    title:"A session-based collaboration environment for BIM-based Project Life-cycle Management",
    main_author:"진상윤",
    co_authors:"윤수원 , 신태홍 , 이강 , 최설호 , 권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2008"
  },
  {
    title:"A gate sensor for construction logistics",
    main_author:"이우재",
    co_authors:"송제홍 , 권순욱 , 진상윤 , 최설호 , 김예상",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2008"
  },
  {
    title:"Material Tracker for Construction Logistics",
    main_author:"송재홍",
    co_authors:"이남수 , 유수원 , 권순욱 , 진상윤 , 김예상",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2007"
  },
  {
    title:"LESSONS-LEARNED FROM RFID APPLICATIONS IN THE KOREAN CONSTRUCTION INDUSTRY",
    main_author:"진상윤",
    co_authors:"권순욱 , 김예상",
    conference:"ASCE/CIB Construction research congress",
    year:"2007"
  },
  {
    title:"Development of Wireless Module for Tunnel Vibrating Wire Type Sensor",
    main_author:"김정열",
    co_authors:"유현석 , 권순욱 , 조문영",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2007"
  },
  {
    title:"A Systemized Application Method of RFID Technology for Logistics in Building Construction Projects",
    main_author:"",
    co_authors:"",
    conference:"",
    year:"2007"
  },
  {
    title:"Wireless Vibration Sensor for Tunnel Construction",
    main_author:"권순욱",
    co_authors:"김정열 , 유현석 , 조문영",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2006"
  },
  {
    title:"An Application Model of RFID Technology on Progress Measurement and Management of Construction Works",
    main_author:"윤수원",
    co_authors:"진상윤 , 김예상 , 권순욱",
    conference:"ISARC(International Symposium on Automation and Robotics in Construction)",
    year:"2006"
  },
 ];
