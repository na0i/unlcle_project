import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    inquiry: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS 설정 - 환경 변수 또는 직접 입력
  // 환경 변수를 사용하려면 .env 파일에 VITE_ 접두사를 붙여 설정하세요
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
  const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'your-email@example.com'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS를 사용하여 이메일 전송
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.inquiry,
        to_email: TO_EMAIL
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      alert('문의사항이 성공적으로 전송되었습니다.')
      
      // 폼 초기화
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        inquiry: ''
      })
    } catch (error) {
      console.error('이메일 전송 실패:', error)
      alert('문의사항 전송에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact">
      <div className="contact-container">
        {/* 타이틀 섹션 */}
        <div className="contact-header">
          <h1 className="contact-main-title">Contact us</h1>
          <p className="contact-sub-title">
            그린라이트의 비즈니스 솔루션을 경험해보세요.
          </p>
        </div>

        {/* 폼 섹션 */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* 2x2 그리드 입력 필드 */}
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="예시) 홍길동"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">전화번호</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="예시) 010-1234-5678"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일주소</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="예시) example@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">회사명/소속기관명</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="예시) 그린라이트"
              />
            </div>
          </div>

          {/* 문의사항 textarea */}
          <div className="form-group full-width">
            <label htmlFor="inquiry">문의사항</label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
              placeholder="문의사항을 입력해주세요"
              rows="8"
            />
          </div>

          {/* 등록하기 버튼 */}
          <div className="form-submit">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? '전송 중...' : '등록하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
