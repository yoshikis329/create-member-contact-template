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