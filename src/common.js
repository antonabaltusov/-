export default function diffToHtml(elem, diff) {
    elem.innerHTML = `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
        ${diff.hour ? 'ч: ' + diff.hour : ''} 
        ${diff.hour ? 'мин: ' + diff.minute : ''} 
        ${diff.hour ? 'сек: ' + diff.second : ''}
    </span>
`};