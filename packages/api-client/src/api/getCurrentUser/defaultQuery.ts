import gql from 'graphql-tag';

export default gql`
query getUser {
    customerAccount:getCurrentAccount {
        id
        firstName
        lastName
        emailAddress
        userName
        isAnonymous
    }
}
`;
