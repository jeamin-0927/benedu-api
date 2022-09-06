const testData = require('./info.json');
const axios = require('axios');

const getCookie = (cookieName, response) => {
    let cookies = response.headers['set-cookie'];
    // console.log(cookies);
    for(let i = 0; i < cookies.length; i++){
        if(cookies[i].includes(cookieName)){
            return cookies[i].split(';')[0].split(`${cookieName}=`)[1];
        }
    }
}
const RequestVerificationToken = async (url) => {
    const response = await axios.get('https://benedu.co.kr/');
    return getCookie('__RequestVerificationToken', response);
}
const sessionId = async (email, passwd) => {
    // const token = await RequestVerificationToken();
    // console.log(token);

    const response = await axios.post(
        'https://benedu.co.kr/Home/Login',
        `__RequestVerificationToken=S7oXdfnFsY490HMGIIMEB4-s5WzosfsIqRX_YXUOIbzgnFbZtCbiL2ESu8UqDLsR4cOSmytXrZGMA50XhO9Gv819uT4NDgDHbYpy9CAvZaM1&loginRemember=true&loginRemember=false&loginID=${encodeURIComponent(email)}&loginPW=${encodeURIComponent(passwd)}&loginGB=2`,
        {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.54 Safari/537.36',
                'Cookie': `__RequestVerificationToken=JWnL3CS2m1vhHbT4artfdK_4H8ODn91ws3B9JEwyVTEEy63-KopWs55eeaIfUchXDRSnSJeEDN70N8rX2t64dHdvA5XI50caRRl2-q8-DmM1`
            },
            maxRedirects: 0,
            validateStatus: (status) => (status === 302)
        }
    );
    return getCookie('ASP.NET_SessionId', response);
}

// console.log(testData);

sessionId(testData.email, testData.passwd).then(res => {
    console.log(res);
})
