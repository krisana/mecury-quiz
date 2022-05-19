export const doctors = [
  { value: 1, label: 'หมอ ก.' },
  { value: 2, label: 'หมอ ข.' }
]

export const apiDoctors = [
  {
    id: 1,
    name: 'หมอ ก.'
  },
  {
    id: 2,
    name: 'หมอ ข.',
  }
]

export const doctorSchedules = [
  {
    id: 1,
    doctor_id: 1,
    weekday: 1,
    date: null,
    duration: 60,
    repeat: 1,
    startTime: '8:00',
    endTime: '12:00',
  },
  {
    id: 2,
    doctor_id: 1,
    weekday: 3,
    date: null,
    duration: 60,
    repeat: 1,
    startTime: '8:00',
    endTime: '12:00',
  },
  {
    id: 3,
    doctor_id: 1,
    weekday: 5,
    date: null,
    duration: 60,
    repeat: 1,
    startTime: '8:00',
    endTime: '12:00',
  },
  {
    id: 4,
    doctor_id: 2,
    weekday: 2,
    date: null,
    duration: 30,
    repeat: 1,
    startTime: '13:00',
    endTime: '15:00',
  },
  {
    id: 5,
    doctor_id: 2,
    weekday: 4,
    date: null,
    duration: 30,
    repeat: 1,
    startTime: '13:00',
    endTime: '15:00',
  },
  {
    id: 6,
    doctor_id: 2,
    weekday: 6,
    date: null,
    duration: 30,
    repeat: 1,
    startTime: '13:00',
    endTime: '15:00',
  }
]

export const appointments = [
  {
    id: 1,
    doctor_id: 1,
    user_id: 1,
    appointment_date: '',
    startTime: '8:00',
    endTime: '9:00'
  },
  {
    id: 1,
    doctor_id: 2,
    user_id: 3,
    appointment_date: '',
    startTime: '14:00',
    endTime: '14:30'
  },
  {
    id: 1,
    doctor_id: 1,
    user_id: 4,
    appointment_date: '',
    startTime: '9:00',
    endTime: '10:00'
  },
]

export const weeks = [
  {
    id: 1,
    weekday: 0,
  },
  {
    id: 1,
    weekday: 1
  },
  {
    id: 1,
    weekday: 2
  },
  {
    id: 1,
    weekday: 3
  },
  {
    id: 1,
    weekday: 4
  },
  {
    id: 1,
    weekday: 5
  },
  {
    id: 1,
    weekday: 6
  },
]

export const users = [
  {
    id: 1,
    phone: '0810000001',
    pin_code: '111111'
  },
  {
    id: 2,
    phone: '0810000002',
    pin_code: '222222'
  },
  {
    id: 3,
    phone: '0810000003',
    pin_code: '333333'
  },
  {
    id: 4,
    phone: '0810000004',
    pin_code: '444444'
  },
]