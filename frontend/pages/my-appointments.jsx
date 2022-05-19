import { useEffect, useState } from 'react'
import { BaseLayout } from '../layouts'
import {
  Button,
  Table,
} from 'react-bootstrap'
import { deleteAppointment, getDoctors, getMyAppointments } from '../services'
import moment from 'moment'
import 'moment/locale/th'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { transformTime } from '../helpers'

const MySwal = withReactContent(Swal)

export default function MyAppoinyment() {
  const [appointments, setAppointments] = useState(null)

  useEffect(() => {
    getMyAppointments().then((v) => {
      const {data} = v;
      setAppointments(data)
    });
  }, []);

  const onCancel = (id) => {
    MySwal.fire({
      title: 'ยืนยันที่จะยกเลิกนัดหมายใช่ไหม',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAppointment(id).then((res) => {
          setAppointments(res.data.data.appointments);
          MySwal.fire('ยกเลิกนัดหมายเรียบร้อย', '', 'success')
        });
        MySwal.fire('ยกเลิกนัดหมายเรียบร้อย', '', 'success')
      }
    })
  }

  return (
    <BaseLayout>
      <Table hover>
        <thead>
          <tr>
            <th width="50">#</th>
            <th>ชื่อแพทย์</th>
            <th>วันที่นัดหมาย</th>
            <th>เวลา</th>
            <th width="80">ตัวเลือก</th>
          </tr>
        </thead>
        <tbody>
          {
            appointments && appointments.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.doctors.name}</td>
                  <td>{moment(item.appointment_date).format('D MMMM YYYY')}</td>
                  <td>{transformTime(item.start_time) + ' - ' +transformTime(item.end_time)}</td>
                  <td>
                    <Button variant='danger' onClick={() => onCancel(item.id)}>ยกเลิก</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </BaseLayout>
  )
}