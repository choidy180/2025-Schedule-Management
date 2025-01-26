## app /
## │
## ├── src/                     
## │   ├── components/             # 재사용 가능한 컴포넌트
## │   │   ├── common/             # 전역적으로 사용되는 컴포넌트 (버튼, 헤더, 푸터 등)
## │   │   └── BlogContainer       # 블로그 컨테이너 컴포넌트
## │   │       ├── index.tsx           
## │   │       ├── BlogContainer.tsx   
## │   │       └── BlogContainer.stories.tsx
## │   │
## │   ├── store/                  # 전역 상태 관리 (예: Context API, Redux, recoil, zustand 등)
## │   │
## │   ├── app/                    # Next.js app 라우팅
## │   │   └── page.tsx         
## │   │   └── layout.tsx       
## │   │
## │   ├── api/                    # api와 관련된 로직
## │   │
## │   ├── hooks/                  # 커스텀 React 훅
## │   │
## │   ├── constants/              # 상수 값
## │   │
## │   ├── types/                  # 타입 (typescript 사용시)
## │   │  
## │   ├── styles/                 # 스타일 관련 파일(CSS, Tailwind 설정 등)
## │   │  
## │   └── utils/                  # 유틸리티 함수