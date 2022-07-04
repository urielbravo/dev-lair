import Image from 'next/future/image'

// import css module for the skills component
import styles from './skills.module.css'

// icons for the skills
import htmlLogo from '../public/images/skills/html5-brands.svg'
import cssLogo from '../public/images/skills/css3-brands.svg'
import tailwindLogo from '../public/images/skills/tailwind_logo.svg'
import javascriptLogo from '../public/images/skills/js-square-brands.svg'
import pythonLogo from '../public/images/skills/python-brands.svg'
import seleniumLogo from '../public/images/skills/selenium.svg'
import bootstrapLogo from '../public/images/skills/bootstrap-brands.svg'
import testcafeLogo from '../public/images/skills/testcafe.svg'
import djangoLogo from '../public/images/skills/django.svg'
import jiraLogo from '../public/images/skills/jira-brands.svg'
import gitLogo from '../public/images/skills/git-alt-brands.svg'
import reactLogo from '../public/images/skills/react-brands.svg'
import nodeLogo from '../public/images/skills/node-brands.svg'

export default function Skills () {
  return (
    <>
      <div className="grid justify-items-center space-y-5 grid-cols-3 md:grid-cols-5">
        <div className={styles.first_skill}>
          <span>HTML</span>
          <Image className="h-12 w-12" src={htmlLogo} alt="HTML logo" />
        </div>
        <div className={styles.skill}>
          <span>CSS</span>
          <Image className="h-12 w-12" src={cssLogo} alt="CSS logo" />
        </div>
        <div className={styles.skill}>
          <span>Tailwind</span>
          <Image className="h-12 w-12" src={tailwindLogo} alt="Tailwind logo" />
        </div>
        <div className={styles.skill}>
          <span>Javascript</span>
          <Image className="h-12 w-12" src={javascriptLogo} alt="Javascript logo" />
        </div>
        <div className={styles.skill}>
          <span>Python</span>
          <Image className="h-12 w-12" src={pythonLogo} alt="Python logo" />
        </div>
        <div className={styles.skill}>
          <span>Selenium</span>
          <Image className="h-12 w-12" src={seleniumLogo} alt="Selenium logo" />
        </div>
        <div className={styles.skill}>
          <span>Bootstrap</span>
          <Image className="h-12 w-12" src={bootstrapLogo} alt="Bootstrap logo" />
        </div>
        <div className={styles.skill}>
          <span>TestCafe</span>
          <Image className="h-12 w-12" src={testcafeLogo} alt="TestCafe logo" />
        </div>
        <div className={styles.skill}>
          <span>Django</span>
          <Image className="h-12 w-12" src={djangoLogo} alt="Django logo" />
        </div>
        <div className={styles.skill}>
          <span>Jira</span>
          <Image className="h-12 w-12" src={jiraLogo} alt="Jira logo" />
        </div>
        <div className={styles.skill}>
          <span>Git</span>
          <Image className="h-12 w-12" src={gitLogo} alt="Git logo" />
        </div>
        <div className={styles.skill}>
          <span>React</span>
          <Image className="h-12 w-12" src={reactLogo} alt="React logo" />
        </div>
        <div className={styles.skill}>
          <span>Node js</span>
          <Image className="h-12 w-12" src={nodeLogo} alt="Node logo" />
        </div>
      </div>
    </>
  )
}