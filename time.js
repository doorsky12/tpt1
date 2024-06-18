// DOM 요소가 모두 로드된 후 실행되도록 합니다.
document.addEventListener("DOMContentLoaded", () => {
    function updateTime() {
        const timeZones = {
            "new-york": "America/New_York",
            "london": "Europe/London",
            "tokyo": "Asia/Tokyo"
        };

        Object.keys(timeZones).forEach(city => {
            const timeElement = document.getElementById(`time-${city}`);
            if (timeElement) {
                const timeZone = timeZones[city];
                const currentTime = new Date().toLocaleString("en-US", { 
                    timeZone: timeZone, 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit',
                    hour12: false  // 24시간 표기법을 사용합니다.
                });
                timeElement.textContent = currentTime;
            }
        });
    }

    // 초기 시간 설정
    updateTime();
    // 1초마다 시간 업데이트
    setInterval(updateTime, 1000);
});
