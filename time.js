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
                const formatter = new Intl.DateTimeFormat("en-US", {
                    timeZone: timeZone,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false // 24시간 표기법을 사용합니다.
                });
                const currentTime = formatter.format(new Date());
                console.log(`${city}: ${currentTime}`); // 디버깅 로그 추가
                timeElement.textContent = currentTime;
            }
        });
    }

    updateTime();
    setInterval(updateTime, 1000);
});


