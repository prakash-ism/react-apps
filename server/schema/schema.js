const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

// dummy data
const dummyBooks = [
    { name: "The Gatsby", genre: "Fantasy", id: "1" },
    { name: "The Harry Potter", genre: "Magic", id: "2" },
    { name: "The Roar", genre: "Adventure", id: "3" },
]

const dummyAuthors = [
    { name: "George Martin", age: 66, id: "1" },
    { name: "JK Rowling", age: 34, id: "2" },
    { name: "Robin Hood", age: 45, id: "3" },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
                return dummyBooks.find((book) => book.id === args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent,args){
                return dummyAuthors.find((author) => author.id === args.id)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});