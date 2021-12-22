export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function date(date: Date): string {
  const config = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  } as const
  return new Intl.DateTimeFormat('pt-br', config).format(new Date(date))
}
