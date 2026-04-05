window.createTemplate = () => {
    const date = window.getDate(document.getElementById('date').value)
    const startTime = document.getElementById('startTime').value
    const firstGameEndTime = document.getElementById('firstGameEndTime').value
    const secondGameEndTime = document.getElementById('secondGameEndTime').value
    const expireDate = window.getDate(document.getElementById('expireDate').value)
    const place = document.querySelector('input[name="place"]:checked').value
    const placeName = place === 'その他' ? document.getElementById('customPlace').value : place
    const placeURL = place === 'その他' ? document.getElementById('customPlaceURL').value : window.placeUrlDict[place]
    const groundNumber = document.getElementById('groundNumber').value.trim()
    const groundSuffix = groundNumber === '' ? '' : (/^[0-9０-９]+$/.test(groundNumber) ? '号面' : '面')
    
    const message = `
    お疲れ様です。
    来週の試合の出欠を確認します。

    日時：${date} ${startTime}~${firstGameEndTime}${secondGameEndTime === '' ? '' : '~' + secondGameEndTime}
    場所：${placeName}${groundNumber === '' ? '' :  groundNumber + groundSuffix}
    ${placeURL}

    このメッセージが確認できましたら参加・不参加か記載の上、${expireDate}21:00までにご返信ください。
    `
    document.getElementById('result').textContent = message
}