import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../components/Welcome/WelcomeScreen"
import Login from "../components/Login/LoginScreen"
import Name from "../components/Register/NameScreen"
import Username from "../components/Register/UsernameScreen"
import Password from "../components/Register/PasswordScreen"
import Email from "../components/Register/EmailScreen"
import PhoneNumber from "../components/Register/PhoneNumberScreen"
import Confirmation from "../components/Register/ConfirmationScreen"
import ChatListNavigationStack from "../components/ChatList/navigation/ChatListNavigator";

const rootNavigationStack = createStackNavigator({
    Welcome: {
        screen: Welcome
    },
    Login : {
        screen: Login
    },
    Name : {
        screen: Name,
    },
    Username : {
        screen : Username
    },
    Password : {
        screen : Password
    },
    Email : {
        screen : Email
    },
    PhoneNumber : {
        screen : PhoneNumber
    },
    Confirmation: {
        screen: Confirmation
    },
    ChatBase: {
        screen: ChatListNavigationStack
    }
},
{
    defaultNavigationOptions: {
      header: null
    },
}
);

const RootNavigationStack = createAppContainer(rootNavigationStack);

export default RootNavigationStack; 