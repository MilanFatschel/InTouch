import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { ChatListScreen } from '../ChatListScreen'
import { ChatRoom } from '../../Chat/ChatRoom';
import { NewChatScreen } from '../../Chat/NewChatScreen'
import { ProfileScreen } from '../../Profile/ProfileScreen'

const chatListNavigationStack = createStackNavigator({
    ChatListScreen: {
        screen: ChatListScreen
    },
    ChatRoom : {
        screen: ChatRoom
    },
    NewChatScreen: {
        screen: NewChatScreen
    },
    ProfileScreen : {
        screen: ProfileScreen
    }
},
{
    defaultNavigationOptions: {
        header: null
    },
}
);

const ChatListNavigationStack = createAppContainer(chatListNavigationStack);

export default ChatListNavigationStack; 