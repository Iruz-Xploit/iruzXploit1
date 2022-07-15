const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(`



Creator : ${chalk.underline.whiteBright.bold('@iruzssksk')} - ${chalk.redBright.bold('https://github.com/ruz-Xploit')}
Modifed : ${chalk.underline.whiteBright.bold('@iruzssksk')}


Features : 

1. ${chalk.bgBlack.bold('Reward : 1 Crown + 30 Trophy + 35 Star ( SP ) + 3000 EXP')}
2. ${chalk.bgBlack.bold('Reward : 20 Trophy + 30 Star ( SP ) + 1500 EXP')}
3. ${chalk.bgBlack.bold('Reward : 10 Trophy + 25 Star ( SP ) + 500 EXP')}
4. ${chalk.bgBlack.bold('Reward : 20 Star ( SP ) + 100 EXP')}
`);

    const feature = rs.question('[+] Enter feature needed : ');
    if (feature == '1') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 120000 = 120 Second ) : '); 
        console.log('');

        while (true) {

            var code = '3';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.bgWhite(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                
              console.log(chalk.bgBlack.bold(`\r
[ ${moment().format('HH:mm:ss')} ]
 - USER   : ${chalk.underline.magentaBright.bold(`${username}`)} 
 - CONTRY : ${chalk.underline.whiteBright.bold(`${country}`)}
 - TROPY  : ${chalk.underline.cyanBright.bold(`${trophy}`)} 
 - CROWN  : ${chalk.underline.blueBright.bold(`${crown}`)}
 - TOKEN  : ${chalk.underline.redBright.bold(`${tokenPass}`)}
 - EXP    : ${chalk.underline.greenBright.bold(`${exp}`)}`));
      await delay(time)

            } else if (result == 'BANNED') {

                console.log(chalk.bgRed(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {
                
                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : '); 
        console.log('');

        

        while (true) {

            var code = '2';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.blue(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {
                
                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : '); // Input 0 for no delay ( High Risk)
        console.log('');

        while (true) {

            var code = '1';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.blue(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {
                
                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 1000 = 1 sec ) : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} | ${chalk.blue(`Pass Star : ${tokenPass}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR' || result.includes('User path limit exceeded')) {

                continue;
                
            } else {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Error !`));
                break;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[ ${moment().format('HH:mm:ss')} ] Wrong feature !`));

    }
    

})();
