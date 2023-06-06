describe('Testing Nested Resources Gorest API', () => {
   
  //    // Membuat user post dengan menggunakan AUTH TOken yang disediakan
      it('Create user posts with Auth', () => {
          cy.request({ 
  
              method: 'POST',
              url: 'https://gorest.co.in/public/v2/users/2585/posts',
  
              headers: {
              authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
               },
  
               body:  {
          
                  "title": "Adficio vallum vehemens bis victus amita tabula.",
                  "body": "Degusto damno tristis. Valeo appono delectus. Asperiores antiquus via. Consequatur beatae sed. Atque tenax accedo. Balbus sufficio consequuntur. Capillus abundans arcus. Adimpleo teres valeo. Aro caste volutabrum. Deprecator taedium una. Tollo aliqua ante. Denuncio corrupti currus. Avarus qui somniculosus."
                
              },
              
              failOnStatusCode: false
            }).as('postWithAuth')
  
            cy.get('@postWithAuth').its('status').should('equal', 201)
            
      });
  
      // Membuat user post tanpa menggunakan AUTH Token yang disediakan
      it('Create user posts without Auth', () => {
          cy.request({ 
  
              method: 'POST',
              url: 'https://gorest.co.in/public/v2/users/2585/posts',
  
  
               body:  {
        
                "title": "Adficio vallum vehemens bis victus amita tabula.",
                "body": "Degusto damno tristis. Valeo appono delectus. Asperiores antiquus via. Consequatur beatae sed. Atque tenax accedo. Balbus sufficio consequuntur. Capillus abundans arcus. Adimpleo teres valeo. Aro caste volutabrum. Deprecator taedium una. Tollo aliqua ante. Denuncio corrupti currus. Avarus qui somniculosus."
              
              },
              
              failOnStatusCode: false
            }).as('postWithoutAuth')
  
            cy.get('@postWithoutAuth').its('status').should('equal', 401)
            // ini tujuannnya emang mau 401 sehingga di cypress error

      });
  
      // Mengambil user post dengan menggunakan AUTH Token yang disediakan
      it('Retreive user Post with Auth', () => {
          cy.request({ 
  
              method: 'POST',
              url: 'https://gorest.co.in/public/v2/users/2585/posts',
  
              headers: {
              authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
               },
              
              failOnStatusCode: false
            }).as('postWithAuth')
  
            cy.get('@postWithAuth').its('status').should('equal', 200)
            
            
      });
  
      // Membuat user Comments dengan menggunakan AUTH Token yang disediakan
      it('Create user Comments with Auth', () => {
          cy.request({ 
  
              method: 'POST',
              url: 'https://gorest.co.in/public/v2/posts/2585/comments',
  
              headers: {
                  authorization: '129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
                   },
  
             body : 
              {
                "post_id": 41493,
                "name": "Gudakesha Khanna",
                "email": "khanna_gudakesha@wehner.test",
                "body": "Vel adipisci dolor. Voluptatem quas temporibus."
                    
          },
              failOnStatusCode: false
            }).as('postWithAuth')
  
            cy.get('@postWithAuth').its('status').should('equal', 201)
            
            
      });
  
       // Membuat user Comments tanpa menggunakan AUTH Token yang disediakan
      it('Create user comments without Auth', () => {
          cy.request({ 
  
              method: 'POST',
              url: 'https://gorest.co.in/public/v2/posts/2585/comments',
  
                   body : {
                    "post_id": 41493,
                    "name": "Gudakesha Khanna",
                    "email": "khanna_gudakesha@wehner.test",
                    "body": "Vel adipisci dolor. Voluptatem quas temporibus."
          },
              
              failOnStatusCode: false
            }).as('postWithAuth')
  
            cy.get('@postWithAuth').its('status').should('equal', 401)
            // ini tujuannnya emang mau 401 sehingga di cypress error
            
      });
  
       // Mengambil user Comments dengan menggunakan AUTH Token yang disediakan
       it('Retreive user Comments with Auth', () => {
          cy.request({ 
  
              method: 'GET',
              url: 'https://gorest.co.in/public/v2/users/41493/posts',
  
              headers: {
              authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
               },
              
              failOnStatusCode: false
            }).as('postWithAuth')
  
            cy.get('@postWithAuth').its('status').should('equal', 200)
            
            
      });
  
  
      // Membuat user todos menggunakan AUTH Token yang disediakan
          it('Create user todos with Auth', () => {
          cy.request({ 
  
              method: 'POST',
              url: 'https://gorest.co.in/public/v2/users/2858/todos',
  
              headers: {
              authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
               },
  
               body:  {
         
                "title": "Defessus decens tracto cogito sortitus artificiose clibanus taceo socius.",
                "due_on": "2023-06-27T00:00:00.000+05:30",
                "status": "completed"

              },
              
              failOnStatusCode: false
            }).as('postWithAuth')
  
            cy.get('@postWithAuth').its('status').should('equal', 201)
            
      });
  
      // Membuat user todos tanpa menggunakan AUTH Token yang disediakan
      it('Create user todos without Auth', () => {
          cy.request({ 
  
              method: 'POST',
              url: 'https://gorest.co.in/public/v2/users/2858/todos',
  
  
               body:  {
         
                  "title": "Defessus decens tracto cogito sortitus artificiose clibanus taceo socius.",
                  "due_on": "2023-06-27T00:00:00.000+05:30",
                  "status": "completed"
              },
              
              failOnStatusCode: false
            }).as('postWithoutAuth')
  
            cy.get('@postWithoutAuth').its('status').should('equal', 401)
            
      });
  0
      // Mengambil user todos dengan menggunakan AUTH Token yang disediakan
      it('Retreive user todos with Auth', () => {
          cy.request({ 
  
              method: 'GET',
              url: 'https://gorest.co.in/public/v2/users/1483/todos',
  
              headers: {
              authorization: 'Bearer 129fb26e624508807ea05814ae9b769bb13b75c1e08bfcc2875dc608ad8cd93e'
               },
              
              failOnStatusCode: false
            }).as('postWithAuth')
  
            cy.get('@postWithAuth').its('status').should('equal', 200)
            
            
      });
      
  });