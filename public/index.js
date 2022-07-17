let token = ''
window.fbAsyncInit = () => {
    FB.init({
        appId: '639145250403425',
        cookie: true,
        xfbml: true,
        version: 'v14.0'
    });
}



const Login = () => {
    FB.login(function(response){
        if(response.authResponse){
            token = response.authResponse.accessToken;
            statusChangeCallback(token)
        }else{
            console.log('User cancelled login or did not fully authorize')
        }
    },{
        scope: 'email,public_profile'
    }
    )
}

const statusChangeCallback = (token) => {
    FB.api(`/me&access_token=${token}`, function(response) {
        console.log(response)
    })
}