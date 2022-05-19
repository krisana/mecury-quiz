import Head from 'next/head'
import { createContext } from 'react'
import styles from '../styles/Layout.module.css'
import { Container } from 'react-bootstrap'
import { BaseHeader } from './BaseHeader'
import { useSession, signIn, signOut } from "next-auth/react"

const AppContext = createContext();

export const BaseLayout = ({ children }) => {

  const { data: session } = useSession()

  if(session) {
    localStorage.setItem('accessToken', session.user.accessToken);
  }

  return (
    <AppContext.Provider value={session}>
      <Head>
        <title>MEDcury | Healthcare Solution</title>
        <meta name="description" content="Provide Effective and Accessible Healthcare Ecosystem for clients in South East Asia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <BaseHeader />
      </div>
      <main className={styles.main}>
        {session ?
          <Container>
            {children}
          </Container>
          :
          <Container>
            <h1 className='text-center mb-5'>กรุณาเข้าสู่ระบบ</h1>
            <p className='text-center go-github'>
              <span>User access at</span>
              <a href="https://github.com/krisana/mecury-quiz" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a>
            </p>
          </Container>
        }
      </main>
    </AppContext.Provider>
  )
}

export { AppContext }