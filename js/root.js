var app = new Vue({
    el: "#root",

    data: {
        header: {
            logoUrl: "img/dark-logo.png",
            navList: [
                'Home',
                'Pages',
                'Courses',
                'Features',
                'Blog',
                'Shop'
            ]
        },
        footer: {
            lists: [
                [
                    'Adress',
                    '382 NE 191st St # 87394 Miami, FL 33179-3899',
                    '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                    'support@maxcoach.com',
                    '<i class="fab fa-facebook-square"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i> <i class="fab fa-linkedin"></i>'
                ],
                [
                    'Explore',
                    'Start here',
                    'Blog',
                    'About Us',
                    'Success story',
                    'Courses',
                    'Contact us'
                ],
                [
                    'Information'
                    'Membership',
                    'Purchase guide',
                    'Privacy policy',
                    'Terms of services'
                ] 
            ],
            credits: '© 2020 Maxcoach. All Rights Reserved'
        }
    },

    mounted() {

    },

    methods: {
        
    }
});