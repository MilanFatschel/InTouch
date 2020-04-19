import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { ChatList } from './../ChatList';
import { ChatRoom } from './../ChatRoom';

const chatListNavigationStack = createStackNavigator({
    ChatList: {
        screen: ChatList
    },
    ChatRoom : {
        screen: ChatRoom
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