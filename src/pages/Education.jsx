import { useRef } from 'react'
import './Education.css'
import successionbox1 from '../assets/successionbox1.svg'
import successionbox2 from '../assets/successionbox2.svg'
import successionbox3 from '../assets/successionbox3.svg'
import successionbox4 from '../assets/successionbox4.svg'
import chevronRight from '../assets/chevron-right.svg'
import successionSection1 from '../assets/successionSection1.png'
import successionSection2 from '../assets/successionSection2.png'
import successionSection3_1 from '../assets/successionSection3-1.png'
import successionSection3_2 from '../assets/successionSection3-2.png'
import successionSection4_1 from '../assets/successionSection4-1.png'
import successionSection4_2 from '../assets/successionSection4-2.png'

function Education() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const courseBoxes = [
    {
      id: 1,
      title: '핵심인재 개발단계',
      ref: section1Ref,
      sectionTitle: '핵심인재 개발단계',
      description: '리더십 개발 단계에 있어 육성 프로그램은 現 Level의 수행관점과 상위 Level 수행을 위한 Qualification 측면에서 운영이 필요함',
      image: successionbox1,
      sectionImages: [{ image: successionSection1, description: null }]
    },
    {
      id: 2,
      title: '핵심인재 육성체계',
      ref: section2Ref,
      sectionTitle: '핵심인재 육성체계',
      description: '핵심인재 육성체계는 총 2개의 Track으로 되어있으며 현 Level 수행 및 상위 Level로의 성장 관점에서 각각 직급/직책 역량강화 Track과 차세대 리더십 육성 Track으로 구분됨',
      image: successionbox2,
      sectionImages: [{ image: successionSection2, description: null }]
    },
    {
      id: 3,
      title: 'GBS',
      ref: section3Ref,
      sectionTitle: 'GBS(Greenlight Business School)',
      description: '전략 실행 주체로서의 팀원 경영관리역량 제고를 위해 일반 MBA형식의 Business Course를 개설하고,  전략 수립 주체로서의 팀장 전략경영 역량 제고를 위해 전략특화 MBA 형식의 Strategy Course를 개설함',
      image: successionbox3,
      sectionImages: [
        {
          image: successionSection3_1,
          description: '전략 실행 주체로서의 팀원 경영관리역량 제고를 위해 일반 MBA형식의 Business Course를 개설하고,  전략 수립 주체로서의 팀장 전략경영 역량 제고를 위해 전략특화 MBA 형식의 Strategy Course를 개설함'
        },
        {
          image: successionSection3_2,
          description: 'MBA 고급과정으로 과목 또는 사업부문(BU)間 Contextual Thinking을 제고하기 위하여 다수의 Cross Functional Issue Case Study를 통해 사업전체의 Biz. Insight를 제고함'
        }
      ]
    },
    {
      id: 4,
      title: 'GSS',
      ref: section4Ref,
      sectionTitle: 'GSS(Greenlight Succession School)',
      description: 'GSS는 직책자의 차세대 리더십 육성과정으로 기존의 전형적 집체교육 방식을 벗어나 육성역량의 확인, 육성 Intervention실시 및 결과의 제도 연계 등 리더십 개발 관점 Process로 설계됨',
      image: successionbox4,
      sectionImages: [
        {
          image: successionSection4_1,
          description: 'GSS는 직책자의 차세대 리더십 육성과정으로 기존의 전형적 집체교육 방식을 벗어나 육성역량의 확인, 육성 Intervention실시 및 결과의 제도 연계 등 리더십 개발 관점 Process로 설계됨'
        },
        {
          image: successionSection4_2,
          description: '개인별 연구과제 수행 방법론은 Level별 Business Issue에 맞는 문제해결 프로세스로 세분화하여 접근함'
        }
      ]
    }
  ]

  return (
    <div className="education">
      {/* 최상단 타이틀 섹션 */}
      <section className="education-header">
        <div className="education-header-container">
          <h1 className="education-main-title">Succession Course</h1>
          <p className="education-sub-title">
            그린 라이트의 핵심 인재 육성 과정을 경험해보세요
          </p>
        </div>
      </section>

      {/* 4개 박스 섹션 */}
      <section className="course-boxes-section">
        <div className="course-boxes-container">
          {courseBoxes.map((box) => (
            <div key={box.id} className="course-box">
              <div className="course-box-background">
                <img src={box.image} alt={box.title} className="course-box-bg-image" />
              </div>
              <div className="course-box-content">
                <h3 className="course-box-title">{box.title}</h3>
                <button
                  className="course-box-arrow-btn"
                  onClick={() => scrollToSection(box.ref)}
                  aria-label={`${box.title} 섹션으로 이동`}
                >
                  <img src={chevronRight} alt="이동" className="course-box-arrow-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 상세 섹션들 */}
      {courseBoxes.map((box) => (
        <section
          key={box.id}
          ref={box.ref}
          className="course-detail-section"
        >
          <div className="course-detail-container">
            <h2 className="course-detail-title">{box.sectionTitle}</h2>
            {box.sectionImages.length === 1 && !box.sectionImages[0].description ? (
              <>
                <p className="course-detail-description">{box.description}</p>
                <div className="course-detail-image">
                  <img 
                    src={box.sectionImages[0].image} 
                    alt={box.sectionTitle} 
                    className="course-detail-img single"
                  />
                </div>
              </>
            ) : (
              <div className="course-detail-images-vertical">
                {box.sectionImages.map((item, idx) => (
                  <div key={idx} className="course-detail-item">
                    <p className="course-detail-item-description">{item.description}</p>
                    <div className="course-detail-image">
                      <img 
                        src={item.image} 
                        alt={`${box.sectionTitle} ${idx + 1}`} 
                        className="course-detail-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Education
