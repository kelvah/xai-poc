const faker = require('faker');

let generateDecisionsList = () => {

    let decisionsArray = [];

    for (let id = 1000; id < 1010; id++) {
        let executionDate = faker.date.past();

        decisionsArray.push({
            "executionId": id,
            "executionDate": executionDate,
            "executionType": "DECISION",
            "executionSucceeded": true,
            "executorName": "Technical User"
        });
    }

    let decisionsList = {
        "total": 65,
        "limit": 10,
        "offset": 0,
        "headers": decisionsArray
    };

    return { "executions":  decisionsList}
};

module.exports = generateDecisionsList;
