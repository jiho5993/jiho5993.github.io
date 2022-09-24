---
layout: page
title: Portfolio
permalink: /portfolio/
---

<img src='https://jiho5993.github.io/images/me.JPG' width=200 />

**소속** : 한양대학교 ERICA 캠퍼스 소프트웨어학부 18학번  
**Email** : [jiho5993@gmail.com](mailto:jiho5993@gmail.com)  
**Github** : [http://github.com/jiho5993](http://github.com/jiho5993)  

---

# Introduce me
* 안녕하세요! 신입 백엔드 개발자가 되고 싶은 박지호입니다.
* 개발자를 만드는 것은 "재능"이 아니라 "포기하지 않음"을 경험으로 통해 믿고 있습니다.
* 개발에 자부심을 가지고 있으며, 개발은 무한 루프같은 궁금증을 가지고 하는 것이라 생각합니다.
* 현재 다른 지인들과 프로젝트를 진행중에 있습니다.

---

# Skills
현재 사용중인 기술입니다.
* Node.js
* Express.js
* Javascript
* MySQL
* AWS EC2 / Heroku
* Git / Notion

현재 공부중인 기술입니다.
* Nest.js
* Typescript
* TypeORM
* Nginx
* Docker
* Slack

---

# Prizes
* 2019.05 HEPC(Hanyang ERICA Programming Contest) 프로그래밍 대회 **우수상 수상** (3인 1팀)
* 2019.11 HESH(Hanyang ERICA Software Hackathon) 해커톤 **대상 수상** (5인 1팀)
* 2022.06 ERICA Software-UP! 창업 아이디어톤 **대상 수상** (3인 1팀)

---

# Projects

### *NerdIT - 디자이너들을 위한 자기개발 서비스 (2022.01 ~ 진행중)
**상세 설명** : [https://jiho5993.notion.site/NerdIT-fcf01cc2e4e14eef9eba01f0094d1ac1](https://jiho5993.notion.site/NerdIT-fcf01cc2e4e14eef9eba01f0094d1ac1)  
**깃허브 링크** : [https://github.com/DCPT-KNP/NerdIT-Backend](https://github.com/DCPT-KNP/NerdIT-Backend)  

커리어에 관심이 많아 자기개발을 꾸준히 하지만, 중도포기하거나 어떻게 해야 할지 몰라 자문을 구하는 디자이너들을 위한 서비스입니다.

- 프로젝트 역할
    - designer : 2명
    - back-end : 1명 (담당)
    - front-end : 2명
- 프로젝트에 사용한 기술
    - Nest.js / MySQL / TypeORM / Docker / Nginx / AWS S3
- 프로젝트에서 담당했던 부분 / 설명
    - 소셜 로그인을 통해 서비스에 쉽게 접근 가능하도록 구현
        - 카카오, 네이버, 구글
    - Nest.js Guard로 서버에서 인증된 유저인지 판별
    - TypeORM을 활용한 엔티티 관리
    - AWS S3로 이미지 서버 관리
    - Docker를 활용한 ~~메인~~, 테스트용 서버 배포

### *영화 추천 챗봇 서비스 (2022.01 ~ 2022.06)
**상세 설명** : [https://jiho5993.notion.site/c5edaffe73b24017b9494dc2bc979bf3](https://jiho5993.notion.site/c5edaffe73b24017b9494dc2bc979bf3)  
**깃허브 링크** : [https://github.com/jiho5993/movchatbot](https://github.com/jiho5993/movchatbot)  

카카오톡 챗봇 서비스를 활용해 인공지능 기반 챗봇 시스템을 제작했습니다.  
_**현재 인공지능 서비스는 중단된 상태입니다.**_

- 프로젝트 역할
    - back-end : 1명 (담당)
    - 기획, 구상 : 3명 (담당)
    - 인공지능 개발 : 1명
- 프로젝트에 사용한 기술
    - Django / Docker / Oracle Cloud / BeautifulSoup4 / Kakao i open builder
- 프로젝트에서 담당했던 부분 / 설명
    - 네이버 영화관 페이지에서 BeautifulSoup4를 통한 데이터 수집
    - 카카오 챗봇에서 정해진 형식에 맞추기 위해 데이터를 적절히 가공
    -  크롤링 속도를 높이기 위해 멀티 프로세싱 프로그램 작성
        - 12초에서 2초의 성능으로 개선
    - Docker를 활용하여 Oracle Cloud 서버 배포

### *Gyumongeats - 쿠팡이츠 클론 (2021.02 ~ 2021.06)
**상세 설명** : [https://jiho5993.notion.site/Gyumongeats-15e3deea196d40289006cbaed9b445eb](https://jiho5993.notion.site/Gyumongeats-15e3deea196d40289006cbaed9b445eb)  
**깃허브 링크** : [https://github.com/jiho5993/gyumongeats](https://github.com/jiho5993/gyumongeats)  

쿠팡이츠라는 음식 배달 어플을 클론하는 프로젝트입니다.  
유저, 주문, 음식점 조회 서비스 등 서비스 사용에 있어 꼭 필요한 API를 구현했습니다.  

- 프로젝트 역할
    - back-end : 1명 (담당)
    - front-end : 1명
- 프로젝트에 사용한 기술
    - Express.js / MySQL / AWS Elastic Beanstalk / BeautifulSoup4 / Sequelize
- 프로젝트에서 담당했던 부분 / 설명
    - 실제 서비스 사용을 위한 기능 구현
        - 유저 회원가입, 로그인
        - 음식점 조회, 장바구니, 주문, 음식 리뷰
    - transaction을 사용한 여러 쿼리 handling
    - Sequelize ORM을 이용한 데이터베이스 관리
    - Python Crawling을 통한 음식점 데이터 수집
    - AWS Elastic Beanstalk 배포 (현재 중단)

### *채팅 웹 어플리케이션 (2019.04 ~ 2019.06)
**상세 설명** : [https://jiho5993.notion.site/90a1989df5e3448bafc991ac5004971a](https://jiho5993.notion.site/90a1989df5e3448bafc991ac5004971a)  
**깃허브 링크** : [https://github.com/jiho5993/open_source_chat_B-02](https://github.com/jiho5993/open_source_chat_B-02)

- 프로젝트 역할
    - back-end : 1명 (담당)
    - front-end : 1명
- 프로젝트에 사용한 기술
    - HTML / CSS / Express.js / Socket.io / Heroku
- 프로젝트에서 담당했던 부분 / 설명
    - Socket.io를 활용한 실시간 양방향 통신 구현
    - Heroku로 간단한 배포
        - [https://os-chat-b02.herokuapp.com](https://os-chat-b02.herokuapp.com)