const faker = require('faker');

let generateDecisionsList = () => {

    let decisionsArray = [];

    for (let id = 1000; id < 1010; id++) {
        let evaluationDate = faker.date.past();

        decisionsArray.push({
            "id": id,
            "evaluationDate": evaluationDate,
            "evaluationSucceeded": true,
            "executorName": "Technical User",
            "decisions": [
                {
                    "decisionId": "1",
                    "decisionName": "Approval",
                    "evaluationStatus": "done",
                    "result": "Approved",
                    "messages": [],
                    "hasErrors": false
                }
            ]
        });
    }

    let decisionsList = {
        "total": 20,
        "limit": 10,
        "offset": 0,
        "data": decisionsArray
    };

    return { "decisions":  decisionsList}
};

module.exports = generateDecisionsList;
