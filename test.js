const axios = require('axios');

const RequestVerificationToken = async () => {
    const response = await axios.get('https://benedu.co.kr/');
    let cookies = response.headers['set-cookie'];
    console.log(cookies);
    for(let i = 0; i < cookies.length; i++){
        if(cookies[i].includes('__RequestVerificationToken')){
            return cookies[i].split(';')[0].split('__RequestVerificationToken=')[1];
        }
    }
}
const sessionId = async (email, passwd) => {
    const token = await RequestVerificationToken();
    // console.log(token)

    const response = await axios.post(
        'https://benedu.co.kr/Home/Login',
        '__RequestVerificationToken=S7oXdfnFsY490HMGIIMEB4-s5WzosfsIqRX_YXUOIbzgnFbZtCbiL2ESu8UqDLsR4cOSmytXrZGMA50XhO9Gv819uT4NDgDHbYpy9CAvZaM1&loginRemember=true&loginRemember=false&loginID=admin%40chicken-moo.com&loginPW=walker%2326602&loginGB=2',
        {
            headers: {
                'Host': 'benedu.co.kr',
                'Content-Length': '239',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Sec-Ch-Ua': '"Chromium";v="105", "Not)A;Brand";v="8"',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': '"macOS"',
                'Upgrade-Insecure-Requests': '1',
                'Origin': 'https://benedu.co.kr',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.54 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-User': '?1',
                'Sec-Fetch-Dest': 'document',
                'Referer': 'https://benedu.co.kr/',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
                'Connection': 'close',
                'Cookie': 'HttpOnly; __RequestVerificationToken=JWnL3CS2m1vhHbT4artfdK_4H8ODn91ws3B9JEwyVTEEy63-KopWs55eeaIfUchXDRSnSJeEDN70N8rX2t64dHdvA5XI50caRRl2-q8-DmM1; _ga=GA1.3.1451040820.1662364532; _gid=GA1.3.1700499239.1662364532'
            },
            redirect: 'manual',
            validateStatus: (status) => (status === 302)
        }
    ).catch(e => {
        console.log(e)
    });
    
    

    // console.log(response.);
    
    // let cookies = response.headers['set-cookie'];
    // for(let i = 0; i < cookies.length; i++){
    //     if(cookies[i].includes('ASP.NET_SessionId')){
    //         return cookies[i].split(';')[0].split('ASP.NET_SessionId=')[1];
    //     }
    // }
}

sessionId('admin@chicken-moo.com', '').then(res => {
    console.log(res);
})
