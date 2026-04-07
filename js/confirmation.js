const subtractMinutes = (timeStr, mins) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    let totalMinutes = hours * 60 + minutes - mins
    if (totalMinutes < 0) totalMinutes += 24 * 60
    const newHours = Math.floor(totalMinutes / 60) % 24
    const newMinutes = totalMinutes % 60
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`
}

window.createTemplate = () => {
    document.getElementById('result').textContent = ''
    const date = window.getDate(document.getElementById('date').value)
    const startTime = document.getElementById('startTime').value
    const firstGameEndTime = document.getElementById('firstGameEndTime').value
    const secondGameEndTime = document.getElementById('secondGameEndTime').value
    const place = document.querySelector('input[name="place"]:checked').value
    const placeName = place === 'その他' ? document.getElementById('customPlace').value.trim() : place
    const placeURL = place === 'その他' ? document.getElementById('customPlaceURL').value.trim() : window.placeUrlDict[place]
    const groundNumber = document.getElementById('groundNumber').value.trim()
    const groundSuffix = groundNumber === '' ? '' : (/^[0-9０-９]+$/.test(groundNumber) ? '号面' : '面')
    
    const meetingTime = subtractMinutes(startTime, 30)
    const telStartTime = subtractMinutes(startTime, 150)
    const telEndTime = subtractMinutes(startTime, 120)
    
    const message = `
    お疲れ様です。
    ${date}の当日詳細をご連絡します。

    日時：${date} ${startTime}~${firstGameEndTime}${secondGameEndTime === '' ? '' : '~' + secondGameEndTime}
    場所：${placeName}${groundNumber === '' ? '' :  groundNumber + groundSuffix}
    ${placeURL}

    ${meetingTime}ごろにはグラウンドに集まるようお願いします。
    当日は${telStartTime}〜${telEndTime}までの間にご連絡ください。

    このメッセージが確認できましたらご返信ください。
    `
    document.getElementById('result').textContent = message
}