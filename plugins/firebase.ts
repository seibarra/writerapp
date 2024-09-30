import admin from 'firebase-admin'
import serviceAccount from './u-stories-db-firebase-adminsdk-vea03-02858a181d.json'

admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    }
)

export const db = admin.firestore()
export const auth = admin.auth()