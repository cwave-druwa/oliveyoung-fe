const awsconfig = {
    "aws_project_region": "ap-northeast-2",
    "aws_cognito_region": "ap-northeast-2",
    "aws_user_pools_id": "ap-northeast-2_PHv3RSTT1",  // AWS CLI를 통해 확인한 사용자 풀 ID
    "aws_user_pools_web_client_id": "3fk8aqddpevs8m30pduaffmfrg",  // AWS CLI를 통해 확인한 앱 클라이언트 ID
    "oauth": {
        "domain": "olive0-druwa.auth.ap-northeast-2.amazoncognito.com",  // AWS Console을 통해 확인한 도메인 이름
        "scope": ["email", "openid", "phone"],
        "redirectSignIn": "https://olive0-druwa.com",
        "redirectSignOut": "https://olive0-druwa.com",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};

export default awsconfig;

// const awsconfig = {
//     "aws_project_region": "ap-northeast-2",
//     "aws_cognito_region": "ap-northeast-2",
//     "aws_user_pools_id": "ap-northeast-2_PHv3RSTT1",  // AWS CLI를 통해 확인한 사용자 풀 ID
//     "aws_user_pools_web_client_id": "3fk8aqddpevs8m30pduaffmfrg",  // AWS CLI를 통해 확인한 앱 클라이언트 ID
//     "oauth": {
//         "domain": "olive0-druwa.auth.ap-northeast-2.amazoncognito.com",  // AWS Console을 통해 확인한 도메인 이름
//         "scope": ["email", "openid", "phone"],
//         "redirectSignIn": "http://localhost:5173/",
//         "redirectSignOut": "http://localhost:5173/",
//         "responseType": "code"
//     },
//     "federationTarget": "COGNITO_USER_POOLS"
// };

// export default awsconfig;
