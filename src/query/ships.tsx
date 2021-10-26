import { gql } from "@apollo/client";

export const GET_ALL_SHIPS = gql`
    {
        vehicles {
            title
            description
            icons {
                medium
            }
            level
            type {
                title
            }
            nation {
                title
                icons {
                    small
                }
            }
        }
    }
`;
