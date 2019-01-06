import axios from 'axios';
export default function ApiCalls(){

    let matchingUsers = function(userName){
        axios.get('https://api.github.com/search/users?q='+userName).then(function(response){
            let results = response.data;
            let listUserLogins = [];
            (results.items).forEach(element => {
                listUserLogins.push(element.login);
            });
            return listUserLogins;
        });
    }
    // let getUser = function(userName){
    //     let results = matchingUsers(userName).map((user)=>{
    //         return user.login    
    //     });
    // }
    return{
        matchingUsers,
        // getUser
    }
}