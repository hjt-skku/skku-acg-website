/**
 * 완료된 연구 프로젝트 데이터
 */
const completedProjectsData = [
  {
    id: 1,
    title: "OSC기반 공동주택 생산시스템 혁신기술 개발",
    description: "드론과 컴퓨터 비전 기술을 활용하여 건설 현장의 안전 위험 요소를 자동으로 감지하고 분석하는 시스템을 개발하였다. 실시간 영상 분석을 통해 작업자 안전모 착용 여부, 위험 지역 접근, 안전 시설물 상태 등을 모니터링하고 알림 서비스를 제공한다.",
    start_date: "2022-01",
    end_date: "2024-12",
    funding_agency: "국토교통과학기술진흥원",
    amount: 0,
    image: "completed_osc.jpg",
    category: "OSC, AI"
  },
  {
    id: 2,
    title: "전통시장 디지털 융합 및 지속가능한 자생력 향상을 위한 온고지신 플랫폼 개발",
    description: "재활용 소재를 활용한 새로운 건축 자재를 개발하고 그 성능을 평가하는 연구를 수행하였다. 특히 폐플라스틱과 산업 부산물을 재활용한 단열재 및 마감재의 내구성, 단열성, 친환경성 등을 다각도로 분석하였다.",
    start_date: "2021-03",
    end_date: "2023-08",
    funding_agency: "중소기업벤처사업부",
    amount: 0,
    image: "completed_market.jpg",
    category: "CPS/DT"
  },
  {
    id: 3,
    title: "FAB Digital-twin 구현을 위한 실시간 BIM 정합성 검측 및 DL 기반 BIM Data 분석 기술확보",
    description: "건설 프로젝트의 설계, 시공, 유지관리 단계를 BIM 기반으로 통합 관리할 수 있는 플랫폼을 개발하였다. 클라우드 기반 협업 환경을 제공하여 다양한 이해관계자 간의 원활한 소통과 정보 공유를 지원한다.",
    start_date: "2022-07",
    end_date: "2023-06",
    funding_agency: "SK하이닉스",
    amount: 0,
    image: "completed_skhy.jpg",
    category: "FAB, AR/VR, BIM, AI"
  },
  {
    id: 4,
    title: "CTI 구현을 위한 DPL 알고리즘 개발 및 체계 구축",
    description: "스마트건설에서 객체의 가상화를 바탕으로 가상정보 획득 및 제어를 위한 CTI 기반의 DPL(Digital interface & Physical object Linkage) 알고리즘 개발 및 체계를 구축하였다. 실제 물리 모델과 가상화 정보(가상모델, 인터페이스) 간의 연계기술 개발을 통해 가상화 환경에서 물리 모델 제어를 가능하게 한다.",
    start_date: "2019-01",
    end_date: "2020-12",
    funding_agency: "한국건설기술연구원",
    amount: 0,
    image: "completed_cti.jpg",
    category: "AI, CPS/DT"
  },
  {
    id: 5,
    title: "CPS 기반의 스마트 Fab 유지관리를 위한 DPL 응용기술 개발",
    description: "FAB 시설물과 장비의 효율적인 운영을 위해 DPL 알고리즘을 활용한 원격 제어 기술과 Smart Object 기반 유지관리 프로토타입을 개발하였다. 또한, MR 기술과 CPS 환경을 접목하여 핵심 장비의 점검 및 보수를 실시간으로 지원하는 스마트 유지관리 기술을 구현하였다.",
    start_date: "2019-01",
    end_date: "2019-12",
    funding_agency: "한국연구재단",
    amount: 0,
    image: "completed_cps.jpg",
    category: "CPS/DT"
  },
  {
    id: 6,
    title: "ACR 기반의 플랜트 시공/ 유지관리를 위한 스마트 웨어러블 디바이스용 시스템 개발",
    description: "플랜트 시공 및 유지관리 현장의 상황을 자동으로 인식하는 ACR 기술과 웨어러블 디바이스 제어 기술을 개발하였다. 이를 통해 작업자의 상태를 실시간으로 모니터링하고, 통합 플랫폼과 DBS(Device Breakdown Structure)를 기반으로 디바이스를 체계적으로 관리하여 스마트한 플랜트 운영에 기여한다.",
    start_date: "2019-06",
    end_date: "2022-05",
    funding_agency: "과학기술정보통신부",
    amount: 0,
    image: "completed_acr.jpg",
    category: "ㅇ"
  },
  {
    id: 7,
    title: "LG 에너지 솔루션 BIM 기반 건설관리 플랫폼 개발",
    description: "도시 인프라(교량, 터널, 건물 등)의 상태를 IoT 센서와 AI 기술을 활용하여 모니터링하고 분석하는 시스템을 개발하였다. 구조물의 노후화, 안전성, 에너지 효율 등을 실시간으로 모니터링하여 도시 인프라의 지속가능성을 향상시킨다.",
    start_date: "2022-01",
    end_date: "2024-09",
    funding_agency: "LG에너지솔루션",
    amount: 0,
    image: "completed_lges.jpg",
    category: "FAB, BIM"
  },
  {
    id: 8,
    title: "SK 에코플랜트 BIM Platform 기준정보체계 구축 프로젝트",
    description: "도시 인프라(교량, 터널, 건물 등)의 상태를 IoT 센서와 AI 기술을 활용하여 모니터링하고 분석하는 시스템을 개발하였다. 구조물의 노후화, 안전성, 에너지 효율 등을 실시간으로 모니터링하여 도시 인프라의 지속가능성을 향상시킨다.",
    start_date: "2019-06",
    end_date: "2022-05",
    funding_agency: "SK에코플랜트",
    amount: 0,
    image: "completed_skep.jpg",
    category: "FAB, BIM"
  },
  {
    id: 9,
    title: "SK 하이닉스 M16 BIM 진단",
    description: "",
    start_date: "2019-07",
    end_date: "2019-12",
    funding_agency: "SK에코플랜트",
    amount: 0,
    image: "",
    category: "FAB, BIM"
  },
  {
    id: 10,
    title: "SK 하이닉스 M15 BIM 컨설팅",
    description: "",
    start_date: "0000-00",
    end_date: "0000-00",
    funding_agency: "SK에코플랜트",
    amount: 0,
    image: "",
    category: "FAB, BIM"
  },
  {
    id: 11,
    title: "ACR 기반의 플랜트 시공/유지관리를 위한 스마트 웨어러블 디바이스용 시스템 개발",
    description: "",
    start_date: "2017-00",
    end_date: "2019-00",
    funding_agency: "한국연구재단",
    amount: 0,
    image: "",
    category: "AR/VR, AI"
  },
  {
    id: 12,
    title: "BIM 기반 스마트 유지보수 핵심기술 개발",
    description: "",
    start_date: "2017-00",
    end_date: "2020-00",
    funding_agency: "도시건축연구사업",
    amount: 0,
    image: "",
    category: "BIM"
  },
  {
    id: 13,
    title: "LG Display BIM PI Co-PI",
    description: "건설 ~ 운영 유지보수까지의 전체적인 업무 효율 향상을 위한 3D기반 통합 유지관리(O&M) 방안 및 프로세스 구축하였다.",
    start_date: "2016-00",
    end_date: "2016-00",
    funding_agency: "LG디스플레이",
    amount: 0,
    image: "completed_lgdisplay.jpg",
    category: "FAB, BIM"
  },
  {
    id: 14,
    title: "차세대 설계환경 대응 클라우드 기반 BIM 설계도구 개발 프로젝트",
    description: "",
    start_date: "2014-00",
    end_date: "2014-00",
    funding_agency: "국토교통부",
    amount: 0,
    image: "",
    category: "BIM"
  },
  {
    id: 15,
    title: "삼성전자 공장동 facility BIM Model 생성을 위한 laserScanning 프로젝트",
    description: "",
    start_date: "2014-00",
    end_date: "2014-00",
    funding_agency: "삼성전자",
    amount: 0,
    image: "",
    category: "FAB, BIM"
  },
  {
    id: 16,
    title: "리모델링을 위한 Hybrid Reality를 활용한 3D 현상정보 기반의 건설용 Retrofit 시스템 개발 프로젝트",
    description: "",
    start_date: "2014-00",
    end_date: "2015-00",
    funding_agency: "한국연구재단",
    amount: 0,
    image: "",
    category: "ㅇ"
  },
  {
    id: 17,
    title: "3차원 형상정보의 병합 및 Fitting과 Matching 기술 개발을 통한 건설 산업에서의 3차원 역설계 최적 기법 개발 프로젝트",
    description: "",
    start_date: "2013-00",
    end_date: "2014-00",
    funding_agency: "한국연구재단",
    amount: 0,
    image: "",
    category: "ㅇ"
  },
  {
    id: 18,
    title: "건설 기능등급제 체계 개선 연구용역",
    description: "기능등급제 현행 제도 타당성 분석, 해외 사례 분석을 통한 개선안 제시하였다.",
    start_date: "2023-10-01",
    end_date: "2024-11",
    funding_agency: "",
    amount: 0,
    image: "completed_gong.jpg",
    category: "제도/평가"
  },
  {
    id: 19,
    title: "인천구월 공공주택지구 및 검단일반산업단지 조성공사 사후용역",
    description: "인천구월 공공주택지구 및 검단일반산업단지 공사 계획 시 예상한 사업효과와 공사 완료 후의 실제 효과를 조사․분석하고, 사용자의 만족도 조사와 공사비․공사기간 등 건설공사에 대한 전반적인 평가를 시행하여 향후 유사한 건설공사 시 관련 자료로 활용하여 사업의 효율성을 도모하였다.",
    start_date: "2022-10",
    end_date: "2023-10",
    funding_agency: "",
    amount: 0,
    image: "completed_sahu1.jpg",
    category: "제도/평가"
  },
  {
    id: 20,
    title: "경기신용보증재단 사옥 건립사업 사후평가 용역",
    description: "경기신용보증재단 사옥 공사 계획 시 예상한 사업효과와 공사 완료 후의 실제 효과를 조사․분석하고, 사용자의 만족도 조사와 공사비․공사기간 등 건설공사에 대한 전반적인 평가를 시행하여 향후 유사한 건설공사 시 관련 자료로 활용하여 사업의 효율성을 도모하였다.",
    start_date: "2025-01",
    end_date: "2025-05",
    funding_agency: "경기신용보증재단",
    amount: 0,
    image: "completed_sahu2.jpg",
    category: "제도/평가"
  },
  {
    id: 21,
    title: "개방형BIM 기반의 기존건축물 유지관리 기반기술 개발",
    description: "IoT 센서, AI, AR, 스마트기기, BIM 기술을 융합한 지능형 유지관리 시스템을 개발하였다. 실시간 모니터링과 데이터 기반 분석을 통해 AR-BIM 기반 시각화, 이력관리 등으로 유지보수의 정확성과 효율을 높였다.",
    start_date: "2017-03",
    end_date: "2021-12",
    funding_agency: "",
    amount: 0,
    image: "completed_bim.jpg",
    category: "BIM, AR/VR"
  },
  {
    id: 22,
    title: "국내외 BIM 관련 대표 조직 및 기구의 운영체계 사례분석",
    description: "국내외 BIM 관련 주요 센터의 운영체계 및 수행업무를 조사하고, 주요 국가 별 R&D 관점 및 정책적 관점의 특화된 운영 전략을 분석하였다.",
    start_date: "2021-11",
    end_date: "2021-11",
    funding_agency: "",
    amount: 0,
    image: "completed_report_bim.jpg",
    category: "BIM, 제도/평가"
  },
  {
    id: 23,
    title: "삼성엔지니어링 대형 모듈 범용 기술 내재화 용역",
    description: "대형 철골 모듈화 기술동향, 정밀 시공, 측정방법 및 안전관리에 대한 기준을 사례분석하였으며, 모듈화 구조의 생산성 측정 지표 및 기준을 분석하여 Case Study 생산성 예측에 대한 측정 지표 기준을 수립하였다.",
    start_date: "2022-07",
    end_date: "2022-11",
    funding_agency: "아이엔지니어링",
    amount: 0,
    image: "completed_module.jpg",
    category: "FAB, OSC"
  }
];
/*
  {
    id: ,
    title: "",
    description: "",
    start_date: "20-",
    end_date: "20-",
    funding_agency: "",
    amount: 0,
    image: "",
    category: "ㅇ"
  },
*/