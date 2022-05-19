import { useContext, useEffect, useState } from 'react'
import { AppContext, BaseLayout } from '../layouts'
import {
  Table,
  Button,
  Row,
  Col
} from 'react-bootstrap'
import Select from 'react-select'
import { getUserData } from '../services'
import jsHttpCookie from 'cookie';
import { useSession } from 'next-auth/react';

export default function Home() {
  const [user, setUser] = useState(null);
  // const { data: session } = useSession()

  useEffect(() => {
    getUserData().then((data) => {
      setUser(data)
    });
  }, [])

  return (
    <BaseLayout>
      <h1>Home page</h1>
      <pre>{`${user}`}</pre>
    </BaseLayout>
  )
}