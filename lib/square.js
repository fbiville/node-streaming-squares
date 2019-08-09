const _ = require('highland');

module.exports =
    (inputStreams, outputStreams) => {
        _(inputStreams["0"]).map((n) => n**2).pipe(outputStreams["0"]);
    };
module.exports.$interactionModel = 'node-streams';
module.exports.$arity = 2;