import gql from 'graphql-tag'
import { searchResults } from '../../fragments'

const query = gql`
query ProductSearch($query:String, $startIndex:Int,
    $pageSize:Int, $sortBy:String, $filter:String,$facetTemplate:String,$facetValueFilter:String ) {
       products:productSearch (
            query:$query,
            startIndex: $startIndex,
            pageSize:$pageSize,
            sortBy: $sortBy,
            filter:$filter,
            facetTemplate:$facetTemplate, 
            facetValueFilter:$facetValueFilter
          ) {
            ...searchResults
        }
    }
    ${searchResults}
`
export default query