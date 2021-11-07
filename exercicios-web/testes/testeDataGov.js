const https = require('https');

const getData = () => {
    const url = 'https://temporeal.pbh.gov.br/?param=D';

    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let resultado = '';

            res.on('data', dados => {
                resultado += dados;
            });

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject (e);
                }
            });
        });
    });
}

getData()    
    .then(dados => dados.forEach(obj => {
        console.log(`
        Evento: ${obj.EV}
        Hora: ${obj.HR}
        Latitude: ${obj.LT}
        Longitude: ${obj.LG}
        Nível: ${obj.NV}
        Velocidade: ${obj.VL}
        Número da linha: ${obj.NL}
        DG: ${obj.DG}
        `);
    }))
    .catch(e => console.log(e));