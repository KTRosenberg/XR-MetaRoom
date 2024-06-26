module.exports = {
  apps : [{
    name: 'Front End',
    script: './server/main.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    // max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  },
  {
    name: 'Object Sync Server',
    script: './webxr-server/server.js',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: './webxr-server/server.js',
    instances: 1,
    autorestart: true,
    watch: true,
    // max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 11234
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 11234
    }
  }],

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload server/ecosystem.config.js --env production'
  //   }
  // }
};
