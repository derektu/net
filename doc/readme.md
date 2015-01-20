# TCP network 相關的測試

## Things to test

- 寫一個web server that can handle large requests
- 寫一個壓力測試程式, 可以送出大量的requests (>40k)
- 寫一個壓力測試程式, 可以送出大量的connection
- 寫一個web server that can handle large connnections

## Request tests

- 單一express
    - http://localhost:4000/api/delay?dur=..
    - 測試可以接受的requests (per second)
    - How to measure
        - $ sudo lsof -nP -iTCP:4000 | grep ">127.0.0.1:4000" | wc -l
        - $ curl 'http://localhost:4000/api/delay?dur=20000'
    - *TODO*
        - server內增加measure counter, 透過 https://github.com/felixge/node-measured來計算
        - 計算request per seconds
        - 計算pending requests
        - 把stat定時傳給client (via socket.io)
    - *TODO*
        - 壓測程式: https://github.com/jeffbski/bench-rest
        - 

