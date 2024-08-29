const awsConfig = {
    Auth: {
        region: 'ap-northeast-2',
        userPoolId: 'ap-northeast-2_dBljAv8tI',  // 여기에 User Pool ID를 입력
        userPoolWebClientId: '1alipd8mab1fs5csu9h3fced8p'  // 여기에 User Pool Web Client ID를 입력
    }
};

export default awsConfig;



// aws cognito-idp list-user-pools --max-results 20 명령어를 통해 userPoolId 확인 가능
// aws cognito-idp list-user-pool-clients --user-pool-id [userPoolId] 명령어를 통해 userPoolWebClientId 확인가능