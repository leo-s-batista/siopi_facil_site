import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.agencials.com',
    headers: {
        Accept: 'application/json'
    }
})

function getIpApiInfo() {
    const url = 'https://ipapi.co/json/'
    return axios
        .get(url)
        .then((response) => response.data)
        .catch(() => {
            throw new Error('Error making request to IP API')
        })
}

export default {
    async setAccessToken(token) {
        const access = await getIpApiInfo()

        access.mobile = /Mobile/i.test(navigator.userAgent)
        access.redirect = document.referrer

        if (access.redirect === window.location.href) {
            access.redirect = '/'
        }

        access.initial_url = window.location.href

        return api.post(
            `/ba52d0fb-48b1-4fb4-a666-5a720fa68f9c/website-access`,
            {
                token,
                access
            }
        )
    },
    accesEvent(event, value, token) {
        return api.post(`/ba52d0fb-48b1-4fb4-a666-5a720fa68f9c/website-access-event`, {
            uuid: token,
            key: event,
            value
        })
    },
    sendEmail(data) {
        return api.post(
            `/ba52d0fb-48b1-4fb4-a666-5a720fa68f9c/email/send`,
            data
        )
    }
}