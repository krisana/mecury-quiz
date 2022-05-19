import { useEffect, useState } from 'react'
import { BaseLayout } from '../layouts'
import {
  Table,
} from 'react-bootstrap'
import { getDoctors } from '../services'

export default function Doctor() {
  const [doctors, setDoctors] = useState(null)

  useEffect(() => {
    getDoctors().then((v) => {
      const {data} = v;
      setDoctors(data)
    });
  }, []);

  return (
    <BaseLayout>
      <Table hover>
        <thead>
          <tr>
            <th width="50">ID</th>
            <th>ชื่อแพทย์</th>
          </tr>
        </thead>
        <tbody>
          {
            doctors && doctors.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </BaseLayout>
  )
}