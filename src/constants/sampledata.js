
export const SampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"]
    },
    {
        avatar: [
            "https://www.w3schools.com/howto/img_avatar.png"
        ],
        name: "John Boi",
        _id: "2",
        groupChat: true,
        members: ["1", "2"]
    }
]

export const SampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "John Boi",
        _id: "2",
    },
]
export const SampleNotifications = [
    {
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Doe"
        },
        _id: "1",
    },
    {
        sender: {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Boi"
        },
        _id: "2",
    },
]
export const SampleMessage = [
    {
        attachments: [],
        content: "laude ka message hai",
        _id: "sdjwefnuqwfeiq",
        sender: {
            _id: "user_id",
            name: "Chaman",
        },
        chat: "ChatId",
        createdAt: '2024-03-28T05:24:43.907Z'
    },
    {
        attachments: [
            {
                public_id: "ajkdfs 2",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "",
        _id: "asjdkansadsdass",
        sender: {
            _id: "asjdkans",
            name: "Chaman   2",
        },
        chat: "ChatId",
        createdAt: '2024-03-28T05:24:43.907Z'
    }
]


export const DashBoardData = {
    users: [
        {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
            _id: "1",
            username : "Jonh doe " ,
            groups : 5 , 
            friends : 20 

        },
        {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Boi",
            _id: "2",
            username : "Jonh Boi" ,
            groups : 9 , 
            friends : 20 
        },
    ] ,

    chats : [
        {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Lassan group",
            _id: "1",
            username : "Jonh doe " ,
            groups : 5 , 
            friends : 20  , 
            groupChat : false , 
            members : [ {_id: "1" ,avatar: "https://www.w3schools.com/howto/img_avatar.png" } ,  {_id: "2" ,avatar: "https://www.w3schools.com/howto/img_avatar.png" } ] ,
            totalMembers : 2 ,
            totalMessages : 20 , 
            creator : {
                avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
                name: "John Doe",
            }

        },
        {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Lauda group",
            _id: "2",
            username : "Jonh boi " ,
            groups : 6, 
            friends : 30  , 
            groupChat : false , 
            members : [ {_id: "1" ,avatar: "https://www.w3schools.com/howto/img_avatar.png" } ,  {_id: "2" ,avatar: "https://www.w3schools.com/howto/img_avatar.png" } ] ,
            totalMembers : 2 ,
            totalMessages : 20 , 
            creator : {
                avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
                name: "John Doe",
            }
        },
    ],
    messages : [
        {
            attachments: [
                // {
                //     public_id : "sdfa 2 " ,
                //     url :   "https://www.w3schools.com/howto/img_avatar.png",
                // }
            ],
            content: "laude ka message hai",
            _id: "sdjwefnuqwfeiq",
            groupChat : false , 
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman",
            },
            chat: "ChatId",
            createdAt: '2024-03-28T05:24:43.907Z'
        },
        {
            attachments: [
                {
                    public_id : "sdfa 2 " ,
                    url :   "https://www.w3schools.com/howto/img_avatar.png",
                }
            ],
            content: "laude ka message hai",
            _id: "sdjwefnuqwfeiq",
            groupChat : true , 
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman",
            },
            chat: "ChatId",
            createdAt: '2024-03-28T05:24:43.907Z'
        },
    ]
}