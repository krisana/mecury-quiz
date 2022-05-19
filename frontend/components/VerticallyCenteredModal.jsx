import moment from 'moment';
import { useContext, useState } from 'react'
import { Modal, Button, Badge, ToggleButton } from 'react-bootstrap'
import { transformTimeInterval, transformTime } from '../helpers';
import { AppContext } from '../layouts';
import styles from '../styles/Layout.module.css'
import modalStyles from '../styles/Modal.module.css'

export const VerticallyCenteredModal = props => {
  const user = useContext(AppContext)
  const [timeValue, setTimeValue] = useState('');

  const onCloseModal = () => {
    setTimeValue('')
    props.onHide()
  }

  const onSaveAppointment = () => {
    const { data } = props;
    const getTimeValue = timeValue.toString().split('-');
    const appointment = {
      appointment_date: moment(props.data.date).format('YYYY-MM-DD'),
      start_time: getTimeValue[0].trim(),
      end_time: getTimeValue[1].trim(),
      doctor_id: data.value.doctor_id
    }
    setTimeValue('')
    props.onSave(appointment);
  }

  let doctor = null;
  let times = [];
  let dates = []; 

  const {
    onSave,
    appointments,
    doctors,
    data,
    ...modalProps
  } = props;

  if (data) {
    doctor = data.doctors.find((d) => {
      return d.value === data.value.doctor_id;
    });

    dates = props.appointments.filter((d) => {
      return d.appointment_date === moment(data.date).format('YYYY-MM-DD') && d.doctor_id === doctor.value
    })
    
    times = transformTimeInterval(data.value.start_time, data.value.end_time, data.value.duration);

  }

  console.log('timeValue', timeValue);

  return (
    <Modal
      {...modalProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          เลือกเวลานัด
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-center mb-4'>
          <div className={modalStyles.badge}>{doctor && doctor.label}</div>
        </h4>
        <div>
          {times.length > 0 && times.map((time, idx) => {
            const appointTime = dates.find((a) => {
              const at = transformTime(a.start_time) + ' - ' + transformTime(a.end_time);
              return at === time;
            })

            return (
              <ToggleButton
                key={idx}
                id={`time-${idx}`}
                type="radio"
                disabled={appointTime ? true : false}
                className={`${styles.mainLabel}`}
                name="time"
                value={time}
                checked={timeValue === time}
                onChange={(e) => setTimeValue(e.currentTarget.value)}
              >
                {time}
              </ToggleButton>
            )
          })}
        </div>
      </Modal.Body>
      <Modal.Footer className='justify-content-between align-items-center d-flex w-100'>
        <Button className={styles.mainButton} variant='outline-secondary' onClick={() => onCloseModal()}>ปิด</Button>
        <Button className={styles.mainButton} disabled={!timeValue} onClick={() => onSaveAppointment()}>ทำนัด</Button>
      </Modal.Footer>
    </Modal>
  );
}