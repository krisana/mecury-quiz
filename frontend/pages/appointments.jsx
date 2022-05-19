import { useEffect, useState } from 'react';
import { BaseLayout } from '../layouts'
import {
  Table,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select'
import DateRangePicker from "react-bootstrap-daterangepicker";
import styles from '../styles/Appointments.module.css'
import moment from 'moment';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Helpers
import { getDatesInRange, timeRemoveSecond, transformSelect } from '../helpers';

// Components
import { VerticallyCenteredModal } from '../components';

import 'moment/locale/th'
import { getDoctors, getDoctorSchedules, getAppointments, createAppointment } from '../services';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Appointments() {
  const [dates, setDates] = useState('')
  const [doctors, setDoctors] = useState([])
  const [appointments, setAppointments] = useState([])
  const [dateRanges, setDateRanges] = useState([])
  const [doctorSchedules, setDoctorSchedules] = useState([])
  const [selectDoctor, setSelectDoctor] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getDoctors().then((res) => {
      const { data } = res;
      setDoctors(transformSelect(data))
    })
    getAppointments().then((res) => {
      const { data } = res;
      setAppointments(data)
    })
  }, [])

  const handleSelectDoctors = (e) => {
    setSelectDoctor(e)
  }

  const handleApply = (event, picker) => {
    getDoctorSchedules().then((res) => {
      const { data } = res;
      setDoctorSchedules(data)
    })
    
    const startDate = moment(picker.startDate).format();
    const endDate = moment(picker.endDate).format();
    const datepicker = startDate + ' ถึง ' + endDate;
    setDates(datepicker)
    setDateRanges(getDatesInRange(new Date(startDate), new Date(endDate)))
  }

  const handleModal = (value, date) => {
    const data = {
      doctors,
      value,
      date
    }
    
    setData(data)
    setModalShow(true)
  }

  const handleOnSave = (obj) => {
    createAppointment(obj).then((res) => {

      setAppointments(res.data.data.appointments);
      setModalShow(false)
      MySwal.fire({
        title: <strong>ทำนัดเรียบร้อยแล้ว</strong>,
        html: <i>ขอบคุณที่ใช้บริการ</i>,
        icon: 'success'
      })
    })
  }

  return (
    <BaseLayout>
      <div className='mb-4'>
        <h2 className='text-center mb-5'>นัดหมายแพทย์</h2>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Select
              instanceId="selectDoctors"
              options={doctors}
              placeholder="เลือกแพทย์"
              isMulti
              name="doctors"
              className="basic-multi-select mb-4"
              classNamePrefix="select"
              onChange={handleSelectDoctors}
            />
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <DateRangePicker
              initialSettings={{
                minDate: new Date()
              }}
              onApply={handleApply}
            >
              <InputGroup>
                <FormControl
                  value={dates}
                  placeholder="วันที่ต้องการนัดหมาย"
                  readOnly
                />
                <InputGroup.Text><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
              </InputGroup>
            </DateRangePicker>
          </Col>
        </Row>
      </div>
      <div className="schedule-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={7}
          spaceBetween={0}
          allowTouchMove={false}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {
            dateRanges.length > 0 && dateRanges.map((dateRange) => {
              moment.locale('th')
              const date = moment(dateRange);
              const dow = date.format('dddd');
              const day = date.format('D MMM');

              const sd = selectDoctor.map(i => i.value);
              const ds = doctorSchedules.filter((v) => {
                return v.weekday === date.day() && sd.includes(v.doctor_id);
              })

              return (
                <SwiperSlide key={dateRange}>
                  <div className={`${styles.boxHeader} ${ds.length === 0 && styles.boxDisabled}`}>
                    <h5>{dow}</h5>
                    <h5>{day}</h5>
                  </div>
                  <div className={`${styles.boxBody} ${ds.length === 0 && styles.boxBodyDisabled}`}>
                    {ds.length > 0 && ds.map((t) => {
                      return(
                        <Button
                          key={t.id}
                          className={styles.timeButton}
                          onClick={() => handleModal(t, date)}
                        >
                          {`${timeRemoveSecond(t.start_time)} - ${timeRemoveSecond(t.end_time)}`}
                        </Button>
                      )
                    })}
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <VerticallyCenteredModal
        className='selectTime'
        show={modalShow}
        data={data}
        doctors={doctors}
        appointments={appointments}
        onHide={() => setModalShow(false)}
        onSave={(appointment) => handleOnSave(appointment)}
      />
    </BaseLayout>
  )
}
