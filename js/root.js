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
            ],
            user: '<i class="far fa-user-circle"></i>'
        },
        main: {
            insights: [
                'Become a Better Blogger: Content Planning',
                'Promoting Your Online Business on Pinterest',
                'Gamification and Game-Based Learning',
                'Designing an Online Course from Expert’s Perspective',
                'Why Online Courses Are the Future of Education'
            ]
        },
        footer: {
            lists: {
                adress: [
                    'Adress',
                    '382 NE 191st St # 87394 Miami, FL 33179-3899',
                    '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                    'support@maxcoach.com'
                ],
                adressLink: '<i class="fab fa-facebook-square"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i> <i class="fab fa-linkedin"></i>',
                explore: [
                    'Explore',
                    'Start here',
                    'Blog',
                    'About Us',
                    'Success story',
                    'Courses',
                    'Contact us'
                ],
                information: [
                    'Information',
                    'Membership',
                    'Purchase guide',
                    'Privacy policy',
                    'Terms of services'
                ] 
            },
            credits: '© 2020 Maxcoach. All Rights Reserved'
        }
    },

    mounted() {

    },

    methods: {
        
    }
});