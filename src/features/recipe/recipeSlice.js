import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice"

const recipesAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = recipesAdapter.getInitialState()

export const recipesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getRecipes: builder.query({
            query: () => '/api/recipe',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedRecipes = responseData.map(recipe => {
                    recipe.id = recipe._id
                    return recipe
                });
                return recipesAdapter.setAll(initialState, loadedRecipes)
            },
            providesTags: (result) => {
                if (result?.ids) {
                    return [
                        { type: 'Recipe', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Recipe', id }))
                    ]
                } else return [{ type: 'Recipe', id: 'LIST' }]
            },
            headers: {
                'x-api-key': 'wIxQ5hxSIeV4aBh31A4',
                'x-api-host': 'flavour-dash'
              },
        }),
    }),
})

export const {
    useGetRecipesQuery,
} = recipesApiSlice

// returns the query result object
export const selectRecipesResult = recipesApiSlice.endpoints.getRecipes.select()

// creates memoized selector
const selectRecipesData = createSelector(
    selectRecipesResult,
    recipesResult => recipesResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllRecipes, 
    selectById: selectRecipeById,
    selectIds: selectRecipeIds
    // Pass in a selector that returns the recipes slice of state
} = recipesAdapter.getSelectors(state => selectRecipesData(state) ?? initialState)