const inputData = [
    {
        "inputName": "Credit Score",
        "typeRef": "number",
        "value": 738
    },
    {
        "inputName": "Down Payment",
        "typeRef": "number",
        "value": 70000
    },
    {
        "inputName": "Property",
        "typeRef": "tProperty",
        "components": [
            {
                "inputName": "Purchase Price",
                "typeRef": "number",
                "value": 34000
            },
            {
                "inputName": "Monthly Tax Payment",
                "typeRef": "number",
                "value": 0.2
            },
            {
                "inputName": "Monthly Insurance Payment",
                "typeRef": "number",
                "value": 0.15
            },
            {
                "inputName": "Monthly HOA Payment",
                "typeRef": "number",
                "value": 0.12
            },
            {
                "inputName": "Address",
                "typeRef": "tAddress",
                "components": [
                    {
                        "inputName": "Street",
                        "typeRef": "string",
                        "value": "272 10th St."
                    },
                    {
                        "inputName": "Unit",
                        "typeRef": "string",
                        "value": "A"
                    },
                    {
                        "inputName": "City",
                        "typeRef": "string",
                        "value": "Malibu"
                    },
                    {
                        "inputName": "State",
                        "typeRef": "string",
                        "value": "CA"
                    },
                    {
                        "inputName": "ZIP",
                        "typeRef": "string",
                        "value": "90903"
                    }
                ],
            }
        ],
    },
    {
        "inputName": "Borrower",
        "typeRef": "tBorrower",
        "components": [
            {
                "inputName": "Full Name",
                "typeRef": "string",
                "value": "Jim Osterberg"
            },
            {
                "inputName": "Tax ID",
                "typeRef": "string",
                "value": "11123322323"
            },
            {
                "inputName": "Employment Income",
                "typeRef": "number",
                "value": 99000
            },
            {
                "inputName": "Other Income",
                "typeRef": "number",
                "value": 0
            },
            {
                "inputName": "Assets",
                "typeRef": "tAssets",
                "components": [
                    [
                        {
                            inputName: "Type",
                            typeRef: "string",
                            value: "C"
                        },
                        {
                            inputName: "Institution Account or Description",
                            typeRef: "string",
                            value: "Chase"
                        },
                        {
                            inputName: "Value",
                            typeRef: "number",
                            value: 45000
                        }
                    ],
                    [
                        {
                            inputName: "Type",
                            typeRef: "string",
                            value: "Other Non-Liquid"
                        },
                        {
                            inputName: "Institution Account or Description",
                            typeRef: "string",
                            value: "Vanguard"
                        },
                        {
                            inputName: "Value",
                            typeRef: "number",
                            value: 33000
                        }
                    ]
                ]
            }
        ],
    },
    {
        "inputName": "Liabilities",
        "typeRef": "tLiabilities",
        "components": [
            [
                {
                    inputName: "Type",
                    value: "Credit Card",
                    typeRef: "string"
                },
                {
                    inputName: "Payee",
                    value: "Chase",
                    typeRef: "string"
                },
                {
                    inputName: "Monthly Payment",
                    value: 300,
                    typeRef: "number"
                },
                {
                    inputName: "Balance",
                    value: 0,
                    typeRef: "number"
                },
                {
                    inputName: "To be paid off",
                    value: "Yes",
                    typeRef: "string"
                }
            ],
            [
                {
                    inputName: "Type",
                    value: "Lease",
                    typeRef: "string"
                },
                {
                    inputName: "Payee",
                    value: "BMW Finance",
                    typeRef: "string"
                },
                {
                    inputName: "Monthly Payment",
                    value: 450,
                    typeRef: "number"
                },
                {
                    inputName: "Balance",
                    value: 0,
                    typeRef: "number"
                },
                {
                    inputName: "To be paid off",
                    value: "No",
                    typeRef: "string"
                }
            ]
        ]
    },
    {
        "inputName": "Lender Ratings",
        "typeRef": "tLenderRatings",
        "components": [
            [
                {
                    inputName: "Lender Name",
                    value: "Gordon Cole",
                    typeRef: "string"
                },
                {
                    inputName: "Customer Rating",
                    value: 4.2,
                    typeRef: "number"
                }
            ],
            [
                {
                    inputName: "Lender Name",
                    value: "Dale Cooper",
                    typeRef: "string"
                },
                {
                    inputName: "Customer Rating",
                    value: 3.6,
                    typeRef: "number"
                }
            ],
            [
                {
                    inputName: "Lender Name",
                    value: "Chester Desmond",
                    typeRef: "string"
                },
                {
                    inputName: "Customer Rating",
                    value: 4.6,
                    typeRef: "number"
                }
            ]
        ]
    }
];

exports.input = inputData;