const monthsDictionary: Record<number, string> = {
    0: 'Janeiro',
    1: 'Fevereiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro'
  }
  
  export function formatDateToPush (date: string): string {
    const _date = new Date(date)
    const day = _date.getDate()
    const month = _date.getMonth()
    const year = _date.getFullYear()
  
    return `${day} ${monthsDictionary[month]} ${year} às ${String(_date.getHours()).padStart(2, '0')}:${String(_date.getMinutes()).padStart(2, '0')}`
  }
  
  export function formatDateToCreate (date: string): string {
    const _date = new Date(date)
    const day = _date.getDate()
    const month = _date.getMonth()
    const year = _date.getFullYear()
  
    return `${day} ${monthsDictionary[month]} ${year}`
  }