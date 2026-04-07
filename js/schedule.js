const toggleCustomPlaceFieldsInBlock = (block) => {
    const selectedPlace = block.querySelector('input[type="radio"]:checked')
    const isCustomPlace = selectedPlace?.value === 'その他'
    const customPlaceGrid = block.querySelector('.custom-place-grid')
    const customPlaceInput = block.querySelector('.custom-place-input')
    const customPlaceURLInput = block.querySelector('.custom-place-url-input')

    customPlaceGrid.classList.toggle('is-hidden', !isCustomPlace)
    customPlaceGrid.setAttribute('aria-hidden', String(!isCustomPlace))

    customPlaceInput.disabled = !isCustomPlace
    customPlaceURLInput.disabled = !isCustomPlace
    customPlaceInput.required = isCustomPlace
    customPlaceURLInput.required = isCustomPlace

    if (!isCustomPlace) {
        customPlaceInput.value = ''
        customPlaceURLInput.value = ''
    }
}

const setBlockRadioName = (block, index) => {
    const radioName = `place-${index}`
    block.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.name = radioName
    })
}

const updateScheduleBlockMeta = (scheduleBlocks) => {
    scheduleBlocks.querySelectorAll('.schedule-block').forEach((block, index) => {
        const blockIndex = index + 1
        block.dataset.index = String(blockIndex)
        setBlockRadioName(block, blockIndex)

        const title = block.querySelector('.schedule-block-title')
        if (title) {
            title.textContent = `${blockIndex}試合目`
        }
    })
}

const initializeScheduleBlock = (block) => {
    block.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.addEventListener('change', () => toggleCustomPlaceFieldsInBlock(block))
    })
    toggleCustomPlaceFieldsInBlock(block)
}

const clearScheduleBlockInputs = (block) => {
    block.querySelectorAll('input[type="date"], input[type="time"], input[type="text"]').forEach((input) => {
        input.value = ''
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const scheduleBlocks = document.getElementById('scheduleBlocks')
    const addScheduleBlockButton = document.getElementById('addScheduleBlock')

    const initialBlocks = scheduleBlocks.querySelectorAll('.schedule-block')
    initialBlocks.forEach((block) => {
        initializeScheduleBlock(block)
    })
    updateScheduleBlockMeta(scheduleBlocks)

    addScheduleBlockButton.addEventListener('click', () => {
        const currentBlocks = scheduleBlocks.querySelectorAll('.schedule-block')
        const sourceBlock = currentBlocks[currentBlocks.length - 1]
        const clonedBlock = sourceBlock.cloneNode(true)
        clearScheduleBlockInputs(clonedBlock)
        initializeScheduleBlock(clonedBlock)
        scheduleBlocks.appendChild(clonedBlock)
        updateScheduleBlockMeta(scheduleBlocks)
    })
})

const formatGround = (groundNumber) => {
    if (groundNumber === '') return ''
    const suffix = /^[0-9０-９]+$/.test(groundNumber) ? '号面' : '面'
    return `${groundNumber}${suffix}`
}

const getScheduleLine = (block) => {
    const date = window.getDate(block.querySelector('.date-input').value)
    const startTime = block.querySelector('.start-time-input').value
    const firstGameEndTime = block.querySelector('.first-game-end-time-input').value
    const secondGameEndTime = block.querySelector('.second-game-end-time-input').value
    const place = block.querySelector('input[type="radio"]:checked').value
    const customPlace = block.querySelector('.custom-place-input').value.trim()
    const customPlaceURL = block.querySelector('.custom-place-url-input').value.trim()
    const placeName = place === 'その他' ? customPlace : place
    const placeURL = place === 'その他' ? customPlaceURL : window.placeUrlDict[place]
    const groundNumber = block.querySelector('.ground-number-input').value.trim()

    return `
    日時：${date} ${startTime}~${firstGameEndTime}${secondGameEndTime === '' ? '' : '~' + secondGameEndTime}
    場所：${placeName}${formatGround(groundNumber)}
    ${placeURL}
    `
}

window.createTemplate = () => {
    document.getElementById('result').textContent = ''
    const blocks = Array.from(document.querySelectorAll('.schedule-block'))
    const scheduleBody = blocks.map((block) => getScheduleLine(block)).join('\n\n')
    const firstDateValue = blocks[0]?.querySelector('.date-input')?.value || ''
    const monthText = firstDateValue !== '' ? `${Number(firstDateValue.split('-')[1])}月` : '今後'
    const expireDate = window.getDate(document.getElementById('expireDate').value)

    const message = `
    お疲れ様です。

    ${monthText}の予定が決まりましたので連絡します。

    ${scheduleBody}

    このメッセージが確認できましたら${expireDate}までにご返信ください。
    `
    document.getElementById('result').textContent = message
}
