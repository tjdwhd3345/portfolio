import React, { useState, memo, useEffect } from 'react';
import styles from './Projects.module.scss';
import { BsDot } from 'react-icons/bs';
import { GoBrowser } from 'react-icons/go';
import { SiGithub } from 'react-icons/si';

const Careers = memo(({ careers }) => {
  return (
    <section className={styles.careers}>
      <h2>Careers</h2>
      {careers.map((career, i) => (
        <div key={i}>
          <div className={styles.company}>
            <h3>{career.company}</h3>
            <span>{career.duration}</span>
          </div>
          <div className={styles.description}>
            <p>
              <span>직책: </span>
              {career.position}
            </p>
            <p>
              <span>담당업무: </span>
              {career.jobDesc}
            </p>
            <ul>
              {career.jobMessage.map((msg, i) => (
                <li key={i}>
                  <BsDot />
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
});

const SideProject = memo(({ projects }) => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div>
        {projects.map((project, i) => (
          <div className={styles.wrap} key={i}>
            <img src={`/projects/${project.imgUrl}`} alt='project sample' />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.desc}</p>
            <div className={styles.linkWrap}>
              <a
                href={project.github}
                target='_blank'
                className={styles.link}
                rel='noreferrer'
              >
                <SiGithub />
                Github
              </a>
              <a
                href={project.demo}
                target='_blank'
                className={styles.link}
                rel='noreferrer'
              >
                <GoBrowser />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

const Projects = () => {
  const [careers] = useState([
    {
      company: '애버커스',
      duration: '2021. 07. 26 ~ 2021. 11. 25',
      position: 'IT품질혁신팀 / 사원(프리랜서)',
      jobDesc: 'LG U+ 데일리 리포트 관제시스템 개발',
      jobMessage: [
        'WebSquare를 사용해서 대시보드 UI화면 개발',
        'WebSquare, MariaDB, Devon Framework을 사용',
      ],
    },
    {
      company: '인스웨이브시스템즈',
      duration: '2018. 02. 01 ~ 2021. 06. 30',
      position: '기술지원팀 / 사원',
      jobDesc: 'UI솔루션 기술지원 엔지니어',
      jobMessage: [
        'HTML5, ES5 기반 UI솔루션 ‘WebSquare’을 사용한 프로젝트의 UI기술지원',
        '공공기관(방위사업청, 한국무역보험공사 등), 금융권, 기업 등 다수 프로젝트의 솔루션 기술지원',
        '솔루션을 웹 애플리케이션 상에 설치',
        'UI 성능개선, 웹접근성 등',
      ],
    },
  ]);
  const [projects] = useState([
    {
      imgUrl: 'habit-tracker.png',
      title: 'Habit Tracker',
      desc: 'React를 사용한 간단한 Todo List 앱입니다. 함수형 컴포넌트의 Life-Cycle과 Hooks를 학습하기 위해 만들었습니다. 또한, 이 앱은 React-Native로도 빌드하여 RN에서 컴포넌트 사용법 또한 익혔습니다.',
      github: 'https://github.com/tjdwhd3345/habit-tracker',
      demo: 'https://tjdwhd3345.github.io/habit-tracker/',
    },
    {
      imgUrl: 'motube.png',
      title: 'MoTube',
      desc: '유튜브API를 활용한 스트리밍 서비스입니다. 실시간 인기동영상, 영상검색, 연관동영상 등 유튜브의 기능을 유사하게 만든 클론코딩 앱입니다.',
      github: 'https://github.com/tjdwhd3345/motube/',
      demo: 'https://tjdwhd3345.github.io/motube/',
    },
    {
      imgUrl: 'business-card-maker.png',
      title: 'Business Card Maker',
      desc: '인물정보를 등록하여 관리할 수 있는 명함관리 서비스입니다. Firebase로 DB서버와 이메일, 깃허브 인증을 구현했으며 Cloudinary를 사용해 이미지서버를 구축했습니다. React Portal을 써서 Modal팝업을 구현했습니다. Skeleton UI를 적용해 로딩지연 시 사용자경험(UX)을 증대하였습니다.',
      github: 'https://github.com/tjdwhd3345/business-card-maker',
      demo: 'https://tjdwhd3345.github.io/business-card-maker/',
    },
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className={styles.container}>
      <Careers careers={careers} />
      <SideProject projects={projects} />
    </div>
  );
};

export default Projects;
