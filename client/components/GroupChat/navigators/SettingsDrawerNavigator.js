import { createDrawerNavigator } from 'react-navigation'
import { createAppContainer } from 'react-navigation'

import { ChatRoom } from '../ChatRoom'
import { ProfileScreen } from '../../Settings/ProfileScreen'
import { SettingsScreen} from '../../Settings/SettingsScreen'

const SettingsDrawerNavigator = createDrawerNavigator({
    Chat : {
        screen: ChatRoom,
    },
    Profile: {
        screen: ProfileScreen
    },
    Settings: {
        screen: SettingsScreen
    }
})

export default createAppContainer(SettingsDrawerNavigator);