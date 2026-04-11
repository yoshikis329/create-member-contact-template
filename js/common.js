window.placeUrlDict = {
    "多摩川緑地野球場": "https://www.city.ota.tokyo.jp/shisetsu/sports/baseball/tamagawaryokuchi.html",
    "多摩川六郷橋緑地": "https://www.city.ota.tokyo.jp/shisetsu/sports/baseball/tamagawa_rokugoubashi.html",
    "多摩川ガス橋緑地野球場": "https://www.city.ota.tokyo.jp/shisetsu/sports/baseball/tamagawa_gasbashi.html",
    "砧野球場（東名高速下）": "https://www.city.meguro.tokyo.jp/sports/shisetsu/sports/kinuta_ground.html",
    "碑文谷公園": "https://www.city.meguro.tokyo.jp/sports/shisetsu/sports/himonya_gym.html"
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