import './Philosophy.css'
import logoImage from '../assets/logo.svg'

function Philosophy() {
  const philosophyBoxes = [
    {
      index: 1,
      title: '진정성',
      description: '일관된 진심과 신뢰를 바탕으로 고객, 파트너, 구성원 모두와 건강한 관계를 만들어 갑니다.'
    },
    {
      index: 2,
      title: '주도적 인재 육성',
      description: '우리는 단순한 지식 전달을 넘어서, 주도적으로 성장하는 인재를 육성합니다. 사업 전반을 이해하고 스스로 판단하고 결정할 수 있는 역량 있는 사람을 지향합니다.'
    },
    {
      index: 3,
      title: '상생',
      description: '우리는 Greenlight의 이익보다 고객과 파트너의 이익을 먼저 생각합니다. 고객과 파트너 모두에게 긍정적인 영향을 주는 \'상생의 의사결정\'을 추구합니다.'
    }
  ]

  return (
    <div className="philosophy">
      <div className="philosophy-container">
        {/* 로고 섹션 */}
        <div className="philosophy-logo-section">
          <img src={logoImage} alt="GreenLight Logo" className="philosophy-logo" />
        </div>

        {/* 타이틀 섹션 */}
        <div className="philosophy-title-section">
          <h1 className="philosophy-main-title">Develop Sensible Person</h1>
          <p className="philosophy-sub-title">
            Biz Insight를 통해 경쟁환경에서 승리하는 센스(Sense)있는 인재를 양성하는 것이 Greenlight의 철학입니다.
          </p>
        </div>

        {/* 박스 섹션 */}
        <div className="philosophy-boxes">
          {philosophyBoxes.map((box) => (
            <div key={box.index} className="philosophy-box">
              <div className="box-index">{box.index}</div>
              <h3 className="box-title">{box.title}</h3>
              <p className="box-description">{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Philosophy
