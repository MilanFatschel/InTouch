import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import { BaseScreen } from '../../Base/BaseScreen'
import { ProfileScreen } from '../../Settings/ProfileScreen'
import { SettingsScreen} from '../../Settings/SettingsScreen'

const SettingsDrawerNavigator = createDrawerNavigator({
    Chat : {
        screen: BaseScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    Settings: {
        screen: SettingsScreen
    }
})

export default createAppContainer(SettingsDrawerNavigator);