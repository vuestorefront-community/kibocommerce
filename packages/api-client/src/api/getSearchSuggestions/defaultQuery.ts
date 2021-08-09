import gql from 'graphql-tag';

export default gql`
query getSearchSuggestions($term:String!){
    suggestionSearch(query:$term, groups:"pages,categories"){
      suggestionGroups{
        name
        suggestions {
          suggestion
        }
      }
    }
}`;
