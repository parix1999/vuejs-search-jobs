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
                {
                    id: 5,
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
            applied: [4, 5],
            nonApplicato: 'Apply',
            Applicato: 'Applied',
            
        },
        methods: {
            preferiti: function(id) {
                /* Se l'id corrisponde al numero presente
                dentro alla array starred allora è un 
                preferito:*/
                if (this.starred.includes(id)) {
                    return "fas fa-star";
                } else {
                    return "far fa-star"
                }
            },
            addPreferiti: function(id) {
                /* Se l'id non è dentro alla array dei preferiti
                allora mi pushi l'id all'inteno e mi cambi il simbolo
                grazie alla condizione della funzione preferiti: */
                if (!this.starred.includes(id)) {
                    this.starred.push(id);
                } else {            
                    this.starred.splice(this.starred.indexOf(id), 1)
                }
            },
            buttonCheck: function(id) {
                /*Se l'id è presente dentro alla array di starred
                allora mi stampi Applied come bottone, altrimenti
                Apply */
                if (this.applied.includes(id)) {
                    return this.Applicato;
                } else {
                    return this.nonApplicato;
                }
            },
            checkDomanda: function(id) {
                /* Se l'id è presente dentro alla array dei 
                preferiti allora, mi si stampa apply e non succede
                niente, mentre se clicco per fare domanda allora,
                tolgo quel'id dall' array preferiti e ci metto applied */
                if (this.starred.includes(id)) {
                    this.starred.splice(this.starred.indexOf(id), 1)
                    this.applied.push(id)
        
                }
            }
        }
        
    }
);