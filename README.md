# Magasin-backend


link to heroku: https://e-comm-magasin.herokuapp.com/  note jelastic might be sleeping!! 

# Table of Contents

  1. [Description](#Description)
  2. [Dependencices Used](#TechnologyUsed)
  3. [Installation](#Installation) 
  4. [Queries Samples](#Queries)
  5. [Questions](#Questions)

# DESCRIPTION
• this is a backend application as part of e-commerce project. users can post, buy, update and delete products on their needs. also the application provides the ability to take part of bidings on several available products by the owners through separate rooms that holds unlimited number of guests. also the possibility of purchasing is possible through stripe gateway integrated with the checkout, so making transactions between users secure and reliable.   

# TECHNOLOGY USED
• Node
• Express
• socket.io
• apollo-server-express
• graphql
• mongoose
• passport
• stripe
• jsonwebtoken
• multer
• passport-jwt
• passport-local
• helmet
• cors
• fs
• dotenv

# INSTALLATION
• Fork this repo and clone to your computer. Next, 'cd magasin-backend' then run 'npm install' to install all the dependencies listed in package.JSON file. if any problems try to trun 'npm audit fix'. and finaly run 'nodemon server.js'.

# Queries
note! token is required since all endpoints are protected. so login and use bearer token in header!

- Login
````
    query{
            login(
                username:String!,
                 password:String!
                 )
        {
           id
            username
             token
              Verified
            }
        }
````
- Register
````
      mutation{
            AddClient(
                username:String!,
                 password:String!,
                  Email:String!
                  )
        {
         id
         username
        }
        }
````
- GetBidings
````
      query {
      GetBidings {
        id
        Title
        Initialprice
        Images
        participants
        Owner {
          username
        }

      }
    }
````
-CreateBiding
````
     mutation {
          AddBiding(
            Title: String!
            Initialprice: Int
            Images: String
            Owner: ID!
             
          ) {
            Title
          }
        }
````
-GetBidingByID
````
  	   query {
            GetBidingByID(id:ID!) {
              id
              Title
              Initialprice
              Images
              Owner {
                username
              }
              
            }
          }
````
-GetAllCategories
````
    query{
                GetCategories{
                    Name
                     TotalItems
                      Images
                    }
                }

````
-DeleteFavourite
````
  mutation {
        DeleteFavourite(id:ID!) {
              id
        }
      }
````
-GetClientFavourites
````
query {
                GetUserFavourites(id: ID! ) {
                  id
                  Products {
                    Title
                    Price
                    Images
                  }
                }
              }
````
-AddFavourite
````
    mutation {
            AddFavourites(
              Owner: ID!
              Products: ID!
            ) {
              id
              Owner {
                username
              }
              Products {
                Title
              }
            }
          }
````
-GetProductsByCategory
````
    query{
              GetProductsByCategory(Category:String!){
                id
                Title
                  Price
                  Images
                }
              }
````
-GetOwnProducts
````
    query {
              GetProductsByClient(id: ID! ) {
              
                id
                Title
                Price
                Images
                OnStore
                Quantity
                Description
                
                CodePromo {
                  id
                  Expiry
                  Percentage
                  Code
                }
              }
            }
````
-ModifyProduct
````
  mutation {
        UpdateProduct(id: ID!,Title:String!, Price: Int!, Description:String!, Quantity: Int! ) {
          id
          Title
           
        }
      }
````
-DeleteProduct
````
  mutation {
          DeleteProducts(id: ID!){
          id
          }
        }
````
-ADDProduct
````
    
   mutation {
          AddProduct(
            Title: String
            Price: Int
            Category: String
            Description: String
            Quantity: Int
            CodePromo: String
            Owner: ID!
            Images: String!
          ){
          id 
          Title
          OnStore
          }
        }
````
-AddCodePromo
````
  mutation{
            AddDiscount(
              Percentage:Int,
               Code:String,
               Expiry: String          form of 'YYYY/MM/dd'
                )
                {
                  id
                  Expiry
                }
              }
````
-ModifyUser
````
    mutation {
    UpdateClient(
      id: ID!
      username: String
      Email: String
    ) {
      id
      username
      Email
      Joined
    }
  }
````
-GetUserById
````
    query{
        GetClientById(
          id:ID!
          ){
            id
             username
              Email
               Totalproducts
                Joined
                 Verified
                  ClientLevel
                }
              }
````
-GetProductById
````
  query{
          GetProductbyID( 
              id:ID!
              ){
                  id
                   Title
                    OnStore 
                     Owner{
                         username
                         Verified
                        } 
                      Price  
                       Images
                        Description
                        Quantity
                        
                    }
                }
````

# QUESTIONS
• If you have any questions, concerns or suggestions please feel free to contact me with the link below.
GitHub: "zakariaziouziou@gmail.com"
