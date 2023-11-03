
import location from './images/icons/location-svgrepo-com.svg'

const headerItems = [
    {
        name: 'ADDRESS',
        value: 'California, TX 70240',
        icon: '/icons/icon.png'


    },
    {
        name: 'EMAIL',
        value: 'examplemail.com',
        icon: ''
    }, {
        name: 'PHONE',
        value: '9324293242',
        icon: ''
    }
]


const icons = [
    'twitter.png',
    'linkedin.png',
    'other.png',
    'extra.png'
];

const pages = [
    {
        name: 'Home',
        path: '/',
        other: [
            {
                name: 'Home version One ',
                path: '/v1'
            }, {
                name: 'Home versio Two',
                path: '/v1'
            }, {
                name: 'Home version1 Three',
                path: '/v1'
            }, {
                name: 'Home version1 FOur',
                path: '/v1'
            }
        ]
    },
    {
        name: 'Pages',
        path: '/',
        other: [
            {
                name: 'About us',
                path: '/v1'
            }, {
                name: 'Contact Us',
                path: '/v1'
            }, {
                name: 'Error Page',
                path: '/v1'
            }, {
                name: 'FAQ',
                path: '/v1'
            },
        ]
    }, {
        name: 'Gallery',
        path: '/',
        other: [
            {
                name: 'Home version1 ',
                path: '/v1'
            }
        ]
    }, {
        name: 'Services',
        path: '/',
        other: [
            {
                name: 'Home version1 ',
                path: '/v1'
            }
        ]
    }, {
        name: ' Team',
        path: '/',
        other: [
            {
                name: 'Home version1 ',
                path: '/v1'
            }
        ]
    }, {
        name: 'Blog',
        path: '/',
        other: [
            {
                name: 'Home version1 ',
                path: '/v1'
            }
        ]
    }
]


export { headerItems, icons, pages }