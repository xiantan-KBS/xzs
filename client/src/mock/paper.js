import Mock from 'mockjs';
import {nanoid} from 'nanoid'


// {
//     "code": 1,
//     "message": "成功",
//     "response": [
//         {
//             "id": "18",  //学科id
//             "name": "英语"  //学科名称
//         }
//     ]
// }
Mock.mock('/api/student/education/subject/list','post',{
    code:1,
    message:'成功',
    "response|7":[
            {
                "id": nanoid(),  //学科id
                "name": "@cword(3,5)"  //学科名称
            }
        ]
})



// {
//     "total": 1,
//     "list": [
//         {
//             "id": 2520,  //试卷id
//             "name": "生理卫生",  //试卷名称
//             "questionCount": 1,  //题目数
//             "score": 20,  //试卷分数
//             "createTime": "2021-05-31 13:34:49", //创建时间
//             "createUser": 2,   //创建人
//             "subjectId": 158,  //学科
//             "subjectName": "英语",  //学科
//             "paperType": 1,   //试卷类型
//             "frameTextContentId": 9016  //试卷内容
//         }
//     ]
// }
Mock.mock('/api/student/exam/paper/pageList','post',{
    code:1,
    message:'成功',
    "response":{
        "total|30": 1,
        "list": [
            {
                "id|1-20": 1,  //试卷id
                "name": "@cword(3,6)",  //试卷名称
                "questionCount|1-20": 3 ,  //题目数
                "score": 100,  //试卷分数
                "createTime": "@datetime", //创建时间
                "createUser": '@cname',   //创建人
                "subjectId": nanoid(),  //学科
                "subjectName": "@cword(3,5)",  //学科
                "paperType": 1,   //试卷类型
                "frameTextContentId": "@cparagraph(8, 10)"  //试卷内容
            }
        ]
    }
})


