import Mock from 'mockjs';
import {nanoid}  from 'nanoid'


// [
//     {
//         "id": 14,  //任务id
//         "title": "2021-04-25作业",  //任务标题
//         "paperItems": [
//             {
//                 "examPaperId": 181,   //任务试卷id
//                 "examPaperName": "第一次出卷",  //任务试卷名称
//                 "examPaperAnswerId": 579,  //答卷id
//                 "status": 2  //答卷状态
//             }
//         ]
//     }
// ]
Mock.mock('/api/student/dashboard/task','post',{
    code:1,
    message:'成功',
    response:[{
        id:nanoid(),
        title:"初级任务",
        paperItems:[
            {
                "examPaperId": nanoid(),
                "examPaperName": "初级任务一",
                "examPaperAnswerId": nanoid(),
                "status": 2
            },
            {
                "examPaperId": nanoid(),
                "examPaperName": "初级任务二",
                "examPaperAnswerId": nanoid(),
                "status": 1
            },
        ]
    },{
        id:nanoid(),
        title:"中级任务",
        paperItems:[
            {
                "examPaperId": nanoid(),
                "examPaperName": "中级任务一",
                "examPaperAnswerId": nanoid(),
                "status": 1
            },
            {
                "examPaperId": nanoid(),
                "examPaperName": "中级任务二",
                "examPaperAnswerId": nanoid(),
                "status": 1
            },
        ]
    },{
        id:nanoid(),
        title:"高级任务",
        paperItems:[
            {
                "examPaperId": nanoid(),
                "examPaperName": "高级任务一",
                "examPaperAnswerId": nanoid(),
                "status": 2
            },
            {
                "examPaperId": nanoid(),
                "examPaperName": "高级任务二",
                "examPaperAnswerId": nanoid(),
                "status": 2
            },
        ]
    }]
})



// {
//     "fixedPaper": [  //固定试卷
//         {
//             "id": 2399,  //试卷Id
//             "name": "test33333",  //试卷名称
//             "limitStartTime": null,  //考试开始时间
//             "limitEndTime": null     //考试结束时间
//         }
//     ],
//     "timeLimitPaper": []    //时段试卷
// }
Mock.mock('/api/student/dashboard/index','post',{
    code:1,
    message:'成功',
    response:{
        "fixedPaper|5": [  //固定试卷
            {
                "id": nanoid(),  //试卷Id
                "name": "试卷@integer(1, 10)",  //试卷名称
                "limitStartTime": '@datetime',  //考试开始时间
                "limitEndTime": '@datetime'   //考试结束时间
            }
        ],
        "timeLimitPaper|3": [
            {
                "id": nanoid(),  //试卷Id
                "name": "试卷@integer(1, 10)",  //试卷名称
                "limitStartTime": '@datetime',  //考试开始时间
                "limitEndTime": '@datetime'   //考试结束时间
            }
        ]    //时段试卷
    }
})