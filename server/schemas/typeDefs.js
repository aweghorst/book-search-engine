//TODO definte the necessary Query and Mutations types
/*Query Type
    me: which returns a User type
  Mutation type
    login: accepts an email and password as parameters returns an Auth type
    addUser: Accepts a username, email, and password as parameteres, returns an Auth type
    saveBook: Accepts a book author's array, description, title,bookId, image, and link as parameteres; returns a User type (look into creating an input  type  to handle all of these parameteres)
    removeBook: Accepts a book's bookId as parameter, returns a User type
  User Type:
    _id
    username
    email
    bookCount
    savedBooks (array of the Book type)
  Book Type:
    bookId (from the API)
    authors (array of strings)
    description
    title
    image
    link
  Auth Type
    token
    user (references the User Type)
