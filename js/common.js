window.placeUrlDict = {
    "多摩川緑地野球場": "http://ball-boy.net/tokyo23/0506tamagawaryokuchihiroba.html",
    "多摩川六郷橋緑地": "http://ball-boy.net/tokyo23/0507tamagawarokugobashi.html",
    "多摩川ガス橋緑地野球場": "http://ball-boy.net/tokyo23/0503tamagawagasubashi.html",
    "砧野球場（東名高速下）": "http://ball-boy.net/tokyo23/1402zhenyeqiucha.html",
    "碑文谷公園": "http://ball-boy.net/tokyo23/2301himonya.html"
}

window.getDate = (dateStr) => {
    const date = new Date(dateStr)
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    return `${date.getMonth()+1}月${date.getDate()}日(${days[date.getDay()]})`
}

const toggleCustomPlaceFields = () => {
    const selectedPlace = document.querySelector('input[name="place"]:checked')
    const isCustomPlace = selectedPlace?.value === 'その他'
    const customPlaceGrid = document.getElementById('customPlaceGrid')
    const customPlaceInput = document.getElementById('customPlace')
    const customPlaceURLInput = document.getElementById('customPlaceURL')

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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[name="place"]').forEach((radio) => {
        radio.addEventListener('change', toggleCustomPlaceFields)
    })
    toggleCustomPlaceFields()
})