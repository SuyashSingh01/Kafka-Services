const { kafka } = require('./client');
async function init(){

    const admin=kafka.admin();
    admin.connect();
    console.log('Admin connecting ...');
    console.log('Creating topic...');

    await admin.createTopics({
        topics: [
            { topic: 'Rider-updates', numPartitions: 2 },
        ]
    })
    console.log('Topic created successfully');

    await admin.disconnect();
    console.log('Admin disconnected');
}

init();