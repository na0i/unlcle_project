# EmailJS 설정 가이드

Contact us 페이지에서 이메일 전송 기능을 사용하기 위해 EmailJS 설정이 필요합니다.

## 1. EmailJS 계정 생성 및 설정

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속하여 무료 계정을 생성합니다.

2. **Email Service 추가**
   - Dashboard에서 "Add New Service" 클릭
   - Gmail, Outlook 등 원하는 이메일 서비스 선택
   - 연결 설정 완료 후 **Service ID** 복사

3. **Email Template 생성**
   - "Email Templates" 메뉴에서 "Create New Template" 클릭
   - 템플릿 내용 작성:
     ```
     이름: {{from_name}}
     이메일: {{from_email}}
     전화번호: {{phone}}
     회사명/소속기관명: {{company}}
     
     문의사항:
     {{message}}
     ```
   - "Save" 후 **Template ID** 복사

4. **Public Key 확인**
   - "Account" > "General" 메뉴에서 **Public Key** 확인

## 2. 설정값 적용 방법

### 방법 1: 환경 변수 사용 (권장)

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_TO_EMAIL=your-email@example.com
```

**주의**: `.env` 파일은 Git에 커밋하지 마세요. `.gitignore`에 추가되어 있습니다.

### 방법 2: 코드에 직접 입력

`src/pages/Contact.jsx` 파일에서 다음 부분을 찾아 실제 값으로 변경하세요:

```javascript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL || 'your-email@example.com'
```

환경 변수가 없을 경우를 대비해 기본값을 설정해두었습니다. 기본값을 실제 값으로 변경하세요.

## 3. 테스트

설정 완료 후 Contact us 페이지에서 폼을 작성하고 "등록하기" 버튼을 클릭하여 테스트하세요.

## 참고사항

- EmailJS 무료 플랜은 월 200통까지 무료로 전송 가능합니다.
- 보안을 위해 환경 변수(.env)를 사용하는 것을 권장합니다.

