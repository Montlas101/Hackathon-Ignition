const { Client, Intents, Collection } = require('discord.js'); const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '';

const fs = require('fs');

client.commands = new Collection();


client.once('ready', () => {
    console.log('HackingNEKEMI is online!');
}); 

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'command'){
        client.commands.get('command').execute(message, args, Discord);
    }
if(command === 'hello'){
    message.channel.send('hey');
} else if (command == 'hackathon'){
    message.channel.send('https://www.ignitionhacks.org/?gclid=EAIaIQobChMIrdrk0-DD8gIV-W1vBB065Ai7EAAYAiAAEgJcOfD_BwE')
} else if (command == 'language'){
    message.channel.send('this bot was made with java script')
} else if (command == 'team'){
    message.channel.send('teammates Abdullah, Emilia, Shiv, and Ryan worked on this bot!')
} else if (command == 'swag'){
    message.channel.send('https://static.wixstatic.com/media/c48aa0_028faddcb8734c42a13f65fe1137f4fd~mv2.png/v1/fill/w_951,h_500,al_c,q_90,usm_0.66_1.00_0.01/c48aa0_028faddcb8734c42a13f65fe1137f4fd~mv2.webp')
} else if (command == 'divisionsigma'){
    message.channel.send('For beginner/first-time Hackers, Division Sigma is the challenge stream for you! Hackers will team up to participate in a series of workshops, followed by short tasks, called "Proofs", which are graded by the judges. By the end of Ignition Hacks, Hackers will have created a final project and the winners will be the team with the highest overall score on each "Proof".')
} else if (command == 'divisiondelta'){
    message.channel.send('In Division Delta, hackers team up to solve problems in the Healthcare, Education, and Environment Industries, with a special emphasis on Machine Learning and Artificial Intelligence.')
} else if (command == 'hackathoninfo'){
    message.channel.send('A hackathon is an event dedicated to gathering both aspiring and experienced computer programmers to work upon and create a product, based on a given question or theme')
} else if (command == 'prizes'){
    message.channel.send('https://ibb.co/JtDCSZV')
}


});


client.login('ODc4ODA0NzM1MTM2Nzg0NDM1.YSGgsA.qG67wk8D_RERp2fi0OruXX-xupk');