import { useEffect, useState } from 'react'
import { axios } from '../lib/axios'
import Echo from 'laravel-echo'

import Pusher from 'pusher-js'
window.Pusher = Pusher

const useEcho = () => {
    const [echoInstance, setEchoInstance] = useState<any>(null)

    useEffect(() => {
        // We are going to create the Echo instance here...
        const echo = new Echo({
            broadcaster: 'reverb',
            key: import.meta.env.NEXT_PUBLIC_REVERB_APP_KEY,
            authorizer: (channel: any) => {
                return {
                    authorize: (socketId: any, callback: any) => {
                        axios
                            .post('/api/broadcasting/auth', {
                                socket_id: socketId,
                                channel_name: channel.name,
                            })
                            .then((response: any) => {
                                callback(false, response.data)
                            })
                            .catch((error: any) => {
                                callback(true, error)
                            })
                    },
                }
            },
            wsHost: import.meta.env.NEXT_PUBLIC_REVERB_HOST,
            wsPort: import.meta.env.NEXT_PUBLIC_REVERB_PORT,
            wssPort: import.meta.env.NEXT_PUBLIC_REVERB_PORT,
            forceTLS:
                (import.meta.env.NEXT_PUBLIC_REVERB_SCHEME ?? 'https') === 'https',
            enabledTransports: ['ws', 'wss'],
        })
        setEchoInstance(echo)
    }, [])

    return echoInstance
}

export default useEcho