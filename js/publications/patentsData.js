const patentsData = [
  {
    title: "하자 탐지 시스템 및 이를 이용한 하자 탐지 방법",
    title_en: "",
    category: "특허", // "특허", or "S/W"
    inventors: "권순욱, 장영희, 이서준, 아크바 알리, 송진우, 홍정택, 최고은, 뇨로게 제임스 무고, 설준성, 손성일, 양상민",
    inventors_en: "Kwon, S.W., Chang, Y.H., Lee, S.J., Akbar, Ali., Song, J.W., Hong, J.T., Choi, G.E., Njoroge, J.M., Seol, J.S., Son, S.I., Yang, S.M.",
    patent_number: "KR10-2024-0062392",
    filing_date: "2024-05-13",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 설치 및 시공된 콘크리트 구조물을 탐색하는 무인 로봇 개발로 현장의 구조를 인식하고 콘크리트 균열을 탐색해 균열 맵을 구축하고, 균열 맵을 기반으로 한 자동 경로 설정 기술을 통해 현장의 유지 보수를 보조하고 보수가 필요한 균열을 AR을 통해 시각화해 효율적인 시공 품질 관리 업무를 지원한다. ",
    abstract_en: "The invention relates to the development of an unmanned robot for inspecting installed and constructed concrete structures. The robot recognizes the structure of the site, detects cracks in the concrete to build a crack map, and supports maintenance work through an automatic path planning technology based on the crack map. Furthermore, it visualizes cracks requiring repair through augmented reality (AR), thereby assisting efficient construction quality management."
  },
  {
    title: "건설현장 3D 지형정보 점군 데이터 분할을 통한 위치정보 Mapping 및 시각화 측면의 데이터 최적화 방법",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 홍정택, 송진우, 장영희, 이서준, 최고은, 설준성, 손성일",
    inventors_en: "Kwon, S.W., Hong, J.T., Song, J.W., Chang, Y.H., Lee, S.J., Choi, G.E., Seol, J.S., Son, S.I.",
    patent_number: "KR10-2023-0182780",
    filing_date: "2023-12-15",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 레이저 스캐닝 및 Photogrammetry 등 스캐닝 기술을 기반으로 생성된 건설 현장의 3D 지형정보 점군 데이터를 최적화하여 시각화하는 시스템 및 방법에 관한 것이다. 본 발명은 점군 데이터를 그리드 형태로 분할하고, 각 그리드에 위치정보를 매핑하여 디지털 맵을 구성함으로써, 건설현장에서 작업자 및 관리자가 디바이스를 통해 실시간으로 해당 위치의 3D 지형 정보를 확인할 수 있도록 한다. 또한, 본 발명은 대용량 점군 데이터의 효율적 처리를 통해 현장 디바이스에서의 데이터 활용도를 향상시켜, 건설 현장의 디지털 기반 업무 효율성을 제고할 수 있다.",
    abstract_en: "This invention provides a system and method for optimizing and visualizing 3D terrain point cloud data at construction sites using scanning technologies such as laser scanning and photogrammetry. By dividing the data into grids and mapping location information, it enables workers and managers to view real-time digital maps of their current location through field devices, improving efficiency in large-scale data usage."
  },
  {
    title: "현장 관리자 위치 정보 기반 이슈 발생 위치에 따른 건설 현장 상황 이슈 리포팅, 공유 및 이력 관리 시스템",
    title_en: "",
    category: "특허", // "특허", or "S/W"
    inventors: "권순욱, 홍정택, 송진우, 아크바 알리",
    inventors_en: "Kwon, S.W., Hong, J.T., Song, J.W., Akbar, Ali.",
    patent_number: "KR10-2023-0172335",
    filing_date: "2023-12-01",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 건설 현장의 AR 기반 현장정보 시각화 장비를 활용하여 사용자가 확인한 다양한 이슈를 해당 위치 정보에 기반해 3D 디지털 맵 상에 실시간으로 매핑하고 시각화하는 기술에 관한 것이다. 본 발명은 이슈 보고자의 보고서 작성을 위한 각종 이슈 정보를 데이터베이스에 저장함으로써 문서 작업 시간을 단축하고, 현장 관리자 및 노동자에게 직관적이고 신속한 이슈 정보 제공 및 공유가 가능하도록 구성된다.",
    abstract_en: "This invention relates to a system and method for real-time mapping and visualization of various issues identified by users on a 3D digital map of a construction site using AR-based field information visualization devices. The invention stores issue-related data in a database to reduce the time required for report generation by the issue reporter. Furthermore, it enables site managers and workers to intuitively and promptly access and share issue information based on the 3D digital map."
  },
  {
    title: "크레인 인양물 충돌방지를 위한 컴퓨터 비전 및 거리측정 센서 기반 현장 작업자 및 장애물 감지 시스템",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 용 익 퐁, 이규협, 장영희, 이서준, 홍정택",
    inventors_en: "Kwon, S.W., Yong, I.P., Lee, G.H., Chang, Y.H., Lee, S.J., Hong, J.T.",
    patent_number: "KR10-2022-0083764",
    filing_date: "2022-07-07",
    issue_date: "2025-02-17",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 컴퓨터 비전 및 센서 융합 기술을 활용하여 작업자 및 장애물의 존재를 정밀하게 탐지함으로써, 효과적인 충돌 방지를 가능하게 하는 시스템 및 방법에 관한 것이다. 본 발명은 IP 카메라 기반 객체 인식 기술과 초음파 센서를 함께 활용하여 탐지 사각지대를 최소화하고, 작업자의 접근 여부를 정확하게 감지할 수 있도록 구성된다.",
    abstract_en: "This invention provides a system and method for optimizing and visualizing 3D terrain point cloud data at construction sites using scanning technologies such as laser scanning and photogrammetry. By dividing the data into grids and mapping location information, it enables workers and managers to view real-time digital maps of their current location through field devices, improving efficiency in large-scale data usage."
  },
  {
    title: "리모델링 공사 구역내 장비/장치 설치 공간 자동 확인 시스템",
    title_en: "",
    category: "특허", // "특허", or "S/W"
    inventors: "권순욱, 김동현, 이송이, 고태규",
    inventors_en: "Kwon, S.W., Kim, D.H., Lee, S.Y., Ko, T.G.",
    patent_number: "KR10-2017-0074219",
    filing_date: "2017-06-13",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 리모델링 공사의 장비 및 장치 배치를 위한 공간 확보 방안에 관한 것으로, 레이저 스캐닝 기술을 활용하여 3차원 형상정보를 획득하고 이를 기반으로 3차원 공간 모델을 구축하여 알고리즘에 적용하는 기술에 관한 것이다. 본 발명은 복잡한 구조로 인해 장비/설비 배치가 어려운 리모델링 현장에서 공간 효율성을 높이며, 도면과 실제 현장 간의 불일치로 인한 문제를 해결하고자 한다. 획득한 3차원 형상정보를 옥트리 알고리즘으로 단순화하고, 대상 장치와 공간 간 중첩 여부를 분석하여 장치 설치 가능 공간을 자동으로 확인한다. 또한 알고리즘은 대상 공간 및 장비의 형상을 단순화하고, 두 정보를 비교·매칭하여 시각적 형태(txt 및 Visual)로 확인 가능하도록 구현된다.",
    abstract_en: "This invention relates to a system for automatically identifying installation spaces for equipment and devices within remodeling construction zones. It utilizes laser scanning to acquire 3D shape data and constructs a three-dimensional spatial model for algorithmic processing. Addressing spatial layout challenges in complex remodeling sites and discrepancies between actual conditions and drawings, the invention simplifies 3D geometry using an octree algorithm and determines overlap between equipment and interior space to verify installation feasibility. The algorithm categorizes simplified shapes of the indoor space and devices, performs spatial matching, and provides both textual and visual outputs to support layout decision-making."
  },
  {
    title: "가상화 리소스 할당 모듈",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 이규협, 신중환, 정수완",
    inventors_en: "Kwon, S.W., Lee, G.H., Shin, J.H., Jung, S.W.",
    patent_number: "KR10-2016-0126022",
    filing_date: "2016-09-30",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 Virtual Desktop Infrastructure(VDI) 기반의 가상화 컴퓨팅 환경에서 사용자별로 등급을 구분하여 리소스를 효율적으로 분배할 수 있는 리소스 할당 모듈에 관한 것이다. 본 발명은 기존의 n분의 1 방식 또는 기준 없는 리소스 분배 방식의 한계를 극복하고, 사용자의 등급에 따라 차등적으로 서버 자원을 배분할 수 있도록 하여 가상화 환경의 효율성을 극대화한다. 또한, BIM 사용자 환경에 적합하게 설계되어 복잡한 설정 없이 간단한 조작만으로도 서버 자원 할당이 가능하도록 구현된다.",
    abstract_en: "This invention relates to a virtualization resource allocation module within a Virtual Desktop Infrastructure (VDI) environment that enables efficient distribution of computing resources based on user classification. Unlike conventional methods that allocate resources equally or arbitrarily, the proposed module categorizes users by levels and distributes resources accordingly, enhancing overall system efficiency. Additionally, it is designed for easy integration into BIM user environments, allowing fast and simple server assignment with minimal configuration."
  },
  {
    title: "건설용 리프트 수직 운행 구간 구획 설정용 운행기록 기반 시뮬레이터",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 문대윤, 신중환, 정수완, 김동현, 이규협, 최규성, 고형렬",
    inventors_en: "Kwon, S.W., Moon, D.Y., Shin, J.H., Jung, S.W., Kim, D.H., Lee, G.H., Choi, G.S., Ko, H.R.",
    patent_number: "KR10-2015-0134678",
    filing_date: "2015-09-23",
    issue_date: "2017-12-20",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 기존에 시행되고 있는 건설용 리프트의 운행 계획에 대한 문제 개선과 운행 효율 증대를 목적으로 하는 기술에 관한 것이다. 특히 본 발명은 초고층 건설현장에서 마감 자재 운송을 위한 필수 수단인 건설용 리프트의 수직 운행 구간을 운행 기록 기반으로 분석하여, 운행 계획을 효율적으로 수립할 수 있도록 하는 시뮬레이션 시스템에 관한 것이다.",
    abstract_en: "This invention relates to a simulator system designed to improve the operation planning and efficiency of construction lifts, particularly in high-rise construction sites. By analyzing historical lift operation records, the invention enables optimized planning of vertical movement sections for transporting finishing materials, which are critical in supertall building construction."
  },
  {
    title: "NFC 기술을 이용한 Android 기반 스마트 플랜트 시공유지관리 플랫폼",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱",
    inventors_en: "Kwon, S.W.",
    patent_number: "KR10-2014-0066051",
    filing_date: "2014-05-30",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 NFC 기반 플랜트 관리 시스템에 관한 것이다. 보다 구체적으로는 NFC 태그를 이용하여 대규모 플랜트 현장을 손쉽게 관리할 수 있는 NFC 기반 플랜트 관리 시스템에 관한 것이다.",
    abstract_en: "This invention relates to an NFC-based plant management system. More specifically, it provides a system that enables easy management of large-scale plant sites using NFC tags within an Android-based platform."
  },
  {
    title: "건설 부재형 NFC(Near Field Communication:근거리통신) Tag",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 문대윤, 이상설",
    inventors_en: "Kwon, S.W., Moon, D.Y., Lee, S.S.",
    patent_number: "KR10-2013-0046473",
    filing_date: "2013-04-26",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 외부 환경(충격, 열, 금속 매질, 부착성)에 강한 건설 부재형 NFC 태그에 관한 것이다. 첫째, Label 형태의 NFC 태그에 이격재를 부착하여 메탈 태그화하고, 이격재의 형태에 따라 매질 부착 성능을 강화한다. 둘째, Label 컨버팅 시 인레이 부분을 외부 측으로 보호되도록 구성한다. 셋째, 방수 가능한 원단을 사용하여 컨버팅하며, 넷째, 방수 가능한 접착제를 사용함으로써 혹독한 현장 환경에서도 안정적으로 사용 가능한 NFC 태그를 제공한다.",
    abstract_en: "This invention relates to a construction component-type NFC tag that is highly resistant to external environments such as impact, heat, metallic mediums, and adhesion issues. First, a metal-compatible tag is created by attaching a spacer to a label-type NFC tag, enhancing adhesion performance depending on the spacer's structure. Second, during label conversion, the inlay is protected on the outer side. Third, waterproof fabric is used for conversion, and fourth, waterproof adhesive is applied, enabling robust performance in harsh construction environments."
  },
  {
    title: "증강현실기법을 이용한 시공관리 방법과 이를 실행하기 위한 프로그램이 기록된 기록매체",
    title_en: "Method For Managing Construction Using Argumented Reality And Computer Readable Recording Medium On Which Program For Executing",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 문대윤, 이상설",
    inventors_en: "Kwon, S.W., Moon, D.Y., Lee, S.S.",
    patent_number: "KR10-2013-0003863",
    filing_date: "2013-01-14",
    issue_date: "2014-09-22",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 복잡한 구조물 도면을 쉽게 이해하고 시공상의 결함을 식별할 수 있도록 하는 시공관리 방법에 관한 것이다. 또한, 시공 순서를 직관적으로 이해할 수 있는 절차를 제공하며, 구조물 시공에 필요한 자재 및 수량을 효율적으로 파악할 수 있도록 하는 기술을 포함한다.",
    abstract_en: "This invention provides a construction management method that enables intuitive understanding of complex structural drawings and identification of construction defects. It also offers a way to clearly grasp construction sequences and effectively determine the materials and quantities required for structural construction using augmented reality techniques."
  },
  {
    title: "건축분야의 재시공 및 품질관리를 위한 역설계 프로세스 방법론",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 이상설, 이미나, 문대윤",
    inventors_en: "Kwon, S.W., Lee, S.S., Lee, M.N., Moon, D.Y.",
    patent_number: "KR10-2012-0133698",
    filing_date: "2012-11-23",
    issue_date: "2014-04-29",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 건축분야의 재시공 및 품질관리를 위한 역설계 프로세스 방법론에 관한 것이다. 현재 건축 시공현장에서는 다양한 요인으로 인해 재시공이 빈번히 발생하고 있으며, 이에 따라 생산성이 저하되고 있는 실정이다. 본 발명은 역설계 프로세스 방법론을 정의함으로써 재시공 발생률을 감소시키고, 궁극적으로 건축분야의 전반적인 생산성 향상을 도모하고자 한다.",
    abstract_en: "This invention relates to a reverse engineering process methodology aimed at reducing rework and enhancing quality management in the construction field. Rework frequently occurs at construction sites due to various factors, leading to decreased productivity. By defining a structured reverse engineering methodology, this invention seeks to minimize the rework rate and ultimately improve productivity in architectural construction."
  },
  {
    title: "변위센서를 이용한 건설 리프트 카 정지 모니터링 시스템",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 이종현",
    inventors_en: "Kwon, S.W., Lee, J.H.",
    patent_number: "KR10-2011-0122942",
    filing_date: "2011-11-23",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 건설 현장용 리프트의 정지 모니터링 장치에 관한 것이다. 보다 구체적으로는 리프트와 건물 사이의 거리를 측정하여 리프트의 정지 포인트를 인식하고 이를 기반으로 정지시키는 건설 현장용 리프트 정지 모니터링 시스템에 관한 것이다.",
    abstract_en: "This invention relates to a stop monitoring system for construction site lifts. More specifically, it measures the distance between the lift and the building to identify the lift's stop point and controls the lift to stop accordingly at construction sites."
  },
  {
    title: "CCTV를 이용한 맞춤형 개인안전보호 시스템",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 임정아",
    inventors_en: "Kwon, S.W., Lim, J.A.",
    patent_number: "KR10-2010-0100159",
    filing_date: "2010-10-14",
    issue_date: "2012-11-02",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 CCTV를 이용한 안전감시 시스템 및 이를 이용한 안전감시 서비스 제공방법에 관한 것이다. 보다 구체적으로는, 안전감시 서비스를 신청한 사용자가 일정 비용을 지불하고 감시가 필요한 구간 및 시간대를 선택함으로써, 각 개인에게 맞춤형으로 제공되는 안전감시 서비스를 실현할 수 있는 시스템 및 그 방법에 관한 것이다.",
    abstract_en: "This invention relates to a safety monitoring system using CCTV and a service method employing the same. More specifically, it allows users to pay a fee and select specific zones and time periods for monitoring, enabling the provision of personalized safety monitoring services tailored to each individual's needs."
  },
  {
    title: "압전 센서로 생성된 에너지를 이용한 버스 내외부 광고 시스템",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 임정아",
    inventors_en: "Kwon, S.W., Lim, J.A.",
    patent_number: "KR10-2010-0086850",
    filing_date: "2010-09-06",
    issue_date: "2012-02-29",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 압전 소자에 의해 생성된 에너지를 활용하여 대중교통 수단, 특히 버스의 내부 또는 외부에 설치된 광고 디스플레이 장치를 구동시키는 시스템 및 방법에 관한 것이다.",
    abstract_en: "This invention relates to a system and method for driving advertisement display devices installed inside or outside public transportation vehicles, specifically buses, using energy generated from piezoelectric elements."
  },
  {
    title: "배구공의 접촉 표시장치",
    title_en: "Apparatus for displaying touch of volley ball",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 윤준호",
    inventors_en: "Kwon, S.W., Yoon, J.H.",
    patent_number: "KR10-2010-0064023",
    filing_date: "2010-07-02",
    issue_date: "2012-07-31",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 배구 경기 중 선수의 손가락 등 신체 부위가 배구공에 접촉하였을 경우 이를 표시하는 배구공의 접촉 표시장치에 관한 것이다. 배구공 내부에 압력센서를 설치하여 표피의 압력을 검출하고, 복수의 표시램프를 배구공 내에 설치하여, 압력의 변화가 설정된 임계값 이상일 경우 표시램프를 통해 접촉 여부를 외부로 시각적으로 표시한다.",
    abstract_en: "This invention relates to an apparatus for indicating physical contact with a volleyball, such as by a player's finger, during a game. Pressure sensors installed inside the volleyball detect surface pressure, and multiple indicator lamps are also embedded. When the detected pressure exceeds a predefined threshold, a drive circuit activates the lamps, allowing light to be emitted through external holes in the ball to visibly indicate the point of contact."
  },
  {
    title: "다단 분리형 담배",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 김호기",
    inventors_en: "Kwon, S.W., Kim, H.G.",
    patent_number: "KR10-2009-0099190",
    filing_date: "2009-10-19",
    issue_date: "2012-05-11",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 다단 분리형 담배에 관한 것으로, 연초부와 그 일단에 위치한 필터부를 포함하는 궐련 담배에 있어서, 연속적인 연소를 방지하기 위해 연초부가 길이방향으로 구획되며, 그 사이에 난연성 필터가 삽입된 구조를 제공한다. 이를 통해 화재 발생 위험을 줄이고, 흡연자의 흡연 욕구를 감소시켜 흡연량 조절에 도움을 줄 수 있다.",
    abstract_en: "This invention provides a multi-segment separable cigarette comprising a tobacco portion and a filter portion located at one end. To prevent continuous combustion, the tobacco portion is partitioned longitudinally with flame-retardant filters inserted between segments. This structure reduces the risk of fire, curbs the smoker's desire to continue smoking, and supports systematic control of smoking habits."
  },
  {
    title: "RFID를 이용한 출입통제 시스템의 출입통제 장치",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 진상윤",
    inventors_en: "Kwon, S.W., Jin, S.Y.",
    patent_number: "KR10-2009-0039425",
    filing_date: "2009-05-06",
    issue_date: "2009-09-10",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 RFID를 이용한 출입통제 시스템의 출입통제 장치에 관한 것으로, 보다 구체적으로는 무선 센서 네트워크(Wireless Sensor Network) 및 RFID(Radio Frequency Identification) 기술을 활용하여 건설 현장의 출입 차량 및 적재 물품을 통합적으로 관리함으로써 물류 관리 프로세스의 효율성을 제고할 수 있는 출입통제 장치에 관한 것이다.",
    abstract_en: "This invention relates to an access control device for an RFID-based access control system. More specifically, it utilizes ubiquitous technologies such as Wireless Sensor Networks and Radio Frequency Identification (RFID) to integrally manage vehicles entering construction sites and the goods loaded on them, thereby improving the efficiency of logistics management processes."
  },
  {
    title: "호이스트의 수직 양중 자동 관리시스템용 RFID리딩 툴킷",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 진상윤",
    inventors_en: "Kwon, S.W., Jin, S.Y.",
    patent_number: "KR10-2009-0039420",
    filing_date: "2009-05-06",
    issue_date: "2009-09-10",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 호이스트의 수직 양중 자동 관리 시스템용 RFID 리딩 툴킷에 관한 것이다. 본 발명은 호이스트 내부에 간단히 설치되어, 수직 양중되는 자재 및 부재를 효율적으로 관리할 수 있으며, 하나의 몸체에 RFID 장치가 일체형으로 구성되어 설치와 운용이 용이한 툴킷 형식의 시스템을 제공한다.",
    abstract_en: "This invention relates to an RFID reading toolkit for an automatic vertical hoisting management system of a hoist. The toolkit can be easily installed inside the hoist to manage vertically lifted materials and components, and is designed as an integrated unit containing all necessary RFID devices, enabling efficient installation and operation."
  },
  {
    title: "지능형 팔레트 시스템용 지능형 무버",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 진상윤",
    inventors_en: "Kwon, S.W., Jin, S.Y.",
    patent_number: "KR10-2009-0039427",
    filing_date: "2009-05-06",
    issue_date: "2009-08-03",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 지능형 팔레트 시스템용 지능형 무버에 관한 것으로, 센서 네트워크(Wireless Sensor Network) 및 RFID(Radio Frequency Identification) 기술을 활용하여 자재 생산 공장과 건설 현장에서 자재의 재고, 적재, 입출고, 운반, 양중, 적치 관리의 효율을 높이고, 공사 참여자 간 자재 정보를 실시간으로 공유할 수 있도록 구성된다. 특히, 팔레트에 적재된 물품에 대해 무선 인식이 효율적으로 이루어질 수 있도록 설계된 지능형 무버를 제공한다.",
    abstract_en: "This invention relates to an intelligent mover for intelligent pallet systems. Utilizing ubiquitous technologies such as Wireless Sensor Networks and RFID, it improves inventory, loading, inbound/outbound, transport, hoisting, and stacking management of materials in factories and construction sites. The system also enables real-time sharing of material information among construction participants, and is specifically designed to allow efficient wireless recognition of goods loaded on pallets."
  },
  {
    title: "지능형 트레일러",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "진상윤, 김예상, 권순욱, 윤수원, 이남수, 송제홍, 최철호, 이주형",
    inventors_en: "Jin, S.Y., Kim, Y.S., Kwon, S.W., Yoon, S.W., Lee, N.S., Song, J.H., Choi, C.H., Lee, J.H.",
    patent_number: "KR10-2007-0045675",
    filing_date: "2007-05-10",
    issue_date: "2008-03-12",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 지능형 트레일러 시스템에 관한 것으로, 무선 센서 네트워크(Wireless Sensor Network) 및 RFID(Radio Frequency Identification) 기술을 기반으로 자재 생산 공장에서 상차되는 단계부터 건설 현장에서 하역되는 단계까지의 물류 관리 자동화 시스템을 구현하며, 이 자동화 시스템을 효과적으로 지원하는 지능형 트레일러를 제공한다.",
    abstract_en: "This invention relates to an intelligent trailer system based on ubiquitous technologies including Wireless Sensor Networks and RFID. It automates logistics management from the loading stage at the material production plant to the unloading stage at the construction site, and provides an intelligent trailer designed to support the implemented automation system effectively."
  },
  {
    title: "지능형 호이스트를 이용한 자재／부재의 수직 양중 관리자동화 방법",
    title_en: "",
    category:  "특허", // "특허", or "S/W"
    inventors: "권순욱, 김예상, 진상윤, 윤수원, 송제홍, 이남수, 최철호, 이주형",
    inventors_en: "Kwon, S.W., Kim, Y.S., Jin, S.Y., Yoon, S.W., Song, J.H., Lee, N.S., Choi, C.H., Lee, J.H.",
    patent_number: "KR10-2007-0045589",
    filing_date: "2007-05-10",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "본 발명은 지능형 호이스트에 관한 것으로, 더욱 상세하게는 지능형 호이스트를 이용하여 호이스트에 적재되는 건설 자재 또는 부재를 인지하고, 인지된 자재/부재가 양중 계획에 따라 지정된 층으로 운반되었는지 여부를 모니터링 및 관리할 수 있는 수직 양중 관리 자동화 방법에 관한 것이다.",
    abstract_en: "This invention relates to an intelligent hoist system. More specifically, it provides a method for automating vertical hoisting management by recognizing construction materials or components loaded into the hoist and monitoring whether they have been transported to the designated floor according to a hoisting plan."
  },
  {
    title: "딥러닝 기반 건설현장 가설기자재 카운팅 클라우드",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 송진우, 이서준, 홍정택, 아크바 알리, 장영희, 최고은, 뇨로게 제임스 무고, 설준성, 손성일, 양상민",
    inventors_en: "Kwon, S.W., Song, J.W., Lee, S.J., Hong, J.T., Akbar, Ali., Chang, Y.H., Choi, G.E., Njoroge, J.M., Seol, J.S., Son, S.I., Yang, S.M.",
    patent_number: "C-2024-048448",
    filing_date: "2024-11-27",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "임시 구조물 스마트 안전확보 기술 개발",
    abstract_en: ""
  },
  {
    title: "건설 현장 디지털 컨텐츠 시각화를 위한 RTK GPS(알티케이 지피에스) 데이터 기반 디바이스 위치 추정 모듈",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 송진우, 홍정택, 손성일, 양상민",
    inventors_en: "Kwon, S.W., Song, J.W., Hong, J.T., Son, S.I., Yang, S.M.",
    patent_number: "",
    filing_date: "2024-08-05",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "건설현장 정보 수집 및 분석 기술 개발",
    abstract_en: ""
  },
  {
    title: "LiDAR(라이다) 센서 기반 공동주택 시공현장 공정 현황 정보 획득 자동화를 위한 데이터 처리 모듈",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 송진우, 홍정택, 이서준, 장영희, 최고은, 설준성, 손성일, 양상민",
    inventors_en: "Kwon, S.W., Song, J.W., Hong, J.T., Lee, S.J., Chang, Y.H., Choi, G.E., Seol, J.S., Son, S.I., Yang, S.M.",
    patent_number: "",
    filing_date: "2024-01-18",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "공동주택 정밀시공과 품질 확보를 위한 AI-powered XR 기반 시공현황관리 작업환경 플랫폼 및 메타버스 기반 협업 공유기술 개발",
    abstract_en: ""
  },
  {
    title: "포인트 클라우드 데이터 분할 로딩 데이터 처리 모듈",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 이규협, 송진우, 홍정택, 이서준, 장영희, 최고은, 아크바 알리, 뇨로게 제임스 무고, 설준성",
    inventors_en: "Kwon, S.W., Lee, G.H., Song, J.W., Hong, J.T., Lee, S.J., Chang, Y.H., Choi, G.E., Akbar, Ali., Njoroge, J.M., Seol, J.S.",
    patent_number: "C-2023-038107",
    filing_date: "2023-08-28",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "건설현장 정보 수집 및 분석 기술 개발",
    abstract_en: ""
  },
  {
    title: "웹서버 데이터베이스 기반 임시구조물 데이터 시각화, 모니터링 및 예측 프로그램",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 이규협, 송진우, 홍정택, 이서준, 장영희, 최고은, 아크바 알리, 뇨로게 제임스 무고, 설준성",
    inventors_en: "Kwon, S.W., Lee, G.H., Song, J.W., Hong, J.T., Lee, S.J., Chang, Y.H., Choi, G.E., Akbar, Ali., Njoroge, J.M., Seol, J.S.",
    patent_number: "C-2023-030438",
    filing_date: "2023-07-19",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "임시 구조물 스마트 안전확보 기술 개발",
    abstract_en: ""
  },
  {
    title: "안드로이드 디바이스 기반 작업자 안전관리 및 커뮤니케이션 프로그램",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 이규협, 장영희, 용 익 퐁, 최고은",
    inventors_en: "Kwon, S.W., Lee, G.H., Chang, Y.H., Yong, I.P., Choi, G.E.",
    patent_number: "C-2022-044161",
    filing_date: "2022-11-07",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "OSC 기반 PC 공동주택 스마트 현장관리 기술 개발",
    abstract_en: ""
  },
  {
    title: "RTK(알티케이) GPS(지피에스) 데이터 기반 3D 디지털 맵 AR(에이알) 시각화 어플리케이션",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 송진우, 홍정택, 이서준, 장영희, 최고은, 아크바 알리",
    inventors_en: "Kwon, S.W., Song, J.W., Hong, J.T., Lee, S.J., Chang, Y.H., Choi, G.E., Akbar, Ali.",
    patent_number: "C-2022-044113",
    filing_date: "2022-11-07",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "건설현장 정보 수집 및 분석 기술 개발",
    abstract_en: ""
  },
  {
    title: "안드로이드 디바이스 기반 컴퓨터 비전을 활용한 프리캐스트 콘크리트(PC) 부재 표면 균열 탐지 프로그램",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 송진우, 이서준, 홍정택, 장영희, 최고은",
    inventors_en: "Kwon, S.W., Song, J.W., Lee, S.J., Hong, J.T., Chang, Y.H., Choi, G.E.",
    patent_number: "C-2021-043394",
    filing_date: "2021-10-28",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "OSC 기반 PC 공동주택 스마트 현장관리 기술 개발",
    abstract_en: ""
  },
  {
    title: "크레인 인양물 충돌방지를 위한 컴퓨터 비전 및 거리측정 센서 기반 현장 작업자 및 장애물 감지 프로그램",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 이규협, 장영희, 용 익 퐁",
    inventors_en: "Kwon, S.W., Lee, G.H., Chang, Y.H., Yong, I.P.",
    patent_number: "C-2021-043393",
    filing_date: "2021-10-28",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "OSC 기반 PC 공동주택 스마트 현장관리 기술 개발",
    abstract_en: ""
  },
  {
    title: "지면인식 및 위치추정기반 포인트클라우드데이터 시각화 모듈",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 이규협, 송진우, 홍정택, 이서준, 장영희, 최고은",
    inventors_en: "Kwon, S.W., Lee, G.H., Song, J.W., Hong, J.T., Lee, S.J., Chang, Y.H., Choi, G.E.",
    patent_number: "C-2021-040255",
    filing_date: "2021-10-13",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "건설현장 정보 수집 및 분석 기술 개발",
    abstract_en: ""
  },
  {
    title: "BiM(빔) 모델 형상정보 가시화 및 증강현실 기반 유지보수 어플리케이션",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 송진우, 홍정택, 이서준, 장영희, 박지환",
    inventors_en: "Kwon, S.W., Song, J.W., Hong, J.T., Lee, S.J., Chang, Y.H., Park, J.H.",
    patent_number: "C-2021-035775",
    filing_date: "2021-09-07",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "BIM 기반 스마트 유지보수 핵심기술 개발",
    abstract_en: ""
  },
  {
    title: "Point Cloud(포인트클라우드) 데이터 최적화 및 뷰어 어플리케이션",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 문대윤, 이규협, 송진우, 홍정택, 이서준, 장영희, 정민경",
    inventors_en: "Kwon, S.W., Moon, D.Y., Lee, G.H., Song, J.W., Hong, J.T., Lee, S.J., Chang, Y.H., Jung, M.K.",
    patent_number: "C-2021-009898",
    filing_date: "2021-02-22",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "건설현장 정보 수집 및 분석 기술 개발",
    abstract_en: ""
  },
  {
    title: "플랜트 작업자용 디바이스 제어 모듈",
    title_en: "",
    category: "S/W", // "특허", or "S/W"
    inventors: "권순욱, 정수완, 문대윤, 이규협, 박지환, 송진우, 이서준, 정민경",
    inventors_en: "Kwon, S.W., Jung, S.W., Moon, D.Y., Lee, G.H., Park, J.H., Song, J.W., Lee, S.J., Jung, M.K.",
    patent_number: "C-2019-033531",
    filing_date: "2019-11-14",
    issue_date: "",
    assignee: "성균관대학교 산학협력단",
    assignee_en: "Sungkyunkwan University",
    country: "대한민국 (Korea)",
    abstract: "ACR 기반의 플랜트 시공/유지관리를 위한 스마트 웨어러블 디바이스용 시스템 개발",
    abstract_en: ""
  }
];

