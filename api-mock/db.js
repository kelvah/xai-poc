const faker = require('faker');

let generateFakeAPIs = () => {

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

    let decisionDetail = {
        "executionId": faker.random.number(),
        "executionDate": faker.date.past(),
        "executionType": "DECISION",
        "executionSucceeded": true,
        "executorName": faker.name.findName()

    }


    return {
        "executions":  decisionsList,
        "decisions": decisionDetail
    }
};

module.exports = generateFakeAPIs;
