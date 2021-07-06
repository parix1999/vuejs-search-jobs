Vue.config.devtools = true;

new Vue(
    {
        el:'#app',
        data:{ 
            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'webCiao',
                    position: 'Developer-junior',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'webBuongiorno',
                    position: 'Developer-senior',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'webBuonasera',
                    position: 'Developer-medium',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                  
            ],
            starred: [1, 2, 3],
            applied: [4, 5]
            
        },
        methods: {
            checkStarIndex: function (index) {
                if (this.starred.includes(index)){
                    return "fas fa-star";
                } else {
                    return "far fa-star";
                }
            },
            clickAndAdd: function (index) {
                if (!this.starred.includes(index)){
                    this.starred.push(index);
                    
                } else {
                    this.starred.splice(index,1);
                    // ToDo, vedere di far funzionare l'eliminazione della stella;
                }
            },
        },

    }
)