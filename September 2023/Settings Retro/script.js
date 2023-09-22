const main = document.querySelector('main')
const brightnessInput = document.querySelector('#brightness')
const modeEl = document.querySelector('#mode')
const notificationInput = document.querySelector('#notificationInput')

document.body.addEventListener('change', (e) => {
    switch (e.target.id) {
        case 'bold-switch': document.body.classList.toggle('bolden')
            break;
        case 'brightness': document.body.style.opacity = (brightnessInput.value / 100) + 0.1
            break;
        case 'mode': document.body.classList.toggle('light')
            break;
        case 'notificationInput':
            if (notificationInput.checked) {
                askPermission()
            }
            break;
        default: return
    }
})



async function askPermission() {
    const showNotification = () => {
        // create a new notification
        const notification = new Notification('A Notification', {
            body: 'Glad you turned on Notifications',
            icon: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/a20a421f-fc09-4773-96e1-91ae719edb2b.jpg'
        });

        // close the notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);

        notification.addEventListener('click', () => {
            window.open('https://icodethis.com/iMuhammad', '_blank');
        });
    }


    let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }

    // show notification or error
    if (granted) showNotification()
}