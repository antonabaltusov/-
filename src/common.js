export default function diffToHtml(elem, diff) {
    elem.innerHTML = `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
        ${diff.hour ? 'ч: ' + diff.hour : ''} 
        ${diff.hour || diff.minute ? 'мин: ' + diff.minute : ''} 
        ${diff.hour || diff.minute || diff.second ? 'сек: ' + diff.second : ''}
    </span>
`};