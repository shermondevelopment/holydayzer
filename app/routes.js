import { Router } from 'express';

const router = Router()

/* holidays */
import holidays from './holidays.js'

const today = new Date()


router.get('/holidays', (req, res) => {
  res.status(200).json({holidays})
})

router.get('/holidays/:month', (req, res) => {
  const { month } = req.params
  const findHolidays = holidays.filter( item => item.date.match(/\d+/)[0] === month)
  res.status(200).json({findHolidays})
})

router.get('/is-today-holiday', (req, res) => {
  const findHoliday = holidays.find( item => item.date === today.toLocaleDateString())
  if(!findHoliday) {
    return res.status(200).json({ message: 'Não, hoje não é feriado' })
  }
  res.json({ message: `Sim, hoje é ${findHoliday.name}`})
})

export default router