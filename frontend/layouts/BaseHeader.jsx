import { useContext } from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import styles from '../styles/Layout.module.css'
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export const BaseHeader = () => {
  const { data: session } = useSession()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div style={{ width: 'auto', height: '60px' }}>
            <img src='/logo.webp' alt="MED cury" className={styles.logo} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={!session ? 'justify-content-end' : ''}>
          {session ?
            <>
              <Nav className="me-auto">
                <Nav.Link href="/doctors">แพทย์ของเรา</Nav.Link>
                <Nav.Link href="/appointments">นัดหมายแพทย์</Nav.Link>
                <Nav.Link href="/my-appointments">การนัดหมายของคุณ</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="outline-primary" onClick={() => signOut()}>ออกจากระบบ</Button>
              </Nav>
            </>
            :
            <Nav>
              <Button variant="outline-primary" onClick={() => signIn()}>เข้าสู่ระบบ</Button>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}