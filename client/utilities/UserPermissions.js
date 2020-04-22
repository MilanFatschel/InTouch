import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

class UserPermissions {

    async getCameraPermissions() {
        if(Constants.platform.ios) {
            const {status} = await Permissions.getAsync(Permissions.CAMERA_ROLL)

            if(status !== "granted") {
                const {newPermission} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
                if (newPermission.status === 'granted') {
                    const {status} = await Permissions.getAsync(Permissions.CAMERA_ROLL)
                  }
            }

        }
    }
}

export default new UserPermissions();



