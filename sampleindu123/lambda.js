let AWS = require('aws-sdk');
const ml = new AWS.MachineLearning();

exports.handler = async (event) => {
    ml.predict({
        MLModelId: 'ml-dmP3nLjN2S9',
        PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
        Record: {
            test: 10
        }
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });

    return { "message": "Successfully executed" };
};