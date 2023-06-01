const jwt = require("jsonwebtoken");
const {APIError} = require("../core/Response");
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAseET4aBpbko910G3QUNZFgNcMh/7AXSUS45nkS95D/WQO884
fztdvYAx0mBa5MU1vxmUZ1YpNn5leCzn7TwCxg/LNVEJoayKTHnU6UJNpBDpHfQ7
uysx/zpnryxFhiteUDg4m3YxQTIBd4X4CUbrL6VkrWURBcO2K84SC3pKkDPwJPfl
rqEWnI4uxW1SOtkscKgAcjtJiO5NVyoiZZznj7yEVM7mzVcJFUXOBp/4bgFM53sz
FCXA9jL2vRzxrDSPEr6x/8zKfVLLyvBW587pTKpcyHr5Xbn9JL21L2yKMaBEPmer
quYJHRBuEIZK0mga3cK98rdsw1R5rgMuxid+owIDAQABAoIBAF4VltZ4akuTqTH5
6Fv0q2IhVNqOX81dRDLSl6ULXxU55Zg8+r0RQXvCGpgTrv/h75Osi/o8cIAKStFN
rz6jxzPLlsgUnOuOv3fD2QGnuDlXWHYngJB3QHKnCcB1wjA9MB1uH0LbOSIquOvn
SFJf2HXTHXU5R8+svOZekNzRSi8K5Pw1W7mtvyV5NSjPITCri+gqxuOSP5Y/u8RZ
DiAeI7kPHutn04HFIM6MmtkBORinnIAazUfyA07fyeRUJwkaoFUM9pnAh3id7OZ2
3zNZG8V836T4M0KrIXYn1QBk1UNSweX4ebiFU9Oo5MT/H/h3Sltvn03F3Wt/FR7k
DgJne8ECgYEA+u0PwHqiKMh3LjwO7aGMApH+cfytSVxrJUVCArHdhSsmEMdCUk+u
3BdK5YxgGg/cnstYHQGKFmsZIZwx8zY5VsyY/9cWCfoaN3rHueKe809gDDyUJ435
KuZjQG+T5m0TaGAdBz0e3ZRaJ9EhbpjZqEUhhWVWIdcyYyRsUa+0yKUCgYEAtXni
LbfLswTFNsIsZTDttpMMOsDByrOT3Je/7h/Grp0qr9tAIvvKislMbiMxQo5ZOXw1
a7h0eJzrryr56rBXb3VfkZ1Y3M3cMbuZmCjAii0VGnksiLTiDbqmtPgjKKQOJk47
wYxyxQU4i742kBJkELy2w/HW5nlN+yN85AL4P6cCgYBVYazmddQPxIapOM5rlXiq
tzq5Vp0wRT5AJFzdxd/2nEQLmYG7uFlrkpFtomJg+9y6O77zv75Y+oBGq3tjoqPI
IT4+b9WT94JMNn8XhUFI0U2BXGudOfX63wIOvui4k4zzCyFVgTqrcvtqaQLTOzd0
xnEtjtnMEgmXKqGg+gSt8QKBgCUzzk0m/4g8cx1touI/rIugC4LD3zZpp+cx6LOt
KfLD32tbnANP8M6Qw61UY5XMTrg9IUpq7t2G9b3cJo2ZBuOfgS79vajOPtSnK66I
tCffZBMgQiPoSOsdl21D7Rk4wHnT0eY0n5aKInRrUw4n5wGTXjg/DJoExhq0xLaN
cUzDAoGAEUokBfF9zpUpbz8oO2XJi0NpiiSPNvCkT87JhbYUcwJwPEjOSJz5qesG
2/Zlu70wG+QjA6/PeUWtD4cxAuFouQX6TfA1kppavbf4LRyjy7lXOqWOzVnn2YNS
VpUFpm2xHOGCh56Y+1Bvzrq6eBr97p0YcFw4xRtTbig6mbZJEwU=
-----END RSA PRIVATE KEY-----`

class AuthHelper {
    constructor() {
    }

    static genToken(storeShop) {
        const accessToken = jwt.sign({info: storeShop}, privateKey, {algorithm: 'RS256', expiresIn: "30d"});
        const refreshToken = jwt.sign({info: storeShop}, privateKey, {algorithm: 'RS256', expiresIn: "365d"});


        return {
            accessToken, refreshToken
        }
    }

    static verifyApiKey(req, res, next) {
        if (!req.headers.api_key){
            throw new APIError('apiKey empty', 401)
        }
        req.headers.perrmissons = ['taibv']
        return next();
    }

    static verifyToken(token) {
        return jwt.verify(token, privateKey, (error, obj) => {
            if (error) throw new APIError(error.message, 401)
            return obj
        });
    }

    static checkPermission(req, res, next) {
        console.log('checkPermission')
        return next();
    }
}

module.exports = AuthHelper
