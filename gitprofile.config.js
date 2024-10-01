// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jiho5993', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: '박지호 | Back-end Developer',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'park_j2h5',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://jiho5993.github.io',
    phone: '010-2382-5993',
    email: 'jiho5993@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  description:
    '클라이밍 하듯이 떨어져도 다시 오르고\n더 높은 곳으로 올라가고자 하는 백엔드 개발자입니다.\n클라이밍처럼 문제를 하나씩 해결하며 성장하는 과정을 즐깁니다.',
  skills: [
    './img/logo/nodejs.png',
    './img/logo/javascript.png',
    './img/logo/typescript.svg',
    './img/logo/nestjs.svg',
    './img/logo/typeorm.png',
  ],
  experiences: [
    {
      company: '헥슬란트',
      position: '백엔드 개발자 (산업기능요원)',
      from: '2022.10.31',
      to: '',
      companyLink: 'https://hexlant.com',
      body: '백엔드 개발자로 근무하고 있습니다. 주로 Node.js, Nest.js를 통해 개발하고 있으며, 블록체인 서비스 구축을 쉽게 도와주는 도구를 개발하는 업무를 맡고 있습니다.',
    },
  ],
  awardsHistories: [
    {
      name: 'SW창업아이디어톤 대상',
      body: "한양대학교 ERICA에서 주최하는 SW창업아이디어톤 대회에서 대상을 수상하였습니다. 폐업을 하는 자영업자를 위해 폐업 비용의 부담을 줄여주는 '사업 양수양도 중개 플랫폼 : 리빌딩'이라는 아이디어를 생각하였습니다.",
      year: '2022.06',
      link: '',
    },
    {
      name: 'HESH 해커톤 대상 수상',
      body: 'Hanyang Erica Software Hackathon (HESH)는 학교에서 주최한 해커톤 대회이며, 주제는 공공데이터를 활용한 소프트웨어를 만드는 것을 최종 목표로 삼았습니다. 아이디어는 지역화폐를 사용하는 사용자를 위해 지도 API를 통한 내 위치 주변 가맹점들을 쉽게 찾을 수 있는 소프트웨어를 만들었습니다.',
      year: '2019.11',
      link: '',
    },
    {
      name: 'HEPC 알고리즘 대회 우수상',
      body: '한양대학교 ERICA에서 주최하는 HEPC대회(알고리즘 대회)에서 우수상을 수상하였습니다.',
      year: '2019.05',
      link: '',
    },
  ],
  educations: [
    {
      institution: '한양대학교 ERICA',
      degree: '학사',
      from: '2018',
      to: '(군휴학중)',
    },
    {
      institution: '유신고등학교',
      degree: '학생',
      from: '2015',
      to: '2018',
    },
  ],
  companyPerformances: [
    {
      title: '@nestjs/throttler를 활용한 유저별 Rate Limit 적용',
      conferenceName: 'Nest.js / Throttler / Redis',
      journalName: '(헥슬란트)',
      authors: '',
      link: '',
      description:
        '유저에게 서비스를 제공할 때 API 형태로 제공하게 되는 경우가 있는데, 이 때 Rate Limit을 적용하여 과도한 요청이 들어오는 것을 방지할 수 있습니다.\n\n' +
        'Nest.js에서 제공하는 @nestjs/throttler와 Redis를 이용하여, Rate Limit 시스템을 구축하였습니다.\n\n' +
        '유저 별로 Rate Limit을 적용하고자 했기 때문에, Redis의 Key를 유저 별로 구분하여 Rate Limit을 적용하였습니다.',
    },
    {
      title: '웹 소켓을 활용한 RPC 통신 성능 개선',
      conferenceName: 'Web Socket / RPC / Performance',
      journalName: '(헥슬란트)',
      authors: '',
      link: '',
      description:
        '블록체인 노드가 제공하는 RPC 통신을 사용하여, 입출금을 지원하는 서비스를 주로 운영하고 있습니다.\n' +
        '이때 RPC 통신은 HTTP 통신을 사용하게 되는데, handshake 과정이 매번 발생하여 매번 통신 요청을 해야 했고, 이로 인해 성능이 떨어지는 문제가 있었습니다.\n\n' +
        '이를 해결하기 위해 시스템에 맞는 웹 소켓 헬퍼를 구현하였고,\n불필요한 handshake 과정을 줄여 커넥션 한번으로 비약적인 성능 향상을 이루었습니다.',
    },
    {
      title: '블록체인 RPC를 활용한 자산 입출금 서비스 개발',
      conferenceName: 'Blockchain / RPC',
      journalName: '(헥슬란트)',
      authors: '',
      link: '',
      description:
        '블록체인 개발 도구를 제공하는 서비스를 운영하기 때문에, 비트코인이나 이더리움 같은 자산 입출금을 지원하는 서비스를 개발하였습니다.\n' +
        '구축하려는 블록체인 네트워크의 개발 문서를 읽고, RPC 통신을 통해 입출금 서비스를 개발하였습니다.\n\n' +
        '스스로 리서치하여 개발해야했기 때문에 시행착오를 겪었지만, 디스코드나 슬랙을 통해 다른 개발자와 소통하며 문제를 해결하는 능력을 기를 수 있었습니다.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      // 'dark',
      'cupcake',
      //   'bumblebee',
      //   'emerald',
      //   'corporate',
      //   'synthwave',
      //   'retro',
      //   'cyberpunk',
      //   'valentine',
      //   'halloween',
      //   'garden',
      //   'forest',
      //   'aqua',
      //   'lofi',
      //   'pastel',
      //   'fantasy',
      //   'wireframe',
      //   'black',
      //   'luxury',
      //   'dracula',
      //   'cmyk',
      //   'autumn',
      //   'business',
      //   'acid',
      //   'lemonade',
      //   'night',
      //   'coffee',
      //   'winter',
      //   'dim',
      //   'nord',
      //   'sunset',
      //   'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
