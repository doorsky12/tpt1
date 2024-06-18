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
                // 외부 API로 시간 정보를 가져옴
                fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // API로부터 가져온 시간을 표시
                        const dateTime = new Date(data.datetime);
                        const currentTime = dateTime.toLocaleTimeString("en-US", {
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false
                        });
                        console.log(`${city}: ${currentTime}`); // 디버깅 로그 추가
                        timeElement.textContent = currentTime;
                    })
                    .catch(error => {
                        console.error(`Error fetching time for ${city}:`, error);
                        timeElement.textContent = "Error";
                    });
            }
        });
    }

    updateTime();
    setInterval(updateTime, 10000); // 10초마다 시간 업데이트
});
